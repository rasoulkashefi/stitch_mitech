#!/usr/bin/env node
/**
 * Mitech Content Publisher for Sanity Studio
 * 
 * Usage:
 *   node publish_to_sanity.mjs <article.md> [--image <image_path>]... [--replace <DOCUMENT_ID>]
 *   node publish_to_sanity.mjs --inspect
 */

import { createClient } from '@sanity/client';
import { readFile, access } from 'node:fs/promises';
import { resolve, basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Project root is 4 levels up from this script (.agents/skills/mitech-content-publisher/scripts)
const PROJECT_ROOT = resolve(__dirname, '../../../../');
const ENV_PATH = join(PROJECT_ROOT, '.env.local');

const key = () => crypto.randomUUID().replaceAll('-', '').slice(0, 12);
const clean = (text) => text.replace(/\*\*/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function loadEnv() {
  const env = { ...process.env };
  if (await exists(ENV_PATH)) {
    const text = await readFile(ENV_PATH, 'utf8');
    for (const raw of text.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;
      const at = line.indexOf('=');
      if (at < 1) continue;
      let value = line.slice(at + 1).trim();
      if (/^(".*"|'.*')$/.test(value)) value = value.slice(1, -1);
      env[line.slice(0, at).trim()] = value;
    }
  }
  return env;
}

function section(markdown, heading) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim().startsWith(`# ${heading}`) || line.trim() === `# ${heading}`);
  if (start < 0) {
    const altStart = lines.findIndex((line) => line.trim().includes(heading));
    if (altStart < 0) throw new Error(`Missing required section: ${heading}`);
    const relativeEnd = lines.slice(altStart + 1).findIndex((line) => /^#\s+/.test(line));
    return lines.slice(altStart + 1, relativeEnd < 0 ? lines.length : altStart + 1 + relativeEnd).join('\n').trim();
  }
  const relativeEnd = lines.slice(start + 1).findIndex((line) => /^#\s+/.test(line));
  return lines.slice(start + 1, relativeEnd < 0 ? lines.length : start + 1 + relativeEnd).join('\n').trim();
}

function field(text, label) {
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim().replace(/^-\s*/, '').replace(/\*\*/g, '');
    if (line.startsWith(`${label}:`)) return line.slice(label.length + 1).trim();
  }
  return '';
}

function csv(value) {
  if (!value) return [];
  return value
    .split(/[,،]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function block(text, style = 'normal', listItem) {
  const item = {
    _type: 'block',
    _key: key(),
    style,
    markDefs: [],
    children: [{ _type: 'span', _key: key(), marks: [], text: clean(text) }],
  };
  if (listItem) {
    item.listItem = listItem;
    item.level = 1;
  }
  return item;
}

function imageBlock(assetId, alt, caption = '') {
  return {
    _type: 'image',
    _key: key(),
    asset: { _type: 'reference', _ref: assetId },
    alt: alt || 'تصویر مقاله ام آی تک',
    caption: caption || '',
  };
}

function appendParagraphs(output, rawLines) {
  for (const group of rawLines.join('\n').split(/\n{2,}/).map(clean).filter(Boolean)) {
    if (/^-\s+/.test(group)) {
      for (const item of group.split('\n').map((v) => v.replace(/^-\s+/, '')).map(clean).filter(Boolean)) {
        output.push(block(item, 'normal', 'bullet'));
      }
    } else {
      output.push(block(group));
    }
  }
}

function portableTextFromRichBody(source, uploadedImages) {
  const lines = source.split(/\r?\n/);
  const output = [];
  let buffer = [];
  let imageIndex = 0;

  const flush = () => {
    appendParagraphs(output, buffer);
    buffer = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line) {
      buffer.push(lines[i]);
      continue;
    }

    if (/^\[IMAGE_GENERATION_PROMPT:/.test(line)) {
      flush();
      const img = uploadedImages[imageIndex++];
      if (img && img.assetId) {
        output.push(imageBlock(img.assetId, img.alt, img.caption));
      }
      continue;
    }

    const h2 = line.match(/^\[H2\]\s*(.+)$/);
    if (h2) {
      flush();
      output.push(block(h2[1], 'h2'));
      continue;
    }

    const h3 = line.match(/^\[H3\]\s*(.+)$/);
    if (h3) {
      flush();
      output.push(block(h3[1], 'h3'));
      continue;
    }

    const callout = line.match(/^\[CALLOUT:\s*(tip|info|warning)\]$/i);
    if (callout) {
      flush();
      const content = [];
      while (
        i + 1 < lines.length &&
        !/^\[(H2|H3|CALLOUT:|STAT CARD|TABLE|FAQ ITEM|KEY TAKEAWAYS|IMAGE_GENERATION_PROMPT)/.test(
          lines[i + 1].trim()
        )
      ) {
        content.push(lines[++i]);
      }
      output.push({
        _type: 'callout',
        _key: key(),
        type: callout[1].toLowerCase(),
        title: '',
        text: clean(content.join(' ')),
      });
      continue;
    }

    if (line === '[STAT CARD]') {
      flush();
      const values = [];
      while (i + 1 < lines.length && !/^\[/.test(lines[i + 1].trim())) {
        values.push(lines[++i]);
      }
      const get = (name) => clean(values.find((value) => value.includes(name))?.split(name)[1] ?? '');
      output.push({
        _type: 'statCard',
        _key: key(),
        value: get('عدد / شاخص:') || get('شاخص:') || '',
        label: get('عنوان شاخص:') || get('عنوان:') || '',
        description: get('توضیح کوتاه:') || get('توضیح:') || '',
      });
      continue;
    }

    if (line === '[TABLE]') {
      flush();
      const tableLines = [];
      while (i + 1 < lines.length && !/^\[/.test(lines[i + 1].trim())) {
        tableLines.push(lines[++i]);
      }
      const rows = tableLines
        .map((r) => r.trim())
        .filter((r) => r.includes('|'))
        .filter((r) => !/^\|?\s*[:-]+(?:\s*\|\s*[:-]+)+\s*\|?$/.test(r))
        .map((r) => r.split('|').map(clean).filter(Boolean))
        .filter((cells) => cells.length)
        .map((cells) => ({ _type: 'tableRow', _key: key(), cells }));

      if (rows.length) {
        output.push({ _type: 'table', _key: key(), rows });
      }
      continue;
    }

    const faq = line.match(/^\[FAQ ITEM\s*(\d+)\]$/);
    if (faq) {
      flush();
      const items = [];
      while (i + 1 < lines.length && !/^\[/.test(lines[i + 1].trim())) {
        items.push(lines[++i]);
      }
      const read = (name) => clean(items.find((value) => value.includes(name))?.split(name)[1] ?? '');
      const question = read('سوال:');
      const answer = read('پاسخ:');
      if (question && answer) {
        const preceding = output.at(-1);
        if (preceding?._type === 'faqAccordion') {
          preceding.items.push({ _type: 'faqItem', _key: key(), question, answer });
        } else {
          output.push({
            _type: 'faqAccordion',
            _key: key(),
            title: 'پرسش‌های متداول درباره این مبحث',
            items: [{ _type: 'faqItem', _key: key(), question, answer }],
          });
        }
      }
      continue;
    }

    if (line === '[KEY TAKEAWAYS]') {
      flush();
      const points = [];
      while (i + 1 < lines.length && !/^\[/.test(lines[i + 1].trim())) {
        points.push(lines[++i]);
      }
      output.push({
        _type: 'keyTakeaways',
        _key: key(),
        heading: 'نکات کلیدی در یک نگاه (Key Takeaways)',
        points: points.map((v) => clean(v.replace(/^-\s+/, ''))).filter(Boolean),
      });
      continue;
    }

    buffer.push(lines[i]);
  }
  flush();
  return output.filter((item) => item._type !== 'block' || item.children?.[0]?.text);
}

function parseArticle(markdown, uploadedImages) {
  const title = section(markdown, '۱. عنوان اصلی مقاله').trim();
  const slug = section(markdown, '۲. نامک پیوند یکتا').trim();
  const excerpt = section(markdown, '۳. چکیده و لید مقاله').trim();
  const imageSec = section(markdown, '۴. تصویر شاخص و کاور مقاله');
  const seoSec = section(markdown, '۵. بهینه‌سازی برای موتورهای جستجو');
  const geoSec = section(markdown, '۶. بهینه‌سازی برای هوش مصنوعی');
  const settingsSec = section(markdown, '۷. تنظیمات انتشار و ساختار');
  const richBody = section(markdown, '۸. متن تفصیلی و بدنه تعاملی');

  const canonical = field(seoSec, 'آدرس کانونیکال اختصاصی');
  const rawCategory = field(settingsSec, 'دسته‌بندی تخصصی') || 'ویلچر برقی';
  let primaryCategory = rawCategory;
  if (rawCategory.includes('ویلچر')) primaryCategory = 'ویلچر برقی';
  else if (rawCategory.includes('رباتیک')) primaryCategory = 'فناوری رباتیک';
  else if (rawCategory.includes('مطالعات')) primaryCategory = 'مطالعات موردی';
  else if (rawCategory.includes('دیدگاه')) primaryCategory = 'دیدگاه‌های صنعت';
  else if (rawCategory.includes('اخبار')) primaryCategory = 'اخبار شرکت';

  const inlineImages = uploadedImages.length > 1 ? uploadedImages.slice(1) : [];

  const doc = {
    _type: 'post',
    title,
    slug: { _type: 'slug', current: slug },
    excerpt,
    body: portableTextFromRichBody(richBody, inlineImages),
    featured: field(settingsSec, 'مقاله برگزیده (Featured)') === 'بله',
    categories: [primaryCategory],
    tags: csv(field(settingsSec, 'برچسب‌ها و کلمات کلیدی (Tags)')),
    publishedAt: new Date().toISOString(),
    author: 'تیم پژوهش و توسعه میکائیل',
  };

  // Main image if available
  if (uploadedImages.length > 0 && uploadedImages[0].assetId) {
    doc.mainImage = imageBlock(
      uploadedImages[0].assetId,
      field(imageSec, 'متن جایگزین تصویر شاخص (Alt Text)') || uploadedImages[0].alt,
      field(imageSec, 'کپشن یا عکاس/منبع تصویر') || uploadedImages[0].caption
    );
  }

  // SEO metadata block
  doc.seo = {
    _type: 'seo',
    metaTitle: field(seoSec, 'عنوان سئو (Meta Title)') || title,
    metaDescription: field(seoSec, 'توضیحات متا (Meta Description)') || excerpt,
    canonicalUrl: canonical && canonical !== 'خالی' ? canonical : undefined,
    noindex: field(seoSec, 'عدم ایندکس (noindex)') === 'بله',
  };

  // GEO & AI metadata block
  doc.aiMetadata = {
    _type: 'aiMetadata',
    quickAnswer: field(geoSec, 'خلاصه مستقیم برای هوش مصنوعی (AI Quick Answer / TL;DR)'),
    searchIntent: field(geoSec, 'نیت جستجوی مخاطب (Search Intent)'),
    primaryEntity: field(geoSec, 'موجودیت یا کلیدواژه کانونی (Primary Entity / Focus Keyword)'),
    semanticEntities: csv(field(geoSec, 'کلمات کلیدی معنایی و مفاهیم مرتبط (LSI & Semantic Entities)')),
  };

  return doc;
}

// MAIN CLI ENTRYPOINT
async function main() {
  const env = await loadEnv();

  const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID || env.SANITY_PROJECT_ID;
  const dataset = env.NEXT_PUBLIC_SANITY_DATASET || env.SANITY_DATASET || 'production';
  const token = env.SANITY_API_WRITE_TOKEN || env.SANITY_TOKEN || env.SANITY_API_TOKEN;

  if (!projectId || !token) {
    console.error('Error: Sanity projectId or write token is missing.');
    console.error('Ensure NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN are set in .env.local');
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion: '2024-01-01',
    useCdn: false,
  });

  const args = process.argv.slice(2);

  if (args.includes('--inspect')) {
    const posts = await client.fetch('*[_type == "post"] | order(publishedAt desc){ _id, title, "slug": slug.current, categories }');
    console.log(`Total posts in Sanity: ${posts.length}`);
    posts.forEach(p => console.log(`- ${p.slug}: "${p.title}"`));
    process.exit(0);
  }

  let markdownPath = '';
  let documentId = '';
  const imagePaths = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--replace' && args[i + 1]) {
      documentId = args[++i];
    } else if (args[i] === '--image' && args[i + 1]) {
      imagePaths.push(args[++i]);
    } else if (!args[i].startsWith('--') && !markdownPath) {
      markdownPath = args[i];
    }
  }

  if (!markdownPath) {
    console.error('Usage: node publish_to_sanity.mjs <article.md> [--image <image_path>]... [--replace <DOCUMENT_ID>]');
    process.exit(1);
  }

  const resolvedMdPath = resolve(markdownPath);
  if (!(await exists(resolvedMdPath))) {
    console.error(`Article file not found: ${resolvedMdPath}`);
    process.exit(1);
  }

  console.log(`\n📄 Reading article: ${basename(resolvedMdPath)}...`);
  const markdown = await readFile(resolvedMdPath, 'utf8');

  // Upload provided images to Sanity
  const uploadedImages = [];
  for (let i = 0; i < imagePaths.length; i++) {
    const imgPath = resolve(imagePaths[i]);
    if (await exists(imgPath)) {
      console.log(`🖼️  Uploading image ${i + 1}/${imagePaths.length}: ${basename(imgPath)}...`);
      const fileBuffer = await readFile(imgPath);
      const asset = await client.assets.upload('image', fileBuffer, {
        filename: basename(imgPath),
      });
      uploadedImages.push({
        assetId: asset._id,
        localPath: imgPath,
        alt: i === 0 ? 'تصویر شاخص کارشناسی ویلچر برقی' : 'تست و عیب‌یابی باتری و مدارات الکترونیکی ویلچر برقی در آزمایشگاه میکائیل',
        caption: i === 0 ? 'تیم پژوهش و توسعه میکائیل' : 'پایش ولتاژ و تست سلامت سلول‌های باتری با تجهیزات آزمایشگاهی',
      });
    } else {
      console.warn(`⚠️ Warning: Image file not found: ${imgPath}`);
    }
  }

  console.log('⚙️  Parsing 8-section Mitech structure & converting to Portable Text...');
  const document = parseArticle(markdown, uploadedImages);

  let result;
  if (documentId) {
    console.log(`🔄 Replacing existing document: ${documentId}...`);
    result = await client.createOrReplace({ _id: documentId, ...document });
  } else {
    console.log('🚀 Publishing new document to Sanity Studio...');
    result = await client.create(document);
  }

  console.log('\n========================================');
  console.log('✅ PUBLISHED SUCCESSFULLY TO SANITY STUDIO!');
  console.log(`📌 Document ID: ${result._id}`);
  console.log(`📝 Title:       ${result.title}`);
  console.log(`🔗 Slug:        /blog/${result.slug.current}`);
  console.log(`🗂️  Category:    ${result.categories?.join(', ')}`);
  console.log(`🏷️  Tags:        ${result.tags?.join(', ')}`);
  console.log(`🖼️  Images:      ${uploadedImages.length} asset(s) linked`);
  console.log('========================================\n');
}

main().catch((err) => {
  console.error('\n❌ Error publishing to Sanity:', err);
  process.exit(1);
});

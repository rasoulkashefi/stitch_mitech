#!/usr/bin/env node
/** Publish Mitech Markdown to Sanity as structured Portable Text.
 *
 * Create:  node publish-to-sanity.mjs article.md
 * Replace: node publish-to-sanity.mjs --replace DOCUMENT_ID article.md
 * Inspect: node publish-to-sanity.mjs --inspect
 *
 * On publishing, all IMAGE_GENERATION_PROMPT markers are generated with DALL·E 3,
 * saved under ./images/, uploaded to Sanity, and inserted as native image blocks.
 * Requires OPENAI_API_KEY in the environment or ~/.hermes/.env.
 */
import { createClient } from '@sanity/client';
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve, basename, dirname, extname, join } from 'node:path';

const HERMES_HOME = resolve(process.env.HOME ?? '', '.hermes');
const ENV_PATH = join(HERMES_HOME, '.env');
const CONFIG_PATH = join(HERMES_HOME, 'config.yaml');
const API_VERSION = '2025-02-19';
const BRAND_PHRASE = 'Industrial photography, slightly futuristic, professional, associated with Mikaeel logistics robotics brand.';
const NEGATIVE_VISUAL_CONSTRAINT = 'clean surfaces, no text, no fabricated logos, no gibberish branding, industrial matte finish';
const LOGO_DIR = join(import.meta.dirname, 'images', 'logo');
const BRAND_LOGO_PATH = join(LOGO_DIR, 'logo.png');
const BRAND_ICON_PATH = join(LOGO_DIR, 'mitech-icon.png');
// Confirmed active on AvalAI via GET /v1/models.
const IMAGE_MODEL = 'flux.2-pro';
const execFileAsync = promisify(execFile);
const key = () => crypto.randomUUID().replaceAll('-', '').slice(0, 12);
const clean = (text) => text.replace(/\*\*/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim();

function parseEnv(text) {
  const values = {};
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim(); if (!line || line.startsWith('#')) continue;
    const at = line.indexOf('='); if (at < 1) continue;
    let value = line.slice(at + 1).trim();
    if (/^(".*"|'.*')$/.test(value)) value = value.slice(1, -1);
    values[line.slice(0, at).trim()] = value;
  }
  return values;
}
function section(markdown, heading) {
  const lines = markdown.split(/\r?\n/); const start = lines.findIndex((line) => line.trim() === `# ${heading}`);
  if (start < 0) throw new Error(`Missing required section: ${heading}`);
  const relativeEnd = lines.slice(start + 1).findIndex((line) => /^#\s+/.test(line));
  return lines.slice(start + 1, relativeEnd < 0 ? lines.length : start + 1 + relativeEnd).join('\n').trim();
}
function field(text, label) {
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim().replace(/^-\s*/, '').replace(/\*\*/g, '');
    if (line.startsWith(`${label}:`)) return line.slice(label.length + 1).trim();
  }
  throw new Error(`Missing required field: ${label}`);
}
function csv(value) { return value.split('،').map((item) => item.trim()).filter(Boolean); }
function block(text, style = 'normal', listItem) {
  const item = {_type: 'block', _key: key(), style, markDefs: [], children: [{_type: 'span', _key: key(), marks: [], text: clean(text)}]};
  if (listItem) { item.listItem = listItem; item.level = 1; }
  return item;
}
function parsePrompts(text) { return [...text.matchAll(/\[IMAGE_GENERATION_PROMPT:\s*([\s\S]*?)\]/g)].map((m) => clean(m[1])); }
function generatedAltTexts(geo) {
  const marker = 'توضیحات جایگزین تصاویر تولیدی (Generated Image Alt Texts):';
  const rest = geo.split(marker)[1] ?? '';
  return [...rest.matchAll(/^\s*\d+\.\s+(.+)$/gm)].map((m) => m[1].trim());
}
function imageBlock(assetId, alt, caption = '') {
  return {_type: 'image', _key: key(), asset: {_type: 'reference', _ref: assetId}, alt, caption};
}
async function exists(path) { try { await access(path); return true; } catch { return false; } }
function resolveHermesImageConfig(configText, env) {
  const baseUrl = configText.match(/^\s*base_url:\s*(\S+)\s*$/m)?.[1];
  const keyRef = configText.match(/^\s*api_key:\s*\$\{([^}]+)\}\s*$/m)?.[1];
  const apiKey = keyRef ? env[keyRef] : undefined;
  if (!baseUrl || !apiKey) throw new Error('Hermes model base_url or its configured API-key environment variable is unavailable.');
  return {baseUrl: baseUrl.replace(/\/$/, ''), apiKey};
}
async function generateDalleImage(prompt, filename, imagesDir, imageApi) {
  if (!prompt.includes(BRAND_PHRASE)) throw new Error(`Image prompt is missing the required Mitech brand phrase: ${BRAND_PHRASE}`);
  const outputPath = join(imagesDir, filename);
  if (await exists(outputPath)) return outputPath;
  const response = await fetch(`${imageApi.baseUrl}/images/generations`, {
    method: 'POST', headers: {'Authorization': `Bearer ${imageApi.apiKey}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({model: IMAGE_MODEL, prompt, size: '1792x1024', quality: 'hd', response_format: 'b64_json', n: 1}),
  });
  if (!response.ok) throw new Error(`Image generation via Hermes provider failed (${response.status}): ${await response.text()}`);
  const payload = await response.json(); const image = payload.data?.[0];
  if (image?.b64_json) await writeFile(outputPath, Buffer.from(image.b64_json, 'base64'));
  else if (image?.url) {
    const download = await fetch(image.url);
    if (!download.ok) throw new Error(`Provider image URL download failed (${download.status}).`);
    await writeFile(outputPath, Buffer.from(await download.arrayBuffer()));
  } else throw new Error('Image provider response did not contain b64_json or url image data.');
  return outputPath;
}
async function watermarkImage(inputPath, outputPath) {
  if (!(await exists(BRAND_LOGO_PATH))) throw new Error(`Missing official brand logo: ${BRAND_LOGO_PATH}`);
  const overlayScript = [
    'from PIL import Image',
    'from pathlib import Path',
    'base=Image.open(Path(__import__("sys").argv[1])).convert("RGBA")',
    'logo=Image.open(Path(__import__("sys").argv[2])).convert("RGBA")',
    'max_w=max(1, int(base.width*0.14)); max_h=max(1, int(base.height*0.10))',
    'logo.thumbnail((max_w,max_h), Image.Resampling.LANCZOS)',
    'alpha=logo.getchannel("A").point(lambda a: int(a*0.58))',
    'logo.putalpha(alpha)',
    'margin=max(18, int(min(base.width,base.height)*0.025))',
    'base.alpha_composite(logo,(base.width-logo.width-margin,base.height-logo.height-margin))',
    'base.convert("RGB").save(Path(__import__("sys").argv[3]),"JPEG",quality=94,optimize=True)',
  ].join('\n');
  await execFileAsync('python3', ['-c', overlayScript, inputPath, BRAND_LOGO_PATH, outputPath]);
  return outputPath;
}
async function uploadOfficialIcon(client) {
  if (!(await exists(BRAND_ICON_PATH))) throw new Error(`Missing official Mitech icon: ${BRAND_ICON_PATH}`);
  return client.assets.upload('image', await readFile(BRAND_ICON_PATH), {filename: 'mitech-icon.png'});
}
async function prepareImages(client, markdownPath, markdown, geo, imageApi) {
  const sidecar = markdownPath.replace(/\.md$/i, '.image-prompts.txt');
  const promptText = (await exists(sidecar)) ? await readFile(sidecar, 'utf8') : markdown;
  const prompts = parsePrompts(promptText);
  const alts = generatedAltTexts(geo);
  if (!prompts.length) return [];
  if (alts.length < prompts.length) throw new Error(`Expected ${prompts.length} generated-image Alt Text entries in GEO, found ${alts.length}.`);
  const imagesDir = resolve(dirname(markdownPath), 'images'); await mkdir(imagesDir, {recursive: true});
  const stem = basename(markdownPath, extname(markdownPath)); const prepared = [];
  for (let i = 0; i < prompts.length; i += 1) {
    const prompt = prompts[i].includes('industrial matte finish') ? prompts[i] : `${prompts[i]}, ${NEGATIVE_VISUAL_CONSTRAINT}`;
    const generatedPath = await generateDalleImage(prompt, `${stem}-${String(i + 1).padStart(2, '0')}.png`, imagesDir, imageApi);
    const localPath = join(imagesDir, `${stem}-${String(i + 1).padStart(2, '0')}-branded.jpg`);
    await watermarkImage(generatedPath, localPath);
    const asset = await client.assets.upload('image', await readFile(localPath), {filename: basename(localPath)});
    prepared.push({prompt: prompts[i], alt: alts[i], assetId: asset._id, localPath});
  }
  return prepared;
}
function appendParagraphs(output, rawLines) {
  for (const group of rawLines.join('\n').split(/\n{2,}/).map(clean).filter(Boolean)) {
    if (/^-\s+/.test(group)) for (const item of group.split('\n').map((v) => v.replace(/^-\s+/, '')).map(clean).filter(Boolean)) output.push(block(item, 'normal', 'bullet'));
    else output.push(block(group));
  }
}
function portableTextFromRichBody(source, images) {
  const lines = source.split(/\r?\n/), output = []; let buffer = [], imageIndex = 0;
  const flush = () => { appendParagraphs(output, buffer); buffer = []; };
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line) { buffer.push(lines[i]); continue; }
    if (/^\[IMAGE_GENERATION_PROMPT:/.test(line)) {
      flush(); const image = images[imageIndex++];
      if (!image) throw new Error('Found more image markers in the Markdown body than generated images.');
      output.push(imageBlock(image.assetId, image.alt)); continue;
    }
    const h2 = line.match(/^\[H2\]\s*(.+)$/); const callout = line.match(/^\[CALLOUT:\s*(tip|info|warning)\]$/i);
    if (h2) { flush(); output.push(block(h2[1], 'h2')); continue; }
    if (callout) {
      flush(); const content = []; while (i + 1 < lines.length && !/^\[(H2|CALLOUT:|STAT CARD|TABLE|FAQ ITEM|KEY TAKEAWAYS|IMAGE_GENERATION_PROMPT)/.test(lines[i + 1].trim())) content.push(lines[++i]);
      output.push({_type: 'callout', _key: key(), type: callout[1].toLowerCase(), title: '', text: clean(content.join(' '))}); continue;
    }
    if (line === '[STAT CARD]') {
      flush(); const values = []; while (i + 1 < lines.length && !/^\[/.test(lines[i + 1].trim())) values.push(lines[++i]);
      const get = (name) => clean(values.find((value) => value.includes(name))?.split(name)[1] ?? '');
      output.push({_type: 'statCard', _key: key(), value: get('عدد / شاخص:'), label: get('عنوان شاخص:'), description: get('توضیح کوتاه:')}); continue;
    }
    if (line === '[TABLE]') {
      flush(); const tableLines = []; while (i + 1 < lines.length && !/^\[/.test(lines[i + 1].trim())) tableLines.push(lines[++i]);
      const rows = tableLines.map((row) => row.trim()).filter((row) => row.includes('|')).filter((row) => !/^\|?\s*[:-]+(?:\s*\|\s*[:-]+)+\s*\|?$/.test(row)).map((row) => row.split('|').map(clean).filter(Boolean)).filter((cells) => cells.length).map((cells) => ({_type: 'tableRow', _key: key(), cells}));
      if (!rows.length || rows.some((row) => row.cells.length !== rows[0].cells.length)) throw new Error('Markdown table must contain non-empty rows with a consistent column count.');
      output.push({_type: 'table', _key: key(), rows}); continue;
    }
    const faq = line.match(/^\[FAQ ITEM\s*(\d+)\]$/);
    if (faq) {
      flush(); const items = []; while (i + 1 < lines.length && !/^\[/.test(lines[i + 1].trim())) items.push(lines[++i]);
      const read = (name) => clean(items.find((value) => value.includes(name))?.split(name)[1] ?? '');
      const question = read('سوال:'), answer = read('پاسخ:');
      if (!question || !answer) throw new Error(`FAQ item ${faq[1]} needs both سوال and پاسخ.`);
      const preceding = output.at(-1); if (preceding?._type === 'faqAccordion') preceding.items.push({_type: 'faqItem', _key: key(), question, answer});
      else output.push({_type: 'faqAccordion', _key: key(), title: 'پرسش‌های متداول درباره این مبحث', items: [{_type: 'faqItem', _key: key(), question, answer}]});
      continue;
    }
    if (line === '[KEY TAKEAWAYS]') {
      flush(); const points = []; while (i + 1 < lines.length && !/^\[/.test(lines[i + 1].trim())) points.push(lines[++i]);
      output.push({_type: 'keyTakeaways', _key: key(), heading: 'نکات کلیدی در یک نگاه (Key Takeaways)', points: points.map((v) => clean(v.replace(/^-\s+/, ''))).filter(Boolean)}); continue;
    }
    buffer.push(lines[i]);
  }
  flush(); return output.filter((item) => item._type !== 'block' || item.children?.[0]?.text);
}
function parseArticle(markdown, sourceName, images, brandIconAssetId) {
  const title = section(markdown, '۱. عنوان اصلی مقاله (Post Title)').trim(), slug = section(markdown, '۲. نامک پیوند یکتا (Slug / URL Segment)').trim(), excerpt = section(markdown, '۳. چکیده و لید مقاله (Excerpt / Lead)').trim();
  const image = section(markdown, '۴. تصویر شاخص و کاور مقاله'), seo = section(markdown, '۵. بهینه‌سازی برای موتورهای جستجو (SEO Suite)'), geo = section(markdown, '۶. بهینه‌سازی برای هوش مصنوعی (GEO & AI Engine)'), settings = section(markdown, '۷. تنظیمات انتشار و ساختار'), richBody = section(markdown, '۸. متن تفصیلی و بدنه تعاملی (Rich Article Body)');
  const canonical = field(seo, 'آدرس کانونیکال اختصاصی');
  return {_type: 'post', title, slug: {_type: 'slug', current: slug}, excerpt, body: portableTextFromRichBody(richBody, images), mainImage: images[0] ? imageBlock(images[0].assetId, field(image, 'متن جایگزین تصویر شاخص (Alt Text)'), field(image, 'کپشن یا عکاس/منبع تصویر')) : undefined, featured: field(settings, 'مقاله برگزیده (Featured)') === 'بله', categories: [field(settings, 'دسته‌بندی تخصصی')], tags: csv(field(settings, 'برچسب‌ها و کلمات کلیدی (Tags)')), status: 'published', publishedAt: new Date().toISOString(), author: 'تیم پژوهش و توسعه میکائیل', seo: {_type: 'seo', metaTitle: field(seo, 'عنوان سئو (Meta Title)'), metaDescription: field(seo, 'توضیحات متا (Meta Description)'), canonicalUrl: canonical === 'خالی' ? undefined : canonical, noindex: field(seo, 'عدم ایندکس (noindex)') === 'بله', ogImage: images[0] ? imageBlock(images[0].assetId, field(seo, 'تصویر اختصاصی سوشال (OG Image Alt Text)')) : undefined, favicon: imageBlock(brandIconAssetId, 'آیکون رسمی میکائیل'), publisherLogo: imageBlock(brandIconAssetId, 'لوگوی رسمی ناشر میکائیل')}, aiMetadata: {_type: 'aiMetadata', quickAnswer: field(geo, 'خلاصه مستقیم برای هوش مصنوعی (AI Quick Answer / TL;DR)'), searchIntent: field(geo, 'نیت جستجوی مخاطب (Search Intent)'), primaryEntity: field(geo, 'موجودیت یا کلیدواژه کانونی (Primary Entity / Focus Keyword)'), semanticEntities: csv(field(geo, 'کلمات کلیدی معنایی و مفاهیم مرتبط (LSI & Semantic Entities)'))}, sourceMarkdownFile: sourceName};
}

const env = {...parseEnv(await readFile(ENV_PATH, 'utf8')), ...Object.fromEntries(Object.entries(process.env).filter(([, value]) => value))};
const imageApi = resolveHermesImageConfig(await readFile(CONFIG_PATH, 'utf8'), env);
for (const name of ['SANITY_PROJECT_ID', 'SANITY_DATASET', 'SANITY_TOKEN']) if (!env[name]) throw new Error(`${name} is missing from ${ENV_PATH}`);
const client = createClient({projectId: env.SANITY_PROJECT_ID, dataset: env.SANITY_DATASET, token: env.SANITY_TOKEN, apiVersion: API_VERSION, useCdn: false});
if (process.argv[2] === '--inspect') { console.log(JSON.stringify(await client.fetch('*[_type == "post"][0...3]{_id,title,mainImage,body[]{_type}}'), null, 2)); process.exit(0); }
const replace = process.argv[2] === '--replace', documentId = replace ? process.argv[3] : undefined, input = replace ? process.argv[4] : process.argv[2];
if (!input || (replace && !documentId)) throw new Error('Usage: node publish-to-sanity.mjs [--replace DOCUMENT_ID] ARTICLE.md');
const markdownPath = resolve(input), markdown = await readFile(markdownPath, 'utf8');
const geo = section(markdown, '۶. بهینه‌سازی برای هوش مصنوعی (GEO & AI Engine)');
const images = await prepareImages(client, markdownPath, markdown, geo, imageApi);
const brandIcon = await uploadOfficialIcon(client);
const document = parseArticle(markdown, basename(markdownPath), images, brandIcon._id);
const result = replace ? await client.createOrReplace({_id: documentId, ...document}) : await client.create(document);
console.log(JSON.stringify({id: result._id, type: result._type, title: result.title, images: images.map(({assetId, localPath}) => ({assetId, localPath})), mode: replace ? 'replaced' : 'created'}, null, 2));

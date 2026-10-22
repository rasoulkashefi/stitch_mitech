import { createClient } from '@sanity/client';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function run() {
  const envText = await readFile('.env.local', 'utf8');
  const env = {};
  for (const line of envText.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq > 0) {
      let val = trimmed.slice(eq + 1).trim();
      if (/^(".*"|'.*')$/.test(val)) val = val.slice(1, -1);
      env[trimmed.slice(0, eq).trim()] = val;
    }
  }

  const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID || env.SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET || env.SANITY_DATASET || 'production',
    token: env.SANITY_API_WRITE_TOKEN || env.SANITY_TOKEN,
    apiVersion: '2024-01-01',
    useCdn: false
  });

  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    excerpt,
    categories,
    tags,
    seo,
    publishedAt,
    mainImage{
      alt,
      caption,
      asset->{url, originalFilename}
    },
    body
  }`);
  
  const summaries = posts.map(p => {
    const images = [];
    if (p.mainImage) {
      images.push({
        type: 'main',
        alt: p.mainImage.alt || '',
        caption: p.mainImage.caption || '',
        filename: p.mainImage.asset?.originalFilename || ''
      });
    }
    if (Array.isArray(p.body)) {
      p.body.forEach(b => {
        if (b._type === 'image') {
          images.push({
            type: 'body',
            alt: b.alt || '',
            caption: b.caption || '',
            filename: b.asset?.originalFilename || ''
          });
        }
      });
    }

    // Extract headings from body
    const headings = [];
    if (Array.isArray(p.body)) {
      p.body.forEach(b => {
        if (b._type === 'block' && (b.style === 'h2' || b.style === 'h3')) {
          const text = (b.children || []).map(c => c.text).join('');
          headings.push({ level: b.style, text });
        }
      });
    }

    return {
      id: p._id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      categories: p.categories,
      tags: p.tags,
      seo: p.seo,
      publishedAt: p.publishedAt,
      images,
      headings
    };
  });

  await writeFile(
    './.agents/skills/mitech-content-publisher/references/posts_inventory.json',
    JSON.stringify(summaries, null, 2),
    'utf8'
  );
  console.log(`Successfully dumped ${summaries.length} posts to references/posts_inventory.json`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

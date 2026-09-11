import type { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { sitemapPostsQuery } from '@/sanity/lib/queries';
import { SitemapPost } from '@/sanity/types';

const BASE_URL = 'https://mitech.ir';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ۲۹ صفحه اصلی نقشه سایت بر اساس Final Sitemap
  const coreRoutes: MetadataRoute.Sitemap = [
    // Core & Hubs (P0)
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/solutions`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/solutions/airports`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/solutions/malls`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/solutions/healthcare`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/solutions/tourism`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/fleet`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/fleet/autonomous-wheelchairs`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/fleet/smart-family-carts`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/fleet/following-amrs`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/fleet/smart-mobile-sofas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/fleet/stair-climbers`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/fleet/wheelchair-controllers`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/technology`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/technology/gps-independent-navigation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/technology/drives-and-positioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/technology/digital-twin-platform`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/business-model`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/business-model/amaas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/business-model/revenue-sharing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/services/repairs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about/history-vision`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about/oman`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact/request-demo`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact/sales`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/blog/electric-wheelchair`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/blog/category/case-studies`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog/category/company-news`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog/category/industry-insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // واکشی داینامیک مقالات منتشرشده از Sanity با کوئری GROQ به همراه _updatedAt دقیق
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch<SitemapPost[]>(sitemapPostsQuery);
    if (Array.isArray(posts)) {
      blogRoutes = posts
        .filter((post) => Boolean(post?.slug))
        .map((post) => {
          let postDate = now;
          if (post._updatedAt) {
            const parsed = new Date(post._updatedAt);
            if (!isNaN(parsed.getTime())) postDate = parsed;
          } else if (post.publishedAt) {
            const parsed = new Date(post.publishedAt);
            if (!isNaN(parsed.getTime())) postDate = parsed;
          }

          return {
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: postDate,
            changeFrequency: 'weekly',
            priority: 0.7,
          };
        });
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap from Sanity:', error);
  }

  return [...coreRoutes, ...blogRoutes];
}

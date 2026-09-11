import type { SanityImageSource } from '@sanity/image-url';

export interface PostSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  ogImage?: SanityImageSource & {
    alt?: string;
  };
}

export interface PostAiMetadata {
  aiSummary?: string;
  searchIntent?: 'informational' | 'commercial' | 'transactional' | 'navigational' | string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  targetQuestions?: string[];
}

export interface PostSummary {
  _id: string;
  _updatedAt?: string;
  title: string;
  slug: {
    current: string;
  };
  author?: string;
  mainImage?: SanityImageSource & {
    alt?: string;
    caption?: string;
  };
  categories?: string[];
  tags?: string[];
  publishedAt?: string;
  excerpt?: string;
  status?: 'draft' | 'in_review' | 'scheduled' | 'published' | 'archived';
  featured?: boolean;
}

export interface PostDetail extends PostSummary {
  body?: any[];
  seo?: PostSeo;
  aiMetadata?: PostAiMetadata;
}

export interface SitemapPost {
  slug: string;
  _updatedAt?: string;
  publishedAt?: string;
}

export function formatPersianDate(dateString?: string): string {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch {
    return dateString;
  }
}

export function estimateReadingTime(body?: any[]): string {
  if (!body || !Array.isArray(body)) return '۳ دقیقه مطالعه';

  let text = '';
  for (const block of body) {
    if (block._type === 'block' && Array.isArray(block.children)) {
      for (const child of block.children) {
        if (child.text) {
          text += ' ' + child.text;
        }
      }
    }
  }

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  
  // Convert minutes to Persian numbers
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const persianMinutes = String(minutes).replace(/\d/g, (d) => persianDigits[Number(d)]);
  
  return `${persianMinutes} دقیقه مطالعه`;
}

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function slugifyHeading(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\u0600-\u06FF\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export function extractHeadings(body?: any[]): TocHeading[] {
  if (!body || !Array.isArray(body)) return [];
  const headings: TocHeading[] = [];
  const seenIds = new Map<string, number>();

  for (const block of body) {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      const text = block.children?.map((c: any) => c.text).join('').trim() || '';
      if (text) {
        let baseId = slugifyHeading(text) || `section-${headings.length + 1}`;
        const count = seenIds.get(baseId) || 0;
        let id = baseId;
        if (count > 0) {
          seenIds.set(baseId, count + 1);
          id = `${baseId}-${count}`;
        } else {
          seenIds.set(baseId, 1);
        }

        headings.push({
          id,
          text,
          level: block.style === 'h2' ? 2 : 3,
        });
      }
    }
  }

  return headings;
}

export function getCategoryHref(category?: string): string {
  if (!category) return '/blog';
  const trimmed = category.trim();
  if (['فناوری رباتیک', 'رباتیک', 'فناوری و ناوبری خودران'].includes(trimmed)) return '/blog/robotics';
  if (['ویلچر برقی', 'دانشنامه و مقالات ویلچر برقی'].includes(trimmed)) return '/blog/electric-wheelchair';
  if (['مطالعات موردی', 'مطالعات موردی و پروژه‌ها'].includes(trimmed)) return '/blog/case-studies';
  if (['دیدگاه‌های صنعت', 'دیدگاه‌ها و تحلیل صنعت', 'تحلیل صنعت', 'تحلیل صنعت و مدل‌های تجاری AMaaS'].includes(trimmed))
    return '/blog/category/industry-insights';
  if (['اخبار شرکت', 'اخبار و رویدادهای شرکت', 'اخبار و تحولات میکائیل'].includes(trimmed))
    return '/blog/category/company-news';
  return '/blog';
}


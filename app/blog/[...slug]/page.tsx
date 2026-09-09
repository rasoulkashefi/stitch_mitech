import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Tag,
} from 'lucide-react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { postPathsQuery, relatedPostsQuery } from '@/sanity/lib/queries';
import {
  PostDetail,
  PostSummary,
  formatPersianDate,
  estimateReadingTime,
  extractHeadings,
} from '@/sanity/types';
import { urlForImage } from '@/sanity/lib/image';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';
import TableOfContents from '@/components/blog/TableOfContents';
import AuthorCard from '@/components/blog/AuthorCard';
import ShareActions from '@/components/blog/ShareActions';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string | string[] }>;
};

export async function generateStaticParams() {
  try {
    const paths = await client.fetch<{ slug: string }[]>(postPathsQuery);
    return (paths || []).map((p) => ({
      slug: p.slug.split('/'),
    }));
  } catch (error) {
    console.error('Error generating static params for blog:', error);
    return [];
  }
}

const flexiblePostQuery = groq`
  *[_type == "post" && (slug.current == $slugParam || slug.current == $lastSegment || slug.current == $dashedSlug)][0] {
    _id,
    title,
    slug,
    author,
    mainImage,
    categories,
    tags,
    publishedAt,
    excerpt,
    body
  }
`;

async function getPostData(rawSlug: string | string[]): Promise<{
  post: PostDetail | null;
  relatedPosts: PostSummary[];
}> {
  const slugParam = Array.isArray(rawSlug) ? rawSlug.join('/') : rawSlug;
  const lastSegment = Array.isArray(rawSlug) ? rawSlug[rawSlug.length - 1] : rawSlug;
  const dashedSlug = Array.isArray(rawSlug) ? rawSlug.join('-') : rawSlug;

  try {
    const post = await client.fetch<PostDetail | null>(flexiblePostQuery, {
      slugParam,
      lastSegment,
      dashedSlug,
    });

    const relatedSlug = post?.slug?.current || lastSegment || slugParam;
    const relatedPosts = await client.fetch<PostSummary[]>(relatedPostsQuery, {
      slug: relatedSlug,
    });

    return {
      post,
      relatedPosts: relatedPosts || [],
    };
  } catch (error) {
    console.error(`Error fetching post data for slug ${slugParam}:`, error);
    return {
      post: null,
      relatedPosts: [],
    };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const raw = (await params).slug;
  const slugParam = Array.isArray(raw) ? raw.join('/') : raw;
  const { post } = await getPostData(raw);

  if (!post) {
    return {
      title: 'مقاله پیدا نشد | ام. آی. تک. (Mitech)',
      description: 'مقاله‌ای با این مشخصات در وبلاگ میکائیل یافت نشد.',
    };
  }

  const title = `${post.title} | وبلاگ میکائیل`;
  const description =
    post.excerpt ||
    'مرجع یادداشت‌های تحلیلی و مقالات تخصصی شرکت دانش‌بنیان فناوری هوشمند میکائیل.';
  const canonicalUrl = `https://mitech.ir/blog/${slugParam}`;
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(1200)?.height(630)?.url()
    : 'https://mitech.ir/logo/mitech-og.png';

  const keywordsList =
    post.tags && post.tags.length > 0
      ? post.tags
      : ['رباتیک', 'فناوری خودران', 'میکائیل', 'AMaaS', 'هوش مصنوعی'];

  return {
    title,
    description,
    keywords: keywordsList,
    authors: [{ name: post.author || 'شرکت فناوری هوشمند میکائیل', url: 'https://mitech.ir' }],
    creator: post.author || 'Mitech',
    publisher: 'ام. آی. تک. (Mitech)',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'ام. آی. تک. (Mitech)',
      locale: 'fa_IR',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: post.author ? [post.author] : ['Mitech'],
      tags: post.tags,
      section: post.categories?.[0] || 'فناوری و رباتیک',
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const raw = (await params).slug;
  const slugParam = Array.isArray(raw) ? raw.join('/') : raw;
  const lastSegment = Array.isArray(raw) ? raw[raw.length - 1] : raw;
  const dashedSlug = Array.isArray(raw) ? raw.join('-') : raw;
  void lastSegment;
  void dashedSlug;
  const { post, relatedPosts } = await getPostData(raw);

  if (!post) {
    notFound();
  }

  const readingTime = estimateReadingTime(post.body);
  const formattedDate = formatPersianDate(post.publishedAt);
  const featuredImageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(1600)?.height(900)?.url()
    : null;
  const headings = extractHeadings(post.body);
  const articleUrl = `https://mitech.ir/blog/${slugParam}`;

  // Rich JSON-LD Graph for Google, Bing, and AI Crawlers (SearchGPT, Perplexity, Gemini)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${articleUrl}#article`,
        headline: post.title,
        description: post.excerpt || post.title,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        inLanguage: 'fa-IR',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl,
        },
        keywords: post.tags && post.tags.length > 0 ? post.tags.join(', ') : undefined,
        articleSection: post.categories && post.categories.length > 0 ? post.categories.join(', ') : 'فناوری و رباتیک',
        author: {
          '@type': 'Person',
          name: post.author || 'تیم مهندسی و پژوهش میکائیل',
          url: 'https://mitech.ir/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'شرکت دانش‌بنیان فناوری هوشمند میکائیل (Mitech)',
          url: 'https://mitech.ir',
          logo: {
            '@type': 'ImageObject',
            url: 'https://mitech.ir/logo/mitech-icon.png',
          },
        },
        image: featuredImageUrl ? [featuredImageUrl] : undefined,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.article-excerpt', '.article-content'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'صفحه اصلی',
            item: 'https://mitech.ir',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'مجله و وبلاگ',
            item: 'https://mitech.ir/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Clean, Full-width Article Canvas with generous whitespace */}
      <article className="min-h-screen bg-white text-slate-800 pt-28 pb-28">
        {/* Article Header & Title */}
        <header className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Return Link */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-slate-900 transition-colors">
                صفحه اصلی
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-slate-900 transition-colors">
                وبلاگ
              </Link>
              <span>/</span>
              <span className="text-slate-600 line-clamp-1 max-w-[180px] sm:max-w-xs">
                {post.title}
              </span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
              بازگشت به وبلاگ
            </Link>
          </div>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="article-excerpt text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
              {post.excerpt}
            </p>
          )}

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-100 text-xs sm:text-sm text-slate-500">
            {post.author && (
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <User className="h-3.5 w-3.5" />
                </div>
                <span className="font-semibold text-slate-800">{post.author}</span>
              </div>
            )}

            {formattedDate && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <span>{formattedDate}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-slate-400" />
              <span>{readingTime}</span>
            </div>
          </div>
        </header>

        {/* Seamless Cover Image (below title & metadata, no clunky borders) */}
        {featuredImageUrl && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 my-10">
            <div className="relative aspect-[21/9] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 shadow-sm">
              <Image
                src={featuredImageUrl}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </div>
        )}

        {/* 2-Column Desktop Layout */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Right Column: Main Article Content (~70% in RTL, lg:col-span-8) */}
            <main className="lg:col-span-8 max-w-3xl">
              {/* Mobile Table of Contents */}
              {headings.length > 0 && (
                <div className="lg:hidden mb-10">
                  <TableOfContents headings={headings} />
                </div>
              )}

              {/* Article Content */}
              {post.body && post.body.length > 0 ? (
                <PortableTextRenderer value={post.body} />
              ) : (
                <div className="py-12 text-center text-slate-500">
                  <p>متن تفصیلی این مقاله در دست تدوین است.</p>
                </div>
              )}

              {/* Tags / Keywords Section (SEO & AI Discovery) */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3.5">
                    <Tag className="h-3.5 w-3.5 text-emerald-600" />
                    <span>برچسب‌ها و کلمات کلیدی مرتبط:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => {
                      const cleanTag = tag.trim().replace(/^#/, '');
                      return (
                        <Link
                          key={idx}
                          href={`/blog?search=${encodeURIComponent(cleanTag)}`}
                          className="inline-flex items-center gap-1 rounded-full border border-emerald-200/70 bg-emerald-50/60 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-900 hover:bg-emerald-100/80 hover:border-emerald-300 transition-all duration-200"
                        >
                          <span className="text-emerald-600 font-bold">#</span>
                          <span>{cleanTag}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Mobile Share Actions */}
              <div className="lg:hidden my-8">
                <ShareActions title={post.title} url={articleUrl} />
              </div>

              {/* Author Bio Box */}
              <div className="mt-14">
                <AuthorCard author={post.author} variant="footer" />
              </div>

              {/* Related Posts */}
              <RelatedPosts posts={relatedPosts} />

              {/* Neatly Aligned CTA Box */}
              <div className="mt-16 rounded-3xl bg-[#0A101D] p-8 sm:p-10 text-white relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center sm:text-right">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                      <Sparkles className="h-3 w-3" />
                      راهکارهای هوشمند سازمانی
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      آماده تحول در خدمات و جابجایی هوشمند هستید؟
                    </h3>
                    <p className="text-sm text-slate-300 max-w-xl">
                      تیم مهندسان و کارشناسان میکائیل برای استقرار ناوگان‌های خودران و دموهای سازمانی در کنار شما هستند.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-emerald-500 transition-colors"
                  >
                    <PhoneCall className="h-4 w-4" />
                    درخواست دمو و مشاوره
                  </Link>
                </div>
              </div>
            </main>

            {/* Left Column: Sidebar (~30% in RTL, lg:col-span-4, sticky) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              {/* Table of Contents */}
              <TableOfContents headings={headings} />

              {/* Author Profile Badge */}
              <AuthorCard author={post.author} variant="sidebar" />

              {/* Floating Social Share Actions */}
              <ShareActions title={post.title} url={articleUrl} />
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

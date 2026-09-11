import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, BookOpen, ArrowLeft } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { PostSummary } from '@/sanity/types';
import BlogListWithFilters from '@/components/blog/BlogListWithFilters';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'مجله و وبلاگ تخصصی رباتیک و خودران | ام. آی. تک. (Mitech)',
  description:
    'آخرین مقالات، دیدگاه‌های تحلیلی صنعت، مطالعات موردی و اخبار رسمی شرکت دانش‌بنیان میکائیل در حوزه فناوری خودران و رباتیک پیشرفته.',
  keywords: [
    'وبلاگ میکائیل',
    'مجله رباتیک',
    'اخبار فناوری خودران',
    'مقالات هوش مصنوعی',
    'Mitech Blog',
    'رباتیک خدمات',
    'AMaaS',
  ],
  openGraph: {
    title: 'مجله و وبلاگ تخصصی رباتیک و خودران | میکائیل',
    description:
      'آخرین مقالات، دیدگاه‌های تحلیلی صنعت، مطالعات موردی و اخبار رسمی شرکت دانش‌بنیان میکائیل.',
    url: 'https://mitech.ir/blog',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مجله و وبلاگ تخصصی رباتیک و خودران میکائیل',
    description: 'آخرین مقالات، دیدگاه‌های تحلیلی صنعت، مطالعات موردی و اخبار رسمی.',
  },
  alternates: {
    canonical: 'https://mitech.ir/blog',
  },
};

async function getPosts(): Promise<PostSummary[]> {
  try {
    const posts = await client.fetch<PostSummary[]>(postsQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts from Sanity:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'مجله و وبلاگ تخصصی رباتیک و خودران میکائیل',
    description: 'مرجع یادداشت‌های تحلیلی، بینش‌های فناوری خودران و اخبار رسمی شرکت دانش‌بنیان میکائیل.',
    publisher: {
      '@type': 'Organization',
      name: 'Mitech',
      url: 'https://mitech.ir',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt || post.title,
      datePublished: post.publishedAt,
      url: `https://mitech.ir/blog/${post.slug.current}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50/60 pb-24 font-[Vazirmatn,sans-serif]" dir="rtl">
        {/* Modern Tech Hero Section (Vercel / Linear inspired, cohesive with Mitech #0F172A) */}
        <section className="relative overflow-hidden bg-[#0A101D] text-white pt-28 pb-20 sm:pb-24 border-b border-slate-800/80 font-[Vazirmatn,sans-serif]">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-emerald-500/15 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                صفحه اصلی
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-200">مجله و وبلاگ</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>مرجع تخصصی فناوری خودران و رباتیک خدمات</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.25] mb-6">
                دیدگاه‌ها، مقالات تحلیلی و نوآوری‌های خودران
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                بررسی روندهای بین‌المللی حمل‌ونقل هوشمند، اتوماسیون درون‌ساختمانی، هوش مصنوعی لبه و مطالعات موردی پیاده‌سازی سازمانی توسط مهندسان و تحلیل‌گران میکائیل.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          {posts.length > 0 ? (
            <React.Suspense fallback={<div className="py-12 text-center text-slate-400">در حال بارگذاری مقالات...</div>}>
              <BlogListWithFilters initialPosts={posts} />
            </React.Suspense>
          ) : (
            /* Empty State */
            <div className="my-16 rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xs">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                هنوز مقاله‌ای منتشر نشده است
              </h3>
              <p className="mx-auto max-w-md text-sm text-slate-600 leading-relaxed mb-6">
                شما می‌توانید از طریق پنل مدیریت محتوای Sanity Studio مقالات، یادداشت‌های تحلیلی و اخبار میکائیل را ثبت و منتشر کنید.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors shadow-xs"
                >
                  ورود به پنل Sanity Studio
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  تماس با کارشناسان
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

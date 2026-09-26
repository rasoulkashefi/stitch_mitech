import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { latestPostsQuery } from '@/sanity/lib/queries';
import { PostSummary, formatPersianDate, getCategoryHref } from '@/sanity/types';
import { urlForImage } from '@/sanity/lib/image';

async function getLatestPosts(): Promise<PostSummary[]> {
  try {
    const posts = await client.fetch<PostSummary[]>(
      latestPostsQuery,
      {},
      { next: { revalidate: 60, tags: ['posts'] } }
    );
    return posts || [];
  } catch (error) {
    console.error('Error fetching latest posts from Sanity for homepage:', error);
    return [];
  }
}

export default async function Blog() {
  const posts = await getLatestPosts();

  return (
    <section
      id="blog"
      dir="rtl"
      className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif]"
    >
      {/* ── Section Header ── */}
      <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-3.5 py-1 text-xs font-bold text-emerald-700">
            <BookOpen className="h-3.5 w-3.5 text-emerald-600" />
            <span>مجله تخصصی و مقالات</span>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-950 lg:text-4xl tracking-tight leading-tight">
            ایده‌ها و نوآوری‌های دنیای رباتیک
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
            جدیدترین یادداشت‌های تحلیلی، فناوری‌های ناوبری خودران، راهنماهای فنی و دستاوردهای توسعه سیستم‌های هوشمند موبیلیتی
          </p>
        </div>

        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 self-start md:self-end rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-blue-950 shadow-xs transition-all hover:border-emerald-300 hover:bg-emerald-50/40 hover:text-emerald-700 hover:shadow-md"
        >
          مشاهده همه مقالات
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />
        </Link>
      </div>

      {/* ── Blog Cards Grid ── */}
      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const imageUrl = post.mainImage
              ? urlForImage(post.mainImage)?.width(800)?.height(500)?.quality(85)?.url()
              : null;
            const postHref = `/blog/${post.slug.current}`;
            const primaryCategory = post.categories?.[0] || 'مقاله تخصصی';
            const categoryHref = getCategoryHref(primaryCategory);

            return (
              <article
                key={post._id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Link href={postHref} className="block h-full w-full">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 to-blue-950 text-slate-500">
                        <BookOpen className="h-10 w-10 text-emerald-400/60" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-40 pointer-events-none" />
                  </Link>

                  {/* Primary Category Pill */}
                  <div className="absolute top-3 right-3 z-10">
                    <Link
                      href={categoryHref}
                      className="inline-flex items-center rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/20 shadow-xs hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      {primaryCategory}
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Date & Author row */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                        <span>{formatPersianDate(post.publishedAt)}</span>
                      </div>
                      {post.author && (
                        <span className="text-[11px] text-slate-500 max-w-[140px] truncate">
                          {post.author}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-blue-950 leading-snug transition-colors group-hover:text-emerald-600 line-clamp-2">
                      <Link href={postHref}>{post.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  {/* Read-more link */}
                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                    <Link
                      href={postHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 transition-colors group-hover:text-emerald-600"
                    >
                      مطالعه مقاله
                      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                    </Link>
                    <span className="text-[11px] font-medium text-slate-400">ام. آی. تک.</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State / Fallback */
        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-12 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-slate-400 mb-3" />
          <p className="text-sm font-medium text-slate-600">
            در حال حاضر مقاله‌ای بارگذاری نشده است. برای مشاهده آرشیو مقالات به بخش وبلاگ مراجعه نمایید.
          </p>
          <Link
            href="/blog"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700"
          >
            ورود به مجله تخصصی
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </section>
  );
}

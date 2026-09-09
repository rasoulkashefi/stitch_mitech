import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { PostSummary, formatPersianDate } from '@/sanity/types';
import { urlForImage } from '@/sanity/lib/image';

export default function RelatedPosts({ posts }: { posts: PostSummary[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-200/80">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            مطالب مرتبط و مقالات پیشنهادی
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            یادداشت‌های منتخب دیگر در حوزه رباتیک و فناوری خودران
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          مشاهده همه مقالات
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => {
          const imageUrl = post.mainImage
            ? urlForImage(post.mainImage)?.width(600)?.height(350)?.url()
            : null;

          return (
            <article
              key={post._id}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <Link
                href={`/blog/${post.slug.current}`}
                className="relative aspect-video sm:aspect-square sm:w-44 shrink-0 overflow-hidden bg-slate-100"
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 180px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-600">
                    <BookOpen className="h-8 w-8" />
                  </div>
                )}
              </Link>

              <div className="flex flex-1 flex-col p-5 justify-between">
                <div>
                  {post.publishedAt && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-medium">
                      <Calendar className="h-3 w-3 text-emerald-600" />
                      <span>{formatPersianDate(post.publishedAt)}</span>
                    </div>
                  )}
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                  </h3>
                  {post.excerpt && (
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors"
                  >
                    مطالعه ادامه مطلب
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

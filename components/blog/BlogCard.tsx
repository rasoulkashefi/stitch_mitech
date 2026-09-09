import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { PostSummary, formatPersianDate } from '@/sanity/types';
import { urlForImage } from '@/sanity/lib/image';

export default function BlogCard({ post }: { post: PostSummary }) {
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(800)?.height(450)?.url()
    : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
      {/* Featured Image */}
      <Link
        href={`/blog/${post.slug.current}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-600">
            <BookOpen className="h-10 w-10 group-hover:text-emerald-400 transition-colors" />
          </div>
        )}

        {/* Primary Category Pill */}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
              {post.categories[0]}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta info */}
        <div className="mb-3 flex items-center gap-3 text-xs font-medium text-slate-400">
          {post.publishedAt && (
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3 text-emerald-600" />
              <span>{formatPersianDate(post.publishedAt)}</span>
            </span>
          )}
          {post.author && (
            <>
              <span>•</span>
              <span className="text-slate-500">{post.author}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="mb-5 flex-1 text-sm text-slate-600 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}

        {/* Read More Link */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/blog/${post.slug.current}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors"
          >
            مطالعه مقاله
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
          <span className="text-[11px] text-slate-400 font-medium">میکائیل</span>
        </div>
      </div>
    </article>
  );
}

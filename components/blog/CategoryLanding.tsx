import React from 'react';
import Link from 'next/link';
import {
  FolderOpen,
  ArrowLeft,
  Sparkles,
  Compass,
  FileText,
} from 'lucide-react';
import { PostSummary } from '@/sanity/types';
import BlogCard from '@/components/blog/BlogCard';

interface SiblingCategory {
  label: string;
  href: string;
  desc?: string;
}

interface CategoryLandingProps {
  title: string;
  englishTitle: string;
  badge: string;
  description: string;
  posts: PostSummary[];
  siblingCategories: SiblingCategory[];
}

export default function CategoryLanding({
  title,
  englishTitle,
  badge,
  description,
  posts,
  siblingCategories,
}: CategoryLandingProps) {
  return (
    <div className="min-h-screen bg-slate-50/70 pb-24 font-[Vazirmatn,sans-serif] text-slate-800" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0A101D] text-white pt-28 pb-16 border-b border-slate-800/80 font-[Vazirmatn,sans-serif]">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-b from-emerald-500/15 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="مسیر راهنما"
            className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400"
          >
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              صفحه اصلی
            </Link>
            <span className="text-slate-600">/</span>
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">
              مجله و وبلاگ
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200">{title}</span>
          </nav>

          <div className="max-w-3xl">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>{badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.25] mb-4">
              {title}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-emerald-400/90 tracking-wider uppercase mb-5">
              {englishTitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        {/* Sibling Categories Pills */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-6">
          <span className="text-xs font-semibold text-slate-400 ml-2">سایر دسته‌ها:</span>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            همه مقالات
          </Link>
          {siblingCategories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors"
            >
              <span>{cat.label}</span>
            </Link>
          ))}
        </div>

        {/* Posts Grid OR High-Tech Empty State */}
        {posts.length > 0 ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                تعداد مقالات منتشر شده: {posts.length} مقاله
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          /* های‌تک Empty State با دیزاین چشم‌نواز و کادر مدرن */
          <div className="my-10 rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-14 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/60 text-emerald-600 shadow-inner">
              <FolderOpen className="h-10 w-10 text-emerald-600 stroke-[1.5]" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 mb-4">
              <FileText className="h-3.5 w-3.5 text-slate-400" />
              <span>وضعیت محتوا: در حال آماده‌سازی و بازبینی نهایی</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              به‌زودی مقالات جدید این شاخه منتشر می‌شوند
            </h3>

            <p className="mx-auto max-w-lg text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              پژوهشگران و تحلیل‌گران شرکت دانش‌بنیان میکائیل در حال تألیف و تدوین مستندات تخصصی، یادداشت‌های فنی و گزارش‌های این بخش هستند.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors shadow-sm"
              >
                <span>مشاهده سایر مقالات وبلاگ</span>
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                href="/blog/electric-wheelchair"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <Compass className="h-4 w-4 text-emerald-600" />
                <span>دانشنامه ویلچر برقی</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

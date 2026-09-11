'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, Calendar, User, ArrowLeft, BookOpen, Sparkles, Hash } from 'lucide-react';
import { PostSummary, formatPersianDate } from '@/sanity/types';
import { urlForImage } from '@/sanity/lib/image';
import BlogCard from '@/components/blog/BlogCard';

interface BlogListWithFiltersProps {
  initialPosts: PostSummary[];
}

export default function BlogListWithFilters({ initialPosts }: BlogListWithFiltersProps) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const q = searchParams.get('search');
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Extract unique categories from posts + include defaults
  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialPosts.forEach((post) => {
      post.categories?.forEach((cat) => {
        if (cat && cat.trim()) cats.add(cat.trim());
      });
    });

    const list = Array.from(cats);
    if (list.length === 0) {
      return ['دیدگاه‌های صنعت', 'مطالعات موردی', 'اخبار شرکت', 'فناوری رباتیک', 'ویلچر برقی'];
    }
    return list;
  }, [initialPosts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch =
        !searchQuery.trim() ||
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categories?.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' ||
        post.categories?.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchQuery, selectedCategory]);

  const isFiltering = searchQuery.trim().length > 0 || selectedCategory !== 'all';
  const featuredPost = !isFiltering && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = !isFiltering && filteredPosts.length > 0 ? filteredPosts.slice(1) : filteredPosts;

  const featuredImageUrl = featuredPost?.mainImage
    ? urlForImage(featuredPost.mainImage)?.width(1200)?.height(700)?.url()
    : null;

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between pb-8 border-b border-slate-200/80">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            همه مقالات
            <span className="mr-1.5 opacity-60 text-xs font-normal">({initialPosts.length})</span>
          </button>

          {categories.map((cat) => {
            const count = initialPosts.filter((p) => p.categories?.includes(cat)).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat}
                {count > 0 && (
                  <span className="mr-1.5 opacity-60 text-xs font-normal">({count})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو در مقالات..."
            className="w-full rounded-full border border-slate-200 bg-white pr-10 pl-10 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="پاک کردن جستجو"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Feedback */}
      {isFiltering && (
        <div className="flex items-center justify-between text-sm text-slate-600 bg-slate-100/60 rounded-xl px-4 py-2.5">
          <div>
            نتایج جستجو: <strong className="text-slate-900 font-bold">{filteredPosts.length}</strong> مقاله یافت شد
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 underline"
          >
            پاک کردن فیلترها
          </button>
        </div>
      )}

      {/* Featured Article Banner (Only on initial unfiltered state) */}
      {featuredPost && (
        <article className="group overflow-hidden rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
            {/* Image on Right side in RTL (lg:col-span-7) */}
            <Link
              href={`/blog/${featuredPost.slug.current}`}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 lg:col-span-7 block"
            >
              {featuredImageUrl ? (
                <Image
                  src={featuredImageUrl}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-600">
                  <BookOpen className="h-16 w-16 group-hover:text-emerald-400 transition-colors" />
                </div>
              )}
            </Link>

            {/* Content on Left side in RTL (lg:col-span-5) */}
            <div className="flex flex-col justify-between lg:col-span-5 h-full space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/60">
                    <Sparkles className="h-3 w-3 text-emerald-600" />
                    مطلب ویژه و برگزیده
                  </span>
                  {featuredPost.categories && featuredPost.categories[0] && (
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-2.5 py-0.5">
                      {featuredPost.categories[0]}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors mb-4">
                  <Link href={`/blog/${featuredPost.slug.current}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                {featuredPost.excerpt && (
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                    {featuredPost.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                  {featuredPost.publishedAt && (
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                      {formatPersianDate(featuredPost.publishedAt)}
                    </span>
                  )}
                  {featuredPost.author && (
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      {featuredPost.author}
                    </span>
                  )}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug.current}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-600 transition-colors shadow-xs"
                >
                  مطالعه مقاله
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Grid Articles */}
      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        /* Empty search or empty category state */
        <div className="py-16 text-center rounded-3xl border border-slate-200 bg-white p-8">
          <BookOpen className="h-10 w-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            هیچ مقاله‌ای مطابق جستجوی شما یافت نشد
          </h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto mb-5">
            عبارت دیگری را جستجو کنید یا فیلتر دسته‌بندی را به «همه مقالات» بازگردانید.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600 transition-colors"
          >
            مشاهده تمام مقالات
          </button>
        </div>
      )}
    </div>
  );
}

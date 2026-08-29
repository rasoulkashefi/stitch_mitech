import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogPost {
  category: string;
  categoryHref: string;
  date: string;
  title: string;
  image: string;
  imageAlt: string;
}

const posts: BlogPost[] = [
  {
    category: 'راهنمای انتخاب',
    categoryHref: '/blog/category/industry-insights',
    date: '۱۵ مرداد ۱۴۰۴',
    title: '۵ نکته کلیدی برای انتخاب ویلچر برقی هوشمند متناسب با نیاز شما',
    image: '/images/blog/smart-wheelchair.jpg',
    imageAlt: 'ویلچر برقی هوشمند',
  },
  {
    category: 'راهکار سازمانی',
    categoryHref: '/blog/category/case-studies',
    date: '۲ شهریور ۱۴۰۴',
    title: 'چگونه مدل خدمات خودران (AMaaS) هزینه‌های لجستیک فرودگاهی را کاهش می‌دهد؟',
    image: '/images/blog/autonomous-airport.jpg',
    imageAlt: 'حمل‌ونقل خودران در فرودگاه',
  },
  {
    category: 'فناوری و آینده',
    categoryHref: '/blog/category/industry-insights',
    date: '۱۰ شهریور ۱۴۰۴',
    title: 'آینده حمل‌ونقل توانیابان؛ تعامل الگوریتم‌های بینایی ماشین و رباتیک خودران',
    image: '/images/blog/robotics-vision.jpg',
    imageAlt: 'رباتیک و بینایی ماشین',
  },
];

export default function Blog() {
  return (
    <section
      dir="rtl"
      className="mx-auto max-w-7xl px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif]"
    >
      {/* ── Section Header ── */}
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
            مجله تخصصی و مقالات
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 lg:text-4xl tracking-tight">
            ایده‌ها و نوآوری‌های دنیای رباتیک
          </h2>
        </div>

        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition-all hover:border-slate-300 hover:shadow-md hover:text-emerald-600"
        >
          مشاهده همه مقالات
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-1"
          />
        </Link>
      </div>

      {/* ── Blog Cards Grid ── */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((post, i) => (
          <article
            key={i}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden bg-slate-50">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                {/* Category + Date row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-base font-bold leading-7 text-slate-900 transition-colors group-hover:text-emerald-600">
                  <Link href={post.categoryHref}>
                    {post.title}
                  </Link>
                </h3>
              </div>

              {/* Read-more link */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href={post.categoryHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 transition-colors group-hover:text-emerald-600"
                >
                  مطالعه مقاله
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

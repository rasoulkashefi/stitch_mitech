import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BlogPost {
  category: string;
  date: string;
  title: string;
  image: string;
  imageAlt: string;
}

const posts: BlogPost[] = [
  {
    category: 'راهنمای خرید',
    date: '۱۵ مرداد ۱۴۰۴',
    title: '۵ نکته کلیدی برای انتخاب ویلچر برقی هوشمند مناسب شما',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    imageAlt: 'ویلچر برقی هوشمند',
  },
  {
    category: 'راهکار سازمانی',
    date: '۲ شهریور ۱۴۰۴',
    title: 'چگونه فناوری خودران (AMaaS) هزینه‌های لجستیک فرودگاهی را کاهش می‌دهد؟',
    image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=800&q=80',
    imageAlt: 'حمل‌ونقل خودران در فرودگاه',
  },
  {
    category: 'فناوری و آینده',
    date: '۱۰ شهریور ۱۴۰۴',
    title: 'آینده حمل‌ونقل توانیابان؛ تعامل بینایی ماشین و رباتیک',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
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
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-600 tracking-wide">
            مجله فناوری ام. آی. تک.
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-blue-950 lg:text-4xl">
            ایده‌هایی برای حرکت رو به جلو.
          </h2>
        </div>

        <a
          href="#blog"
          className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-blue-900 shadow-sm transition-all hover:border-blue-200 hover:shadow-md hover:text-blue-700"
        >
          مشاهده همه مقالات
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
        </a>
      </div>

      {/* ── Blog Cards Grid ── */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((post, i) => (
          <article
            key={i}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden bg-slate-100">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category + Date row */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-600">
                  {post.category}
                </span>
                <span className="text-sm text-slate-400">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="mb-5 mt-3 text-lg font-bold leading-8 text-slate-900 transition-colors group-hover:text-blue-700">
                {post.title}
              </h3>

              {/* Divider */}
              <div className="mb-5 h-px bg-slate-100" />

              {/* Read-more link */}
              <a
                href="#blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 transition-transform group-hover:-translate-x-1"
              >
                مطالعه مقاله
                <ArrowLeft className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'ام. آی. تک. فقط یک وسیله حرکتی نیست؛ بخشی از استقلال من است. حالا برای رفتن به جاهایی که دوست دارم، کمتر فکر می‌کنم.',
    name: 'مریم رضایی',
    role: 'کاربر ویلچر هوشمند',
    initial: 'م',
  },
  {
    quote:
      'استفاده از سیستم‌های ناوبری خودران برای حمل‌ونقل در مجتمع ما، یک تحول اساسی بود. همگامی دقیق مهندسی و نیاز انسانی.',
    name: 'مهندس ابوطالبی',
    role: 'مدیر توسعه مال تجاری',
    initial: 'ا',
    featured: true,
  },
  {
    quote:
      'کنترلرهای پله‌پیما نصب‌شده، از نظر کیفیت و پایداری با بهترین نمونه‌های خارجی رقابت می‌کنند و پشتیبانی بی‌نظیری دارند.',
    name: 'علیرضا حسینی',
    role: 'خریدار تجهیزات',
    initial: 'ع',
  },
];

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

function StarRating({ featured }: { featured?: boolean }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={16}
          fill="currentColor"
          className={featured ? 'text-yellow-300' : 'text-emerald-500'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section dir="rtl" className="bg-slate-50 px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif]">
      <div className="mx-auto max-w-7xl">

        {/* Section Header — Centered */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-600 tracking-wide">
            همراهان ما می‌گویند
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-blue-950 lg:text-4xl">
            تجربه واقعی، تغییر واقعی.
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                t.featured
                  ? 'border-blue-800 bg-blue-900 text-white'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {/* Background Quote Icon */}
              <QuoteIcon
                className={`pointer-events-none absolute right-4 top-4 h-16 w-16 select-none ${
                  t.featured ? 'text-white/10' : 'text-slate-100'
                }`}
              />

              {/* Stars */}
              <div className="mb-5 relative z-10">
                <StarRating featured={t.featured} />
              </div>

              {/* Quote Text */}
              <p
                className={`relative z-10 mb-8 text-base italic leading-8 ${
                  t.featured ? 'text-blue-100' : 'text-slate-700'
                }`}
              >
                «{t.quote}»
              </p>

              {/* Profile Footer */}
              <div className="relative z-10 flex items-center gap-4 border-t pt-6 mt-auto"
                style={{ borderColor: t.featured ? 'rgba(255,255,255,0.15)' : '' }}
              >
                {/* Avatar */}
                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-base font-bold ${
                    t.featured
                      ? 'bg-white/20 text-white ring-2 ring-white/30'
                      : 'bg-emerald-100 text-emerald-700 ring-2 ring-emerald-200'
                  }`}
                >
                  {t.initial}
                </div>

                {/* Name & Role */}
                <div>
                  <p className={`font-bold text-sm ${t.featured ? 'text-white' : 'text-slate-900'}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs mt-0.5 ${t.featured ? 'text-blue-300' : 'text-slate-500'}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

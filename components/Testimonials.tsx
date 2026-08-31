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
      'ویلچر هوشمند میکائیل فقط یک وسیله نقلیه نیست؛ بازگشت واقعی استقلال و حس اطمینان به زندگی روزمره من است.',
    name: 'مریم رضایی',
    role: 'کاربر ویلچر هوشمند',
    initial: 'م',
  },
  {
    quote:
      'پیاده‌سازی ناوگان ناوبری خودران برای مراجعان مال، هم رضایت بازدیدکنندگان را چندبرابر کرد و هم تصویر برند ما را به عنوان مجموعه‌ای پیشرو ارتقا داد.',
    name: 'مهندس ابوطالبی',
    role: 'مدیر توسعه مجتمع تجاری',
    initial: 'ا',
    featured: true,
  },
  {
    quote:
      'کیفیت ساخت کنترلرها و پایداری عملکرد ربات‌ها در فضاهای شلوغ، با معتبرترین استانداردهای بین‌المللی برابری می‌کند.',
    name: 'علیرضا حسینی',
    role: 'کارشناس تجهیزات پزشکی',
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
          size={15}
          fill="currentColor"
          className={featured ? 'text-amber-400' : 'text-emerald-500'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section dir="rtl" className="bg-slate-50 px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif] border-t border-slate-100">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
            نظرات و تجربیات همراهان
          </p>
          <h2 className="text-3xl font-extrabold text-blue-950 lg:text-4xl tracking-tight">
            تجربه واقعی استقلال و تحول سازمانی
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                t.featured
                  ? 'border-slate-800 bg-slate-950 text-white'
                  : 'border-slate-200/50 bg-white text-slate-900'
              }`}
            >
              {/* Background Quote Icon */}
              <QuoteIcon
                className={`pointer-events-none absolute left-4 top-4 h-16 w-16 select-none ${
                  t.featured ? 'text-white/5' : 'text-slate-100'
                }`}
              />

              <div>
                {/* Stars */}
                <div className="mb-5 relative z-10">
                  <StarRating featured={t.featured} />
                </div>

                {/* Quote Text */}
                <p
                  className={`relative z-10 mb-8 text-base leading-8 ${
                    t.featured ? 'text-slate-200' : 'text-slate-600'
                  }`}
                >
                  «{t.quote}»
                </p>
              </div>

              {/* Profile Footer */}
              <div
                className={`relative z-10 flex items-center gap-4 border-t pt-6 mt-auto ${
                  t.featured ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-base font-bold ${
                    t.featured
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}
                >
                  {t.initial}
                </div>

                {/* Name & Role */}
                <div>
                  <p className={`font-bold text-sm ${t.featured ? 'text-white' : 'text-blue-950'}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs mt-0.5 ${t.featured ? 'text-emerald-400' : 'text-slate-500'}`}>
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

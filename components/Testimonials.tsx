import React from 'react';
import { Network, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-bold text-emerald-600">همراهان ما می‌گویند</p>
            <h2 className="text-4xl font-bold text-slate-900">
              تجربه واقعی،
              <br />
              تغییر واقعی.
            </h2>
          </div>
          <div className="hidden gap-1 text-emerald-600 sm:flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star key={item} size={18} fill="currentColor" />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Main Testimonial */}
          <div className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <p className="text-xl font-bold leading-9 text-slate-900">
              «mitech فقط یک وسیله حرکتی نیست؛ بخشی از استقلال و اعتمادبه‌نفس من است. حالا
              برای رفتن به جاهایی که دوست دارم، کمتر فکر می‌کنم.»
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-emerald-600 font-bold text-white">
                م
              </div>
              <div>
                <b className="text-sm text-slate-900">مریم رضایی</b>
                <p className="text-xs text-slate-500">کاربر MOBI ONE</p>
              </div>
            </div>
          </div>

          {/* Secondary Testimonial */}
          <div className="rounded-2xl bg-blue-900 p-7 text-white shadow-sm">
            <Network className="text-emerald-400" />
            <p className="mt-12 text-lg font-bold leading-8">
              «یک همکاری حرفه‌ای، دقیق و انسانی از اولین جلسه تا امروز.»
            </p>
            <p className="mt-6 text-xs text-white/60">مدیر توسعه یک مرکز درمانی</p>
          </div>
        </div>
      </div>
    </section>
  );
}

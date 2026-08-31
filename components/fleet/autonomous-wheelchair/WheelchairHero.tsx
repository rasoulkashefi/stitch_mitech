'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export default function WheelchairHero() {
  return (
    <section className="relative min-h-[760px] lg:min-h-[840px] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Full-Bleed Background Image with Controlled Editorial Contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fleet/autonomous-wheelchair-hero.jpg"
          alt="ویلچر برقی خودران و هوشمند ام آی تک در فرودگاه"
          fill
          priority
          className="object-cover object-[center_right] lg:object-center opacity-70"
          sizes="100vw"
        />
      </div>

      {/* Sharp High-Contrast Gradients */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/85 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-0" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-28 lg:py-36">
        <div className="max-w-2xl text-right">
          
          {/* Minimal Status Pill */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>سکوی حمل‌ونقل انفرادی خودران • Personal Mobility</span>
          </div>

          {/* Large Sharp Headline */}
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.15] text-white tracking-tight">
            آزادی در حرکت؛
            <br />
            <span className="text-emerald-400">با ناوبری خودران.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-300 font-normal max-w-xl">
            محیط‌های وسیع و پرتردد دیگر مانعی برای توان‌یابان و سالمندان نیستند. ویلچر خودران هوشمند بدون نیاز به همراه، مسافران را به مقاصد دلخواه رسانده و به صورت خودکار به ایستگاه بازمی‌گردد.
          </p>

          {/* Linear Minimalist Specs Row */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-xs text-slate-400 font-medium">ظرفیت وزن</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">۱۲۰ کیلوگرم</div>
            </div>
            <div className="border-r border-white/10 pr-6">
              <div className="text-xs text-slate-400 font-medium">سنسورهای ایمنی</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">۳۶۰° ضد تصادف</div>
            </div>
            <div className="border-r border-white/10 pr-6">
              <div className="text-xs text-slate-400 font-medium">سیستم شارژ</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">داک خودکار</div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#demo-request"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-500 active:scale-[0.98] transition-all duration-300"
            >
              <span>درخواست دمو و پایلوت سازمانی</span>
              <ArrowLeft size={16} />
            </a>

            <a
              href="#tech-specs"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10 active:scale-[0.98] transition-all duration-300"
            >
              <span>مشخصات فنی دستگاه</span>
              <ChevronDown size={16} className="text-slate-400" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

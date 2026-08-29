'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Armchair, Sliders, ShieldCheck } from 'lucide-react';

export default function SofaHero() {
  return (
    <section className="relative min-h-[760px] lg:min-h-[840px] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Controlled Cinematic Contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fleet/smart-mobile-sofa-hero.jpg"
          alt="سالمندان در حال استفاده از مبل هوشمند سیار در مجتمع تجاری لوکس"
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
      </div>

      {/* Sharp High-Contrast Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/85 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-0" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-28 lg:py-36">
        <div className="max-w-3xl text-right">
          
          {/* Status Pill with Pulsing Dot */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>پلتفرم تحرک لوکس و راحت (Premium Leisure Mobility)</span>
          </div>

          {/* Large Sharp Headline */}
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.15] text-white tracking-tight">
            هیچ‌کس از گردش خانوادگی جا نمی‌ماند؛
            <br />
            <span className="text-emerald-400">تجربه راحتیِ خانه در قلب بازار.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-300 font-normal max-w-2xl">
            راه‌رفتن‌های طولانی در مجتمع‌های تجاری، نمایشگاه‌ها و موزه‌ها دیگر دلیلی برای انزوای پدربزرگ‌ها، مادربزرگ‌ها و افراد خسته نیست. مبل هوشمند سیار ام. آی. تک.، یک استراحتگاه متحرک و لوکس است که بدون حس ناخوشایند تجهیزات پزشکی، امکان همراهی با خانواده را با هدایتی بسیار ساده و ایمن فراهم می‌کند.
          </p>

          {/* Linear Highlights / Immediate Badges Row */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="flex items-start gap-3">
              <div className="grid size-8 place-items-center rounded-lg bg-white/10 text-emerald-400 shrink-0 mt-0.5">
                <Armchair size={16} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">آسایش فرست‌کلاس</div>
                <div className="text-sm font-bold text-white mt-0.5">طراحی ارگونومیک مبلمان</div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:border-r sm:border-white/10 sm:pr-6">
              <div className="grid size-8 place-items-center rounded-lg bg-white/10 text-emerald-400 shrink-0 mt-0.5">
                <Sliders size={16} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">کنترل روان</div>
                <div className="text-sm font-bold text-white mt-0.5">هدایت لمسی آسان</div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:border-r sm:border-white/10 sm:pr-6">
              <div className="grid size-8 place-items-center rounded-lg bg-white/10 text-emerald-400 shrink-0 mt-0.5">
                <ShieldCheck size={16} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">سنسورهای ۳۶۰ درجه</div>
                <div className="text-sm font-bold text-white mt-0.5">ترمز هوشمند مانع‌یاب</div>
              </div>
            </div>
          </div>

          {/* Action Triggers (CTAs) */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#sofa-cta"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-500 active:scale-[0.98] transition-all duration-150"
            >
              <span>تجهیز ناوگان مجتمع تجاری</span>
              <ArrowLeft size={16} />
            </a>

            <a
              href="#safety-and-comfort"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10 active:scale-[0.98] transition-all duration-150"
            >
              <span>مشاهده امکانات رفاهی</span>
              <ChevronDown size={16} className="text-slate-400" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

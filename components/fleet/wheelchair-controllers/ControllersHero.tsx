'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, ShieldCheck, Cpu, Zap, Award } from 'lucide-react';

export default function ControllersHero() {
  return (
    <section 
      className="group relative min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden bg-slate-950 text-white" 
      dir="rtl"
    >
      {/* 1. Full-Bleed Single Background Image: ONLY 1 Controller, positioned fully on the LEFT */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fleet/controllers/hero-single-left.webp"
          alt="کنترلر هوشمند ویلچر برقی آرتک میکائیل"
          fill
          priority
          className="object-cover object-[15%_center] lg:object-left brightness-100 group-hover:brightness-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-[1.02]"
          sizes="100vw"
        />

        {/* Subtle Ambient Emerald Accent Glow behind the single controller on the left */}
        <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-90" />

        {/* Mobile Gradient: Soft darkening only on small screens so text stays readable over any background crop */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30 pointer-events-none" />

        {/* Desktop Gradient: The image already has pure slate-950 on the right, so we keep right side deep and left side completely clear */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

        {/* Top & bottom seam blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 pointer-events-none" />
      </div>

      {/* 2. Hero Content Container (Positioned on the Right side) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="max-w-2xl lg:max-w-3xl mr-0 ml-auto text-right">
          
          {/* Status Badge & Guarantee */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md text-xs font-semibold text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>تولید ملی • فناوری ناوبری و درایورهای حرکتی توانبخشی ARTECH</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md text-xs font-semibold text-slate-200">
              <Award size={14} className="text-emerald-400" />
              <span>۳۰ ماه ضمانت طلایی تعویض</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-balance text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.2] text-white tracking-tight drop-shadow-sm">
            مرجع تخصصی درایورهای موتور DC
            <br />
            <span className="text-emerald-400">
              و خانواده کنترلرهای ویلچر برقی آرتک
            </span>
          </h1>

          {/* Description exact text */}
          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-200 font-normal max-w-2xl text-justify drop-shadow-xs">
            شرکت فناوری هوشمند میکائیل، مرجع تخصصی طراحی و تولید زیرسیستم‌های ناوبری، درایورهای موتور DC و خانواده کنترلرهای هوشمند ویلچر برقی (سری آرتک مینی، پرو تاچ، پرو اکشن و ایکسپرو) است. سیستم‌های ما با معماری دو بخشی مجزا، هدایت لمسی با تلفن همراه و الگوریتم‌های پیشرفته کنترل سرعت، تجربه‌ای ایمن و روان را برای توان‌یابان و تولیدکنندگان فراهم می‌کنند.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3.5 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                <Zap size={14} className="text-emerald-400" />
                <span>توان موتور</span>
              </div>
              <div className="text-lg font-bold text-white">تا ۷۰۰ وات</div>
              <div className="text-xs text-slate-400 mt-0.5">ولتاژ ۱۸ تا ۳۱ ولت</div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3.5 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                <Cpu size={14} className="text-emerald-400" />
                <span>معماری سیستم</span>
              </div>
              <div className="text-lg font-bold text-white">دو بخشی مجزا</div>
              <div className="text-xs text-slate-400 mt-0.5">کاهش چشمگیر حرارت</div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3.5 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>ایمنی و مقاومت</span>
              </div>
              <div className="text-lg font-bold text-white">استاندارد IPX4</div>
              <div className="text-xs text-slate-400 mt-0.5">محافظت باتری تا ۴۰V</div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3.5 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                <Award size={14} className="text-emerald-400" />
                <span>تضمین کیفیت</span>
              </div>
              <div className="text-lg font-bold text-white">۳۰ ماه ضمانت</div>
              <div className="text-xs text-slate-400 mt-0.5">عیب‌یابی پیشرفته</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#product-family"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500 active:scale-[0.98] transition-all duration-200"
            >
              <span>مشاهده خانواده کنترلرها</span>
              <ArrowLeft size={16} />
            </a>

            <a
              href="#specs-comparison"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
            >
              <span>جدول مقایسه فنی ماژول‌ها</span>
              <ChevronDown size={16} className="text-slate-400" />
            </a>

            <a
              href="#robotics-drivers"
              className="inline-flex items-center gap-2 rounded-full text-slate-300 hover:text-white px-4 py-3.5 text-xs font-semibold hover:bg-white/5 transition-colors"
            >
              <span>درایورهای ناوبری رباتیک UGV / AGV</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

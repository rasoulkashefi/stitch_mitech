'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, ShieldCheck, Cpu, Zap, Award } from 'lucide-react';

export default function ControllersHero() {
  return (
    <section className="relative min-h-[720px] lg:min-h-[820px] flex items-center overflow-hidden bg-slate-950 text-white" dir="rtl">
      {/* Background Media with Editorial High-Contrast Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fleet/controllers/hero.jpg"
          alt="کنترلر ویلچر برقی و درایور موتور DC هوشمند میکائیل"
          fill
          priority
          className="object-cover object-[center_right] lg:object-center opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="max-w-3xl text-right">
          
          {/* Status Badge & Guarantee */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>تولید ملی • فناوری ناوبری و درایورهای حرکتی توانبخشی</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 backdrop-blur-md text-xs font-bold text-amber-300">
              <Award size={14} />
              <span>۳۰ ماه گارانتی طلایی میکائیل</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-balance text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.2] text-white tracking-tight">
            مرجع تخصصی درایورهای موتور DC
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              و خانواده کنترلرهای ویلچر برقی
            </span>
          </h1>

          {/* Description exact text */}
          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-300 font-normal max-w-2xl text-justify">
            شرکت فناوری هوشمند میکائیل، مرجع تخصصی طراحی و تولید زیرسیستم‌های ناوبری، درایورهای موتور DC و خانواده کنترلرهای ویلچر برقی است. سیستم‌های ما با تلفیق الگوریتم‌های پردازش هوشمند و معماری چندلایه ایمنی، حرکتی نرم، دقیق و کاملاً شخصی‌سازی‌شده را برای انواع وسایل نقلیه الکتریکی و توان‌یابان فراهم می‌کنند.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                <Zap size={14} className="text-amber-400" />
                <span>توان موتور</span>
              </div>
              <div className="text-lg font-bold text-white">تا ۷۰۰ وات</div>
              <div className="text-[11px] text-slate-400 mt-0.5">ولتاژ ۱۸ تا ۳۱ ولت</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                <Cpu size={14} className="text-emerald-400" />
                <span>معماری سیستم</span>
              </div>
              <div className="text-lg font-bold text-white">دو بخشی مجزا</div>
              <div className="text-[11px] text-slate-400 mt-0.5">کاهش چشمگیر حرارت</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                <ShieldCheck size={14} className="text-cyan-400" />
                <span>ایمنی و مقاومت</span>
              </div>
              <div className="text-lg font-bold text-white">استاندارد IPX4</div>
              <div className="text-[11px] text-slate-400 mt-0.5">محافظت باتری تا ۴۰V</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
                <Award size={14} className="text-amber-400" />
                <span>تضمین کیفیت</span>
              </div>
              <div className="text-lg font-bold text-white">۳۰ ماه طلایی</div>
              <div className="text-[11px] text-slate-400 mt-0.5">عیب‌یابی پیشرفته</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#product-family"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 hover:bg-emerald-500 active:scale-[0.98] transition-all duration-200"
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

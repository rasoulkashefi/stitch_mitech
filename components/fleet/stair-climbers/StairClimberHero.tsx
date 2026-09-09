'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, PhoneCall } from 'lucide-react';

export default function StairClimberHero() {
  return (
    <section className="relative min-h-[760px] lg:min-h-[820px] flex items-center overflow-hidden bg-slate-950 text-white font-[Vazirmatn,sans-serif]">
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fleet/stair-climber-hero.jpg"
          alt="پله‌پیما و بالابر هوشمند ام آی تک در راه‌پله"
          fill
          priority
          className="object-cover object-[center_right] lg:object-center opacity-75"
          sizes="100vw"
        />
      </div>

      {/* Sharp High-Contrast Editorial Gradients */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/85 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-0" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="max-w-2xl text-right">
          {/* Status Pill */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>STAIR CLIMBER ROBOTICS • بالابر توانبخشی هوشمند</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-white tracking-tight">
            آزادی تردد میان طبقات؛
            <br />
            <span className="text-emerald-400">با پله‌پیماهای هوشمند.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-300 font-normal max-w-xl">
            طراحی و ساخت نسل نوین پله‌پیماهای پرتابل با شنی‌های پلیمری ضدلغزش، سنسورهای تعادل فعال و ترمز اضطراری خودکار؛ تردد امن و بدون دغدغه توانیابان و سالمندان میان طبقات بدون نیاز به تخریب ساختمان یا ریل‌کشی ثابت.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact/request-demo"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
            >
              <span>درخواست دمو و مشاوره خرید</span>
              <ArrowLeft className="size-4" />
            </Link>
            <Link
              href="/contact/sales"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95"
            >
              <PhoneCall className="size-4 text-emerald-400" />
              <span>تماس با مهندسی فروش</span>
            </Link>
            <a
              href="#specs"
              className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors py-2 px-3"
            >
              بررسی مشخصات فنی ↓
            </a>
          </div>

          {/* Key Metrics Row */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            <div>
              <div className="text-xs text-slate-400 font-medium">ظرفیت باربری</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">۱۶۰ <span className="text-xs font-normal text-emerald-400">کیلوگرم</span></div>
            </div>
            <div className="border-r border-white/10 pr-6">
              <div className="text-xs text-slate-400 font-medium">پیمایش با یک شارژ</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">۸۰ <span className="text-xs font-normal text-emerald-400">طبقه</span></div>
            </div>
            <div className="border-r border-white/10 pr-6">
              <div className="text-xs text-slate-400 font-medium">نصب و ریل‌کشی</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">بدون تخریب</div>
            </div>
            <div className="border-r border-white/10 pr-6">
              <div className="text-xs text-slate-400 font-medium">گارانتی طلایی</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">۳۰ <span className="text-xs font-normal text-emerald-400">ماهه</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

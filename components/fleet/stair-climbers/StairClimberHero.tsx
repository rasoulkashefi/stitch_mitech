'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, PhoneCall, Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function StairClimberHero() {
  return (
    <section className="relative min-h-[760px] lg:min-h-[860px] flex items-center overflow-hidden bg-slate-950 text-white font-[Vazirmatn,sans-serif]">
      {/* Background Ambience & Engineering Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] z-0" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Hero Content (col-span-7) */}
          <div className="lg:col-span-7 text-right">
            
            {/* Status Pill */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md text-xs font-semibold text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>تولید ملی دانش‌بنیان • سیستم درایور پله‌پیما</span>
              <span className="text-white/40">|</span>
              <span className="font-mono text-emerald-400">ARTECH-Pro XLift</span>
            </div>

            {/* Headline */}
            <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.3] text-white tracking-tight">
              درایور و سیستم کنترل هوشمند پله‌پیما
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 via-teal-300 to-cyan-400">
                پیشران مطمئن در مسیرهای مستقیم و پیچشی
              </span>
            </h1>

            {/* Clarification Box / Subtitle */}
            <div className="mt-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-emerald-300 font-bold mb-1 flex items-center gap-2">
                <Cpu className="size-4 shrink-0 text-emerald-400" />
                <span>طراحی و تولید تخصصی مغز الکترونیک و درایور قدرت پله‌پیما توسط ام‌آی‌تک (Mitech)</span>
              </p>
              <p className="text-xs sm:text-sm leading-7 text-slate-300 font-normal">
                ما در ام‌آی‌تک درایورهای صنعتی توان‌بالای پله‌پیما (<span className="text-white font-semibold">Stairlift Controllers</span>) را مهندسی و تولید می‌کنیم. کنترلر پیشرفته <strong className="text-white font-bold">ARTECH-Pro XLift</strong> با توانایی پشتیبانی از انواع پله‌پیماهای تک‌موتوره و دوموتوره تا سقف <strong className="text-emerald-400 font-bold">۷۰۰ وات</strong>، شتاب‌گیری و ترمز نرم S-Curve، ایمنی چندلایه و کنترل دینامیک سرعت در قوس‌ها، انتخاب اول سازندگان و مجریان پله‌پیماهای مستقیم (Straight) و پیچشی سفارشی (Custom-curve) در ایران است.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/sales"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
              >
                <span>سفارش و استعلام فنی درایور</span>
                <ArrowLeft className="size-4" />
              </Link>

              <Link
                href="/contact/request-demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95"
              >
                <PhoneCall className="size-4 text-emerald-400" />
                <span>مشاوره مهندسی سازندگان</span>
              </Link>

              <a
                href="#specs"
                className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors py-2 px-3 flex items-center gap-1.5"
              >
                <Layers className="size-3.5" />
                <span>مشخصات فنی و دیاگرام ↓</span>
              </a>
            </div>

            {/* Key Metrics Row */}
            <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs text-slate-400 font-medium">حداکثر توان خروجی</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">
                  ۷۰۰ <span className="text-xs font-normal text-emerald-400">وات Peak</span>
                </div>
              </div>
              <div className="border-r border-white/10 pr-4">
                <div className="text-xs text-slate-400 font-medium">پیکربندی پیشرانه</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400 mt-1">
                  تک و دو موتوره
                </div>
              </div>
              <div className="border-r border-white/10 pr-4">
                <div className="text-xs text-slate-400 font-medium">سازگاری راه‌پله</div>
                <div className="text-lg sm:text-xl font-black text-white mt-1">
                  مستقیم و پیچشی
                </div>
              </div>
              <div className="border-r border-white/10 pr-4">
                <div className="text-xs text-slate-400 font-medium">ضمانت طلایی</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">
                  ۳۰ <span className="text-xs font-normal text-emerald-400">ماهه</span>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: Visual Showcase (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Primary Card: Real ARTECH-Pro XLift Controller Module */}
            <div className="relative group rounded-3xl border border-emerald-500/30 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl overflow-hidden">
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-emerald-500/90 text-slate-950 font-bold px-3 py-1 text-[11px] shadow-md">
                <Zap className="size-3" />
                <span>درایور واقعی ARTECH-Pro XLift</span>
              </div>
              
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-950/60 border border-white/5">
                <Image
                  src="/images/fleet/stairlift/artech-pro-xlift-driver.jpg"
                  alt="درایور پله پیما ARTECH-Pro XLift ساخت ام آی تک"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="mt-3 px-2 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">بدنه هیت‌سینک اکسترود + سیم‌کشی سوکت‌دار</span>
                <span className="font-mono text-emerald-400 font-bold">24V DC • 700W MAX</span>
              </div>
            </div>

            {/* Secondary Card: Real Stairlift Installation with Mitech Logo */}
            <div className="relative group rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-xl backdrop-blur-xl overflow-hidden">
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-slate-950/80 border border-white/20 text-white font-medium px-3 py-1 text-[11px] backdrop-blur-md">
                <ShieldCheck className="size-3 text-emerald-400" />
                <span>پله‌پیمای پیچشی با کریج مجهز به ام‌آی‌تک</span>
              </div>

              <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-950/40 border border-white/5">
                <Image
                  src="/images/fleet/stairlift/curved-stairlift-landing.jpg"
                  alt="نصب واقعی پله پیمای پیچشی سفارشی مجهز به کنترلر ام آی تک"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-3 px-2 flex items-center justify-between text-xs">
                <span className="text-slate-400">نمای ریل منحنی، پنل دیجیتال و درج لوگوی MiTech روی شاسی</span>
                <span className="text-emerald-400 font-semibold">Custom-curve Stairlift</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

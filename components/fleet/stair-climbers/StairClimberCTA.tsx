'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function StairClimberCTA() {
  return (
    <section className="bg-slate-950 text-white px-6 py-20 lg:py-28 border-t border-slate-800 font-[Vazirmatn,sans-serif] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -right-40 -top-40 size-96 rounded-full bg-emerald-600/15 blur-3xl" />
      <div className="absolute -left-40 -bottom-40 size-96 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/90 p-8 sm:p-14 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text (col-span-7) */}
          <div className="lg:col-span-7 text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-400 mb-4">
              <ShieldCheck className="size-4" />
              <span>پشتیبانی و تست حضوری در محل شما</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              درخواست دمو حضوری و <span className="text-emerald-400">مشاوره تخصصی خرید</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-8 text-slate-300">
              آیا راه‌پله ساختمان شما پیچ‌دار، باریک یا دارای پاگردهای خاص است؟ کارشناسان فنی ام‌آی‌تک آماده‌اند ضمن بررسی مشخصات راه‌پله، هماهنگی‌های لازم جهت مشاهده عملکرد دستگاه و مشاوره اختصاصی را انجام دهند.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>امکان تست روی راه‌پله واقعی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>۳۰ ماه گارانتی تعویض و خدمات طلایی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>ارسال و آموزش حضوری اپراتور</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>تامین ۱۰ ساله قطعات یدکی اورجینال</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/contact/request-demo"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 px-6 py-4 text-center text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 active:scale-95"
            >
              <span>ثبت درخواست دمو / مشاوره</span>
              <ArrowLeft className="size-4" />
            </Link>

            <Link
              href="/contact/sales"
              className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-95"
            >
              <PhoneCall className="size-4 text-emerald-400" />
              <span>تماس مستقیم با واحد فروش</span>
            </Link>

            <div className="text-center">
              <span className="text-xs text-slate-400">
                پاسخگویی سریع در ساعات اداری • ۰۲۱-۸۸۷۷۴۴۱۱
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

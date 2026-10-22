'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, PhoneCall, ShieldCheck, CheckCircle2, Wrench, Building2 } from 'lucide-react';

export default function StairClimberCTA() {
  return (
    <section className="bg-slate-950 text-white px-6 py-20 lg:py-28 border-t border-slate-800 font-[Vazirmatn,sans-serif] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -right-40 -top-40 size-96 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -left-40 -bottom-40 size-96 rounded-full bg-cyan-600/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/90 p-8 sm:p-14 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text (col-span-7) */}
          <div className="lg:col-span-7 text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-400 mb-4">
              <ShieldCheck className="size-4" />
              <span>همکاری مستقیم B2B با سازندگان و مجریان پروژه‌ها</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              تأمین تخصصی درایور <span className="text-emerald-400">ARTECH-Pro XLift</span> و خدمات ارتقا
            </h2>

            <p className="mt-4 text-xs sm:text-sm leading-7 text-slate-300 text-justify">
              چه به عنوان سازنده و مونتاژکار پله‌پیما به دنبال درایورهای صنعتی مطمئن با پشتیبانی از سیستم‌های تک و دو موتوره تا ۷۰۰ وات باشید، و چه به عنوان مجری آسانسور قصد نوسازی (Retrofit) و تعویض بردهای معیوب پله‌پیماهای وارداتی را داشته باشید، مهندسان ام‌آی‌تک آماده ارائه مشاوره تخصصی، سفارشی‌سازی فرم‌ویر و تحویل فوری هستند.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>تأمین تیراژ و قطعات استاندارد خودرویی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>۳۰ ماه ضمانت طلایی تعویض و خدمات</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>پشتیبانی ۱۰ ساله از تأمین قطعات یدکی</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>سفارشی‌سازی فرم‌ویر مطابق هندسه ریل شما</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/contact/sales"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 px-6 py-4 text-center text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 active:scale-95"
            >
              <Building2 className="size-4" />
              <span>استعلام قیمت تیراژ و سفارش سازندگان</span>
              <ArrowLeft className="size-4 mr-1" />
            </Link>

            <Link
              href="/contact/request-demo"
              className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-95"
            >
              <Wrench className="size-4 text-emerald-400" />
              <span>مشاوره نوسازی (Retrofit) بردهای پله‌پیما</span>
            </Link>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
                <PhoneCall className="size-3.5 text-emerald-400" />
                <span>واحد مهندسی و فروش: ۰۲۱-۸۸۸۹۳۴۱۲ | ۰۹۲۲ ۵۱۲ ۳۳۶۸</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

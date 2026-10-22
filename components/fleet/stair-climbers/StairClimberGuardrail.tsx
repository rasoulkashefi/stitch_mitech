'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRightLeft, CheckCircle2, ShieldCheck, Compass, Gauge, AlertCircle } from 'lucide-react';

export default function StairClimberGuardrail() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:py-28 border-t border-slate-200/80 font-[Vazirmatn,sans-serif]">
      <div className="mx-auto max-w-7xl">
        
        {/* Transparency Banner: We make the Controller / Driver */}
        <div className="mb-14 rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/70 p-6 sm:p-8 text-right shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-200/80 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold shadow-sm">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  شفافیت مهندسی و مدل همکاری ام‌آی‌تک (Mitech)
                </h3>
                <span className="text-xs font-semibold text-emerald-800">
                  تولیدکننده تخصصی درایور و برد کنترل؛ تأمین‌کننده توانمند برای سازندگان و مجریان پله‌پیما
                </span>
              </div>
            </div>
            <span className="inline-flex self-start sm:self-center items-center rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 text-xs font-bold">
              تأمین مستقیم OEM / ODM
            </span>
          </div>
          <p className="text-xs sm:text-sm leading-7 text-slate-700">
            شرکت ما طراح و سازنده اصلی درایور و سامانه کنترل پله‌پیما (<strong className="text-slate-950 font-bold">ARTECH-Pro XLift</strong>) است و نه سازنده مکانیک شاسی صندلی یا ریل‌های ساختمانی. ما پیشرفته‌ترین پکیج الکترونیک قدرت، برد کنترل، درایور موتور، نمایشگر عیب‌یاب و سیم‌کشی سوکت‌دار را در اختیار تولیدکنندگان پله‌پیما، شرکت‌های آسانسوری، طراحان تجهیزات توانبخشی و پروژه‌های ارتقا قرار می‌دهیم تا پله‌پیماهایی پایدار، استاندارد و با کیفیت جهانی به بازار عرضه کنند.
          </p>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-right">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 border border-slate-300 px-3.5 py-1 text-xs font-bold text-slate-800 mb-3">
            <ArrowRightLeft className="size-3.5 text-emerald-700" />
            <span>راهنمای ساختار و انواع پله‌پیما (Stairlift Types)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight">
            کاربرد درایور ARTECH-Pro XLift در پله‌پیماهای مستقیم و پیچشی
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
            پله‌پیماها بسته به ساختار هندسی راه‌پله به دو رده اصلی «مسیر مستقیم» و «مسیر پیچشی سفارشی» تقسیم می‌شوند. درایور ARTECH-Pro XLift با قابلیت تعریف پارامترهای حرکتی در نرم‌افزار، بهینه‌ترین کارایی را در هر دو دسته ارائه می‌دهد.
          </p>
        </div>

        {/* 2-Column Comparison Grid: Straight vs Curved Stairlifts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Straight Stairlift */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div>
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6">
                <Image
                  src="/images/fleet/stairlift/straight-stairlift-installation.jpg"
                  alt="نصب پله پیمای مسیر مستقیم با درایور ام آی تک"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 right-3 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white">
                  مسیر مستقیم • Straight Stairlift
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    پله‌پیمای مسیر مستقیم (Straight)
                  </h3>
                  <span className="font-mono text-xs text-slate-500">SINGLE-MOTOR LINEAR RAIL SYSTEM</span>
                </div>
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                  شیب ثابت
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-7 text-slate-600 mb-6 text-justify">
                این مدل برای راه‌پله‌های خطی، بدون پاگرد میانی و بدون تغییر زاویه مناسب است. ریل آن معمولاً از پروفیل‌های آلومینیومی مستقیم و دنده شانه‌ای تشکیل شده و به پله‌ها مهار می‌گردد.
              </p>

              <h4 className="text-xs font-extrabold text-blue-950 uppercase tracking-wider mb-3">
                ویژگی‌های عملکردی درایور ARTECH-Pro در مدل مستقیم:
              </h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>راهبری تک‌موتوره بهینه:</strong> درایو مستقیم موتورهای DC با گشتاور بالا و مصرف جریان حداقلی در شیب ثابت (تا توان ۴۵۰ وات).</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>شتاب‌گیری ملایم (Soft Start / Stop):</strong> حرکت روان سرنشین بدون کوچک‌ترین پرش یا کوبش در استارت و استاپ ایستگاهی.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>شارژ خودکار در ایستگاه‌ها:</strong> پایش ولتاژ باتری و شارژ هوشمند هنگام توقف در ایستگاه‌های بالا و پایین راه‌پله.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>نصب و راه‌اندازی سریع:</strong> سیم‌کشی سوکت‌دار پیش‌ساخته جهت اتصال سریع به جوی‌استیک، کلیدهای حد و لبه‌های ایمنی کفی.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>کاربرد: منازل دوبلکس و ورودی‌های بدون پاگرد</span>
              <span className="text-emerald-700">اقتصادی و راه‌اندازی آسان</span>
            </div>
          </div>

          {/* Card 2: Custom-curve Stairlift */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-emerald-500/40 bg-white p-6 sm:p-8 shadow-xl shadow-emerald-500/5">
            <div>
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6">
                <Image
                  src="/images/fleet/stairlift/curved-stairlift-corner.jpg"
                  alt="نصب پله پیمای پیچشی سفارشی با درایور ام آی تک"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 right-3 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  مسیر پیچشی سفارشی • Custom-curve Stairlift
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-blue-950">
                    پله‌پیمای پیچشی و پاگرددار (Custom-curve)
                  </h3>
                  <span className="font-mono text-xs text-emerald-700">DUAL/SINGLE MOTOR DYNAMIC CURVE SYSTEM</span>
                </div>
                <span className="rounded-lg bg-emerald-100 text-emerald-800 px-2.5 py-1 text-xs font-bold">
                  مهندسی پیشرفته
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-7 text-slate-600 mb-6 text-justify">
                برای ساختمان‌های چند طبقه، راه‌پله‌های دارای چرخش ۹۰ یا ۱۸۰ درجه، پاگردهای میانی یا راه‌پله‌های مدور و مارپیچ که نیاز به ریل اختصاصی نوردشده منحنی دارند.
              </p>

              <h4 className="text-xs font-extrabold text-blue-950 uppercase tracking-wider mb-3">
                ویژگی‌های عملکردی درایور ARTECH-Pro در مدل پیچشی:
              </h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>پشتیبانی از سیستم‌های تک و دو موتوره تا ۷۰۰W:</strong> تأمین توان و گشتاور بالا جهت صعود مقتدرانه از پیچ‌های تند همراه با سرنشین سنگین‌وزن.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>مدیریت هوشمند سرعت در پیچ‌ها (Curve Speed Sync):</strong> کاهش خودکار و برنامه‌ریزی‌شده سرعت در انحناهای تند برای ایجاد نهایت آرامش و ایمنی سرنشین.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>همگام‌سازی با مکانیزم تراز صندلی (Dynamic Leveling):</strong> پشتیبانی از کنترل موتور یا جک تراز خودکار جهت افقی نگه‌داشتن کفی صندلی در طول تغییر زاویه ریل.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>کدهای خطای تفکیکی روی پنل دیجیتال:</strong> نمایش لحظه‌ای وضعیت سنسورهای مسیر، شیب و خطاها روی سون‌سگمنت تعبیه‌شده روی بدنه.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>کاربرد: مجتمع‌های چندطبقه، راه‌پله‌های گرد و پاگرددار</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">سازگار با پیچیده‌ترین پروژه‌ها</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

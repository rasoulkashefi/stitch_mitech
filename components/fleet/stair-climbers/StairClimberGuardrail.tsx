'use client';

import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

const stairClimberAdvantages = [
  'عدم نیاز به هرگونه ریل‌کشی ثابت، سوراخ‌کاری دیوارها یا تخریب معماری راه‌پله',
  'حفظ ۱۰۰٪ پهنای مفید راه‌پله برای تردد آزادانه سایر اعضای خانواده و همسایگان',
  'قابلیت تاشدن کامل و حمل آسان در صندوق عقب انواع خودرو برای سفر و مهمانی',
  'امکان استفاده در چندین راه‌پله مختلف، محل کار و ساختمان‌های چندطبقه بدون آسانسور',
  'کارکرد مستقل بر پایه باتری هوشمند لیتیومی حتی در زمان قطعی کامل برق شهری',
  'معاف از فرآیندهای طولانی اخذ مجوز پایان‌کار شهرداری، استاندارد آسانسور و بازرسی سالانه',
];

const legacyStairliftDrawbacks = [
  'نیاز به نقشه‌برداری اختصاصی، ساخت ریل‌های سنگین فلزی و تحمیل هزینه‌های سنگین بنایی',
  'اشغال دائمی ۴۰ تا ۵۰ درصد از عرض مفید راه‌پله و ایجاد مانع برای حمل وسایل و تردد دیگران',
  'وابستگی به یک راه‌پله خاص و عدم امکان جابه‌جایی یا استفاده در مکان‌های دیگر',
  'توقف کامل سیستم در صورت قطعی برق در مدل‌های قدیمی فاقد یوپی‌اس صنعتی',
  'هزینه‌های گزاف استهلاک مکانیکی چرخ‌دنده‌ها، سرویس ماهانه و روغن‌کاری ریل‌ها',
  'تغییر ظاهر دکوراسیون و جلوه بصری راه‌پله‌ها با ریل‌ها و اتصالات صنعتی ناموزون',
];

export default function StairClimberGuardrail() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:py-28 border-t border-slate-200/70 font-[Vazirmatn,sans-serif]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-right">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/70 border border-emerald-300/60 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
            <ShieldCheck className="size-3.5 text-emerald-600" />
            <span>راهنمای فنی انتخاب • تمایز پله‌پیما از بالابرهای ریل‌دار</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight">
            چرا پله‌پیمای پرتابل هوشمند، جایگزین بالابرهای ریل‌کشی ثابت (Stairlift) شد؟
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
            پله‌پیماهای هوشمند ام‌آی‌تک (Stair Climber) با اتکا به شنی‌های پلیمری خودنگه‌دارنده و سنسورهای تعادل طراحی شده‌اند تا بدون نیاز به اتصال هیچ‌گونه ریل فلزی به دیوارهای ساختمان، استقلال حرکتی کامل را برای فرد و همراه فراهم آورند.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Modern Mitech Stair Climber (Recommended / Green Highlight) */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-emerald-500/40 bg-white p-8 sm:p-10 shadow-xl shadow-emerald-500/5">
            <div className="absolute -top-3.5 right-8 rounded-full bg-emerald-600 px-4 py-1 text-xs font-bold text-white shadow-sm">
              انتخاب بهینه و مهندسی‌شده
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Check className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-blue-950">پله‌پیمای پرتابل هوشمند ام‌آی‌تک</h3>
                  <span className="font-mono text-xs text-emerald-700">MITECH PORTABLE STAIR CLIMBER</span>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base leading-8 text-slate-600">
                دستگاهی مستقل، پرتابل و ایمن که کاربر روی انواع پله‌های سنگی، چوبی یا گرد با کنترل پایدار حرکت می‌کند؛ بدون نیاز به تغییر سازه ساختمان:
              </p>

              <ul className="mt-6 space-y-3.5">
                {stairClimberAdvantages.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-7 text-slate-700">
                    <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="size-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800 font-bold">
              <span>بدون هزینه نصب و تخریب بنایی</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">تحویل فوری و آماده به‌کار</span>
            </div>
          </div>

          {/* Card 2: Legacy Rail Stairlift (Deprecating/Gray) */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/70 p-8 sm:p-10 shadow-sm">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                  <ShieldAlert className="size-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800">بالابرهای ریل‌کشی ثابت سنتی</h3>
                  <span className="font-mono text-xs text-slate-400">LEGACY FIXED STAIRLIFT</span>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base leading-8 text-slate-500">
                سیستم‌های قدیمی وابسته به ریل فلزی پیچ‌شده به کف و دیوار که با محدودیت‌های متعدد اجرایی و مالکیتی همراه هستند:
              </p>

              <ul className="mt-6 space-y-3.5">
                {legacyStairliftDrawbacks.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-7 text-slate-500">
                    <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <X className="size-3 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>هزینه‌های بالا و زمان‌بر بودن نصب ریل</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-500">عدم انعطاف‌پذیری مکانی</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

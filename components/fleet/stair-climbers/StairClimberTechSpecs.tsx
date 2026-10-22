'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, ShieldCheck, Cpu, BatteryCharging, Gauge, CheckCircle2 } from 'lucide-react';

const corePillars = [
  {
    id: 'power',
    icon: Zap,
    title: 'پیشرانه قدرتمند تک و دوموتوره تا ۷۰۰W',
    englishTitle: 'Dual/Single Motor Drive up to 700W Peak',
    badge: 'توان ۷۰۰ وات واقعی',
    summary: 'پشتیبانی بی‌دردسر از انواع موتورهای DC توان‌بالای پله‌پیما با راندمان بالای ۹۲٪',
    description:
      'درایور ARTECH-Pro XLift با بهره‌گیری از ماسفت‌های توان‌بالای گرید صنعتی خودرویی و مدار قدرت تقویت‌شده، جریان خروجی پیوسته و لحظه‌ای مورد نیاز پله‌پیماهای تک‌موتوره و دوموتوره را تا سقف ۷۰۰ وات تأمین می‌کند. هیت‌سینک اکسترود آلومینیومی با شیارهای عمیق، حرارت را به صورت پسیو و کاملاً بی‌صدا (بدون نیاز به فن مکانیکی) دفع می‌کند.',
    specs: [
      { label: 'حداکثر توان خروجی', val: '۷۰۰ وات (Peak) / ۴۵۰ وات مداوم' },
      { label: 'پشتیبانی موتور', val: 'تک موتوره و دو موتوره همگام' },
      { label: 'ولتاژ کاری استاندارد', val: '۲۴ ولت DC (محدوده ۱۸ الی ۳۲ ولت)' },
      { label: 'سیستم خنک‌کاری', val: 'پسیو با هیت‌سینک آلومینیوم آلیاژی' },
    ],
  },
  {
    id: 'motion',
    icon: Gauge,
    title: 'پروفایل حرکتی نرم S-Curve در شیب و پیچ',
    englishTitle: 'Advanced S-Curve Acceleration & Curve Sync',
    badge: 'حرکت بدون لرزش و شوک',
    summary: 'شتاب‌گیری و کاهش سرعت تدریجی با مدیریت هوشمند گشتاور در قوس‌های راه‌پله',
    description:
      'یکی از اصلی‌ترین دغدغه‌های سالمندان و توانیابان، پرش یا شوک ناگهانی در شروع و پایان حرکت پله‌پیماست. الگوریتم میکروکنترلری ARTECH-Pro با شیب ملایم S-Curve، سرعت چرخش موتور را به آرامی افزایش و در نزدیکی ایستگاه به نرمی کاهش می‌دهد. در پله‌پیماهای پیچشی، درایور با دریافت فرمان سنسور زاویه، سرعت حرکت در پیچ را به صورت خودکار کاهش داده و مجدداً در مسیر مستقیم به سرعت اسمی بازمی‌گرداند.',
    specs: [
      { label: 'پروفایل کنترل سرعت', val: 'منحنی S-Curve تمام دیجیتال' },
      { label: 'تنظیم سرعت در پیچ‌ها', val: 'کاهش خودکار بین ۳۰٪ تا ۵۰٪ در انحنا' },
      { label: 'کنترل شوک حرکتی', val: 'حذف کامل اینرسی ناگهانی استارت' },
      { label: 'پشتیبانی از جک تراز صندلی', val: 'هماهنگ با شیب متغیر ریل' },
    ],
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    title: 'مدار ترمز الکترومغناطیسی و زنجیره ایمنی',
    englishTitle: 'Fail-Safe Brake Control & Multi-Sensor Guard',
    badge: '۱۰۰٪ ایمنی Fail-Safe',
    summary: 'قطع آنی جریان و قفل الکترومغناطیسی موتور با رصد دائمی لبه‌های حساس و کلیدهای حد',
    description:
      'درایور دارای خروجی مستقیم و مجزا برای کویل ترمز الکترومغناطیسی ۲۴ ولت فنری (Normally Closed) است. با فشردن کلید جوی‌استیک، ابتدا ترمز به نرمی باز شده و موتور شتاب می‌گیرد؛ به محض رها شدن کلید یا فشرده شدن هر یک از سنسورهای لبه ایمنی کفی (Safety Edges)، سوئیچ نهایی حد یا کلید استاپ اضطراری، تغذیه موتور در کسری از ثانیه قطع و ترمز به طور مکانیکی قفل می‌شود.',
    specs: [
      { label: 'نوع ترمز تحت کنترل', val: 'الکترومغناطیسی مداربسته (Normally-Closed)' },
      { label: 'زمان اعمال ترمز اضطراری', val: 'کمتر از ۵۰ میلی‌ثانیه' },
      { label: 'ورودی‌های ایمنی سخت‌افزاری', val: 'Final Limits, Safety Edge, E-Stop' },
      { label: 'حفاظت اضافه جریان و اتصال کوتاه', val: 'مدار محافظتی سخت‌افزاری دوبل' },
    ],
  },
  {
    id: 'diagnostics',
    icon: Cpu,
    title: 'پنل عیب‌یاب دیجیتال سون‌سگمنت و اینترفیس',
    englishTitle: '7-Segment Digital Status & Diagnostics Panel',
    badge: 'عیب‌یابی سریع و دقیق',
    summary: 'نمایش لحظه‌ای وضعیت کارکرد و کدهای تفکیکی خطا روی بدنه کریج پله‌پیما',
    description:
      'درایور ARTECH-Pro به یک پنل نمایشگر اختصاصی مجهز است که مستقیماً روی بدنه صندلی (Carriage) نصب می‌شود. این پنل علاوه بر کلید قفل ایمنی (Key Switch)، کلید روشن/خاموش و سوکت شارژ/پروگرمینگ، دارای نمایشگر سون‌سگمنت دیجیتال و ال‌ای‌دی‌های وضعیت است که کدهای خطای واضح را برای تکنسین و کاربر نمایش می‌دهد تا بدون نیاز به دستگاه دیاگ خارجی عیب‌یابی انجام شود.',
    specs: [
      { label: 'نمایشگر عیب‌یاب', val: 'سون‌سگمنت دیجیتال پرنور + LEDهای وضعیت' },
      { label: 'کدهای تفکیکی خطا', val: 'تشخیص اضافه بار، مانع حرکتی، قطعی سنسور' },
      { label: 'ورودی‌های کنترلی', val: 'جوی‌استیک دسته + ریموت رادیویی بی‌سیم' },
      { label: 'کلید سوئیچ امنیتی', val: 'پیشگیری از دستکاری اطفال و افراد غیرمجاز' },
    ],
  },
  {
    id: 'battery',
    icon: BatteryCharging,
    title: 'مدیریت باتری و عملکرد در قطعی برق شهری',
    englishTitle: 'Smart 24V Battery Docking & Low-Power Standby',
    badge: 'کارکرد پیوسته در قطعی برق',
    summary: 'پایش مستمر ولتاژ پک باتری و شارژ خودکار در استاپ‌های انتهایی ریل',
    description:
      'پله‌پیماهای مجهز به درایور ARTECH-Pro با دو عدد باتری ۱۲ ولت سری (مجموع ۲۴ ولت) کار می‌کنند. مدار مدیریت شارژ هوشمند، پایش ولتاژ و قطع شارژ در زمان پر شدن باتری را عهده‌دار است. در صورت قطعی سراسری برق ساختمان، پله‌پیما بدون هیچ مشکلی می‌تواند ده‌ها بار مسیر را پیمایش کند تا فرد در طبقات معطل نماند.',
    specs: [
      { label: 'پک باتری تغذیه', val: '۲۴ ولت (۲ عدد باتری ۱۲ ولت سیلد اسید یا لیتیوم)' },
      { label: 'تعداد سفر در قطعی برق', val: 'بیش از ۲۰ تا ۳۰ رفت و برگشت کامل' },
      { label: 'حالت Standby هوشمند', val: 'جریان کشش کمتر از ۵ میلی‌آمپر' },
      { label: 'شارژ خودکار ایستگاهی', val: 'پایش خودکار کنتاکت‌های بالا و پایین ریل' },
    ],
  },
];

export default function StairClimberTechSpecs() {
  const [activeTab, setActiveTab] = useState<string>('power');
  const activeItem = corePillars.find((p) => p.id === activeTab) || corePillars[0];

  return (
    <section id="specs" className="bg-white px-6 py-20 lg:py-28 border-t border-slate-200/80 font-[Vazirmatn,sans-serif]">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-bold text-slate-800 mb-3">
            <Cpu className="size-3.5 text-emerald-600" />
            <span>معماری الکترونیک قدرت و الگوریتم‌های حرکتی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            ویژگی‌های فنی و مزیت‌های مهندسی درایور ARTECH-Pro XLift
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
            تلفیق پردازشگر صنعتی ۳۲ بیتی، درایو قدرت ماسفت و حفاظت‌های سخت‌افزاری چندلایه جهت ارتقای استاندارد ایمنی پله‌پیماها
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`size-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Box */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Technical Explanation (col-span-7) */}
            <div className="lg:col-span-7 text-right">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
                <span>{activeItem.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
                {activeItem.title}
              </h3>
              <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                {activeItem.englishTitle}
              </p>
              <p className="mt-3 text-sm sm:text-base font-bold text-emerald-700 leading-7">
                {activeItem.summary}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-7 text-justify">
                {activeItem.description}
              </p>
            </div>

            {/* Left: Spec Table & Photo if Diagnostics Tab (col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* If diagnostics tab is active, show the real panel photo */}
              {activeTab === 'diagnostics' ? (
                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs">
                  <Image
                    src="/images/fleet/stairlift/stairlift-carriage-panel-detail.jpg"
                    alt="پنل دیجیتال سون سگمنت عیب یاب پله پیما متصل به درایور ام آی تک"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-2 right-2 rounded-lg bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white">
                    پنل واقعی سون‌سگمنت روی کریج
                  </div>
                </div>
              ) : null}

              {/* Specs Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h4 className="text-xs font-extrabold text-blue-950 border-b border-slate-100 pb-3 flex items-center justify-between">
                  <span>شاخص‌های مهندسی شاخص</span>
                  <span className="text-[11px] font-mono text-slate-400">BENCHMARK DATA</span>
                </h4>
                <div className="mt-2 divide-y divide-slate-100">
                  {activeItem.specs.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2.5 text-xs sm:text-sm"
                    >
                      <span className="text-slate-500 font-medium">{s.label}</span>
                      <span className="text-slate-900 font-bold">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

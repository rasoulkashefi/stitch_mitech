'use client';

import React, { useState } from 'react';
import { Compass, ShieldCheck, Zap, BatteryCharging, Cpu } from 'lucide-react';

const corePillars = [
  {
    id: 'balance',
    icon: Compass,
    title: 'سنسورهای تعادل هوشمند',
    englishTitle: 'Smart Balance & Dynamic Leveling',
    badge: 'ژیروسکوپ ۶ محوره',
    summary: 'پایش لحظه‌ای زاویه شیب و تراز خودکار نشیمنگاه کاربر',
    description:
      'سامانه کنترل هوشمند مجهز به سنسورهای ژیروسکوپ و شتاب‌سنج ۶ محوره (IMU) با فرکانس کاری ۱۰۰ هرتز، زاویه شیب راه‌پله را در کسری از ثانیه محاسبه کرده و با ارسال فرمان به جک‌های تنظیم زاویه، کفی صندلی را همواره در حالت کاملاً افقی و پایدار حفظ می‌کند تا حس سرگیجه یا افتادگی به صفر برسد.',
    specs: [
      { label: 'دقت حسگر زاویه‌سنج', val: '۰.۱ درجه' },
      { label: 'دامنه تنظیم خودکار زاویه', val: '۰ تا ۴۵ درجه' },
      { label: 'سرعت پاسخ‌دهی الگوریتم', val: 'کمتر از ۱۰ میلی‌ثانیه' },
      { label: 'کالیبراسیون هوشمند', val: 'خودکار در هر استارت' },
    ],
  },
  {
    id: 'brake',
    icon: ShieldCheck,
    title: 'سیستم ترمز اضطراری خودکار',
    englishTitle: 'Fail-Safe Electromagnetic Braking',
    badge: '۱۰۰٪ ایمنی Fail-Safe',
    summary: 'قفل آنی تسمه‌ها در صورت رها شدن اهرم حتی در شیب‌های تند',
    description:
      'امنیت کاربر بالاترین اولویت مهندسی ماست. ترمز الکترومغناطیسی مداربسته (Normally-Closed) به محض رها شدن دکمه حرکت توسط اپراتور یا در شرایط قطعی ناگهانی تغذیه، بدون کوچک‌ترین تاخیر یا لغزش مکانیکی فعال شده و دستگاه را روی پله قفل می‌کند.',
    specs: [
      { label: 'نوع مکانیزم ترمز', val: 'الکترومغناطیسی دیسکی دوگانه' },
      { label: 'زمان عکس‌العمل قفل', val: 'کمتر از ۰.۰۵ ثانیه' },
      { label: 'تحمل شیب بدون لغزش', val: 'تا ۴۵ درجه شیب کامل' },
      { label: 'شاسی توقف اضطراری', val: 'دکمه قارچی E-Stop اختصاصی' },
    ],
  },
  {
    id: 'motor',
    icon: Zap,
    title: 'موتورهای براشلس پرقدرت و کم‌صدا',
    englishTitle: 'High-Torque Quiet Brushless DC',
    badge: 'راندمان ۹۲٪+',
    summary: 'گشتاور فوق‌العاده برای صعود نرم با نویز کمتر از ۴۵ دسی‌بل',
    description:
      'دو عدد موتور الکتریکی براشلس (BLDC) صنعتی با توان خروجی بالا و گیربکس خورشیدی بدون نویز، نیروی محرکه شنی‌ها را تامین می‌کنند. حذف جاروبک‌ها علاوه بر از بین بردن استهلاک و جرقه‌های مکانیکی، صدایی بسیار آرام و حرکتی پیوسته و یکنواخت به ارمغان می‌آورد.',
    specs: [
      { label: 'توان خروجی موتورها', val: '۲ × ۳۰۰ وات (مجموع ۶۰۰W)' },
      { label: 'گشتاور خروجی ماکزیمم', val: '۱۲۰ نیوتن‌متر' },
      { label: 'سطح نویز صوتی', val: 'کمتر از ۴۵ دسی‌بل (Ultra-Quiet)' },
      { label: 'طول عمر مفید موتور', val: 'بیش از ۵۰,۰۰۰ ساعت کار' },
    ],
  },
  {
    id: 'battery',
    icon: BatteryCharging,
    title: 'مصرف بهینه باتری لیتیومی و BMS',
    englishTitle: 'Smart Lithium BMS & Fast Charge',
    badge: 'پیمایش ۸۰ طبقه',
    summary: 'بسته‌های باتری صنعتی با پایش هوشمند دما، ولتاژ و طول عمر',
    description:
      'بهره‌گیری از سلول‌های لیتیوم-یون با چگالی انرژی بالا و مدار محافظت هوشمند BMS (Battery Management System)، امکان بیش از ۸۰ طبقه پیمایش پیوسته با یک‌بار شارژ را فراهم می‌سازد. سیستم شارژ سریع دستگاه نیز در کمتر از ۲ ساعت شارژ کامل را تامین می‌کند.',
    specs: [
      { label: 'نوع باتری', val: 'لیتیوم-یون ۲۴ ولت صنعتی' },
      { label: 'ظرفیت نامی', val: '۱۳.۲ آمپرساعت (Ah)' },
      { label: 'مداومت کاری', val: 'تا ۱۵۰۰ پله (معادل ۸۰ طبقه)' },
      { label: 'زمان شارژ کامل', val: '۲ الی ۲.۵ ساعت (Fast Charge)' },
    ],
  },
];

export default function StairClimberTechSpecs() {
  const [activeTab, setActiveTab] = useState<string>('balance');
  const activeItem = corePillars.find((p) => p.id === activeTab) || corePillars[0];

  return (
    <section id="specs" className="bg-white px-6 py-20 lg:py-28 border-t border-slate-200/80 font-[Vazirmatn,sans-serif]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-bold text-slate-700 mb-3">
            <Cpu className="size-3.5 text-emerald-600" />
            <span>معماری مهندسی و نوآوری توانبخشی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            ویژگی‌های فنی و استانداردهای پله‌پیمای هوشمند
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
            تلفیق مکانیک دقیق و سنسورهای دیجیتال برای ایجاد بالاترین ضریب اطمینان در شیب‌های تند راه‌پله
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
                className={`flex items-center gap-2.5 rounded-2xl px-5 py-3.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15'
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
        <div className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Right: Technical Explanation (col-span-7) */}
            <div className="lg:col-span-7 text-right">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-4">
                <span>{activeItem.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
                {activeItem.title}
              </h3>
              <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                {activeItem.englishTitle}
              </p>
              <p className="mt-4 text-base sm:text-lg font-bold text-emerald-700 leading-8">
                {activeItem.summary}
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-8">
                {activeItem.description}
              </p>
            </div>

            {/* Left: Spec Table (col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h4 className="text-sm font-extrabold text-blue-950 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>شاخص‌های عملکردی</span>
                <span className="text-[11px] font-mono text-slate-400">BENCHMARK</span>
              </h4>
              {activeItem.specs.map((s, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2.5 border-b border-slate-100/80 last:border-0 text-xs sm:text-sm"
                >
                  <span className="text-slate-500 font-medium">{s.label}</span>
                  <span className="text-slate-900 font-bold">{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

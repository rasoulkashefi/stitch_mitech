'use client';

import React, { useState } from 'react';
import { UserCheck, Link2, Navigation } from 'lucide-react';

const modes = [
  {
    id: 'follow-me',
    icon: UserCheck,
    tag: 'Follow-Me Mode',
    title: 'حالت تعقیب کاربر',
    tagline: 'قفل بصری روی کاربر، حرکت نرم و ایمن.',
    description:
      'ربات از طریق دوربین و الگوریتم‌های بینایی ماشین، کاربر را در جمعیت شناسایی و قفل بصری برقرار می‌کند. با حفظ فاصله استاندارد ایمن و تطبیق لحظه‌ای شتاب بر اساس گام‌های فرد، محموله بدون هیچ تأخیری پشت سر کاربر جابه‌جا می‌شود.',
    highlights: [
      'حفظ فاصله ایمن ۰.۸ تا ۱.۵ متری',
      'تطبیق خودکار سرعت با گام‌های کاربر',
      'ردیابی مداوم در ازدحام و پیچ‌های محیط',
      'توقف فوری در صورت از دست دادن ردیابی',
    ],
    useCase: 'انبارها • فرودگاه‌ها • مراکز تجاری',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-700',
    accentBorder: 'border-emerald-200',
    iconBg: 'bg-emerald-600',
  },
  {
    id: 'convoy',
    icon: Link2,
    tag: 'Convoy Mode',
    title: 'حالت کاروان چند رباتی',
    tagline: 'چندین ربات، یک اپراتور، بار بیشتر.',
    description:
      'امکان اتصال زنجیره‌ای چند ربات پشت سر هم برای حمل محموله‌های فوق‌سنگین یا حجیم با هدایت تنها یک اپراتور. مناسب برای فضاهای سرپوشیده و نیمه‌باز جایی که نیاز به جابه‌جایی کالاهای کلان در یک پاس وجود دارد.',
    highlights: [
      'اتصال تا ۵+ ربات در یک کاروان هماهنگ',
      'هدایت کل ناوگان با یک اپراتور',
      'مناسب Indoor و Semi-Outdoor',
      'فاصله‌گذاری امن خودکار بین رباتها',
    ],
    useCase: 'انبارهای صنعتی • نمایشگاه‌ها • مراکز لجستیک',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-700',
    accentBorder: 'border-blue-200',
    iconBg: 'bg-blue-950',
  },
  {
    id: 'autonomous',
    icon: Navigation,
    tag: 'Point-to-Point Mode',
    title: 'ناوبری خودکار ایستگاه‌به‌ایستگاه',
    tagline: 'بدون همراهی انسان، با دقت کامل.',
    description:
      'ربات را به یک نقطه از پیش تعریف‌شده روی نقشه دیجیتال محیط ارسال کنید. بدون همراهی انسان، ربات مسیر بهینه را محاسبه، از موانع عبور کرده و محموله را در مقصد تحویل می‌دهد — سپس به ایستگاه مبدا یا داک شارژ بازمی‌گردد.',
    highlights: [
      'ارسال ربات با یک فرمان از اپ مدیریت',
      'مسیریابی دینامیک با نقشه زنده محیط',
      'توزیع داخلی بار بدون نیاز به کارگر',
      'بازگشت خودکار پس از تحویل',
    ],
    useCase: 'کارخانه‌ها • انبارهای بزرگ • بیمارستان‌ها',
    accentBg: 'bg-slate-50',
    accentText: 'text-slate-700',
    accentBorder: 'border-slate-200',
    iconBg: 'bg-slate-900',
  },
];

export default function OperationModes() {
  const [activeMode, setActiveMode] = useState('follow-me');
  const active = modes.find((m) => m.id === activeMode)!;

  return (
    <section className="bg-slate-50/60 px-6 py-28 lg:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            حالت‌های عملیاتی • Operation Modes
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
            سه حالت هوشمند،
            <br />
            <span className="text-slate-400">برای هر سناریوی کاری.</span>
          </h2>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-150 ${
                activeMode === mode.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {mode.title}
            </button>
          ))}
        </div>

        {/* Active Mode Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left: Icon + Tag + Description */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-white text-right">
            <div className="flex items-start justify-between mb-8">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${active.accentBg} ${active.accentText}`}>
                {active.tag}
              </span>
              <div className={`grid size-12 place-items-center rounded-xl ${active.iconBg}`}>
                <active.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              {active.title}
            </h3>
            <p className="text-emerald-400 text-sm font-semibold mb-5">{active.tagline}</p>
            <p className="text-slate-300 text-sm sm:text-base leading-7 flex-1">
              {active.description}
            </p>

            <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500">
              <span>کاربرد: {active.useCase}</span>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 text-right shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
              ویژگی‌های کلیدی این حالت
            </h4>

            <div className="space-y-6 flex-1">
              {active.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span className="text-sm font-medium text-slate-700 leading-6">{hl}</span>
                </div>
              ))}
            </div>

            {/* Mode Navigation */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between gap-3">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`flex-1 rounded-xl border py-3 text-xs font-bold transition-all duration-150 ${
                    activeMode === mode.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <mode.icon className="w-4 h-4 mx-auto mb-1" />
                  {mode.id === 'follow-me' ? 'تعقیب' : mode.id === 'convoy' ? 'کاروان' : 'خودکار'}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

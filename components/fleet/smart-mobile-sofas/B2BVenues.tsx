'use client';

import React from 'react';
import {
  TrendingUp,
  Building2,
  Users2,
  Coins,
  ShieldCheck,
  Check,
  ArrowLeft,
  Layers,
} from 'lucide-react';

const b2bMetrics = [
  {
    value: '+۴۵٪',
    label: 'افزایش زمان ماندگاری',
    sub: 'حضور طولانی‌تر خانواده‌ها در مجتمع تجاری بدون خستگی سالمندان',
  },
  {
    value: '+۲۸٪',
    label: 'رشد سبد خرید فروشگاه‌ها',
    sub: 'مراجعه به طبقات بالایی، فودکورت‌ها و کافه‌های مجموعه',
  },
  {
    value: '۱۰۰٪',
    label: 'پوشش استانداردهای رفاهی',
    sub: 'تبدیل مال به محیطی جامع، دسترس‌پذیر و خانواده‌محور',
  },
  {
    value: '۲۴/۷',
    label: 'پشتیبانی و تلمتری متمرکز',
    sub: 'مانیتورینگ سلامت باتری، موقعیت‌یابی و اعزام هوشمند مبل‌ها',
  },
];

const venueUseCases = [
  {
    icon: Building2,
    title: 'مجتمع‌های تجاری بزرگ و مال‌ها',
    desc: 'ارائه خدمت VIP در لابی‌های ورودی، ایستگاه‌های شارژ اختصاصی و امکان جابه‌جایی پیوسته میان تمام طبقات و فروشگاه‌ها.',
  },
  {
    icon: Layers,
    title: 'موزه‌ها، گالری‌ها و نمایشگاه‌های بین‌المللی',
    desc: 'بازدید از سالن‌های وسیع و غرفه‌ها بدون خستگی پا؛ همراه با قابلیت سنکرون‌سازی صوتی برای تورهای راهنما.',
  },
  {
    icon: Users2,
    title: 'فرودگاه‌ها، ترمینال‌ها و هتل‌های پنج‌ستاره',
    desc: 'ترانسفر لوکس مسافران و سالمندان از گیت تا لانژهای VIP با حفظ استایل مدرن و سرعت گام استاندارد.',
  },
  {
    icon: Coins,
    title: 'هایپرمارکت‌ها و فروشگاه‌های بزرگ زنجیره‌ای',
    desc: 'امکان خرید آسوده با همراهی مبل مجهز به محفظه خرید و دسترسی آسان به قفسه‌ها بدون نیاز به پیاده‌روی طولانی.',
  },
];

export default function B2BVenues() {
  return (
    <section className="bg-slate-950 px-6 py-28 lg:py-32 text-white border-t border-slate-900" dir="rtl">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 text-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/80 border border-emerald-800/50 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-4">
              <TrendingUp size={14} />
              <span>ارزش‌آفرینی برای مالکان و مدیران مراکز تجاری • B2B Venue Solutions</span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-white lg:text-5xl leading-tight tracking-tight">
              ارتقای کلاس خدمات و افزایش زمان
              <br />
              <span className="text-emerald-400">ماندگاری مشتریان (Dwell Time).</span>
            </h2>
          </div>

          <div className="lg:col-span-4 text-right lg:text-left">
            <p className="text-sm leading-7 text-slate-400">
              وقتی سالمندان و اعضای کم‌توان خانواده خسته نشوند، کل خانواده زمان بیشتری را در مجتمع شما سپری می‌کنند و مستقیماً فروش فروشگاه‌ها، رستوران‌ها و مراکز تفریحی افزایش می‌یابد.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {b2bMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 text-right shadow-sm hover:border-slate-700 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block mb-2">
                {metric.value}
              </span>
              <h3 className="text-base font-bold text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-6">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 2-Column Sharp Venue Strategy Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Benefits (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10 text-right flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  راهکار جامع خدمات مبل هوشمند (AMaaS)
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/30">
                  بدون ریسک نگهداری سخت‌افزار
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                تغییر چهره خدمات رفاهی مال با مدل خودران به عنوان خدمت
              </h3>
              <p className="text-sm leading-7 text-slate-300 mb-8">
                با استقرار ناوگان مبلمان سیار میکائیل، مرکز خرید شما به استانداردهای تراز اول جهانی ارتقا می‌یابد. تیم میکائیل مسئولیت کامل راه‌اندازی، نگهداری دوره‌ای، به‌روزرسانی سیستم‌های ناوبری و پشتیبانی را بر عهده می‌گیرد.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="grid size-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">مدل‌های درآمدی منعطف (Revenue Sharing / Free Amenity)</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-6 mt-0.5">
                      امکان ارائه به صورت سرویس VIP اشتراکی برای مشتریان وفادار یا کرایه دقیقه‌ای از طریق وب‌اپلیکیشن بدون نیاز به اپراتور انسانی.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid size-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">داشبورد نرم‌افزاری مانیتورینگ ناوگان</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-6 mt-0.5">
                      مشاهده زنده موقعیت مبل‌ها، وضعیت شارژ باتری‌ها، ثبت ساعات پرتردد مال و مسیریابی هوشمند برای بازگشت مبل‌های خالی به مبادی ورودی.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid size-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">سازگاری با جریان عابران و گیت‌های ورودی</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-6 mt-0.5">
                      طراحی مهندسی با عرض بهینه جهت عبور آسان از آسانسورها، گیت‌های دزدگیر فروشگاهی و راهروهای متراکم بدون ایجاد ترافیک.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">طرح ویژه مجتمع‌های تجاری تراز اول</span>
              <a
                href="#sofa-cta"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>درخواست مشاوره استقرار پایلوت</span>
                <ArrowLeft size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Venue Applications Grid (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {venueUseCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-right hover:border-slate-700 transition-colors flex items-start gap-4"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-white/10 text-emerald-400 shrink-0 mt-0.5">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                      {useCase.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-6">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

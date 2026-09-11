'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  BatteryCharging, 
  Layers, 
  Cloud, 
  Award, 
  Flame, 
  Zap, 
  SlidersHorizontal,
  Cable
} from 'lucide-react';

const features = [
  {
    id: 'power-safety',
    title: 'مدیریت توان و ایمنی',
    subtitle: 'حفاظت چندلایه سخت‌افزاری و نرم‌افزاری',
    description: 'پشتیبانی از موتورهای قدرتمند (تا سقف ۷۰۰ وات) با استراتژی حفاظت چندلایه سخت‌افزاری و نرم‌افزاری (محافظت باتری تا ۴۰ ولت، ولتاژ کاری ۱۸ تا ۳۱ ولت).',
    icon: Zap,
    highlightBadge: 'تا سقف ۷۰۰ وات • ۱۸ تا ۳۱ ولت',
  },
  {
    id: 'smart-nav',
    title: 'ناوبری هوشمند',
    subtitle: 'کنترل سرعت تطبیقی و فیلتر لرزش',
    description: 'کنترل سرعت تطبیقی برای عبور چابک از شیب‌ها، سطوح ناصاف، چارچوب درها و فرش‌های ضخیم همراه با سیستم پیشرفته کنترل لرزش دست کاربر.',
    icon: Compass,
    highlightBadge: 'فیلتر هپتیک لرزش دست توان‌یاب',
  },
  {
    id: 'battery-support',
    title: 'پشتیبانی از انواع باتری‌ها',
    subtitle: 'سازگاری هوشمند لیتیوم و لید-اسید',
    description: 'سازگاری کامل با باتری‌های لیتیومی و لید-اسید با قابلیت نمایش دقیق سطح شارژ در هنگام اتصال به شارژر.',
    icon: BatteryCharging,
    highlightBadge: 'مانیتورینگ ولتاژ در حال شارژ',
  },
  {
    id: 'industrial-standards',
    title: 'استانداردهای صنعتی و آب‌بندی',
    subtitle: 'اتصالات بین‌المللی و ضد نفوذ',
    description: 'بهره‌مندی از اتصالات استاندارد (Anderson، Dynamic، VR2)، کابل‌های بسیار منعطف و مقاومت در برابر رطوبت با استاندارد IPX4.',
    icon: Cable,
    highlightBadge: 'Anderson • Dynamic • VR2 • IPX4',
  },
  {
    id: 'cloud-upgrades',
    title: 'ارتقاءپذیری ابری و امنیت',
    subtitle: 'سامانه پایش از راه دور و ضدسرقت',
    description: 'پشتیبانی از ماژول ضدسرقت، پایش از راه دور (Remote Care) و ماژول جانبی پرستار.',
    icon: Cloud,
    highlightBadge: 'ماژول پرستار + Remote Care',
  },
  {
    id: 'quality-warranty',
    title: 'تضمین کیفیت و پشتیبانی',
    subtitle: 'سیستم عیب‌یابی و ۳۰ ماه ضمانت تعویض',
    description: 'سیستم عیب‌یابی پیشرفته و اعلام تخصصی وضعیت به همراه ۳۰ ماه گارانتی معتبر.',
    icon: Award,
    highlightBadge: '۳۰ ماه گارانتی رسمی تعویض',
  },
];

export default function CorePlatformFeatures() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32 border-y border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-1 text-xs font-bold text-emerald-700 mb-4">
            <Layers size={14} />
            <span>استاندارد مشترک سخت‌افزار توانبخشی</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            ویژگی‌های مشترک سیستم‌های
            <br />
            <span className="text-emerald-600">کنترل توانبخشی میکائیل</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600 font-normal">
            تمامی کنترلرهای ویلچر برقی میکائیل از معماری دوبخشی (جویستیک و ماژول درایور مجزا) بهره می‌برند تا ضمن کاهش تلفات حرارتی، راندمان انتقال توان به موتورها به حداکثر برسد.
          </p>
        </div>

        {/* Dual Architecture Spotlight Banner */}
        <div className="mb-16 rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="absolute -left-10 -bottom-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-800/40">
                <SlidersHorizontal size={14} />
                <span>معماری دوبخشی ماژولار (Two-Box Architecture)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                تفکیک واحد فرمان (جویستیک ارگونومیک) از واحد قدرت (درایور موتور)
              </h3>
              <p className="text-sm sm:text-base leading-7 text-slate-300">
                با قرارگیری ماژول درایور سنگین نزدیک باتری و موتورها و جدا کردن آن از اهرم جویستیک، تلفات حرارتی در زیر دست کاربر به صفر رسیده و راندمان مصرف باتری و ایمنی سیستم به بیشترین حد ممکن افزایش می‌یابد.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3 sm:border-r sm:border-slate-800 sm:pr-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <Flame size={20} className="text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-200">کاهش تلفات حرارتی</div>
                  <div className="text-slate-400">خنک‌کاری غیرفعال با هیت‌سینک اکسترود</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-slate-200">حداکثر راندمان توان</div>
                  <div className="text-slate-400">کاهش افت ولتاژ در کابل‌های جریان بالا</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="grid size-12 place-items-center rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {item.highlightBadge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-600 mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-sm leading-6 text-slate-600 text-justify">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>سیستم مهندسی میکائیل</span>
                  <span className="group-hover:text-emerald-600 transition-colors">استاندارد توانبخشی</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

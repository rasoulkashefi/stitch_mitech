'use client';

import React, { useState } from 'react';

const categories = [
  { id: 'all', label: 'همه مشخصات' },
  { id: 'control', label: 'رابط کنترلی و ناوبری' },
  { id: 'safety', label: 'سیستم‌های ایمنی' },
  { id: 'capacity', label: 'ابعاد و ظرفیت' },
  { id: 'power', label: 'باتری و پیشران' },
  { id: 'comfort', label: 'امکانات رفاهی و جانبی' },
];

const specsList = [
  {
    category: 'control',
    title: 'رابط کاربری و پنل کنترلی',
    value: 'نمایشگر لمسی هوشمند (Smart Display) + جوی‌استیک فوق‌روان',
    detail: 'پنل رنگی تعبیه‌شده روی دسته مبل جهت مسیریابی در نقشه مال، تنظیم سرعت و جوی‌استیک با بازخورد هپتیک دقیق.',
  },
  {
    category: 'safety',
    title: 'سیستم ایمنی و ترمز فعال',
    value: 'توقف خودکار (Auto-Brake) + سنسورهای ۳۶۰ درجه اولتراسونیک و رادار',
    detail: 'تشخیص آنی موانع، عابران پیاده و کودکان، بدون نقطه کور، همراه با زمان واکنش ترمز کمتر از ۰.۰۸ ثانیه.',
  },
  {
    category: 'capacity',
    title: 'ظرفیت وزن و محفظه بار',
    value: 'تا ۱۵۰ کیلوگرم وزن سرنشین + ۲۰ کیلوگرم فضای بار خرید',
    detail: 'شاسی آلیاژ آلومینیوم گرید هوانوردی با پایداری استاتیک و دینامیک بالا و محفظه امن برای کیسه‌های خرید.',
  },
  {
    category: 'power',
    title: 'سیستم باتری و مداومت کاری',
    value: 'باتری لیتیوم-یون با مداومت کاری بیش از ۱۰ ساعت',
    detail: 'پیمایش پیوسته در تمام ساعات کاری مال با یک بار شارژ، مجهز به درگاه شارژ سریع و سیستم مدیریت هوشمند باتری (BMS).',
  },
  {
    category: 'capacity',
    title: 'ابعاد مهندسی و عبور از گیت‌ها',
    value: 'عرض ۷۸ سانتی‌متر | طول ۱۱۰ سانتی‌متر | ارتفاع ۹۵ سانتی‌متر',
    detail: 'طراحی کامپکت و ارگونومیک برای ورود و چرخش ۳۶۰ درجه در تمام آسانسورها و عبور از باریک‌ترین گیت‌های فروشگاهی.',
  },
  {
    category: 'comfort',
    title: 'امکانات جانبی و رفاهی',
    value: 'پورت USB شارژ سریع، جالیوانی ارگونومیک و نورپردازی مخفی',
    detail: 'امکان شارژ انواع تلفن‌های هوشمند سرنشین، نگه‌دارنده نوشیدنی ضدلغزش و خطوط LED نور محیطی زیر بدنه مبل.',
  },
  {
    category: 'power',
    title: 'سیستم پیشران و تعلیق',
    value: 'موتورهای براشلس (Dual Brushless) بی‌صدا + کمک‌فنر تطبیقی',
    detail: 'حرکت کاملاً نرم و بی‌صدا روی کفپوش‌های سنگی، سرامیک و پارکت بدون هیچ‌گونه لرزش در ستون فقرات سرنشین.',
  },
  {
    category: 'control',
    title: 'محدودکننده سرعت و ناوبری',
    value: 'سرعت ایمن ۰ تا ۴.۵ کیلومتر بر ساعت (گام استاندارد پیاده‌روی)',
    detail: 'تنظیم خودکار شتاب و سرعت با گام‌های خانواده، با امکان تعیین مناطق با محدودیت سرعت (Geofencing) در مال.',
  },
];

export default function TechSpecs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSpecs =
    activeCategory === 'all'
      ? specsList
      : specsList.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-specs" className="bg-slate-50/60 px-6 py-28 lg:py-32 border-t border-slate-100" dir="rtl">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between text-right">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              جدول مشخصات فنی و مهندسی • Technical Specifications
            </p>
            <h2 className="text-3xl font-extrabold text-blue-950 lg:text-5xl leading-tight tracking-tight">
              مشخصات سخت‌افزار و الکترونیک،
              <br />
              <span className="text-slate-400">مهندسی دقیق و تأییدشده.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-150 ${
                  activeCategory === item.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredSpecs.map((spec, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 text-right shadow-xs hover:border-slate-300 transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-emerald-600 block mb-3 leading-snug">
                  {spec.value}
                </span>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {spec.title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {spec.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400 flex items-center justify-between">
                <span>استاندارد تأییدشده Mitech</span>
                <span className="text-slate-600 font-semibold">ISO & CE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

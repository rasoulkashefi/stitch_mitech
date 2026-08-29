'use client';

import React, { useState } from 'react';

const categories = [
  { id: 'all', label: 'همه مشخصات' },
  { id: 'capacity', label: 'ظرفیت و بدنه' },
  { id: 'nav', label: 'بینایی ماشین و ناوبری' },
  { id: 'power', label: 'باتری و پیشران' },
  { id: 'safety', label: 'ایمنی و استانداردها' },
];

const specsList = [
  {
    category: 'capacity',
    title: 'ظرفیت سرنشین و بار',
    value: '۱ الی ۲ کودک (تا ۴۵ کیلوگرم) + ۲۰ کیلوگرم سبد خرید',
    detail: 'شاسی ماژولار قابل تبدیل به تک‌کودک یا دو قلو، همراه با سبد ارگونومیک خرید با حجم ۶۰ لیتر.',
  },
  {
    category: 'nav',
    title: 'سیستم ناوبری و تعقیب',
    value: 'بینایی ماشین (Computer Vision) + الگوریتم Pacing & Leading',
    detail: 'شناسایی و همگام‌سازی حرکتی در جلوی دید والدین با دوربین‌های عمق‌سنج و پردازش محلی (Edge AI).',
  },
  {
    category: 'safety',
    title: 'میدان ایمنی و سنسورها',
    value: 'اسکنرهای اولتراسونیک و لیدار ۳۶۰° بدون نقطه کور',
    detail: 'سنسورهای فاصله‌سنج محیطی، شیب‌سنج ۶ محوره IMU و ترمز خودکار با زمان پاسخ کمتر از ۰.۱ ثانیه.',
  },
  {
    category: 'power',
    title: 'مداومت باتری و شارژ',
    value: 'تا ۸ ساعت پیمایش پیوسته + داک شارژ سریع',
    detail: 'پک باتری ایمن LiFePO4 با قابلیت تعویض سریع (Quick-Swap) در ایستگاه‌های داکینگ متمرکز مال.',
  },
  {
    category: 'power',
    title: 'سرعت عملیاتی هوشمند',
    value: 'حداکثر ۴ تا ۵ کیلومتر بر ساعت (گام استاندارد پیاده‌روی)',
    detail: 'تطبیق بلادرنگ سرعت با قدم‌های والدین و محدودیت ایمن برای فضاهای پرتردد سرپوشیده.',
  },
  {
    category: 'capacity',
    title: 'محیط‌های هدف و کاربری',
    value: 'مجتمع‌های تجاری، هایپرمارکت‌ها، پارک‌های سرپوشیده، موزه‌ها و فرودگاه‌ها',
    detail: 'سازگار با کفپوش‌های سنگی، سرامیکی، پارکت و رمپ‌های شیب‌دار مجتمع‌های خرید تا شیب ۸ درجه.',
  },
  {
    category: 'nav',
    title: 'امکانات رفاهی و دیجیتال',
    value: 'نمایشگر لمسی، اسپیکر استریو، شارژر وایرلس گوشی',
    detail: 'سیستم پخش قصه‌های صوتی و موسیقی کودکانه، پد شارژ بی‌سیم سریع برای والدین و جالیوانی ارگونومیک.',
  },
  {
    category: 'safety',
    title: 'استانداردها و تأییدیه‌ها',
    value: 'مطابق با استاندارد EN 1888 و ISO 13482',
    detail: 'دارای استانداردهای بین‌المللی ایمنی کالسکه‌های کودک، تست ضربه، سازگاری الکترومغناطیسی و متریال غیرسمی.',
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
            <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
              مشخصات سخت‌افزار و رباتیک،
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
                    ? 'bg-slate-900 text-white'
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

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
                <span>مشخصات تأییدشده مهندسی</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

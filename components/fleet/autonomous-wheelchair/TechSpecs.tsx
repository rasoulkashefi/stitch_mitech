'use client';

import React, { useState } from 'react';

const categories = [
  { id: 'all', label: 'همه مشخصات' },
  { id: 'nav', label: 'ناوبری و هوش مصنوعی' },
  { id: 'power', label: 'باتری و سرعت' },
  { id: 'safety', label: 'ایمنی و شاسی' },
];

const specsList = [
  {
    category: 'safety',
    title: 'حداکثر وزن سرنشین',
    value: '۱۲۰ کیلوگرم',
    detail: 'شاسی تقویت‌شده آلومینیوم گرید هوانوردی با صندلی ارگونومیک طبی.',
  },
  {
    category: 'nav',
    title: 'سیستم ناوبری و سنسورها',
    value: 'بینایی ماشین + LiDAR + اولتراسونیک ۳۶۰°',
    detail: 'تلفیق داده سنسورها (Sensor Fusion) برای اسکن ۳۶۰ درجه موانع در سطح زمین و ارتفاع.',
  },
  {
    category: 'nav',
    title: 'استقلال شبکه (Edge AI)',
    value: 'عملکرد ۱۰۰٪ آفلاین و محلی',
    detail: 'مسیریابی بدون وابستگی به GPS یا اینترنت؛ پردازش تمام الگوریتم‌ها روی سیستم داخلی.',
  },
  {
    category: 'power',
    title: 'شارژ و مداومت کاری',
    value: 'تا ۸ ساعت مداوم + داک سریع',
    detail: 'پک باتری LiFePO4 با طول عمر بالا و بازگشت خودکار به داک شارژ سریع.',
  },
  {
    category: 'power',
    title: 'سرعت عملیاتی ایمن',
    value: 'حداکثر ۶ کیلومتر بر ساعت',
    detail: 'تنظیم خودکار سرعت متناسب با تراکم جمعیت سالن‌های فرودگاهی.',
  },
  {
    category: 'safety',
    title: 'ترمز و سیستم ضد تصادف',
    value: 'الکترومغناطیسی با پاسخ < ۰.۱ ثانیه',
    detail: 'توقف خودکار چندمرحله‌ای برای جلوگیری از هرگونه برخورد با افراد یا موانع.',
  },
  {
    category: 'safety',
    title: 'شعاع چرخش دستگاه',
    value: 'چرخش ۳۶۰ درجه در جا',
    detail: 'امکان مانور آسان در آسانسورها و راهروهای باریک (Zero Turn Radius).',
  },
  {
    category: 'safety',
    title: 'استانداردهای بین‌المللی',
    value: 'مطابق استاندارد ISO 13482',
    detail: 'دارای استانداردهای جهانی ایمنی تجهیزات توانبخشی و رباتیک خدماتی.',
  },
];

export default function TechSpecs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSpecs =
    activeCategory === 'all'
      ? specsList
      : specsList.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-specs" className="bg-slate-50/60 px-6 py-28 lg:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between text-right">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              مشخصات فنی و مهندسی • Tech Specs
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
              مشخصات سخت‌افزار،
              <br />
              <span className="text-slate-400">در بالاترین سطح اطمینان.</span>
            </h2>
          </div>

          {/* Clean Filter Pills */}
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
                <span className="text-xs font-bold text-emerald-600 block mb-3">
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

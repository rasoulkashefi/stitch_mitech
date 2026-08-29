'use client';

import React, { useState } from 'react';

const categories = [
  { id: 'all', label: 'همه مشخصات' },
  { id: 'ai', label: 'هوش مصنوعی و شناسایی' },
  { id: 'safety', label: 'ناوبری و ایمنی' },
  { id: 'power', label: 'باتری و عملکرد' },
  { id: 'payload', label: 'بار و ابعاد' },
];

const specsList = [
  {
    category: 'payload',
    title: 'ظرفیت باربری (Payload)',
    value: '۱۰۰ تا ۲۰۰ کیلوگرم',
    detail: 'پلتفرم ماژولار قابل ارتقا با شاسی آلومینیوم فوق‌استحکام برای بارهای صنعتی و تجاری.',
  },
  {
    category: 'ai',
    title: 'فناوری شناسایی کاربر',
    value: 'AI Vision (بدون تگ فیزیکی)',
    detail: 'الگوریتم بینایی ماشین + سنسورهای عمق‌سنج؛ شناسایی بدون نیاز به تگ، دانگل، RFID یا ریموت.',
  },
  {
    category: 'ai',
    title: 'کنترل با اشاره دست',
    value: 'Gesture Recognition',
    detail: 'فرمان‌های ایست، تعقیب و توقف از طریق حرکات دست بدون نیاز به هیچ دستگاه جانبی.',
  },
  {
    category: 'safety',
    title: 'ایمنی ناوبری',
    value: 'LiDAR ۳۶۰° + Ultrasonic',
    detail: 'اسکنر لیزری ۲بعدی/۳بعدی ضد برخورد با میدان پوشش ۳۶۰ درجه؛ مناسب موانع متحرک و ثابت.',
  },
  {
    category: 'safety',
    title: 'محیط عملیاتی',
    value: 'Indoor / Semi-Outdoor',
    detail: 'فضاهای داخلی، سالن‌های نیمه‌باز و محیط‌های پرتردد. نیازی به GPS یا زیرساخت ویژه ندارد.',
  },
  {
    category: 'safety',
    title: 'توقف اضطراری',
    value: 'پاسخ‌دهی < ۰.۱ ثانیه',
    detail: 'سیستم ترمز الکترومغناطیسی چندمرحله‌ای با واکنش فوری برای حفاظت از افراد و محموله.',
  },
  {
    category: 'power',
    title: 'باتری و مداومت کاری',
    value: '۶ تا ۱۰ ساعت مداوم',
    detail: 'پک باتری LiFePO4 با طول عمر بالا + امکان Hot-swap (تعویض سریع) یا داک شارژ اتوماتیک.',
  },
  {
    category: 'power',
    title: 'سرعت مجاز عملیاتی',
    value: 'حداکثر ۶–۸ کیلومتر/ساعت',
    detail: 'همگام با حداکثر سرعت گام برداشتن انسان؛ تنظیم خودکار سرعت بر اساس تراکم محیط.',
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
              پلتفرم مهندسی‌شده
              <br />
              <span className="text-slate-400">برای محیط‌های واقعی.</span>
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
                <span className="text-xs font-bold text-emerald-600 block mb-3">
                  {spec.value}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{spec.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{spec.detail}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                <span>Verified Engineering Spec</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note Strip */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-white px-6 py-4 text-right text-xs text-slate-500 leading-6">
          <strong className="text-slate-700">نکته:</strong> مشخصات بالا بر اساس پیکربندی استاندارد پلتفرم AMR ام. آی. تک. است. سفارشی‌سازی ظرفیت، اندازه شاسی، نوع باتری و نرم‌افزار بر اساس نیاز سازمان امکان‌پذیر است. برای دریافت پروپوزال دقیق، با تیم مهندسی تماس بگیرید.
        </div>

      </div>
    </section>
  );
}

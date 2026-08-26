"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs: [string, string][] = [
  [
    'آیا محصولات mitech قابل شخصی‌سازی هستند؟',
    'بله. متناسب با نیاز کاربر، محیط و نوع استفاده، راهکار و تنظیمات مناسب پیشنهاد می‌شود.',
  ],
  [
    'خدمات پس از فروش چگونه ارائه می‌شود؟',
    'تیم پشتیبانی mitech از مشاوره پیش از خرید تا نصب، آموزش و سرویس دوره‌ای در کنار شماست.',
  ],
  [
    'محصولات برای چه محیط‌هایی مناسب هستند؟',
    'محصولات ما برای خانه، مراکز درمانی، فرودگاه‌ها، مجتمع‌های تجاری و فضاهای سازمانی طراحی شده‌اند.',
  ],
  [
    'چطور برای خرید یا همکاری اقدام کنم؟',
    'فرم تماس را تکمیل کنید تا کارشناسان ما برای یک گفت‌وگوی کوتاه با شما تماس بگیرند.',
  ],
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold text-emerald-600">پرسش‌های متداول</p>
          <h2 className="text-4xl font-bold text-slate-900">پاسخ پرسش‌های شما</h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-2xl bg-white px-6 shadow-sm">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="py-5">
              <button
                className="flex w-full items-center justify-between text-right font-bold text-slate-900"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {question}
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform ${
                    openIndex === index
                      ? 'rotate-180 text-emerald-600'
                      : 'text-slate-400'
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

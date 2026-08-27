"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question:
      'آیا ویلچرهای هوشمند و رباتهای ام. آی. تک. برای حرکت نیاز به اینترنت یا زیرساخت خاصی دارند؟',
    answer:
      'خیر. سیستم‌های ناوبری پیشرفته ما کاملاً مستقل از GPS و اینترنت عمل می‌کنند. این رباتها با استفاده از بینایی ماشین و رادار، محیط اطراف را در لحظه اسکن کرده و در فضاهای بسته (Indoor) حرکتی صددرصد ایمن دارند.',
  },
  {
    question:
      'مدل خدمات خودران سازمانی (AMaaS) برای مجتمع‌های تجاری و فرودگاه‌ها چگونه کار می‌کند؟',
    answer:
      'در این مدل، سازمان شما نیازی به سرمایه‌گذاری سنگین برای خرید سخت‌افزار ندارد. ما ناوگان هوشمند را مستقر می‌کنیم و هزینه‌ها بر اساس میزان استفاده (Pay-per-use) یا اشتراک ماهانه محاسبه می‌شود که ریسک نگهداری را کاهش می‌دهد.',
  },
  {
    question: 'شرایط گارانتی محصولات فیزیکی و کنترلرها به چه صورت است؟',
    answer:
      'تمامی محصولات تولیدی ام. آی. تک. از جمله ویلچرها، کالسکه‌های هوشمند و کنترلرها دارای گارانتی معتبر شرکتی و تضمین تامین قطعات هستند. تیم پشتیبانی ما به صورت مستقیم پاسخگوی شماست.',
  },
  {
    question:
      'آیا امکان سفارشی‌سازی رباتهای باربر یا تجهیزات توانبخشی وجود دارد؟',
    answer:
      'بله. ما به عنوان طراح و سازنده پلتفرم‌های حرکتی، این امکان را داریم که ظرفیت باربری، ابعاد، و حتی رابط کاربری رباتها را دقیقاً متناسب با نیازهای اختصاصی صنعت یا بیمارستان شما شخصی‌سازی کنیم.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      dir="rtl"
      className="bg-slate-50 px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif]"
    >
      <div className="mx-auto max-w-4xl">
        {/* ── Section Header ── */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-600 tracking-wide">
            پرسش‌های متداول
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-blue-950 lg:text-4xl">
            پاسخ به دغدغه‌های شما
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
        </div>

        {/* ── Accordion Container ── */}
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqs.length - 1;

            return (
              <div
                key={index}
                className={!isLast ? 'border-b border-slate-100' : ''}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-right transition-colors hover:text-blue-700"
                >
                  <span
                    className={`text-lg font-semibold leading-7 transition-colors ${
                      isOpen ? 'text-blue-700' : 'text-slate-900'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Chevron Icon */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'bg-blue-50 text-blue-600 rotate-180'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={2.5} />
                  </span>
                </button>

                {/* Answer Panel — CSS height transition via grid trick */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-7 pl-16 text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

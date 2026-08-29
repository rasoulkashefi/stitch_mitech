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
      'آیا ویلچرهای هوشمند و ربات‌های میکائیل برای حرکت نیاز به اینترنت یا زیرساخت خاصی دارند؟',
    answer:
      'خیر. سیستم‌های ناوبری پیشرفته ما کاملاً مستقل از GPS و اینترنت عمل می‌کنند. این ربات‌ها با بهره‌گیری از سنسور فیوژن (بینایی ماشین و رادار)، محیط اطراف را در لحظه اسکن کرده و در فضاهای بسته (Indoor) حرکتی کاملاً ایمن و مستقل دارند.',
  },
  {
    question:
      'مدل خدمات خودران سازمانی (AMaaS) برای مجتمع‌های تجاری و فرودگاه‌ها چگونه کار می‌کند؟',
    answer:
      'در این مدل، مجموعه شما نیازی به سرمایه‌گذاری سنگین برای خرید سخت‌افزار ندارد. ما ناوگان هوشمند را مستقر و نگهداری می‌کنیم و هزینه‌ها بر اساس میزان پیمایش یا اشتراک ماهانه محاسبه می‌شود که ریسک عملیاتی و استهلاک را به صفر می‌رساند.',
  },
  {
    question: 'شرایط گارانتی و تامین قطعات به چه صورت است؟',
    answer:
      'تمامی محصولات تولیدی میکائیل از جمله ویلچرها، کالسکه‌های هوشمند و کنترلرها دارای گارانتی معتبر شرکتی و تضمین بلندمدت تامین قطعات یدکی هستند. تیم پشتیبانی فنی ما به صورت مستقیم پاسخگوی شماست.',
  },
  {
    question:
      'آیا امکان سفارشی‌سازی ربات‌های باربر یا تجهیزات توانبخشی برای مراکز وجود دارد؟',
    answer:
      'بله. به عنوان طراح و سازنده پلتفرم‌های حرکتی و الگوریتم‌های ناوبری، این توانایی را داریم که ظرفیت باربری، ابعاد شاسی و رابط کاربری را متناسب با نیازهای اختصاصی مرکز یا بیمارستان شما مهندسی و شخصی‌سازی کنیم.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      dir="rtl"
      className="bg-slate-50/70 px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif] border-t border-slate-100"
    >
      <div className="mx-auto max-w-4xl">
        {/* ── Section Header ── */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
            پرسش‌های متداول
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 lg:text-4xl tracking-tight">
            پاسخ به سوالات پرتکرار
          </h2>
        </div>

        {/* ── Accordion Container ── */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xs">
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
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-right transition-colors hover:text-emerald-600"
                >
                  <span
                    className={`text-base sm:text-lg font-bold leading-7 transition-colors ${
                      isOpen ? 'text-slate-900' : 'text-slate-800'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Chevron Icon */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'bg-emerald-50 text-emerald-600 rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </span>
                </button>

                {/* Answer Panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-7 pl-16 text-sm sm:text-base leading-relaxed text-slate-600">
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

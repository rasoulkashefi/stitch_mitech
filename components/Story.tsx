import React from 'react';
import { ArrowLeft } from 'lucide-react';

const stats = [
  { value: '۱۳۸۹', label: 'سال تأسیس و آغاز تحقیقات' },
  { value: 'دانش‌بنیان', label: 'سطح فناوری و نوآوری' },
  { value: '۱۲+', label: 'حوزه صنعت و کاربرد' },
  { value: 'AMaaS', label: 'پیشگام خدمات خودران' },
];

export default function Story() {
  return (
    <section id="story" dir="rtl" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif]">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Right Side — Text Content */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            داستان شکل‌گیری میکائیل
          </p>

          <h2 className="text-3xl font-extrabold leading-snug text-slate-900 lg:text-4xl tracking-tight">
            نوآوری مهندسی، زمانی معنا دارد
            <br />
            که <span className="text-emerald-600">محدودیت‌ها</span> را بشکند.
          </h2>

          <p className="text-base sm:text-lg leading-9 text-slate-600">
            داستان میکائیل از یک ایده ساده اما بنیادین در سال ۱۳۸۹ آغاز شد: چگونه می‌توان با ترکیب دانش رباتیک خودران، هوش مصنوعی و مهندسی کنترل، استقلال و آسایش حرکت را به جامعه بازگرداند؟ امروز مفتخریم که پیشرفته‌ترین زیرساخت‌های حمل‌ونقل هوشمند و تجهیزات توانبخشی خودران را در منطقه توسعه می‌دهیم.
          </p>

          <div>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-emerald-600"
            >
              بیشتر درباره مسیر نوآوری ما بخوانید
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Left Side — Stats Grid */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col gap-2 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-xs transition-all hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-slate-500">{stat.label}</span>
              <div className="mt-2 h-0.5 w-6 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-12" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

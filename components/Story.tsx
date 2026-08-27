import React from 'react';
import { ArrowLeft } from 'lucide-react';

const stats = [
  { value: '۱۳۸۹+', label: 'سال تأسیس' },
  { value: 'دانش‌بنیان', label: 'گرید نوآوری' },
  { value: '۱۲+', label: 'صنعت تحت پوشش' },
  { value: 'AMaaS', label: 'پیشگام در خدمات خودران' },
];

export default function Story() {
  return (
    <section id="story" dir="rtl" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif]">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Right Side — Text Content */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <span className="inline-block w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-600 tracking-wide">
            تولد ام. آی. تک.
          </span>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-snug text-blue-950 lg:text-4xl">
            نوآوری، زمانی معنادار است که
            <span className="relative mx-2 inline-block">
              <span className="relative z-10">محدودیت‌ها</span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 left-0 h-[10px] -z-10 rounded bg-emerald-100"
              />
            </span>
            را بشکند.
          </h2>

          {/* Divider */}
          <div className="h-px w-16 bg-gradient-to-l from-emerald-400 to-transparent" />

          {/* Paragraph */}
          <p className="text-lg leading-9 text-slate-600">
            همه چیز از یک ایده ساده در سال ۱۳۸۹ آغاز شد: چگونه می‌توان با ترکیب دانش رباتیک و
            مهندسی کنترل، استقلال و آزادی حرکت را به افراد بازگرداند؟ امروز، به عنوان یک شرکت
            دانش‌بنیان، مفتخریم که پیشرفته‌ترین زیرساخت‌های حمل‌ونقل هوشمند را در منطقه توسعه
            می‌دهیم.
          </p>

          {/* CTA Link */}
          <a
            href="#about"
            className="group mt-2 inline-flex items-center gap-2 self-start text-base font-bold text-blue-900 transition-colors hover:text-emerald-600"
          >
            بیشتر درباره داستان ما بخوانید
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
          </a>
        </div>

        {/* Left Side — Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-2xl font-bold text-blue-800 ltr" dir="ltr">
                {stat.value}
              </span>
              <span className="text-sm text-slate-500">{stat.label}</span>
              <div className="mt-2 h-0.5 w-8 rounded bg-emerald-400 transition-all group-hover:w-14" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

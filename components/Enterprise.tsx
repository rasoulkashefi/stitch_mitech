import React from 'react';
import { TrendingDown, PieChart, Maximize } from 'lucide-react';

const features = [
  {
    icon: Maximize,
    title: 'مقیاس‌پذیری سریع ناوگان',
    text: 'هماهنگی بلادرنگ ظرفیت ربات‌ها با پیک تردد مراجعان در فصول یا ساعات شلوغ.',
  },
  {
    icon: PieChart,
    title: 'داشبورد مانیتورینگ داده‌محور',
    text: 'ارائه گزارش‌های شفاف و دقیق از الگوهای پیمایش، مصرف انرژی و نقاط پرتردد.',
  },
  {
    icon: TrendingDown,
    title: 'کاهش هزینه‌های عملیاتی (AMaaS)',
    text: 'مدیریت متمرکز ناوگان بدون نیاز به سرمایه‌گذاری سنگین اولیه خرید تجهیزات.',
  },
];

export default function Enterprise() {
  return (
    <section id="enterprise" className="bg-slate-950 px-5 py-24 lg:px-8 text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">

        {/* ── Section Header ── */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">

          {/* Right column: eyebrow + H2 */}
          <div className="text-right">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
              خدمات حمل‌ونقل خودران سازمانی (AMaaS)
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-white lg:text-5xl tracking-tight">
              فضاهای بزرگ‌تر،
              <br />
              تجربه‌ای <span className="text-emerald-400">هوشمندتر.</span>
            </h2>
          </div>

          {/* Left column: description */}
          <div className="text-right">
            <p className="text-base sm:text-lg leading-8 text-slate-200">
              از فرودگاه‌ها و بیمارستان‌ها تا مراکز تجاری بزرگ؛ ناوگان خودران میکائیل بدون نیاز به سرمایه‌گذاری سنگین برای خرید تجهیزات، تجربه‌ای ایمن، روان و متمایز را به عنوان سرویس حمل‌ونقل اختصاصی <span className="font-bold text-emerald-400">(Mobility as a Service)</span> برای مراجعان شما رقم می‌زند.
            </p>
          </div>
        </div>

        {/* ── Hero Image ── */}
        <div className="relative mb-14 h-80 w-full overflow-hidden rounded-3xl border border-slate-800 shadow-2xl md:h-[440px]">
          <img
            src="/images/sections/enterprise.jpg"
            alt="ناوگان خودران سازمانی ام. آی. تک."
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        </div>

        {/* ── Feature Stats ── */}
        <div className="grid grid-cols-1 gap-8 border-t border-slate-800/80 pt-10 md:grid-cols-3" dir="rtl">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start gap-3.5 text-right">
              <div className="grid size-12 place-items-center rounded-2xl bg-white/5 border border-white/10 text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="w-full text-right text-lg font-bold text-white">{title}</h3>
              <p className="w-full text-right text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

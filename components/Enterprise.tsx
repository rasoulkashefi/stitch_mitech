import React from 'react';
import { TrendingDown, PieChart, Maximize } from 'lucide-react';

const features = [
  {
    icon: Maximize,
    title: 'مقیاس‌پذیری سریع',
    text: 'هماهنگی کامل ظرفیت ناوگان با رشد و پیک کاری مجموعه شما.',
  },
  {
    icon: PieChart,
    title: 'داده‌محور و شفاف',
    text: 'ارائه گزارش‌های دقیق از الگوهای تردد و تصمیم‌گیری مبتنی بر داده.',
  },
  {
    icon: TrendingDown,
    title: 'کاهش هزینه‌های عملیاتی',
    text: 'مدیریت هوشمند و متمرکز ناوگان با حذف هزینه‌های پنهان نگهداری.',
  },
];

export default function Enterprise() {
  return (
    <section id="enterprise" className="bg-blue-950 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ── Section Header ── */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">

          {/* Right column: eyebrow + H2 (first in DOM = right in RTL) */}
          <div className="text-right">
            <p className="mb-3 text-sm font-bold text-emerald-400">
              خدمات حمل‌ونقل خودران سازمانی
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
              فضاهای بزرگ‌تر،
              <br />
              تجربه‌ای <span className="text-emerald-400">هوشمندتر.</span>
            </h2>
          </div>

          {/* Left column: description (second in DOM = left in RTL) */}
          <div className="text-right lg:text-right">
            <p className="text-lg leading-8 text-slate-300">
              از فرودگاه‌ها و بیمارستان‌ها تا مراکز خرید؛ ناوگان خودران ام. آی. تک. بدون نیاز به سرمایه‌گذاری سنگین برای خرید تجهیزات، تجربه‌ای ایمن، روان و متمایز را به عنوان یک سرویس <span className="font-bold text-emerald-400">(MaaS)</span> برای مراجعان شما می‌سازد.
            </p>
          </div>
        </div>

        {/* ── Hero Image ── */}
        <div className="relative mb-12 h-80 w-full overflow-hidden rounded-3xl shadow-2xl md:h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=85"
            alt="ناوگان خودران سازمانی ام. آی. تک."
            className="size-full object-cover"
          />
          {/* Gradient overlay to blend with dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
        </div>

        {/* ── Feature Stats ── */}
        <div className="grid grid-cols-1 gap-8 border-t border-slate-700/50 pt-10 md:grid-cols-3" dir="rtl">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start gap-3 text-right">
              <div className="grid size-12 place-items-center rounded-xl bg-white/5 text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="w-full text-right text-xl font-bold text-white">{title}</h3>
              <p className="w-full text-right text-sm leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

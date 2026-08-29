import React from 'react';
import { Warehouse, Plane, ShoppingBag, Camera, TrendingUp, Clock, Star, Package } from 'lucide-react';

const useCases = [
  {
    icon: Warehouse,
    category: 'لجستیک و انبارداری',
    tag: 'Logistics & Warehousing',
    headline: 'کاهش وابستگی به لیفتراک',
    description:
      'حذف خستگی اپراتور و افزایش ۲ برابری سرعت جابه‌جایی بسته در خطوط انتقال داخلی انبار. ربات AMR مسیرهای تکراری را بدون خطا و ۲۴ ساعته طی می‌کند.',
    stat: '×۲',
    statLabel: 'سرعت جابه‌جایی',
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    borderColor: 'border-slate-200',
  },
  {
    icon: Plane,
    category: 'فرودگاه‌ها و ایستگاه‌های قطار',
    tag: 'Airports & Train Stations',
    headline: 'حمل خودکار چمدان مسافران',
    description:
      'همراهی مسافران سالمند، جانباز یا حامل بار سنگین در فواصل طولانی میان گیت‌ها، سالن‌های پذیرش و پارکینگ‌ها بدون نیاز به خدمه مستقر.',
    stat: '۱۵۰+',
    statLabel: 'متر بدون خستگی',
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    borderColor: 'border-slate-200',
  },
  {
    icon: ShoppingBag,
    category: 'مجتمع‌های تجاری و مال',
    tag: 'Retail & Shopping Malls',
    headline: 'سبد خرید هوشمند متحرک',
    description:
      'ایجاد تجربه خرید لوکس و بدون بار در مال‌های بزرگ. مشتری خرید می‌کند، ربات محموله را حمل می‌کند — تا درِ پارکینگ یا خروجی مجموعه.',
    stat: '۱۰۰+',
    statLabel: 'کیلوگرم ظرفیت',
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    borderColor: 'border-slate-200',
  },
  {
    icon: Camera,
    category: 'نمایشگاه‌ها و موزه‌ها',
    tag: 'Exhibitions & Museums',
    headline: 'حمل تجهیزات و غرفه‌سازی',
    description:
      'جابه‌جایی سریع تجهیزات فنی، کاتالوگ‌ها، سازه‌های موقت نمایشگاهی و آثار ارزشمند موزه‌ای با حداقل خطای انسانی و آسیب احتمالی.',
    stat: '۰',
    statLabel: 'خطای انسانی',
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    borderColor: 'border-slate-200',
  },
];

const statsBanner = [
  { icon: TrendingUp, value: '۲×', label: 'افزایش سرعت لجستیک داخلی' },
  { icon: Clock, value: '۲۴/۷', label: 'مداومت بدون خستگی اپراتور' },
  { icon: Star, value: '۰', label: 'نیاز به تگ یا ریموت سخت‌افزاری' },
  { icon: Package, value: '۲۰۰ kg', label: 'حداکثر ظرفیت باربری پلتفرم' },
];

export default function IndustryUseCases() {
  return (
    <section className="bg-white px-6 py-28 lg:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between text-right">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              سناریوهای کاربردی • Industry Use Cases
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
              از انبار تا فرودگاه؛
              <br />
              <span className="text-slate-400">هر محیطی را پوشش می‌دهیم.</span>
            </h2>
          </div>
          <a
            href="#demo-request"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-colors shrink-0"
          >
            درخواست مشاوره
          </a>
        </div>

        {/* 4-Column Use Case Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-2xl border bg-white p-7 text-right hover:border-slate-300 transition-colors shadow-xs ${item.borderColor}`}
            >
              {/* Icon */}
              <div className={`grid size-11 place-items-center rounded-xl ${item.accentBg} mb-6`}>
                <item.icon className={`w-5 h-5 ${item.accentColor}`} />
              </div>

              {/* Category Tag */}
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-tight">{item.category}</h3>

              {/* Headline */}
              <p className={`text-base font-extrabold ${item.accentColor} mb-3 leading-snug`}>
                {item.headline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 leading-6 flex-1">{item.description}</p>

              {/* Stat */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline gap-2 justify-end">
                <span className={`text-2xl font-extrabold ${item.accentColor}`}>{item.stat}</span>
                <span className="text-xs text-slate-400 font-medium">{item.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-950 p-8 lg:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsBanner.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-white/10 text-emerald-400">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium text-center leading-5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

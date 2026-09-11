'use client';

import React from 'react';
import {
  ShieldCheck,
  Armchair,
  ShoppingBag,
  Gauge,
  Radar,
  Sparkles,
  ArrowLeft,
  Activity,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    badge: 'ترمز فعال اضطراری (AEB)',
    title: 'ناوبری ایمن در ازدحام',
    desc: 'مجهز به سنسورهای اولتراسونیک و رادارهای تشخیص موانع برای توقف فوق‌سریع و خودکار در صورت پریدن ناگهانی کودکان یا عبور عابران پیاده در راهروها.',
    footer: 'زمان واکنش سنسورها: کمتر از ۰.۰۸ ثانیه',
  },
  {
    icon: Armchair,
    badge: 'طراحی ارگونومیک طبی',
    title: 'صندلی فرست‌کلاس (First-Class Seating)',
    desc: 'استفاده از فوم‌های حافظه‌دار چندلایه‌ای (Memory Foam)، روکش چرم صنعتی تنفس‌پذیر و پشتی زاویه‌دار طبی جهت تسکین فشارهای ستون فقرات و جلوگیری کامل از خستگی.',
    footer: 'متریال آنتی‌باکتریال و ضدتعریق',
  },
  {
    icon: ShoppingBag,
    badge: 'ظرفیت بار ۲۰ کیلوگرم',
    title: 'فضای قرارگیری خرید و وسایل شخصی',
    desc: 'دارای محفظه امن و جادار در بخش زیرین و پشتی مبل جهت قراردادن بدون دغدغه کیسه‌های خرید، کیف‌ها و وسایل همراه اعضای خانواده در طول گردش.',
    footer: 'دسترسی آسان بدون نیاز به خم شدن زیاد',
  },
  {
    icon: Gauge,
    badge: 'کنترل سرعت همگام (Pacing)',
    title: 'محدودکننده سرعت هوشمند',
    desc: 'تنظیم خودکار و دینامیک سرعت حرکت مبل با ریتم قدم‌زدن همراهان و حداکثر سرعت ایمن (۳ تا ۴.۵ کیلومتر بر ساعت) در فضاهای شلوغ و متراکم مال.',
    footer: 'شتاب‌گیری بسیار نرم بدون شوک حرکتی',
  },
];

export default function SafetyAndComfort() {
  return (
    <section id="safety-and-comfort" className="bg-slate-50/80 px-6 py-28 lg:py-32 border-t border-slate-100" dir="rtl">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 text-right">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              ویژگی‌های ایمنی فعال و آسایش فرست‌کلاس • Safety & Luxury Comfort
            </p>
            <h2 className="text-3xl font-extrabold text-blue-950 lg:text-5xl leading-tight tracking-tight">
              نهایت آرامش در نشیمن،
              <br />
              <span className="text-slate-400">نهایت اطمینان در ایمنی عابران.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-right lg:text-left">
            <a
              href="#tech-specs"
              className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
            >
              <span>مشاهده ریزمشخصات فنی و استانداردهای ایمنی</span>
              <ArrowLeft size={16} />
            </a>
          </div>
        </div>

        {/* 4-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 text-right shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="grid size-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mb-6">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 block mb-2">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-500">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
                  {item.footer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full High-Tech Dark Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-white shadow-xl text-right">
          <Sparkles
            size={200}
            className="pointer-events-none absolute -left-10 -bottom-10 text-white opacity-[0.03]"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-white/10 text-emerald-400">
                  <Radar size={22} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 px-3.5 py-1.5 rounded-full border border-emerald-800/40">
                  سپر محافظتی ۳۶۰ درجه • 360° Safety Shield
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                ترکیب سنسورهای اولتراسونیک، دوربین‌های عمق‌سنج و ناوبری بلادرنگ
              </h3>

              <p className="text-sm sm:text-base leading-8 text-slate-300">
                سیستم ایمنی فعال مبل هوشمند سیار، با تحلیل پیوسته محیط پیرامون در هر لحظه، محدوده امنیتی پویا (Dynamic Safety Zone) ایجاد می‌کند. در صورت ورود ناگهانی عابر پیاده یا هرگونه مانع به فاصله بحرانی، ترمز الکترومغناطیسی با شتاب ملایم و ایمن فعال شده و از تکان خوردن شدید سرنشین یا آسیب به عابران جلوگیری می‌کند.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-4 border-t border-slate-800 lg:border-t-0 lg:border-r lg:border-slate-800 pt-6 lg:pt-0 lg:pr-8">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400">سرعت واکنش ترمز</span>
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 mt-1">
                  &lt; ۰.۰۸ ثانیه
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-slate-400">حوزه اسکن ایمن</span>
                <span className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  ۳۶۰ درجه
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-slate-400">ظرفیت وزن سرنشین</span>
                <span className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  ۱۵۰ کیلوگرم
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-slate-400">مداومت کاری باتری</span>
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 mt-1">
                  +۱۰ ساعت
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import {
  ShieldAlert,
  Sparkles,
  HeartHandshake,
  Radar,
  Lock,
  ArrowLeft,
} from 'lucide-react';

export default function SafetyAndComfort() {
  return (
    <section id="safety-and-comfort" className="bg-slate-50/80 px-6 py-28 lg:py-32 border-t border-slate-100" dir="rtl">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 text-right">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              استانداردهای حفاظت و آسایش کودک • Safety & Child Comfort
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
              ایمنی فوق‌العاده و آسایش بی‌نقص،
              <br />
              <span className="text-slate-400">اولویت اول در هر میلی‌متر مهندسی.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-right lg:text-left">
            <a
              href="#family-cart-cta"
              className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
            >
              <span>دریافت استعلام فنی و تأییدیه‌های ایمنی</span>
              <ArrowLeft size={16} />
            </a>
          </div>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: ترمز خودکار در شیب و پله */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-md transition-all duration-300 text-right">
            <div>
              <div className="grid size-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mb-6">
                <ShieldAlert size={24} />
              </div>
              <span className="text-xs font-bold text-emerald-600 block mb-2">
                سنسور ژیروسکوپ ۶ محوره IMU
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                ترمز خودکار در شیب و پله
              </h3>
              <p className="text-sm leading-7 text-slate-500">
                سنسورهای شیب‌سنج چندمحوره و ترمز کمکی الکترومغناطیسی از هرگونه لغزش یا شتاب ناخواسته روی رمپ‌های سراشیبی، شیب پارکینگ‌ها و نزدیک شدن به پله‌برقی‌ها جلوگیری می‌کنند.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
              قفل ترمز خودکار در شیب‌های بالاتر از ۳ درجه
            </div>
          </div>

          {/* Card 2: بدنه جاذب ضربه و متریال ضدحساسیت */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-md transition-all duration-300 text-right">
            <div>
              <div className="grid size-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mb-6">
                <HeartHandshake size={24} />
              </div>
              <span className="text-xs font-bold text-emerald-600 block mb-2">
                استاندارد منسوجات ارگانیک OEKO-TEX 100
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                بدنه جاذب ضربه و متریال ضدحساسیت
              </h3>
              <p className="text-sm leading-7 text-slate-500">
                شاسی آلومینیوم گرید هوانوردی با فوم‌های جذب شوک و روکش‌های پارچه‌ای ارگانیک و آنتی‌باکتریال، سازگار با لطیف‌ترین پوست نوزادان و کودکان خردسال طراحی شده است.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
              ضدتعریق، قابل شستشو و عاری از هرگونه فلزات سنگین
            </div>
          </div>

          {/* Card 3: قفل کمربند ایمنی هوشمند */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-md transition-all duration-300 text-right">
            <div>
              <div className="grid size-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mb-6">
                <Lock size={24} />
              </div>
              <span className="text-xs font-bold text-emerald-600 block mb-2">
                کمربند ۵ نقطه‌ای با چفت مغناطیسی
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                قفل کمربند ایمنی و مانیتورینگ نشستن
              </h3>
              <p className="text-sm leading-7 text-slate-500">
                سنسور وزن تعبیه‌شده در نشیمنگاه و چفت‌های هوشمند، وضعیت نشستن کودک را مانیتور کرده و در صورت باز شدن ناگهانی کمربند یا تلاش کودک برای خروج، فوراً هشدار صوتی و نوتیفیکیشن صادر می‌کند.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
              هشدار لحظه‌ای به نمایشگر والدین
            </div>
          </div>

          {/* Card 4: Full High-Tech Card (Span 3 on Desktop) */}
          <div className="md:col-span-2 lg:col-span-3 relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-white shadow-xl hover:-translate-y-1 transition-all duration-300 text-right">
            <Sparkles
              size={180}
              className="pointer-events-none absolute -left-8 -bottom-10 text-white opacity-[0.03]"
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-white/10 text-emerald-400">
                    <Radar size={22} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
                    حریم امن فعال ۳۶۰ درجه • 360° Safety Shield
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  آرایه سنسورهای اولتراسونیک، لیدار و دوربین‌های عمق‌سنج
                </h3>

                <p className="text-sm sm:text-base leading-8 text-slate-300">
                  سپر محافظتی ۳۶۰ درجه کالسکه هوشمند ام آی تک، با نرخ اسکن ۱۰۰ بار در ثانیه محیط پیرامون را تحلیل می‌کند. این سیستم حتی در متراکم‌ترین راهروهای مال و هایپرمارکت، حضور ناگهانی افراد، کالسکه‌های خرید و موانع مرتفع یا روی زمین را در کمتر از ۱۰ میلی‌ثانیه شناسایی و از برخورد جلوگیری می‌نماید.
                </p>
              </div>

              <div className="lg:col-span-4 grid grid-cols-2 gap-4 border-t border-slate-800 lg:border-t-0 lg:border-r lg:border-slate-800 pt-6 lg:pt-0 lg:pr-8">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">زمان واکنش ترمز</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 mt-1">
                    &lt; ۰.۱ ثانیه
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">حوزه اسکن ایمن</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    ۳۶۰ درجه
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">تطبیق سرعت</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    ۱۰۰٪ خودکار
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">استاندارد جهانی</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 mt-1">
                    EN 1888
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

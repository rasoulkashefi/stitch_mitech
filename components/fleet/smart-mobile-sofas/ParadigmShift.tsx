'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, Navigation, CheckCircle2, XCircle, Coffee, Compass } from 'lucide-react';

const comparisonItems = [
  {
    feature: 'احساس روانی و شأن کاربری',
    wheelchair: 'تداعی حس ناتوانی و تجهیزات پزشکی بیمارستانی',
    sofa: 'مبلمان لوکس مدرن، احساس استقلال و پرستیژ VIP',
  },
  {
    feature: 'یادگیری و هدایت وسیله',
    wheelchair: 'نیاز به همراه برای هل دادن یا کنترل‌های پیچیده',
    sofa: 'رابط لمسی بصری + جوی‌استیک فوق‌روان در چند ثانیه',
  },
  {
    feature: 'آسایش در خرید و گردش طولانی',
    wheelchair: 'نشیمن سفت و خستگی ستون فقرات پس از ۱ ساعت',
    sofa: 'فوم مموری ارگونومیک، نشیمن فرست‌کلاس بدون خستگی',
  },
  {
    feature: 'امکانات رفاهی و پذیرایی',
    wheelchair: 'فاقد فضای بار، شارژر و نگه‌دارنده نوشیدنی',
    sofa: 'سبد خرید اختصاصی، شارژر موبایل و جالیوانی ارگونومیک',
  },
];

export default function ParadigmShift() {
  return (
    <section className="bg-slate-50 px-6 py-24 lg:py-32 border-t border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl text-right">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-600/20 px-3.5 py-1 text-xs font-bold text-emerald-700 mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>تغییر پارادایم در تحرک فردی • The Paradigm Shift</span>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-950 lg:text-5xl leading-tight tracking-tight">
            از ویلچر تا مبلمان متحرک؛
            <br />
            <span className="text-emerald-600">بازتعریف شأن، راحتی و استقلال در فضاهای عمومی.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-8">
            بسیاری از سالمندان و افراد خسته حاضر به استفاده از ویلچر نیستند، چرا که حس ناتوانی را القا می‌کند. مبل هوشمند سیار این مانع روانی را برای همیشه از بین برده و تحرک را به یک تجربه لذت‌بخش و شاهانه تبدیل می‌کند.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Bento Card 1: حفظ کرامت و استایل (Dignity & Style) */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-9 shadow-xs hover:border-slate-300 hover:shadow-lg transition-all duration-300 text-right">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="grid size-12 place-items-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600">
                  <Heart size={24} />
                </div>
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  ارزش انسانی و روانی
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                حفظ کرامت و استایل (Dignity & Style)
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                طراحی این محصول دقیقاً شبیه یک کاناپه راحتی مدرن و لوکس است، نه یک ابزار توانبخشی یا ارتوپدی. کاربر با نشستن روی آن احساس احترام، آرامش و پرستیژ بالا را تجربه کرده و بدون خجالت در کنار خانواده از گشت‌وگذار لذت می‌برد.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>تطابق با دیزاین مبلمان مدرن</span>
              <span className="font-bold text-emerald-600">حس استقلال ۱۰۰٪</span>
            </div>
          </div>

          {/* Bento Card 2: رابط کاربری بدون نیاز به آموزش (Zero-Learning UI) with Image Preview */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 sm:p-9 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300 text-right">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Compass size={24} />
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
                  کنترل آسان و فوری
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                رابط کاربری بدون نیاز به آموزش (Zero-Learning)
              </h3>
              <p className="text-sm leading-7 text-slate-600 mb-6">
                کنترل وسیله از طریق یک پنل لمسی جذاب و یک جوی‌استیک فوق‌روان روی دسته مبل انجام می‌شود. هر فردی با هر سن و سالی در کمتر از ۱۰ ثانیه کار با آن را فرامی‌گیرد.
              </p>

              {/* Integrated Image Crop of Touch Armrest */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
                <Image
                  src="/images/fleet/smart-mobile-sofa-detail.jpg"
                  alt="پنل لمسی هوشمند و جوی‌استیک روی دسته مبل سیار"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                    صفحه‌نمایش لمسی + نقشه تعاملی مال
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>جوی‌استیک با بازخورد لمسی (Haptic)</span>
              <span className="font-bold text-emerald-600">یادگیری فوری</span>
            </div>
          </div>

          {/* Bento Card 3: توقف و حرکت آزادانه (Hop-on, Hop-off) */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950 p-8 sm:p-9 text-white shadow-lg hover:border-slate-700 transition-all duration-300 text-right">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="grid size-12 place-items-center rounded-2xl bg-white/10 text-emerald-400">
                  <Navigation size={24} />
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-800/40">
                  آزادی عمل کامل
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                توقف و حرکت آزادانه (Hop-on, Hop-off)
              </h3>
              <p className="text-sm leading-7 text-slate-300">
                کاربر می‌تواند در هر نقطه از مال که خسته شد سوار مبل شود، روبروی ویترین‌ها توقف کند، پیاده شده و خرید کند، و دوباره با آرامش به همراه سایر اعضای خانواده به مسیر ادامه دهد.
              </p>

              <div className="mt-6 space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="grid size-5 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    ✓
                  </div>
                  <span>بدون نیاز به پارک کردن در مکان‌های خاص</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="grid size-5 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    ✓
                  </div>
                  <span>توقف هوشمند خودکار هنگام پیاده شدن سرنشین</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="grid size-5 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    ✓
                  </div>
                  <span>قابلیت بازگشت خودکار مبل به ایستگاه مرکزی پس از پایان سفر</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>سیستم احضار و بازگشت خودران</span>
              <span className="font-bold text-emerald-400">Smart Fleet Routing</span>
            </div>
          </div>

        </div>

        {/* Detailed Comparison Table / Visual Contrast Card */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xs text-right">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                مقایسه تحلیلی • Feature Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mt-1">
                تفاوت مبل هوشمند سیار با ویلچرهای سنتی در مراکز عمومی
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
              <span>رویکرد کرامت‌محور و لوکس</span>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-right border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
                  <th className="py-3 px-4 w-1/4">شاخص ارزیابی</th>
                  <th className="py-3 px-4 w-3/8 text-slate-700 bg-slate-100 rounded-r-xl">ویلچر معمولی / دستی</th>
                  <th className="py-3 px-4 w-3/8 text-emerald-800 bg-emerald-100/90 rounded-l-xl border-l border-emerald-200/50">مبل هوشمند سیار میکائیل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-800">{item.feature}</td>
                    <td className="py-4 px-4 text-slate-600 bg-slate-50/60">
                      <div className="flex items-start gap-2">
                        <XCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
                        <span>{item.wheelchair}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-emerald-950 font-medium bg-emerald-50/40">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item.sofa}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

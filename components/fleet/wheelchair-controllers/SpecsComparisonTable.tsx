'use client';

import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sliders, 
  Tv, 
  Zap, 
  Gauge, 
  Sun, 
  KeyRound, 
  HeartHandshake, 
  BatteryCharging, 
  ThermometerSnowflake,
  Smartphone,
  Volume2,
  Cable,
  Users,
  Award
} from 'lucide-react';

interface RowData {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  mini: string;
  miniStatus?: boolean;
  pro: string;
  proStatus?: boolean;
  xpro: string;
  xproStatus?: boolean;
  highlight?: boolean;
}

const comparisonData: RowData[] = [
  {
    title: 'توان خروجی موتورها',
    icon: Zap,
    mini: '۳۵۰ وات (مدل ۵۰) / ۷۰۰ وات (مدل ۹۰)',
    pro: '۳۵۰ وات (مدل ۵۰) / ۷۰۰ وات (مدل ۹۰)',
    xpro: '۳۵۰ وات (مدل ۵۰) / ۷۰۰ وات (مدل ۹۰)',
  },
  {
    title: 'نوع نمایشگر و رابط کاربری',
    icon: Tv,
    mini: 'LED خطی چندسطحی',
    pro: 'Graphic LCD فارسی با تنظیم خودکار نور',
    xpro: 'Graphic LCD تمام‌رنگی با سنسور نور محیط',
    highlight: true,
  },
  {
    title: 'اتصال بلوتوث و هدایت با موبایل',
    icon: Smartphone,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'دارد (اپلیکیشن اندروید + تاچ اسکرین)',
    proStatus: true,
    xpro: 'دارد (اپلیکیشن اندروید + تاچ اسکرین)',
    xproStatus: true,
    highlight: true,
  },
  {
    title: 'کنترل جک‌های برقی جانبی',
    icon: Sliders,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'نسخه Action (۱ عدد - ایستا، کمری یا نشیمن)',
    proStatus: true,
    xpro: 'نسخه Action (تا ۵ جک چندمحوره iSeating)',
    xproStatus: true,
    highlight: true,
  },
  {
    title: 'کنترل جک برقی از طریق گوشی',
    icon: Smartphone,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'دارد (کنترل از جویستیک و لمس گوشی)',
    proStatus: true,
    xpro: 'دارد (کنترل از جویستیک و لمس گوشی)',
    xproStatus: true,
  },
  {
    title: 'سیستم روشنایی و فلاشرها',
    icon: Sun,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'ندارد',
    proStatus: false,
    xpro: 'استاندارد اروپایی StVZO (چراغ جلو + فلاشر چپ/راست)',
    xproStatus: true,
    highlight: true,
  },
  {
    title: 'بوق صوتی',
    icon: Volume2,
    mini: 'بوق استاندارد داخلی',
    pro: 'بوق استاندارد داخلی',
    xpro: 'بوق پرقدرت اختصاصی شهری با گریل آکوستیک',
  },
  {
    title: 'اتصالات خروجی درایور قدرت',
    icon: Cable,
    mini: 'کانکتور اندرسونی (A) / داینامیک (D)',
    pro: 'کانکتور اندرسونی (A) / داینامیک (D)',
    xpro: 'کانکتور اندرسونی (A) / داینامیک (D)',
  },
  {
    title: 'ماژول همراه / پرستار (JSM-Attend)',
    icon: Users,
    mini: 'پشتیبانی کامل',
    miniStatus: true,
    pro: 'پشتیبانی کامل',
    proStatus: true,
    xpro: 'پشتیبانی کامل',
    xproStatus: true,
  },
  {
    title: 'ورودی‌های برنامه‌پذیر ایمنی',
    icon: Gauge,
    mini: 'حفاظت پیش‌فرض سخت‌افزاری',
    pro: 'تا ۳ ورودی برنامه‌پذیر (Inhibits)',
    proStatus: true,
    xpro: 'تا ۶ ورودی برنامه‌پذیر (Programmable Inhibits)',
    xproStatus: true,
  },
  {
    title: 'کد فعال‌سازی تنظیم در خانه',
    icon: KeyRound,
    mini: 'دارد (Programmable @Home)',
    miniStatus: true,
    pro: 'دارد (Programmable @Home)',
    proStatus: true,
    xpro: 'دارد (Programmable @Home)',
    xproStatus: true,
  },
  {
    title: 'رابط‌های ویژه توان‌یابان با ضعف عضلانی',
    icon: HeartHandshake,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'کلید کمکی خارجی + حساسیت ۴ برابری اهرم',
    proStatus: true,
    xpro: 'کلید کمکی خارجی + حساسیت ۴ برابری اهرم',
    xproStatus: true,
  },
  {
    title: 'جریان شارژ باتری و پشتیبانی لیتیوم',
    icon: BatteryCharging,
    mini: '10A RMS تا 18A RMS (لیتیوم و اسیدی)',
    pro: '10A RMS تا 18A RMS (لیتیوم و اسیدی)',
    xpro: '10A RMS تا 18A RMS (لیتیوم و اسیدی)',
  },
  {
    title: 'دمای کاری و استاندارد رطوبت',
    icon: ThermometerSnowflake,
    mini: '۲۵- تا ۵۰+ درجه سانتی‌گراد • استاندارد IPX4',
    pro: '۱۵- تا ۵۰+ درجه سانتی‌گراد • استاندارد IPX4',
    xpro: '۱۵- تا ۵۰+ درجه سانتی‌گراد • استاندارد IPX4',
  },
  {
    title: 'گارانتی رسمی و خدمات',
    icon: Award,
    mini: '۳۰ ماه ضمانت تعویض + ۱۰ سال تأمین قطعات',
    miniStatus: true,
    pro: '۳۰ ماه ضمانت تعویض + ۱۰ سال تأمین قطعات',
    proStatus: true,
    xpro: '۳۰ ماه ضمانت تعویض + ۱۰ سال تأمین قطعات',
    xproStatus: true,
    highlight: true,
  },
];

export default function SpecsComparisonTable() {
  const [selectedMobileColumn, setSelectedMobileColumn] = useState<'all' | 'mini' | 'pro' | 'xpro'>('all');

  return (
    <section id="specs-comparison" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-1 text-xs font-bold text-emerald-700 mb-4">
            <Sliders size={14} />
            <span>ماتریس جامع مشخصات فنی مهندسی</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            جدول مقایسه فنی خانواده کنترلرهای آرتک
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 text-justify">
            بررسی مشخصات فنی کنترلرهای سری آرتک مینی، پرو و ایکسپرو جهت انتخاب دقیق‌ترین تیپ محصول متناسب با وزن، نوع ویلچر، توان حرکتی و نیازهای کاربر.
          </p>
        </div>

        {/* Mobile Filter Pill Selector (Mobile First UX) */}
        <div className="flex md:hidden rounded-2xl bg-white p-1.5 mb-6 border border-slate-200 shadow-xs">
          {[
            { id: 'all', label: 'همه ماژول‌ها' },
            { id: 'mini', label: 'آرتک مینی' },
            { id: 'pro', label: 'آرتک پرو' },
            { id: 'xpro', label: 'آرتک ایکسپرو' },
          ].map((col) => (
            <button
              key={col.id}
              onClick={() => setSelectedMobileColumn(col.id as 'all' | 'mini' | 'pro' | 'xpro')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedMobileColumn === col.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {col.label}
            </button>
          ))}
        </div>

        {/* Table Container with Smooth Horizontal Scroll and Rounded Frame */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
          <table className="w-full text-right border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-900">
                <th className="py-6 px-6 text-sm font-extrabold w-[28%] sticky right-0 bg-slate-100/90 backdrop-blur-sm z-10">
                  مشخصات فنی و امکانات
                </th>

                <th className={`py-6 px-6 text-center w-[24%] transition-opacity ${
                  selectedMobileColumn === 'all' || selectedMobileColumn === 'mini' ? 'opacity-100' : 'hidden md:table-cell'
                }`}>
                  <div className="inline-block">
                    <span className="text-xs font-bold text-slate-700 bg-slate-200/80 px-3 py-1 rounded-full">
                      فوق فشرده و اقتصادی
                    </span>
                    <div className="text-base sm:text-lg font-black mt-2 text-slate-900">آرتک مینی</div>
                    <div className="text-xs text-slate-500 font-medium">ARTECH-Mini (50/90)</div>
                  </div>
                </th>

                <th className={`py-6 px-6 text-center w-[24%] bg-slate-50/50 border-x border-slate-200 transition-opacity ${
                  selectedMobileColumn === 'all' || selectedMobileColumn === 'pro' ? 'opacity-100' : 'hidden md:table-cell'
                }`}>
                  <div className="inline-block">
                    <span className="text-xs font-bold text-slate-700 bg-slate-200/80 px-3 py-1 rounded-full">
                      پیشرفته خانگی و تاچ موبایل
                    </span>
                    <div className="text-base sm:text-lg font-black mt-2 text-slate-900">آرتک پرو</div>
                    <div className="text-xs text-slate-500 font-medium">ARTECH-PRO Touch & Action</div>
                  </div>
                </th>

                <th className={`py-6 px-6 text-center w-[24%] bg-emerald-50/40 border-l border-slate-200 transition-opacity ${
                  selectedMobileColumn === 'all' || selectedMobileColumn === 'xpro' ? 'opacity-100' : 'hidden md:table-cell'
                }`}>
                  <div className="inline-block">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200/60">
                      پرچمدار هوشمند (فول آپشن)
                    </span>
                    <div className="text-base sm:text-lg font-black mt-2 text-slate-900">آرتک ایکسپرو</div>
                    <div className="text-xs text-slate-500 font-medium">ARTECH-XPRO Flagship</div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisonData.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <tr 
                    key={idx} 
                    className={`hover:bg-slate-50/80 transition-colors ${
                      row.highlight ? 'bg-emerald-50/30' : idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
                    }`}
                  >
                    {/* Spec Name Header Cell */}
                    <td className="py-4.5 px-6 font-bold text-slate-900 sticky right-0 bg-inherit z-10 flex items-center gap-2.5">
                      <span className="p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                        <Icon size={16} />
                      </span>
                      <span>{row.title}</span>
                    </td>

                    {/* Mini Column */}
                    <td className={`py-4.5 px-6 text-center font-medium transition-opacity ${
                      selectedMobileColumn === 'all' || selectedMobileColumn === 'mini' ? 'opacity-100' : 'hidden md:table-cell'
                    }`}>
                      {row.miniStatus === false ? (
                        <span className="inline-flex items-center gap-1.5 text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg text-xs">
                          <X size={14} className="text-slate-400" />
                          <span>ندارد</span>
                        </span>
                      ) : row.miniStatus === true ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg text-xs">
                          <Check size={14} className="text-emerald-600" />
                          <span>{row.mini}</span>
                        </span>
                      ) : (
                        <span className="text-slate-800 font-semibold">{row.mini}</span>
                      )}
                    </td>

                    {/* Pro Column */}
                    <td className={`py-4.5 px-6 text-center font-medium bg-slate-50/20 border-x border-slate-100 transition-opacity ${
                      selectedMobileColumn === 'all' || selectedMobileColumn === 'pro' ? 'opacity-100' : 'hidden md:table-cell'
                    }`}>
                      {row.proStatus === false ? (
                        <span className="inline-flex items-center gap-1.5 text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg text-xs">
                          <X size={14} className="text-slate-400" />
                          <span>ندارد</span>
                        </span>
                      ) : row.proStatus === true ? (
                        <span className="inline-flex items-center gap-1.5 text-slate-900 font-bold bg-slate-100 px-2.5 py-1 rounded-lg text-xs">
                          <Check size={14} className="text-emerald-600" />
                          <span>{row.pro}</span>
                        </span>
                      ) : (
                        <span className="text-slate-800 font-semibold">{row.pro}</span>
                      )}
                    </td>

                    {/* X-Pro Column */}
                    <td className={`py-4.5 px-6 text-center font-medium bg-emerald-50/30 transition-opacity ${
                      selectedMobileColumn === 'all' || selectedMobileColumn === 'xpro' ? 'opacity-100' : 'hidden md:table-cell'
                    }`}>
                      {row.xproStatus === true ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-900 font-extrabold bg-emerald-100/90 px-2.5 py-1 rounded-lg text-xs border border-emerald-200/50">
                          <Check size={14} className="text-emerald-700" />
                          <span>{row.xpro}</span>
                        </span>
                      ) : (
                        <span className="text-slate-900 font-bold">{row.xpro}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>تمامی پکیج‌ها همراه با ماژول درایور دوکاناله مجزا (XPM)، کابل‌های استاندارد، کانکتورهای کارخانه‌ای و ۳۰ ماه ضمانت رسمی تعویض ارائه می‌شوند.</span>
          </div>
          <div className="font-bold text-slate-700">
            استاندارد تست ایمنی توانبخشی ISO 7176 و استاندارد ضدآب IPX4
          </div>
        </div>

      </div>
    </section>
  );
}

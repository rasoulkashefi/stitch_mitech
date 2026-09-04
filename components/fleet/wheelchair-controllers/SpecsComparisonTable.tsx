'use client';

import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  Sliders, 
  Tv, 
  Zap, 
  Gauge, 
  Sun, 
  KeyRound, 
  HeartHandshake, 
  BatteryCharging, 
  ThermometerSnowflake 
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
    title: 'نوع نمایشگر',
    icon: Tv,
    mini: 'LED خطی',
    pro: 'Graphic LCD',
    xpro: 'Graphic LCD (رنگی)',
  },
  {
    title: 'حداکثر خروجی آمپر',
    icon: Zap,
    mini: '55A / 90A',
    pro: '55A / 90A',
    xpro: '55A / 90A',
  },
  {
    title: 'پشتیبانی از جک برقی',
    icon: Sliders,
    mini: 'ندارد',
    miniStatus: false,
    pro: '۱ عدد (جک ایستا و...)',
    proStatus: true,
    xpro: 'تا ۵ عدد (iSeating چندمحوره)',
    xproStatus: true,
    highlight: true,
  },
  {
    title: 'سیستم روشنایی و فلاشر',
    icon: Sun,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'ندارد',
    proStatus: false,
    xpro: 'استاندارد اروپایی StVZO',
    xproStatus: true,
    highlight: true,
  },
  {
    title: 'ورودی‌های برنامه‌پذیر',
    icon: Gauge,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'تا ۳ ورودی برنامه‌پذیر',
    proStatus: true,
    xpro: 'تا ۶ ورودی (Programmable Inhibits)',
    xproStatus: true,
  },
  {
    title: 'کد فعال‌سازی خانگی',
    icon: KeyRound,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'دارد (Programmable @Home)',
    proStatus: true,
    xpro: 'دارد (Programmable @Home)',
    xproStatus: true,
  },
  {
    title: 'رابط‌های ویژه ضعف عضلانی',
    icon: HeartHandshake,
    mini: 'ندارد',
    miniStatus: false,
    pro: 'کلید خارجی / 4x حساسیت اهرم',
    proStatus: true,
    xpro: 'کلید خارجی / 4x حساسیت اهرم',
    xproStatus: true,
  },
  {
    title: 'جریان شارژ باتری',
    icon: BatteryCharging,
    mini: '10A RMS تا 18A RMS',
    pro: '10A RMS تا 18A RMS',
    xpro: '10A RMS تا 18A RMS',
  },
  {
    title: 'دمای عملیاتی محیط',
    icon: ThermometerSnowflake,
    mini: '۲۵- تا ۵۰+ درجه سانتی‌گراد',
    pro: '۱۵- تا ۵۰+ درجه سانتی‌گراد',
    xpro: '۱۵- تا ۵۰+ درجه سانتی‌گراد',
  },
];

export default function SpecsComparisonTable() {
  const [selectedMobileColumn, setSelectedMobileColumn] = useState<'all' | 'mini' | 'pro' | 'xpro'>('all');

  return (
    <section id="specs-comparison" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-50 px-4 py-1 text-xs font-bold text-blue-700 mb-4">
            <Sparkles size={14} />
            <span>ماتریس جامع مشخصات فنی</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            مقایسه مشخصات فنی ماژول‌ها
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            بررسی رو در روی تفاوت‌های عملکردی ماژول‌های میکائیل برای انتخاب دقیق‌ترین پیکربندی متناسب با نیاز کاربر.
          </p>
        </div>

        {/* Mobile Filter Pill Selector (Mobile First UX) */}
        <div className="flex md:hidden rounded-2xl bg-white p-1.5 mb-6 border border-slate-200 shadow-xs">
          <button
            onClick={() => setSelectedMobileColumn('all')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedMobileColumn === 'all' ? 'bg-slate-900 text-white' : 'text-slate-600'
            }`}
          >
            همه ماژول‌ها
          </button>
          <button
            onClick={() => setSelectedMobileColumn('mini')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedMobileColumn === 'mini' ? 'bg-emerald-600 text-white' : 'text-slate-600'
            }`}
          >
            مینی (Mini)
          </button>
          <button
            onClick={() => setSelectedMobileColumn('pro')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedMobileColumn === 'pro' ? 'bg-blue-600 text-white' : 'text-slate-600'
            }`}
          >
            پرو (Pro)
          </button>
          <button
            onClick={() => setSelectedMobileColumn('xpro')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedMobileColumn === 'xpro' ? 'bg-amber-600 text-white' : 'text-slate-600'
            }`}
          >
            ایکسپرو (X-Pro)
          </button>
        </div>

        {/* Table Container with Smooth Horizontal Scroll and Rounded Frame */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
          <table className="w-full text-right border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-900">
                <th className="py-6 px-6 text-sm font-extrabold w-[28%] sticky right-0 bg-slate-100/90 backdrop-blur-sm z-10">
                  مشخصات فنی
                </th>

                <th className={`py-6 px-6 text-center w-[24%] transition-opacity ${
                  selectedMobileColumn === 'all' || selectedMobileColumn === 'mini' ? 'opacity-100' : 'hidden md:table-cell'
                }`}>
                  <div className="inline-block">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      اقتصادی و فشرده
                    </span>
                    <div className="text-base sm:text-lg font-black mt-2 text-slate-900">میکائیل مینی</div>
                    <div className="text-[11px] text-slate-500 font-medium">Mikaeel Mini</div>
                  </div>
                </th>

                <th className={`py-6 px-6 text-center w-[24%] bg-blue-50/40 border-x border-slate-200 transition-opacity ${
                  selectedMobileColumn === 'all' || selectedMobileColumn === 'pro' ? 'opacity-100' : 'hidden md:table-cell'
                }`}>
                  <div className="inline-block">
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                      پیشرفته خانگی
                    </span>
                    <div className="text-base sm:text-lg font-black mt-2 text-slate-900">میکائیل پرو</div>
                    <div className="text-[11px] text-slate-500 font-medium">Mikaeel Pro</div>
                  </div>
                </th>

                <th className={`py-6 px-6 text-center w-[24%] bg-amber-50/40 transition-opacity ${
                  selectedMobileColumn === 'all' || selectedMobileColumn === 'xpro' ? 'opacity-100' : 'hidden md:table-cell'
                }`}>
                  <div className="inline-block">
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                      پرچمدار هوشمند
                    </span>
                    <div className="text-base sm:text-lg font-black mt-2 text-slate-900">میکائیل ایکسپرو</div>
                    <div className="text-[11px] text-slate-500 font-medium">Mikaeel X-Pro</div>
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
                      row.highlight ? 'bg-amber-50/20' : idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
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
                      ) : (
                        <span className="text-slate-800 font-semibold">{row.mini}</span>
                      )}
                    </td>

                    {/* Pro Column */}
                    <td className={`py-4.5 px-6 text-center font-medium bg-blue-50/20 border-x border-slate-100 transition-opacity ${
                      selectedMobileColumn === 'all' || selectedMobileColumn === 'pro' ? 'opacity-100' : 'hidden md:table-cell'
                    }`}>
                      {row.proStatus === false ? (
                        <span className="inline-flex items-center gap-1.5 text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg text-xs">
                          <X size={14} className="text-slate-400" />
                          <span>ندارد</span>
                        </span>
                      ) : row.proStatus === true ? (
                        <span className="inline-flex items-center gap-1.5 text-blue-900 font-bold bg-blue-100/60 px-2.5 py-1 rounded-lg text-xs">
                          <Check size={14} className="text-blue-600" />
                          <span>{row.pro}</span>
                        </span>
                      ) : (
                        <span className="text-slate-800 font-semibold">{row.pro}</span>
                      )}
                    </td>

                    {/* X-Pro Column */}
                    <td className={`py-4.5 px-6 text-center font-medium bg-amber-50/20 transition-opacity ${
                      selectedMobileColumn === 'all' || selectedMobileColumn === 'xpro' ? 'opacity-100' : 'hidden md:table-cell'
                    }`}>
                      {row.xproStatus === true ? (
                        <span className="inline-flex items-center gap-1.5 text-amber-900 font-extrabold bg-amber-100/80 px-2.5 py-1 rounded-lg text-xs">
                          <Check size={14} className="text-amber-700" />
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
            <span>تمامی ماژول‌ها همراه با ماژول درایور مجزا، کابل‌های استاندارد و ۳۰ ماه ضمانت طلایی ارائه می‌شوند.</span>
          </div>
          <div className="font-bold text-slate-700">
            استاندارد تست ایمنی ISO 13482 و استاندارد مقاومت IPX4
          </div>
        </div>

      </div>
    </section>
  );
}

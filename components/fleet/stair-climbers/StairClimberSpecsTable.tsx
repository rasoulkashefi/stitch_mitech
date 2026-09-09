'use client';

import React from 'react';
import { Layers, Check } from 'lucide-react';

const fullSpecs = [
  { param: 'حداکثر ظرفیت باربری سرنشین', value: '۱۶۰ کیلوگرم (استاندارد) / تا ۱۸۰ کیلوگرم (سفارشی)', category: 'مکانیکی' },
  { param: 'حداکثر زاویه شیب راه‌پله', value: 'تا ۴۵ درجه شیب تند', category: 'عملکردی' },
  { param: 'سرعت صعود و فرود', value: 'قابل تنظیم در ۳ سرعت (۸ تا ۱۲ متر در دقیقه)', category: 'عملکردی' },
  { param: 'جنس شاسی و اسکلت اصلی', value: 'آلیاژ آلومینیوم گرید هوانوردی ۶۰۶۱-T6 با رنگ الکترواستاتیک', category: 'مکانیکی' },
  { param: 'نوع تسمه‌های محرک (شنی)', value: 'پلیمر تقویت‌شده با سیم فولادی و الیاف ضدسایش Kevlar', category: 'مکانیکی' },
  { param: 'سیستم پیشران', value: '۲ موتور براشلس قدرتمند ۳۰۰ وات (مجموع ۶۰۰ وات)', category: 'الکتریکی' },
  { param: 'باتری و تغذیه', value: 'پک لیتیوم-یون صنعتی ۲۴ ولت ۱۳.۲ آمپرساعت + BMS محافظ', category: 'الکتریکی' },
  { param: 'پیمایش مداوم با یک شارژ', value: 'تا ۱۵۰۰ پله (معادل ۸۰ طبقه ساختمان استاندارد)', category: 'عملکردی' },
  { param: 'زمان شارژ کامل', value: 'حدود ۲ تا ۲.۵ ساعت (دارای شارژر هوشمند قطع‌کننده)', category: 'الکتریکی' },
  { param: 'سیستم ترمز اضطراری', value: 'الکترومغناطیسی مداربسته با توقف در کمتر از ۰.۰۵ ثانیه', category: 'ایمنی' },
  { param: 'تجهیزات ایمنی همراه', value: 'کمربند ایمنی چهارنقطه‌ای، هدست فوم نرم و چراغ LED کمکی', category: 'ایمنی' },
  { param: 'وزن خالص دستگاه', value: '۲۹ کیلوگرم (طراحی تاشو و پرتابل برای قرارگیری در صندوق خودرو)', category: 'فیزیکی' },
  { param: 'گارانتی و خدمات پشتیبانی', value: '۳۰ ماه گارانتی طلایی شرکت میکائیل + ۱۰ سال تضمین تامین قطعات', category: 'خدمات' },
];

export default function StairClimberSpecsTable() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:py-28 border-t border-slate-200/80 font-[Vazirmatn,sans-serif]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/70 px-3.5 py-1 text-xs font-bold text-slate-800 mb-3">
            <Layers className="size-3.5 text-emerald-600" />
            <span>جدول جامع داده‌های فنی</span>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">
            مشخصات کامل مهندسی پله‌پیمای هوشمند
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
            طراحی ارگونومیک، وزن سبک و متریال درجه یک صنعتی جهت استفاده مداوم در منازل، مراکز درمانی و ادارات
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs sm:text-sm font-bold">
                  <th className="py-4 px-6">پارامتر فنی</th>
                  <th className="py-4 px-6">مشخصات استاندارد پله‌پیمای ام‌آی‌تک</th>
                  <th className="py-4 px-6 hidden sm:table-cell">دسته‌بندی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {fullSpecs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-blue-950">{spec.param}</td>
                    <td className="py-4 px-6 font-medium text-slate-800">
                      <div className="flex items-center gap-2">
                        <Check className="size-4 text-emerald-600 shrink-0" />
                        <span>{spec.value}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 hidden sm:table-cell text-xs font-mono text-slate-400">
                      {spec.category}
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

'use client';

import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';

const fullSpecs = [
  { param: 'نام تجاری و مدل درایور', value: 'ARTECH-Pro XLift (طراحی و ساخت اختصاصی ام‌آی‌تک)', category: 'شناسنامه' },
  { param: 'حداکثر توان خروجی پیشرانه', value: 'تا سقف ۷۰۰ وات (Peak) / ۴۵۰ وات کارکرد پیوسته مداوم', category: 'الکتریکی' },
  { param: 'پیکربندی موتورهای تحت پشتیبانی', value: 'پشتیبانی از پله‌پیماهای تک‌موتوره و دو‌موتوره همگام (Dual Motor)', category: 'الکتریکی' },
  { param: 'ولتاژ کاری نامی سیستم', value: '۲۴ ولت DC (دامنه کاری پایدار ۱۸ ولت تا ۳۲ ولت)', category: 'الکتریکی' },
  { param: 'جریان ماکزیمم بوست (Surge Current)', value: 'تا ۱۰۰ آمپر برای شروع صعود در شیب‌های سنگین و پیچ‌ها', category: 'الکتریکی' },
  { param: 'سازگاری با ساختار راه‌پله', value: 'کاملاً سازگار با پله‌پیماهای مسیر مستقیم (Straight) و پیچشی سفارشی (Custom-curve)', category: 'عملکردی' },
  { param: 'پروفایل حرکتی و کنترل شتاب', value: 'منحنی شتاب و ترمز فوق نرم دیجیتال S-Curve بدون ضربه و لرزش', category: 'کنترلی' },
  { param: 'کنترل سرعت در قوس‌ها (Curve Speed)', value: 'کاهش هوشمند و خودکار سرعت در پیچ‌های راه‌پله بر اساس سنسور زاویه/برنامه', category: 'کنترلی' },
  { param: 'درایور ترمز الکترومغناطیسی', value: 'خروجی اختصاصی ۲۴V / 2A با قابلیت فعال‌سازی نرم و قطع آنی Fail-Safe', category: 'ایمنی' },
  { param: 'زنجیره ورودی‌های سنسور ایمنی', value: 'پایش سوئیچ‌های حد نهایی بالا و پایین، لبه‌های حساس کفی و بدنه (Safety Edges)، استاپ قارچی', category: 'ایمنی' },
  { param: 'رابط‌های کاربری و احضار طبقات', value: 'ورودی جوی‌استیک سه حالته آنالوگ، کلید سوئیچی ایمن، و ریموت کنترل بی‌سیم ایستگاهی', category: 'کاربری' },
  { param: 'نمایشگر وضعیت و عیب‌یابی', value: 'پنل سون‌سگمنت دیجیتال پرنور با تفکیک کدهای خطا بدون نیاز به دیاگ خارجی', category: 'کاربری' },
  { param: 'سیستم خنک‌کاری و اتلاف حرارت', value: 'پسیو از طریق بدنه آلومینیومی هیت‌سینک‌دار بدون نویز فن', category: 'فیزیکی' },
  { param: 'سیم‌کشی و کانکتورها', value: 'هارنس صنعتی خودرویی سوکت‌دار ضد لرزش با عایق‌بندی کامل', category: 'فیزیکی' },
  { param: 'محدوده دمای کاری', value: '۲۰- تا ۵۵+ درجه سانتی‌گراد (برد با پوشش رزین ضد رطوبت Conformal Coating)', category: 'محیطی' },
  { param: 'گارانتی و تضمین تأمین قطعات', value: '۳۰ ماه گارانتی طلایی شرکت میکائیل + ۱۰ سال تضمین تأمین قطعات یدکی اورجینال', category: 'خدمات' },
];

export default function StairClimberSpecsTable() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:py-28 border-t border-slate-200/80 font-[Vazirmatn,sans-serif]">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-3.5 py-1 text-xs font-bold text-slate-800 mb-3">
            <Layers className="size-3.5 text-emerald-600" />
            <span>دیتاشیت و اطلاعات مهندسی</span>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">
            جدول جامع مشخصات فنی درایور ARTECH-Pro XLift
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
            پارامترهای عملکردی، استانداردهای حفاظتی و قابلیت‌های انطباق با انواع پله‌پیماهای مستقیم و پیچشی
          </p>
        </div>

        {/* Specs Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs sm:text-sm font-bold">
                  <th className="py-4 px-6">پارامتر فنی</th>
                  <th className="py-4 px-6">مشخصات مهندسی درایور ام‌آی‌تک (ARTECH-Pro XLift)</th>
                  <th className="py-4 px-6 hidden sm:table-cell">دسته‌بندی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {fullSpecs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-blue-950">{spec.param}</td>
                    <td className="py-4 px-6 font-medium text-slate-800">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
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

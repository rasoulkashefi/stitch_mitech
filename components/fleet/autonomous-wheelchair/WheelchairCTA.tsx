'use client';

import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

const contactItems = [
  {
    title: 'واحد پروژه‌های سازمانی',
    label: '۰۲۱-۸۸۴۵۶۷۸۹',
  },
  {
    title: 'ایمیل راهکارهای خودران',
    label: 'enterprise@mitech.ir',
  },
  {
    title: 'مرکز توسعه فناوری و ناوبری',
    label: 'تهران، پارک فناوری پردیس',
  },
];

const inputBase =
  'w-full rounded-xl border border-slate-200 bg-white p-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500';

export default function WheelchairCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="demo-request"
      dir="rtl"
      className="bg-white px-6 py-28 lg:py-32 border-t border-slate-100"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12">
        
        {/* ── Right Column: Info & Details (5 cols) ── */}
        <div className="lg:col-span-5 text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            استقرار سازمانی • Pilot Program
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 lg:text-5xl tracking-tight mb-6">
            آماده تجهیز و هوشمندسازی
            <br />
            <span className="text-emerald-600">مجموعه خود هستید؟</span>
          </h2>

          <p className="mb-10 text-base leading-8 text-slate-600">
            تیم مهندسی میکائیل آماده ارزیابی میدانی، ارائه سناریوی استقرار ناوگان و اجرای پایلوت آزمایشی در فرودگاه‌ها، بیمارستان‌ها و مجتمع‌های تجاری است.
          </p>

          {/* Direct Contact Linear List */}
          <div className="border-t border-slate-100 pt-8 space-y-6">
            {contactItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">{item.title}</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
            <span>• پایلوت رایگان سازمانی</span>
            <span>• پشتیبانی ۲۴/۷ در محل</span>
            <span>• ۵ سال ضمانت قطعات</span>
          </div>
        </div>

        {/* ── Left Column: Contact Form Card (7 cols) ── */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10 text-right">
          <div className="mb-6 pb-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              فرم ثبت درخواست پایلوت سازمانی
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              اطلاعات مجموعه خود را جهت دریافت طرح اولیه و هماهنگی جلسه فنی ثبت فرمایید.
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {/* Row 1: Name + Organization */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  نام و نام خانوادگی <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="مثال: دکتر رضایی"
                  className={inputBase}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  نام سازمان یا مجموعه <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="مثال: فرودگاه بین‌المللی"
                  className={inputBase}
                />
              </div>
            </div>

            {/* Row 2: Phone + Fleet Size */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  شماره تماس مستقیم <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  dir="ltr"
                  placeholder="09XX-XXX-XXXX"
                  className={`${inputBase} text-left`}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  تعداد تقریبی ناوگان مورد نیاز
                </label>
                <select
                  defaultValue="2-5"
                  className={`${inputBase} cursor-pointer appearance-none`}
                >
                  <option value="1-2">۱ الی ۲ دستگاه (پایلوت آزمایشی)</option>
                  <option value="2-5">۳ الی ۵ دستگاه (متوسط)</option>
                  <option value="5-15">۵ الی ۱۵ دستگاه (فرودگاهی / مجتمع بزرگ)</option>
                  <option value="15+">بیش از ۱۵ دستگاه (ناوگان کلان)</option>
                </select>
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                توضیحات و نیازمندی‌های پروژه
              </label>
              <textarea
                rows={3}
                placeholder="نوع فضا، متراژ، ساعات کاربری یا هرگونه پرسش فنی..."
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`mt-2 flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold text-white transition-all duration-150 active:scale-[0.98] ${
                sent
                  ? 'bg-emerald-600'
                  : 'bg-slate-900 hover:bg-emerald-600'
              }`}
            >
              {sent ? (
                <>
                  <Check size={18} strokeWidth={2.5} />
                  درخواست شما ثبت شد؛ همکاران ما با شما تماس خواهند گرفت
                </>
              ) : (
                <>
                  <span>ثبت درخواست پایلوت و دریافت پروپوزال</span>
                  <ArrowLeft size={16} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

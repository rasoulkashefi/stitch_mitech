'use client';

import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

const contactItems = [
  {
    title: 'واحد پروژه‌های سازمانی',
    label: '۰۲۱-۸۸۸۹۳۴۱۲',
  },
  {
    title: 'شماره همراه و ارتباط مستقیم',
    label: '۰۹۲۲ ۵۱۲ ۳۳۶۸',
  },
  {
    title: 'ایمیل راهکارهای رباتیک',
    label: 'enterprise@mitech.ir',
  },
  {
    title: 'مرکز توسعه فناوری و ناوبری',
    label: 'تهران، پارک علم و فناوری دانشگاه امام حسین(ع)، واحد ۳۶۳',
  },
];

const pilotBenefits = [
  'پایلوت رایگان در محیط سازمان',
  'ارزیابی میدانی توسط تیم مهندسی',
  'پشتیبانی فنی ۲۴/۷ در محل',
  '۵ سال ضمانت قطعات و تعمیرات',
];

const inputBase =
  'w-full rounded-xl border border-slate-200 bg-white p-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500';

export default function AmrCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="demo-request"
      dir="rtl"
      className="bg-white px-6 py-28 lg:py-32 border-t border-slate-100"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12">

        {/* Right Column: Info */}
        <div className="lg:col-span-5 text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            استقرار سازمانی • Pilot Program
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 lg:text-5xl tracking-tight mb-6">
            آماده اجرای پایلوت
            <br />
            <span className="text-emerald-600">در محیط سازمان خود هستید؟</span>
          </h2>

          <p className="mb-10 text-base leading-8 text-slate-600">
            تیم مهندسی ام. آی. تک. آماده ارزیابی میدانی، ارائه سناریوی استقرار ناوگان و اجرای پایلوت آزمایشی در انبارها، فرودگاه‌ها، مجتمع‌های تجاری و نمایشگاه‌هاست.
          </p>

          {/* Pilot Benefits */}
          <div className="space-y-3 mb-10">
            {pilotBenefits.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="grid size-5 place-items-center rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="border-t border-slate-100 pt-8 space-y-6">
            {contactItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">{item.title}</span>
                <span className="text-sm font-bold text-slate-900 mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Left Column: Form */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10 text-right">
          <div className="mb-6 pb-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              فرم ثبت درخواست پایلوت Following AMR
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
                  placeholder="مثال: مهندس رضایی"
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
                  placeholder="مثال: شرکت لجستیک ..."
                  className={inputBase}
                />
              </div>
            </div>

            {/* Row 2: Phone + Use Case */}
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
                  نوع محیط مورد نیاز
                </label>
                <select
                  defaultValue="warehouse"
                  className={`${inputBase} cursor-pointer appearance-none`}
                >
                  <option value="warehouse">انبار / مرکز لجستیک</option>
                  <option value="airport">فرودگاه / ایستگاه قطار</option>
                  <option value="mall">مجتمع تجاری / مال</option>
                  <option value="exhibition">نمایشگاه / موزه</option>
                  <option value="other">سایر محیط‌ها</option>
                </select>
              </div>
            </div>

            {/* Row 3: Fleet Size + Mode */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  تعداد تقریبی ناوگان
                </label>
                <select
                  defaultValue="2-5"
                  className={`${inputBase} cursor-pointer appearance-none`}
                >
                  <option value="1-2">۱ الی ۲ ربات (پایلوت)</option>
                  <option value="2-5">۳ الی ۵ ربات</option>
                  <option value="5-15">۵ الی ۱۵ ربات</option>
                  <option value="15+">بیش از ۱۵ ربات (ناوگان کلان)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  حالت عملیاتی مورد نظر
                </label>
                <select
                  defaultValue="follow-me"
                  className={`${inputBase} cursor-pointer appearance-none`}
                >
                  <option value="follow-me">Follow-Me (تعقیب کاربر)</option>
                  <option value="convoy">Convoy (حالت کاروان)</option>
                  <option value="autonomous">Point-to-Point (خودکار)</option>
                  <option value="all">ترکیب چند حالت</option>
                </select>
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                توضیحات پروژه و نیازمندی‌های خاص
              </label>
              <textarea
                rows={3}
                placeholder="متراژ، نوع بار، ساعات کاربری، سؤالات فنی..."
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Submit */}
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

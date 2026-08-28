"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ChevronLeft, ArrowLeft, Check, Calendar, MapPin, Building2, User, Phone, Mail } from 'lucide-react';

export default function RequestDemoPage() {
  const [sent, setSent] = useState(false);

  const inputBase =
    'w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-500/20';

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-8 font-[Vazirmatn,sans-serif]" dir="rtl">
      {/* ── Breadcrumb ── */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium py-3">
          <Link href="/" className="hover:text-blue-900 transition-colors">
            صفحه اصلی
          </Link>
          <ChevronLeft size={14} className="text-slate-400" />
          <Link href="/contact" className="hover:text-blue-900 transition-colors">
            تماس با ما
          </Link>
          <ChevronLeft size={14} className="text-slate-400" />
          <span className="text-slate-900 font-bold">درخواست دمو و پایلوت</span>
        </nav>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-600 mb-4">
              <Sparkles size={14} />
              رزرو جلسه حضوری یا آنلاین
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight">
              درخواست دمو و اجرای پایلوت آزمایشی
            </h1>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              تیم فنی و مهندسی میکائیل با حضور در مجموعه شما، عملکرد ناوگان خودران، قابلیت‌های ناوبری بدون اینترنت و سامانه دوقلوی دیجیتال را به صورت زنده به نمایش می‌گذارد.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                  <Calendar size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">هماهنگی سریع زمان تست</h4>
                  <p className="text-xs text-slate-500 mt-1">امکان انتخاب تاریخ و ساعت منعطف متناسب با شیفت کاری سازمان شما.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">تست در محیط واقعی مجموعه شما</h4>
                  <p className="text-xs text-slate-500 mt-1">آزمایش مانورپذیری ناوگان روی کف‌پوش‌ها، شیب‌ها و راهروهای سازمانی شما.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Building2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">بررسی تحلیل فنی و امکان‌سنجی (Feasibility)</h4>
                  <p className="text-xs text-slate-500 mt-1">ارائه گزارش مکتوب تحلیلی از تعداد ناوگان و داک شارژهای موردنیاز مجموعه.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              فرم ثبت اطلاعات درخواست دمو
            </h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {/* Row 1: Name & Org */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">نام و نام خانوادگی</label>
                  <input required type="text" placeholder="مثال: سارا کاظمی" className={inputBase} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">نام سازمان / مجموعه</label>
                  <input required type="text" placeholder="مثال: مجتمع تجاری یا بیمارستان..." className={inputBase} />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">شماره تماس مستقیم</label>
                  <input required type="tel" dir="ltr" placeholder="09XX-XXX-XXXX" className={`${inputBase} text-left`} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">ایمیل سازمانی (اختیاری)</label>
                  <input type="email" dir="ltr" placeholder="name@company.com" className={`${inputBase} text-left`} />
                </div>
              </div>

              {/* Row 3: Product Interest */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">نوع محصول یا راهکار مورد درخواست برای دمو</label>
                <select required defaultValue="" className={`${inputBase} cursor-pointer appearance-none`}>
                  <option value="" disabled>انتخاب کنید...</option>
                  <option value="wheelchair">ویلچر برقی خودران (Smart Wheelchair)</option>
                  <option value="stroller">کالسکه‌های هوشمند خانواده (Smart Cart)</option>
                  <option value="amr">ربات باربر تعقیب‌کننده (Following AMR)</option>
                  <option value="sofa">مبلمان هوشمند متحرک (Mobile Sofa)</option>
                  <option value="fleet_platform">سامانه جامع مدیریت ناوگان و دوقلوی دیجیتال</option>
                </select>
              </div>

              {/* Row 4: Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">شهر و آدرس محل پیشنهادی دمو</label>
                <textarea rows={3} placeholder="شهر، محدوده و توضیحات تکمیلی..." className={`${inputBase} resize-none`} />
              </div>

              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-900 py-4 text-base font-bold text-white transition-all hover:bg-blue-800 hover:shadow-lg active:scale-[0.98]"
              >
                {sent ? (
                  <>
                    <Check size={18} strokeWidth={2.5} />
                    درخواست دمو با موفقیت ثبت شد
                  </>
                ) : (
                  <>
                    ارسال درخواست دمو
                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

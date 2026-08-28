"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ChevronLeft, ArrowLeft, Check, Phone, Mail, MapPin, Briefcase, DollarSign } from 'lucide-react';

export default function SalesContactPage() {
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
          <span className="text-slate-900 font-bold">فروش و توسعه تجاری</span>
        </nav>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-900 mb-4">
              <Briefcase size={14} />
              واحد فروش و سرمایه‌گذاری
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight">
              فروش و امور تجاری
            </h1>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              جهت دریافت پیش‌فاکتور رسمی، اخذ نمایندگی، استعلام قیمت تجهیزات و یا مشاوره درباره مدل‌های سرمایه‌گذاری مشترک (Revenue Sharing) با کارشناسان فروش ما در ارتباط باشید.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">شماره تماس مستقیم واحد فروش</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5" dir="ltr">۰۲۱-۸۸۷۷۴۴۱۱ (داخلی ۱۰۲)</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">ایمیل ارتباط تجاری و قراردادها</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5" dir="ltr">sales@mitech.ir</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">نشانی دفتر مرکزی</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">تهران، پارک علم و فناوری | ایران</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              استعلام قیمت و مشاوره فروش
            </h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">نام و نام خانوادگی</label>
                  <input required type="text" placeholder="مثال: رضا احمدی" className={inputBase} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">شرکت / مجموعه</label>
                  <input required type="text" placeholder="نام شرکت یا کسب‌وکار" className={inputBase} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">تلفن تماس</label>
                  <input required type="tel" dir="ltr" placeholder="09XX-XXX-XXXX" className={`${inputBase} text-left`} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">نوع همکاری درخواستی</label>
                  <select required defaultValue="" className={`${inputBase} cursor-pointer appearance-none`}>
                    <option value="" disabled>انتخاب کنید...</option>
                    <option value="direct_purchase">خرید مستقیم محصولات</option>
                    <option value="amaas_subscription">پلن اشتراکی جابجایی خودران (AMaaS)</option>
                    <option value="revenue_sharing">طرح مشارکت و اشتراک درآمد</option>
                    <option value="agency">اخذ نمایندگی فروش و خدمات</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">شرح درخواست یا استعلام</label>
                <textarea rows={4} placeholder="تعداد دستگاه، ابعاد پروژه یا جزئیات مورد نیاز..." className={`${inputBase} resize-none`} />
              </div>

              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 py-4 text-base font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98]"
              >
                {sent ? (
                  <>
                    <Check size={18} strokeWidth={2.5} />
                    پیام شما به بخش فروش ارسال گردید
                  </>
                ) : (
                  <>
                    ارسال به کارشناس فروش
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

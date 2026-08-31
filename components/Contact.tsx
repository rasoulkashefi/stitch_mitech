"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowLeft, Check } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    title: 'تماس تلفنی مستقیم',
    label: '۰۲۱-۸۸۷۷۴۴۱۱',
  },
  {
    icon: Mail,
    title: 'پست الکترونیک رسمی',
    label: 'info@mitech.ir',
  },
  {
    icon: MapPin,
    title: 'دفتر مرکزی و پارک فناوری',
    label: 'تهران، پارک علم و فناوری | ایران',
  },
];

const inputBase =
  'w-full rounded-xl border border-slate-200/50 bg-slate-50 p-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      dir="rtl"
      className="bg-slate-50 px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif] border-t border-slate-100"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* ── Right Column: Info & Contact Details ── */}
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
            ارتباط مستقیم و دریافت مشاوره
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-blue-950 lg:text-4xl tracking-tight mb-4">
            آماده شروع یک مسیر هوشمند هستید؟
          </h2>

          <p className="mb-10 text-base leading-8 text-slate-600 max-w-lg">
            برای دریافت مشاوره تخصصی خرید محصولات، استقرار ناوگان خودران سازمانی (AMaaS) یا تامین سیستم‌های کنترلی، کارشناسان ما آماده پاسخگویی و همراهی با شما هستند.
          </p>

          {/* Contact Rows */}
          <div className="flex flex-col gap-4">
            {contactItems.map(({ icon: Icon, title, label }, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200/70 text-emerald-600 shadow-xs">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs text-slate-400">{title}</p>
                  <p className="text-sm font-bold text-slate-800 leading-6">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Left Column: Contact Form Card ── */}
        <div className="rounded-2xl border border-slate-200/50 bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-lg font-bold text-blue-950">
            فرم درخواست مشاوره و همکاری
          </h3>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {/* Row 1: Name + Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  نام و نام خانوادگی
                </label>
                <input
                  required
                  type="text"
                  placeholder="مثال: علی محمدی"
                  className={inputBase}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  شماره موبایل
                </label>
                <input
                  required
                  type="tel"
                  dir="ltr"
                  placeholder="09XX-XXX-XXXX"
                  className={`${inputBase} text-left`}
                />
              </div>
            </div>

            {/* Row 2: Subject Select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                موضوع درخواست
              </label>
              <select
                required
                defaultValue=""
                className={`${inputBase} cursor-pointer appearance-none`}
              >
                <option value="" disabled>
                  انتخاب کنید...
                </option>
                <option value="product">
                  خرید محصولات فردی (ویلچر هوشمند، کالسکه و...)
                </option>
                <option value="amaas">
                  راهکارهای حمل‌ونقل سازمانی (AMaaS)
                </option>
                <option value="parts">تامین قطعات و بردهای کنترلی</option>
                <option value="support">
                  خدمات پس از فروش و پشتیبانی فنی
                </option>
              </select>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                توضیحات تکمیلی
              </label>
              <textarea
                rows={4}
                placeholder="جزئیات درخواست یا مشخصات پروژه خود را بنویسید..."
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`group mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-200 active:scale-[0.98] ${
                sent
                  ? 'bg-emerald-600 shadow-md shadow-emerald-950/20'
                  : 'bg-slate-900 hover:bg-emerald-600 hover:shadow-lg'
              }`}
            >
              {sent ? (
                <>
                  <Check size={18} strokeWidth={2.5} />
                  درخواست شما با موفقیت ثبت شد
                </>
              ) : (
                <>
                  ثبت درخواست مشاوره
                  <ArrowLeft
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowLeft, Check } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    label: '۰۲۱-۸۸۷۷۴۴۱۱',
  },
  {
    icon: Mail,
    label: 'info@mitech.ir',
  },
  {
    icon: MapPin,
    label: 'دفتر مرکزی: تهران، ایران | در حال توسعه در خاورمیانه',
  },
];

const inputBase =
  'w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-500/20';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      dir="rtl"
      className="bg-slate-50 px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* ── Right Column: Info & Contact Details ── */}
        <div>
          {/* Eyebrow */}
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-600 tracking-wide">
            ارتباط با ام. آی. تک.
          </span>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-extrabold leading-snug text-blue-950 mb-4">
            آماده شروع یک مسیر هوشمند هستید؟
          </h2>

          {/* Description */}
          <p className="mb-10 text-lg leading-9 text-slate-600 max-w-lg">
            برای دریافت مشاوره تخصصی خرید محصولات، تامین قطعات کنترلی، یا پیاده‌سازی
            سیستم‌های ناوگان خودران سازمانی، فرم زیر را تکمیل کنید. کارشناسان ما در
            کوتاه‌ترین زمان با شما تماس خواهند گرفت.
          </p>

          {/* Contact Rows */}
          <div className="flex flex-col gap-4">
            {contactItems.map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="text-base text-slate-700 leading-6">{label}</span>
              </div>
            ))}
          </div>

          {/* Decorative gradient bar */}
          <div className="mt-12 h-1.5 w-24 rounded-full bg-gradient-to-l from-emerald-400 to-blue-500" />
        </div>

        {/* ── Left Column: Contact Form Card ── */}
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl">
          <p className="mb-6 text-lg font-bold text-slate-900">
            فرم درخواست مشاوره
          </p>

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
                <label className="text-sm font-medium text-slate-700">
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
                <label className="text-sm font-medium text-slate-700">
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
              <label className="text-sm font-medium text-slate-700">
                موضوع مشاوره
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
                  خرید محصولات هوشمند (ویلچر، کالسکه و...)
                </option>
                <option value="amaas">
                  راهکارهای حمل‌ونقل سازمانی (AMaaS)
                </option>
                <option value="parts">تامین قطعات و کنترلرها</option>
                <option value="support">
                  خدمات پس از فروش و پشتیبانی
                </option>
              </select>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                توضیحات تکمیلی
              </label>
              <textarea
                rows={4}
                placeholder="توضیحات تکمیلی شما..."
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-800 py-4 text-base font-bold text-white transition-all hover:bg-blue-900 hover:shadow-lg active:scale-[0.98]"
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
                    size={18}
                    className="transition-transform group-hover:-translate-x-1"
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

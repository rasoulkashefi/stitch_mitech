"use client";

import React, { useState } from 'react';
import { Phone, Check, ArrowLeft } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-t border-slate-200 bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        {/* Info Side */}
        <div>
          <p className="mb-3 text-sm font-bold text-emerald-600">در تماس باشیم</p>
          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            آماده‌اید
            <br />
            حرکت کنید؟
          </h2>
          <p className="mt-6 max-w-md leading-8 text-slate-500">
            برای دریافت مشاوره یا اطلاعات بیشتر فرم را تکمیل کنید. کارشناسان mitech با شما
            تماس می‌گیرند.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-900">
            <span className="grid size-10 place-items-center rounded-full bg-slate-100 text-blue-900">
              <Phone size={17} />
            </span>
            ۰۲۱ - ۸۸۷۷ ۴۴۱۱
          </div>
        </div>

        {/* Form Side */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input
            required
            className="w-full rounded-xl border-0 bg-slate-50 px-5 py-4 text-slate-900 outline-none ring-emerald-600 focus:ring-2 placeholder:text-slate-400"
            placeholder="نام و نام خانوادگی"
          />
          <input
            required
            type="tel"
            dir="ltr"
            className="w-full rounded-xl border-0 bg-slate-50 px-5 py-4 text-slate-900 outline-none ring-emerald-600 focus:ring-2 placeholder:text-slate-400 text-left"
            placeholder="شماره تماس"
          />
          <textarea
            className="min-h-32 w-full resize-none rounded-xl border-0 bg-slate-50 px-5 py-4 text-slate-900 outline-none ring-emerald-600 focus:ring-2 placeholder:text-slate-400"
            placeholder="چطور می‌توانیم کمک کنیم؟"
          />
          <button
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-900 px-5 py-4 font-bold text-white hover:bg-blue-800 transition-colors"
            type="submit"
          >
            {sent ? (
              <>
                <Check size={18} />
                درخواست شما دریافت شد
              </>
            ) : (
              <>
                ارسال درخواست
                <ArrowLeft size={17} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

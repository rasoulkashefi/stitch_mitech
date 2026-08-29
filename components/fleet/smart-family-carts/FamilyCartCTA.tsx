'use client';

import React, { useState } from 'react';
import { ArrowLeft, Check, Phone, Mail, MapPin } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    title: 'واحد پروژه‌های تجاری و مال‌ها',
    label: '۰۲۱-۸۸۷۷۴۴۱۱',
  },
  {
    icon: Mail,
    title: 'ایمیل راهکارهای سازمانی و MaaS',
    label: 'enterprise@mitech.ir',
  },
  {
    icon: MapPin,
    title: 'مرکز توسعه فناوری و ناوبری',
    label: 'تهران، پارک علم و فناوری',
  },
];

const inputBase =
  'w-full rounded-xl border border-slate-200 bg-white p-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500';

export default function FamilyCartCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="family-cart-cta"
      dir="rtl"
      className="bg-white px-6 py-28 lg:py-32 border-t border-slate-100"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12">
        
        {/* ── Right Column: Info & Details (5 cols) ── */}
        <div className="lg:col-span-5 text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            تجهیز ناوگان مراکز تجاری • Commercial Fleet Equipment
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 lg:text-5xl tracking-tight mb-6">
            آماده ارتقای تجربه خانواده‌ها
            <br />
            <span className="text-emerald-600">در مجموعه خود هستید؟</span>
          </h2>

          <p className="mb-10 text-base leading-8 text-slate-600">
            تیم مهندسی و توسعه بازار میکائیل آماده ارزیابی میدانی، شبیه‌سازی ترافیک راهروها و استقرار ناوگان پایلوت کالسکه‌های هوشمند در مال‌ها، هایپرمارکت‌ها، مراکز تفریحی و گردشگری در قالب مدل‌های منعطف خرید، اشتراک درآمدی و خدمات جامع (MaaS) است.
          </p>

          {/* Direct Contact Linear List */}
          <div className="border-t border-slate-100 pt-8 space-y-6">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="grid size-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <Icon size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">{item.title}</span>
                    <span className="text-sm font-bold text-slate-900 mt-0.5" dir={item.label.startsWith('0') ? 'ltr' : 'rtl'}>
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span>• پایلوت میدانی در محل مجموعه</span>
            <span>• مدل‌های پرداخت بر مبنای درآمد (MaaS)</span>
            <span>• نگهداری و گارانتی جامع سخت‌افزار</span>
          </div>
        </div>

        {/* ── Left Column: Contact Form Card (7 cols) ── */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10 text-right">
          <div className="mb-6 pb-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              فرم درخواست تجهیز ناوگان و اجرای پایلوت
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              اطلاعات مجموعه تجاری یا تفریحی خود را جهت دریافت طرح اولیه، امکان‌سنجی فنی و مدل درآمدزایی ثبت نمایید.
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
                  placeholder="مثال: مهندس رادمنش"
                  className={inputBase}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  نام مرکز تجاری، هایپرمارکت یا مجموعه <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="مثال: مجتمع تجاری رونیکا مال"
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
                  تعداد تقریبی کالسکه مورد نیاز
                </label>
                <select
                  defaultValue="5-10"
                  className={`${inputBase} cursor-pointer appearance-none`}
                >
                  <option value="3-5">۳ الی ۵ دستگاه (پایلوت آزمایشی اولیه)</option>
                  <option value="5-10">۵ الی ۱۰ دستگاه (مرکز خرید متوسط)</option>
                  <option value="10-25">۱۰ الی ۲۵ دستگاه (مجتمع تجاری بزرگ)</option>
                  <option value="25+">بیش از ۲۵ دستگاه (مجموعه زنجیره‌ای / کلان)</option>
                </select>
              </div>
            </div>

            {/* Row 3: Cooperation Model */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                مدل همکاری مد نظر
              </label>
              <select
                defaultValue="maas"
                className={`${inputBase} cursor-pointer appearance-none`}
              >
                <option value="maas">جابجایی خودران به عنوان سرویس و اشتراک کامل (MaaS)</option>
                <option value="revshare">تسهیم درآمد از کرایه کالسکه به مراجعان (Revenue Sharing)</option>
                <option value="purchase">خرید قطعی تجهیزات و سامانه ناوبری به همراه خدمات پشتیبانی</option>
              </select>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">
                توضیحات فضا و نیازمندی‌ها
              </label>
              <textarea
                rows={3}
                placeholder="تعداد طبقات تجاری، متراژ تقریبی، میانگین تردد روزانه خانواده‌ها..."
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
                  درخواست شما با موفقیت ثبت شد؛ کارشناسان میکائیل با شما تماس خواهند گرفت
                </>
              ) : (
                <>
                  <span>ثبت درخواست پایلوت و مشاوره تجهیز ناوگان</span>
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

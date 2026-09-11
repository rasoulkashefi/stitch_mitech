"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowLeft, Check, Loader2, AlertCircle } from 'lucide-react';
import { submitForm } from '@/app/actions/submitForm';

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
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await submitForm({
        name: (formData.get('name') as string) || '',
        phone: (formData.get('phone') as string) || '',
        subject: (formData.get('subject') as string) || undefined,
        message: (formData.get('message') as string) || undefined,
        formType: 'contact',
        website_hp: (formData.get('website_hp') as string) || undefined,
      });

      if (res.success) {
        setSent(true);
        form.reset();
      } else {
        setError(res.error || 'خطایی رخ داد. لطفاً مجدداً تلاش کنید.');
        if (res.fieldErrors) {
          setFieldErrors(res.fieldErrors);
        }
      }
    } catch {
      setError('خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی نمایید.');
    } finally {
      setLoading(false);
    }
  }

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

          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/30 mb-4">
                <Check size={28} strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold text-emerald-950">درخواست مشاوره ثبت شد</h4>
              <p className="mt-2 text-sm text-emerald-800 leading-relaxed max-w-md">
                پیام شما با موفقیت در سیستم ثبت گردید. کارشناسان ما به زودی با شما تماس خواهند گرفت.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-emerald-800 border border-emerald-200 shadow-sm hover:bg-emerald-100/60 transition-colors"
              >
                ارسال پیام جدید
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* ── Honeypot Bot Trap (Visually hidden & non-focusable by humans) ── */}
              <div
                className="opacity-0 absolute -z-10 select-none pointer-events-none w-0 h-0 overflow-hidden"
                aria-hidden="true"
                tabIndex={-1}
              >
                <label htmlFor="hp_contact_website">Leave this blank</label>
                <input
                  type="text"
                  id="hp_contact_website"
                  name="website_hp"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              {error && (
                <div className="flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs font-semibold text-rose-700">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    نام و نام خانوادگی <span className="text-rose-500">*</span>
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="مثال: علی محمدی"
                    className={`${inputBase} ${fieldErrors.name ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                    disabled={loading}
                  />
                  {fieldErrors.name && (
                    <span className="text-[11px] font-medium text-rose-600">{fieldErrors.name}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    شماره موبایل <span className="text-rose-500">*</span>
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    dir="ltr"
                    placeholder="09XX-XXX-XXXX"
                    className={`${inputBase} text-left ${fieldErrors.phone ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                    disabled={loading}
                  />
                  {fieldErrors.phone && (
                    <span className="text-[11px] font-medium text-rose-600">{fieldErrors.phone}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Subject Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  موضوع درخواست
                </label>
                <select
                  required
                  name="subject"
                  defaultValue=""
                  className={`${inputBase} cursor-pointer appearance-none`}
                  disabled={loading}
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
                  name="message"
                  rows={4}
                  placeholder="جزئیات درخواست یا مشخصات پروژه خود را بنویسید..."
                  className={`${inputBase} resize-none`}
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-600 hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    در حال ثبت درخواست در سنتی...
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
          )}
        </div>

      </div>
    </section>
  );
}

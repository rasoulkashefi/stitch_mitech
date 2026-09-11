"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ChevronLeft, ArrowLeft, Check, Phone, Mail, MapPin, Briefcase, DollarSign, Loader2, AlertCircle } from 'lucide-react';
import { submitForm } from '@/app/actions/submitForm';

export default function SalesContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const inputBase =
    'w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-500/20';

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
        organization: (formData.get('organization') as string) || '',
        phone: (formData.get('phone') as string) || '',
        subject: (formData.get('subject') as string) || undefined,
        message: (formData.get('message') as string) || undefined,
        formType: 'sales',
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

            {sent ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/30 mb-4">
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">استعلام شما با موفقیت ثبت شد</h3>
                <p className="mt-2 text-sm text-emerald-800 leading-relaxed max-w-md">
                  اطلاعات پروژه شما در سامانه ثبت گردید. کارشناسان ارشد فروش میکائیل جهت بررسی نیازمندی‌ها و ارائه پیش‌فاکتور با شما تماس خواهند گرفت.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-emerald-800 border border-emerald-200 shadow-sm hover:bg-emerald-100/60 transition-colors"
                >
                  ارسال استعلام جدید
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
                  <label htmlFor="hp_sales_website">Leave this blank</label>
                  <input
                    type="text"
                    id="hp_sales_website"
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

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">نام و نام خانوادگی <span className="text-rose-500">*</span></label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="مثال: رضا احمدی"
                      className={`${inputBase} ${fieldErrors.name ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                      disabled={loading}
                    />
                    {fieldErrors.name && (
                      <span className="text-[11px] font-medium text-rose-600">{fieldErrors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">شرکت / مجموعه</label>
                    <input
                      name="organization"
                      type="text"
                      placeholder="نام شرکت یا کسب‌وکار"
                      className={inputBase}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">تلفن تماس <span className="text-rose-500">*</span></label>
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
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">نوع همکاری درخواستی</label>
                    <select
                      required
                      name="subject"
                      defaultValue=""
                      className={`${inputBase} cursor-pointer appearance-none`}
                      disabled={loading}
                    >
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
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="تعداد دستگاه، ابعاد پروژه یا جزئیات مورد نیاز..."
                    className={`${inputBase} resize-none`}
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 py-4 text-base font-bold text-white transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      در حال ثبت استعلام در سنتی...
                    </>
                  ) : (
                    <>
                      ارسال به کارشناس فروش
                      <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

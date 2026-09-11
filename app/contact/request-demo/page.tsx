"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ChevronLeft, ArrowLeft, Check, Calendar, MapPin, Building2, Loader2, AlertCircle } from 'lucide-react';
import { submitForm } from '@/app/actions/submitForm';

export default function RequestDemoPage() {
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
        email: (formData.get('email') as string) || undefined,
        subject: (formData.get('subject') as string) || undefined,
        message: (formData.get('message') as string) || undefined,
        formType: 'demo',
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

            {sent ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/30 mb-4">
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">درخواست دمو با موفقیت ثبت شد</h3>
                <p className="mt-2 text-sm text-emerald-800 leading-relaxed max-w-md">
                  اطلاعات شما با موفقیت در سیستم ثبت گردید. کارشناسان فنی و اجرایی میکائیل در اسرع وقت جهت هماهنگی زمان و مکان تست پایلوت با شما تماس خواهند گرفت.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-emerald-800 border border-emerald-200 shadow-sm hover:bg-emerald-100/60 transition-colors"
                >
                  ثبت درخواست جدید دیگر
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
                  <label htmlFor="hp_demo_website">Leave this blank</label>
                  <input
                    type="text"
                    id="hp_demo_website"
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

                {/* Row 1: Name & Org */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">نام و نام خانوادگی <span className="text-rose-500">*</span></label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="مثال: سارا کاظمی"
                      className={`${inputBase} ${fieldErrors.name ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                      disabled={loading}
                    />
                    {fieldErrors.name && (
                      <span className="text-[11px] font-medium text-rose-600">{fieldErrors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">نام سازمان / مجموعه</label>
                    <input
                      name="organization"
                      type="text"
                      placeholder="مثال: مجتمع تجاری یا بیمارستان..."
                      className={inputBase}
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">شماره تماس مستقیم <span className="text-rose-500">*</span></label>
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
                    <label className="text-xs font-bold text-slate-700">ایمیل سازمانی (اختیاری)</label>
                    <input
                      name="email"
                      type="email"
                      dir="ltr"
                      placeholder="name@company.com"
                      className={`${inputBase} text-left ${fieldErrors.email ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                      disabled={loading}
                    />
                    {fieldErrors.email && (
                      <span className="text-[11px] font-medium text-rose-600">{fieldErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Row 3: Product Interest */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">نوع محصول یا راهکار مورد درخواست برای دمو</label>
                  <select
                    required
                    name="subject"
                    defaultValue=""
                    className={`${inputBase} cursor-pointer appearance-none`}
                    disabled={loading}
                  >
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
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="شهر، محدوده و توضیحات تکمیلی..."
                    className={`${inputBase} resize-none`}
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-900 py-4 text-base font-bold text-white transition-all hover:bg-blue-800 hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      در حال ثبت درخواست در سنتی...
                    </>
                  ) : (
                    <>
                      ارسال درخواست دمو
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

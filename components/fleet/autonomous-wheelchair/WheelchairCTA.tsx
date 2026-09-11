'use client';

import React, { useState } from 'react';
import { ArrowLeft, Check, Loader2, AlertCircle } from 'lucide-react';
import { submitForm } from '@/app/actions/submitForm';

const contactItems = [
  {
    title: 'واحد پروژه‌های سازمانی',
    label: '۰۲۱-۸۸۴۵۶۷۸۹',
  },
  {
    title: 'ایمیل راهکارهای خودران',
    label: 'enterprise@mitech.ir',
  },
  {
    title: 'مرکز توسعه فناوری و ناوبری',
    label: 'تهران، پارک فناوری پردیس',
  },
];

const inputBase =
  'w-full rounded-xl border border-slate-200/50 bg-slate-50 p-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20';

export default function WheelchairCTA() {
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
        organization: (formData.get('organization') as string) || '',
        phone: (formData.get('phone') as string) || '',
        subject: `پایلوت ویلچر برقی خودران - تعداد تقریبی: ${formData.get('fleetSize') || 'نامشخص'}`,
        message: (formData.get('message') as string) || undefined,
        formType: 'fleet_pilot',
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
      setError('خطا در برقراری ارتباط با سرور.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="demo-request"
      dir="rtl"
      className="bg-white px-6 py-28 lg:py-32 border-t border-slate-100"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12">
        
        {/* ── Right Column: Info & Details (5 cols) ── */}
        <div className="lg:col-span-5 text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            استقرار سازمانی • Pilot Program
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-blue-950 lg:text-5xl tracking-tight mb-6">
            آماده تجهیز و هوشمندسازی
            <br />
            <span className="text-emerald-600">مجموعه خود هستید؟</span>
          </h2>

          <p className="mb-10 text-base leading-8 text-slate-600">
            تیم مهندسی میکائیل آماده ارزیابی میدانی، ارائه سناریوی استقرار ناوگان و اجرای پایلوت آزمایشی در فرودگاه‌ها، بیمارستان‌ها و مجتمع‌های تجاری است.
          </p>

          {/* Direct Contact Linear List */}
          <div className="border-t border-slate-100 pt-8 space-y-6">
            {contactItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">{item.title}</span>
                <span className="text-sm font-bold text-blue-950 mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
            <span>• پایلوت رایگان سازمانی</span>
            <span>• پشتیبانی ۲۴/۷ در محل</span>
            <span>• ۵ سال ضمانت قطعات</span>
          </div>
        </div>

        {/* ── Left Column: Contact Form Card (7 cols) ── */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200/50 bg-slate-50 p-8 sm:p-10 text-right shadow-lg">
          <div className="mb-6 pb-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-blue-950">
              فرم ثبت درخواست پایلوت سازمانی
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              اطلاعات مجموعه خود را جهت دریافت طرح اولیه و هماهنگی جلسه فنی ثبت فرمایید.
            </p>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/30 mb-4">
                <Check size={28} strokeWidth={2.5} />
              </div>
              <h4 className="text-xl font-bold text-emerald-950">درخواست پایلوت با موفقیت ثبت شد</h4>
              <p className="mt-2 text-sm text-emerald-800 leading-relaxed max-w-md">
                اطلاعات شما در سیستم ثبت گردید. کارشناسان ما به زودی جهت هماهنگی بازدید میدانی با شما تماس خواهند گرفت.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-emerald-800 border border-emerald-200 shadow-sm hover:bg-emerald-100/60 transition-colors"
              >
                ثبت درخواست مجدد
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
                <label htmlFor="hp_wheelchair_website">Leave this blank</label>
                <input
                  type="text"
                  id="hp_wheelchair_website"
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

              {/* Row 1: Name + Organization */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    نام و نام خانوادگی <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="مثال: دکتر رضایی"
                    className={`${inputBase} ${fieldErrors.name ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : ''}`}
                    disabled={loading}
                  />
                  {fieldErrors.name && (
                    <span className="text-[11px] font-medium text-rose-600">{fieldErrors.name}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    نام سازمان یا مجموعه <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    name="organization"
                    type="text"
                    placeholder="مثال: فرودگاه بین‌المللی"
                    className={inputBase}
                    disabled={loading}
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
                  <label className="text-xs font-bold text-slate-700">
                    تعداد تقریبی ناوگان مورد نیاز
                  </label>
                  <select
                    name="fleetSize"
                    defaultValue="2-5"
                    className={`${inputBase} cursor-pointer appearance-none`}
                    disabled={loading}
                  >
                    <option value="1-2">۱ الی ۲ دستگاه (پایلوت آزمایشی)</option>
                    <option value="2-5">۳ الی ۵ دستگاه (متوسط)</option>
                    <option value="5-15">۵ الی ۱۵ دستگاه (فرودگاهی / مجتمع بزرگ)</option>
                    <option value="15+">بیش از ۱۵ دستگاه (ناوگان کلان)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700">
                  توضیحات و نیازمندی‌های پروژه
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="نوع فضا، متراژ، ساعات کاربری یا هرگونه پرسش فنی..."
                  className={`${inputBase} resize-none`}
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold text-white transition-all duration-300 active:scale-[0.98] bg-slate-900 hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>در حال ثبت در سنتی...</span>
                  </>
                ) : (
                  <>
                    <span>ثبت درخواست پایلوت و دریافت پروپوزال</span>
                    <ArrowLeft size={16} />
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

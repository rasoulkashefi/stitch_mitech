'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Calendar } from 'lucide-react';

export default function OmanMeetingRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    country: 'سلطنت عمان (مسقط)',
    email: '',
    phone: '',
    meetingType: 'جلسه حضوری در دفتر مسقط',
    currency: 'ریال عمان (OMR)',
    projectScope: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful submission
    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-xl font-[Vazirmatn,sans-serif] text-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <Calendar className="size-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-blue-950">
            هماهنگی جلسه تجاری و استعلام پروژه‌های GCC
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            ثبت درخواست جلسه حضوری در مسقط یا جلسه آنلاین B2B با مدیریت بازرگانی بین‌الملل
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center animate-fadeIn">
          <CheckCircle2 className="mx-auto size-12 text-emerald-600 mb-3" />
          <h4 className="text-lg font-bold text-emerald-900">
            درخواست شما با موفقیت ثبت شد
          </h4>
          <p className="mt-2 text-sm text-emerald-700 leading-7 max-w-md mx-auto">
            تیم توسعه بازار بین‌الملل ام‌آی‌تک در مسقط ظرف حداکثر ۲۴ ساعت آینده جهت هماهنگی جلسه و ارائه پروپوزال ارزی با شما تماس خواهند گرفت.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
          >
            ثبت درخواست جدید
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                نام و نام خانوادگی / سمت سازمانی *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="مثال: مهندس سالم الحارثی - مدیر عملیات"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 px-4 text-xs sm:text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                نام سازمان / شرکت / فرودگاه *
              </label>
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="مثال: مدیریت پایانه‌های فرودگاهی / مجتمع تجاری"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 px-4 text-xs sm:text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                کشور / شهر استقرار *
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 px-4 text-xs sm:text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="سلطنت عمان (مسقط)">سلطنت عمان (مسقط)</option>
                <option value="سلطنت عمان (صلاله)">سلطنت عمان (صلاله)</option>
                <option value="امارات متحده عربی (دبی/ابوظبی)">امارات متحده عربی (دبی / ابوظبی)</option>
                <option value="قطر (دوحه)">قطر (دوحه)</option>
                <option value="عربستان سعودی (ریاض/جده)">عربستان سعودی (ریاض / جده)</option>
                <option value="سایر کشورهای منطقه">سایر کشورهای منطقه</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                نوع جلسه مورد نظر *
              </label>
              <select
                value={formData.meetingType}
                onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 px-4 text-xs sm:text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="جلسه حضوری در دفتر مسقط">جلسه حضوری در مسقط (سلطنت عمان)</option>
                <option value="جلسه آنلاین تصویری (Google Meet/Zoom)">جلسه آنلاین تصویری (Google Meet / Zoom)</option>
                <option value="بازدید میدانی و ارزیابی در محل پروژه">بازدید میدانی و ارزیابی در محل پروژه شما</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                ایمیل سازمانی *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@organization.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 px-4 text-xs sm:text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 text-left"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                شماره تماس بین‌المللی / واتساپ *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+968 9123 4567"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 px-4 text-xs sm:text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 text-left"
                dir="ltr"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              شرح پروژه یا نیازمندی ناوگان (اختیاری)
            </label>
            <textarea
              rows={3}
              value={formData.projectScope}
              onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
              placeholder="تعداد تقریبی دستگاه مورد نیاز، نوع فضا (فرودگاه، مرکز تجاری، بیمارستان) یا زمینه همکاری..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-3 px-4 text-xs sm:text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 px-6 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/25 active:scale-98 cursor-pointer"
          >
            <Send className="size-4" />
            <span>ثبت و ارسال درخواست جلسه</span>
          </button>
        </form>
      )}
    </div>
  );
}

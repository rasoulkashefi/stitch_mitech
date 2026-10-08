'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Globe,
  Building2,
  Copy,
  Check,
  ExternalLink,
  Navigation,
  Clock,
  Send,
} from 'lucide-react';

export default function OfficialContact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <section
      id="contact-hub"
      dir="rtl"
      className="bg-white py-24 lg:py-32 font-[Vazirmatn,sans-serif]"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Top Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold text-slate-700 shadow-2xs mb-4">
            <Building2 size={14} className="text-emerald-600" />
            <span>اطلاعات تماس رسمی و مرکز استقرار</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            هاب فنی و <span className="text-emerald-600">دفتر مرکزی</span>
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            پایگاه مرکزی مهندسی، برنامه‌ریزی و پشتیبانی سیستم‌های خودران ام. آی. تک.؛ آماده پاسخگویی و میزبانی از جلسات تجاری.
          </p>
        </div>

        {/* Main Official Contact Showcase */}
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200/50 bg-slate-50 p-8 lg:p-12 shadow-sm">
            
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              
              {/* Right Column: Address & Primary Location (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Address Card */}
                <div className="rounded-2xl border border-slate-200/50 bg-white p-6 shadow-2xs">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                          آدرس دفتر مرکزی و پارک فناوری
                        </span>
                        <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                          تهران، پارک علم و فناوری دانشگاه امام حسین(ع)، واحد ۳۶۳
                        </h3>
                        <p className="mt-1 text-xs text-slate-500 font-medium">
                          پایگاه مرکزی طراحی، تحقیق و توسعه و پشتیبانی سیستم‌های خودران میکائیل
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Postal Code & Copy Action */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-medium">کد پستی:</span>
                      <span className="text-sm font-mono font-bold text-slate-800 tracking-wider">
                        ۱۵۹۳۸۳۳۴۸۴
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy('۱۵۹۳۸۳۳۴۸۴', 'postal')}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/50 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors duration-300"
                    >
                      {copiedKey === 'postal' ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-700">کپی شد!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>کپی کد پستی</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Operating Hours & Dispatch Badge */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200/50 bg-white p-4.5 shadow-2xs">
                    <div className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-700 shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">ساعات کاری رسمی</div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">شنبه تا چهارشنبه: ۸:۳۰ الی ۱۷:۰۰</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200/50 bg-white p-4.5 shadow-2xs">
                    <div className="grid size-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                      <Navigation size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">موقعیت شهری</div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">قلب فناوری و تجارت تهران</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Left Column: Direct Communication Channels (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3.5">
                
                {/* Telephone */}
                <a
                  href="tel:02188893412"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200/50 bg-white p-4.5 shadow-2xs hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="grid size-11 place-items-center rounded-xl bg-slate-50 text-slate-700 border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">تلفن مستقیم دفتر</div>
                      <div className="text-sm font-mono font-bold text-slate-900 mt-0.5" dir="ltr">
                        ۰۲۱-۸۸۸۹۳۴۱۲
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
                    تماس
                  </span>
                </a>

                {/* WhatsApp & Mobile Support */}
                <a
                  href="https://wa.me/989225123368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200/50 bg-white p-4.5 shadow-2xs hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">شماره همراه و واتساپ</div>
                      <div className="text-sm font-mono font-bold text-slate-900 mt-0.5" dir="ltr">
                        ۰۹۲۲ ۵۱۲ ۳۳۶۸
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    پیام
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:support@mitech.de.com"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200/50 bg-white p-4.5 shadow-2xs hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="grid size-11 place-items-center rounded-xl bg-slate-50 text-slate-700 border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">پست الکترونیک رسمی</div>
                      <div className="text-sm font-mono font-bold text-slate-900 mt-0.5" dir="ltr">
                        support@mitech.de.com
                      </div>
                    </div>
                  </div>
                  <Send size={15} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </a>

                {/* Website */}
                <a
                  href="https://www.mitech.de.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200/50 bg-white p-4.5 shadow-2xs hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="grid size-11 place-items-center rounded-xl bg-slate-50 text-slate-700 border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <Globe size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">پرتال رسمی و بین‌المللی</div>
                      <div className="text-sm font-mono font-bold text-slate-900 mt-0.5" dir="ltr">
                        www.mitech.de.com
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={15} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

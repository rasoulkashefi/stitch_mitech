import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, Headphones, FileText, PhoneCall, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function GoldenWarrantyCTA() {
  return (
    <section id="golden-warranty" className="py-20 lg:py-28 bg-white" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Warranty Showcase Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Subtle Emerald Radial Glow */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Right text area (in RTL) */}
            <div className="lg:col-span-8 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
                <Award size={14} className="text-emerald-400" />
                <span>تضمین اصالت و کیفیت برتر مهندسی</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                ۳۰ ماه ضمانت طلایی میکائیل؛
                <br />
                <span className="text-emerald-400">
                  آرامش خاطر کامل برای توان‌یابان و تولیدکنندگان
                </span>
              </h2>

              <p className="text-base sm:text-lg leading-8 text-slate-200 font-normal max-w-2xl text-justify">
                تمامی کنترلرها و درایورهای میکائیل با سیستم عیب‌یابی پیشرفته و تست‌های سخت‌گیرانه استاندارد عرضه می‌شوند. شبکه خدمات پس از فروش میکائیل شامل تعویض قطعات، کالیبراسیون تخصصی و به‌روزرسانی نرم‌افزاری در کوتاه‌ترین زمان ممکن در سراسر کشور است.
              </p>

              {/* Service bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span>تأمین قطعات یدکی ۱۰ ساله</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span>کالیبراسیون و تنظیمات در محل</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                  <span>پشتیبانی فنی و مهندسی ۲۴/۷</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500 hover:shadow-emerald-900/50 active:scale-[0.98] transition-all duration-200"
                >
                  <PhoneCall size={18} />
                  <span>درخواست مشاوره فنی و سفارش عمده</span>
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/40 active:scale-[0.98] transition-all duration-200"
                >
                  <FileText size={16} className="text-slate-300" />
                  <span>درباره شرکت فناوری میکائیل</span>
                </a>
              </div>
            </div>

            {/* Left Badge Showcase */}
            <div className="lg:col-span-4 flex flex-col items-center gap-4">
              <div className="relative p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 text-center max-w-xs w-full shadow-2xl backdrop-blur-md">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 shadow-inner">
                  <Award size={36} />
                </div>
                <div className="text-3xl font-black text-emerald-400 tracking-tight">۳۰ ماه</div>
                <div className="text-sm font-bold text-white mt-1">ضمانت طلایی تعویض</div>
                <div className="text-xs text-slate-300 mt-2 leading-5">
                  شامل تمامی ماژول‌های مینی، پرو و ایکسپرو و بردهای درایور موتور DC
                </div>

                {/* Real Manufacturing Label */}
                <div className="mt-4 pt-3 border-t border-slate-700/70">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-700/80 shadow-md">
                    <Image
                      src="/images/fleet/controllers/manufacturing-label.webp"
                      alt="پلاک تولید و اصالت ساخت ایران کنترلر میکائیل"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-1.5 flex items-center justify-center gap-1">
                    <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
                    <span>شماره سریال انحصاری • ساخت ایران</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700 text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                  <ShieldCheck size={14} />
                  <span>استاندارد تأییدشده معاونت علمی</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { X, Check, HardDrive, Cloud } from 'lucide-react';

export default function ParadigmShift() {
  const traditionalPoints = [
    'هزینه‌های سنگین اولیه (CAPEX) برای خرید ناوگان',
    'درگیری مداوم با چالش‌های تعمیر و نگهداری',
    'نیاز به نیروی انسانی تخصصی برای هدایت مسافران',
    'عدم دسترسی به داده‌های عملیاتی و تحلیل رفتار کاربر',
  ];

  const amaasPoints = [
    'پرداخت بر اساس مصرف یا اشتراک دوره‌ای (OPEX)',
    'پشتیبانی و نگهداری تضمین شده (SLA) توسط میتک',
    'هدایت کاملاً خودمختار و آزادسازی نیروی انسانی',
    'دسترسی لحظه‌ای به داشبورد تله‌متری و تحلیل داده',
  ];

  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col gap-16">
        
        {/* Header Content */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider">
            تغییر پارادایم
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            از خرید سخت‌افزار تا سرویس هوشمند
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mt-2">
            میتک مدل سنتی خرید و نگهداری تجهیزات توان‌بخشی را با رویکرد مدرن «تحرک به عنوان سرویس» (AMaaS) جایگزین می‌کند.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-0 w-full relative">
          
          {/* Traditional Card */}
          <div className="flex-1 bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 relative overflow-hidden group hover:border-slate-300 transition-colors shadow-sm">
            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-200"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                <HardDrive className="w-7 h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-700">
                مدل سنتی (خرید سخت‌افزار)
              </h3>
            </div>
            
            <ul className="flex flex-col gap-6">
              {traditionalPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="bg-red-50 p-1 rounded-md mt-0.5 shrink-0">
                    <X className="text-red-500 w-4 h-4" />
                  </div>
                  <span className="text-base text-slate-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS Badge - Absolute positioning to sit perfectly between the two cards on Desktop */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center font-extrabold text-slate-400 text-lg tracking-widest">
              VS
            </div>
          </div>

          {/* AMaaS Card - Highlighted */}
          <div className="flex-1 bg-white rounded-2xl p-8 lg:p-10 border border-indigo-100 shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] relative overflow-hidden group hover:border-indigo-300 hover:shadow-[0_25px_50px_-12px_rgba(79,70,229,0.15)] transition-all z-0 lg:ms-6">
            <div className="absolute top-0 right-0 w-1.5 h-full bg-indigo-500 transition-all group-hover:w-2"></div>
            
            {/* Subtle decorative glow */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Cloud className="w-7 h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-indigo-900">
                راهکار میتک (AMaaS)
              </h3>
            </div>
            
            <ul className="flex flex-col gap-6 relative z-10">
              {amaasPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-1 rounded-md mt-0.5 shrink-0">
                    <Check className="text-emerald-600 w-4 h-4" />
                  </div>
                  <span className="text-base text-slate-800 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}

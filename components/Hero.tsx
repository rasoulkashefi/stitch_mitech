import React from 'react';
import { ArrowLeft, CheckCircle2, Route } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-slate-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        {/* Using a 100% unblocked reliable video just to test if video loads */}
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability (Darker on the right where RTL text is) */}
      <div className="absolute inset-0 bg-slate-950/40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950/90 via-slate-900/60 to-transparent z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 py-24 flex flex-col justify-center mt-16 md:mt-0">
        
        {/* Text Content */}
        <div className="w-full max-w-3xl lg:max-w-4xl flex flex-col gap-6 text-right">
          {/* Telemetry Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 backdrop-blur-md border border-slate-700/50 w-fit shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-xs md:text-sm font-medium tracking-wide">
              سیستم‌های خودمختار آماده عملیات
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            بازآفرینی تجربه تحرک در{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-400 to-indigo-200">
              فضاهای تجاری هوشمند
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
            پلتفرم یکپارچه AMaaS (تحرک به عنوان سرویس خودمختار) برای مدیریت، هدایت و بهینه‌سازی ناوگان ویلچرهای رباتیک در فرودگاه‌ها، بیمارستان‌ها و مجتمع‌های تجاری بزرگ.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white text-sm md:text-base font-medium px-8 py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 group">
              <span>درخواست دمو سازمانی</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800 text-white text-sm md:text-base font-medium px-8 py-4 rounded-lg transition-all flex items-center justify-center shadow-sm">
              مشاهده مستندات فنی
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}

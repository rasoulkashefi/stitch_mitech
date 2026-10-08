"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-slate-950 py-10 sm:py-12 lg:h-[calc(100dvh-5rem)] lg:min-h-[560px] lg:max-h-[820px] lg:py-0"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/hero-video/Mitech-Hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for high-contrast Persian typography */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/80 to-slate-950/30 z-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          
          {/* High-tech status indicator with delicate micro-glow on hover */}
          <div className="mb-3 sm:mb-4 lg:mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md text-xs font-semibold text-emerald-300 shadow-xs transition-all duration-300 hover:bg-white/15 hover:border-emerald-400/40 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            پلتفرم جامع رباتیک خودران و خدمات توانبخشی هوشمند
          </div>

          {/* H1 Headline */}
          <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.22] text-white tracking-tight">
            <span className="text-emerald-400">آزادی</span> در حرکت؛
            <br />
            با ربات‌های خودران
          </h1>

          {/* Description */}
          <p className="mt-3 sm:mt-4 lg:mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-200">
            تجربه‌ای امن، روان و مستقل از جابه‌جایی. ارائه‌دهنده راهکارهای نوین ناوبری خودران (AMaaS) و تجهیزات توانبخشی پیشرفته در فرودگاه‌ها، مجتمع‌های تجاری و کاربری‌های فردی.
          </p>

          {/* CTAs with tactile micro-interactions */}
          <div className="mt-6 lg:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="group flex items-center gap-2.5 rounded-full bg-emerald-600 px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500 hover:shadow-emerald-900/50 active:scale-[0.98] transition-all duration-200"
            >
              مشاهده محصولات
              <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            </a>
            <a
              href="#enterprise"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/40 active:scale-[0.98] transition-all duration-200"
            >
              راهکارهای سازمانی (AMaaS)
            </a>
          </div>
        </div>
      </div>

      {/* Minimalist Scroll Cue */}
      <div className="absolute bottom-3 lg:bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#products" aria-label="اسکرول به بخش محصولات" className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors">
          <div className="w-5 h-7 rounded-full border border-white/25 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </a>
      </div>
    </section>
  );
}

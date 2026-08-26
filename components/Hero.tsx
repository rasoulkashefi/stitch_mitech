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
    <section id="home" className="relative min-h-[690px] lg:min-h-[760px] flex items-center overflow-hidden bg-slate-900">
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
        <source src="/hero-video/Mitech.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-950 via-blue-950/65 to-blue-950/10 z-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <p className="mb-6 flex items-center gap-3 text-sm font-bold text-emerald-400">
            <span className="h-px w-10 bg-emerald-400" />
            پلتفرم جامع رباتیک و توانبخشی ام. آی. تک.
          </p>

          <h1 className="text-balance text-5xl font-bold leading-[1.2] lg:text-7xl">
            آزادی در حرکت؛
            <br />
            <span className="text-emerald-400">با ربات‌های خودران</span>
          </h1>

          <p className="mt-7 max-w-lg text-pretty text-lg leading-8 text-white/80">
            تجربه‌ای امن و روان از جابه‌جایی. تولیدکننده برتر کنترلرهای متحرک، کالسکه هوشمند خانواده و تجهیزات توانبخشی؛ ترکیبی از استقلال برای کاربران خانگی و راهکارهای نوین حمل‌ونقل برای مال‌ها و فرودگاه‌ها.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#products"
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-500 transition-colors"
            >
              مشاهده محصولات
              <ArrowLeft size={17} />
            </a>
            <a
              href="#enterprise"
              className="flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 font-bold text-white hover:bg-white/10 transition-colors"
            >
              راهکارهای حمل‌ونقل سازمانی
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 hidden text-xs text-white/60 lg:block">
          برای انسان‌ها، نه فقط ماشین‌ها
        </div>
      </div>
    </section>
  );
}

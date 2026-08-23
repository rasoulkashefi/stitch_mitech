"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Fallback timeout just in case video events don't fire quickly
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-slate-900">
      
      {/* Background Video */}
      {/* Native HTML5 video is the most performant method for background loops without external dependencies */}
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

      {/* Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Radial gradient for extra focus on the center text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-black/40 to-black/70 z-0"></div>

      {/* Content Container (Centered) */}
      <div className="relative z-10 w-full mx-auto max-w-4xl px-4 md:px-8 text-center flex flex-col items-center gap-6 mt-16">
        
        {/* Animated Badge (Optional subtle touch) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-white text-xs md:text-sm font-medium tracking-wide">
            نسل جدید راهکارهای هوشمند
          </span>
        </div>

        {/* Main Typography */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
          آزادی در حرکت،
          <br className="md:hidden" /> هوشمندی در مسیر
        </h1>
        
        <p className="text-base md:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow-md">
          طراحی و تولید نسل جدید ویلچرهای برقی، ربات‌های باربر و سیستم‌های ناوبری پیشرفته؛ برای استقلال فردی و هوشمندسازی سازمان‌ها.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-blue-800 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-900/50 flex items-center justify-center gap-2 group">
            <span>مشاهده محصولات</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto bg-transparent border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center backdrop-blur-sm">
            خدمات خودران (AMaaS)
          </button>
        </div>
      </div>
    </section>
  );
}

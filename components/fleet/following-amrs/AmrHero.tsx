'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Eye, Hand, Link } from 'lucide-react';

const badges = [
  { icon: Eye, label: 'شناسایی با پردازش تصویر (بدون نیاز به تگ/دانگل)' },
  { icon: Hand, label: 'پشتیبانی از فرامین اشاره‌ای دست' },
  { icon: Link, label: 'حرکت کاروانی چند ربات' },
];

export default function AmrHero() {
  return (
    <section className="relative min-h-[780px] lg:min-h-[860px] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fleet/following-amr-hero.jpg"
          alt="ربات هوشمند تعقیب‌کننده و حمل بار ام آی تک در انبار مدرن"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
      </div>

      {/* Layered Gradients for Editorial Depth */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 z-0" />
      {/* Telemetry green accent glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl z-0" />

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-28 lg:py-36">
        <div className="max-w-2xl text-right">

          {/* Category Tag */}
          <p className="mb-5 text-xs font-bold uppercase tracking-wider text-emerald-400">
            پلتفرم رباتیک تعاملی • Human-Interactive Autonomous Cargo Robot
          </p>

          {/* H1 Headline */}
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
            همراه هوشمند شما در حمل بار؛
            <br />
            <span className="text-emerald-400">بدون نیاز به لمس یا کنترل دستی.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-300 font-normal max-w-xl">
            جابه‌جایی بارهای سنگین در انبارها یا چمدان‌ها و خریدهای حجیم در فرودگاه‌ها، مراکز تجاری و موزه‌ها دیگر طاقت‌فرسا نیست. ربات خودران ام. آی. تک. با قدرت بینایی ماشین، کاربر را شناسایی کرده و با حفظ فاصله ایمن و تطبیق سرعت، محموله را به نرمی پشت سر شما جابه‌جا می‌کند.
          </p>

          {/* Instant Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-sm"
              >
                <badge.icon className="w-3.5 h-3.5 shrink-0" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Specs Row */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-xs text-slate-400 font-medium">ظرفیت باربری</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">تا ۲۰۰ کیلوگرم</div>
            </div>
            <div className="border-r border-white/10 pr-6">
              <div className="text-xs text-slate-400 font-medium">سیستم شناسایی</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">بدون تگ / AI Vision</div>
            </div>
            <div className="border-r border-white/10 pr-6">
              <div className="text-xs text-slate-400 font-medium">حداکثر سرعت</div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">۶–۸ کیلومتر/ساعت</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#demo-request"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-500 active:scale-[0.98] transition-all duration-150"
            >
              <span>درخواست دمو و سفارش سازمانی</span>
              <ArrowLeft size={16} />
            </a>

            <a
              href="#tech-specs"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10 active:scale-[0.98] transition-all duration-150"
            >
              <span>بررسی مشخصات فنی</span>
              <ChevronDown size={16} className="text-slate-400" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

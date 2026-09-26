'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ChevronLeft,
  CheckCircle2,
  PhoneCall,
  Clock,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import ServicesSubNav from './ServicesSubNav';
import ServiceDiagram from './ServiceDiagram';
import { servicesHubOverviewData } from './services-data';

export default function ServicesHubView() {
  const {
    eyebrow,
    title,
    highlight,
    subtitle,
    pillars,
    servicesArchitecture,
    keyCapabilities,
  } = servicesHubOverviewData;

  return (
    <div className="w-full bg-white pb-24" dir="rtl">
      {/* ── Sub Navigation ── */}
      <ServicesSubNav />

      {/* ── Hero Section ── */}
      <section className="mx-auto max-w-7xl px-5 pt-8 pb-14 lg:px-8 lg:pt-12 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left / Text Side */}
          <div className="relative z-10">
            {/* Status Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span>{eyebrow}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-blue-950 tracking-tight">
              {title}
              <br />
              <span className="text-emerald-600">{highlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-pretty text-base sm:text-lg leading-8 text-slate-600">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pillars"
                className="group flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 active:scale-[0.98] transition-all duration-200"
              >
                بررسی ۳ دپارتمان خدمات
                <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] transition-all duration-200"
              >
                تماس و استعلام فوری
              </Link>
            </div>
          </div>

          {/* Right / Hero Diagram */}
          <div>
            <ServiceDiagram type="fleet-maintenance" systemCode="MITECH-OPS-PLATFORM" />
          </div>
        </div>
      </section>

      {/* ── Engineering Support Philosophy Banner ── */}
      <section className="border-y border-slate-200/80 bg-slate-950 text-white py-14 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              تعهد پایداری ام‌آی‌تک
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white tracking-tight">
              پشتیبانی قابل اعتماد؛
              <br />
              ضامن <span className="text-emerald-400">آرامش و تداوم</span> عملیات.
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg leading-8 text-slate-300">
              ما در میکائیل معتقدیم فروش پایان راه نیست، بلکه آغاز یک پیمان مهندسی است. از تأمین فوری قطعات اصیل OEM با ضمانت کتبی تا استقرار ناوگان‌های خودران تحت پوشش قراردادهای SLA سخت‌گیرانه، زیرساخت تخصصی ما آماده پشتیبانی از تجهیزات فردی و ناوگان‌های کلان سازمانی است.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 Core Pillars Section ── */}
      <section id="pillars" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              دپارتمان‌های اصلی خدمات
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              سه ستون بنیادین خدمات و پشتیبانی میکائیل
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-7 text-slate-600">
            پوشش جامع از سطح قطعه تا سطح ناوگان با دانش فنی بومی، تجهیزات آزمایشگاهی و تعهد رسمی.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.slug}
                href={`/services/${pillar.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-slate-50 p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-white hover:shadow-lg"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">
                      خدمت ۰{index + 1}
                    </span>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-950/20 group-hover:bg-emerald-500 transition-colors">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mt-8 inline-block rounded-full bg-emerald-50 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-700">
                    {pillar.badge}
                  </div>

                  {/* Title & English Subtitle */}
                  <h3 className="mt-4 text-2xl font-bold text-blue-950 group-hover:text-emerald-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium tracking-wide mt-1">
                    {pillar.englishTitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Stats & Link */}
                <div className="mt-8 border-t border-slate-200/80 pt-5">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="font-semibold text-slate-700">{pillar.stats}</span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700 group-hover:text-emerald-600">
                      مشاهده جزئیات
                      <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 4-Tier Service Architecture Section ── */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                فرآیند یکپارچه مهندسی
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight tracking-tight">
                معماری لایه‌ای خدمات؛
                <br />
                <span className="text-emerald-600">از ارزیابی تا تضمین قرارداد</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                پروتکل‌های خدمات میکائیل به صورت مهندسی‌شده و چندمرحله‌ای تدوین شده‌اند تا تمامی اقدامات پیشگیرانه، عیب‌یابی و تأمین قطعات با بالاترین ضریب اطمینان و گزارش‌پذیری مستمر انجام گیرند.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>انطباق با استانداردهای مدیریت کیفیت خدمات و ISO</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>تعهد رسمی جریمه دیرکرد در قراردادهای سطح خدمات (SLA)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>پایش بلادرنگ از طریق اتصال اینترنت اشیا به دوقلوی دیجیتال</span>
                </div>
              </div>
            </div>

            {/* Architecture 4 Tiers */}
            <div className="space-y-3.5">
              {servicesArchitecture.tiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.number}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200/50 bg-white p-5 shadow-xs hover:border-emerald-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 text-sm font-extrabold">
                      {tier.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-emerald-600" />
                        <h3 className="font-bold text-blue-950 text-base">{tier.name}</h3>
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm leading-6 text-slate-600">
                        {tier.summary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Capabilities Matrix ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            مزیت‌های متمایز میکائیل
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            چرا دپارتمان خدمات میکائیل؟
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            چرا سازمان‌ها و کاربران شخصی برای آرامش خیال خود به خدمات ام‌آی‌تک تکیه می‌کنند؟
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="rounded-2xl border border-slate-200/50 bg-white p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:border-emerald-400/60 transition-all duration-300"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 shadow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-blue-950">{cap.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Enterprise Support CTA ── */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-8 py-14 text-white shadow-xl sm:px-12 sm:py-16 border border-slate-800">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 20%, #059669 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                پشتیبانی سازمانی و عقد قرارداد
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white tracking-tight">
                آماده‌اید پایداری ناوگان سازمان خود را
                <br />
                <span className="text-emerald-400">با ضمانت رسمی بیمه کنید؟</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-7 text-slate-300">
                تیم مهندسی خدمات میکائیل آماده ممیزی اولیه رایگان ناوگان، ارزیابی نیازمندی‌ها و ارائه پیش‌نویس توافق‌نامه سطح خدمت (SLA) متناسب با سازمان شماست.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500 active:scale-[0.98] transition-all"
              >
                درخواست جلسه و ممیزی ناوگان
                <ArrowLeft size={16} />
              </Link>
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
              >
                مشاهده محصولات ناوگان
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

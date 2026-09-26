'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  Workflow,
  Handshake,
  ShieldCheck,
  Zap,
  TrendingUp,
  Boxes,
  CheckCircle2,
  BarChart3,
  Users,
  CircleDot,
  FileSpreadsheet,
  Activity,
  Headphones,
  ChevronLeft,
  Check,
  X,
  Building,
} from 'lucide-react';
import BusinessSubNav from './BusinessSubNav';
import BusinessVisualDiagram from './BusinessVisualDiagram';
import { businessHubData, businessModelsData } from './business-model-data';

export default function BusinessHubView() {
  const {
    eyebrow,
    title,
    highlight,
    subtitle,
    coreStats,
    comparisonTable,
    spaceFitOptions,
    governance,
  } = businessHubData;

  const [selectedFitIndex, setSelectedFitIndex] = useState(0);
  const activeFit = spaceFitOptions[selectedFitIndex];
  const ActiveFitIcon = activeFit.icon;

  return (
    <div className="w-full bg-white pb-24" dir="rtl">
      {/* ── Sub Navigation ── */}
      <BusinessSubNav />

      {/* ── Hero Section ── */}
      <section className="mx-auto max-w-7xl px-5 pt-8 pb-14 lg:px-8 lg:pt-12 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Text */}
          <div className="relative z-10">
            {/* Status Eyebrow matching Hero.tsx */}
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
                href="#models"
                className="group flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 active:scale-[0.98] transition-all duration-300"
              >
                بررسی ۲ مدل همکاری
                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] transition-all duration-300"
              >
                درخواست جلسه تجاری و دمو
              </Link>
            </div>
          </div>

          {/* Right Diagram */}
          <div>
            <BusinessVisualDiagram type="hub" />
          </div>
        </div>
      </section>

      {/* ── Key Metrics Bar ── */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-12 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
                {stat.value}
              </p>
              <h3 className="mt-2 text-sm font-bold text-blue-950">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Two Core Models Deep-Dive Section ── */}
      <section id="models" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              مسیرهای همکاری تجاری
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              الگوی متناسب با استراتژی سازمان خود را انتخاب کنید
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-7 text-slate-600">
            تجهیز مجموعه با ناوگان خودران بدون درگیر شدن در چالش‌های سرمایه‌گذاری سنگین، تعمیرات و استهلاک.
          </p>
        </div>

        {/* 2 Model Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* AMaaS Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-slate-50 p-8 sm:p-10 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">
                  مدل ۰۱ // اشتراک سرویس
                </span>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-900 text-emerald-400 shadow-md">
                  <Workflow size={22} />
                </div>
              </div>

              <div className="mt-6 inline-block rounded-full bg-emerald-50 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-700">
                {businessModelsData.amaas.badge}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-blue-950 group-hover:text-emerald-700 transition-colors">
                {businessModelsData.amaas.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium tracking-wide mt-1">
                {businessModelsData.amaas.englishTitle}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {businessModelsData.amaas.subtitle}
              </p>

              {/* Promise Box */}
              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-50/60 p-4">
                <p className="text-xs font-bold text-emerald-800">وعده اقتصادی میکائیل:</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 leading-6">
                  {businessModelsData.amaas.promise}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="mt-6 space-y-2.5">
                {businessModelsData.amaas.benefits.slice(0, 3).map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200/80 pt-6">
              <Link
                href="/business-model/amaas"
                className="inline-flex w-full items-center justify-between rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-slate-800"
              >
                <span>مشاهده جزئیات مدل AMaaS</span>
                <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Revenue Sharing Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-slate-50 p-8 sm:p-10 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">
                  مدل ۰۲ // مشارکت تجاری
                </span>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-950/20">
                  <Handshake size={22} />
                </div>
              </div>

              <div className="mt-6 inline-block rounded-full bg-emerald-50 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-700">
                {businessModelsData['revenue-sharing'].badge}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-blue-950 group-hover:text-emerald-700 transition-colors">
                {businessModelsData['revenue-sharing'].title}
              </h3>
              <p className="text-xs text-slate-400 font-medium tracking-wide mt-1">
                {businessModelsData['revenue-sharing'].englishTitle}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {businessModelsData['revenue-sharing'].subtitle}
              </p>

              {/* Promise Box */}
              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-50/60 p-4">
                <p className="text-xs font-bold text-emerald-800">وعده اقتصادی میکائیل:</p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-800 leading-6">
                  {businessModelsData['revenue-sharing'].promise}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="mt-6 space-y-2.5">
                {businessModelsData['revenue-sharing'].benefits.slice(0, 3).map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200/80 pt-6">
              <Link
                href="/business-model/revenue-sharing"
                className="inline-flex w-full items-center justify-between rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-950/20 transition-all hover:bg-emerald-500"
              >
                <span>مشاهده جزئیات Revenue Sharing</span>
                <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Economic Comparison Matrix (Traditional vs. Mitech) ── */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              مقایسه رویکردهای اقتصادی
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              خرید سنتی در برابر مدل‌های نوین میکائیل
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              چرا سازمان‌های پیشرو از مالکیت پرریسک سخت‌افزار به سمت مدل‌های سرویس‌محور و اشتراکی حرکت می‌کنند؟
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white font-bold">
                <tr>
                  <th className="p-4 sm:p-5">شاخص اقتصادی و عملیاتی</th>
                  <th className="p-4 sm:p-5 text-slate-300">خرید سنتی (تجهیزات)</th>
                  <th className="p-4 sm:p-5 text-emerald-400">سرویس اشتراکی (AMaaS)</th>
                  <th className="p-4 sm:p-5 text-emerald-300">تسهیم درآمد (Rev-Share)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      row.isHighlight ? 'bg-emerald-50/40' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-bold text-blue-950">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X size={14} className="text-rose-500 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      <div className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span>{row.amaas}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      <div className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span>{row.revenueSharing}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Interactive Space Fit Selector ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            راهنمای هوشمند انتخاب مدل
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            کدام مدل برای فضای شما بهینه‌تر است؟
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            نوع کاربری مجموعه خود را انتخاب کنید تا مدل پیشنهادی و مزیت‌های اقتصادی آن را مشاهده فرمایید.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {spaceFitOptions.map((opt, idx) => {
            const Icon = opt.icon;
            const isSelected = selectedFitIndex === idx;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedFitIndex(idx)}
                className={`flex flex-col items-center text-center p-5 rounded-2xl border transition-all duration-200 ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/60 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div
                  className={
                    isSelected
                      ? 'flex size-11 items-center justify-center rounded-xl bg-emerald-600 text-white transition-colors'
                      : 'flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors'
                  }
                >
                  <Icon size={20} />
                </div>
                <span className="mt-3 text-xs font-bold text-blue-950">{opt.title}</span>
                <span className="mt-1 text-xs text-slate-500 font-medium">{opt.traffic}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Fit Recommendation Card */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-900 text-white p-8 sm:p-10 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-300">
                <ActiveFitIcon size={14} />
                <span>مدل پیشنهادی برای: {activeFit.title}</span>
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white">
                {activeFit.modelName}
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-8 text-slate-300">
                {activeFit.reason}
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                اقدام پیشنهادی
              </span>
              <p className="text-sm font-bold text-white">
                دریافت پروپوزال فنی و مالی منطبق با ظرفیت فضای شما
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href={`/business-model/${activeFit.recommendedModel}`}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors"
                >
                  مطالعه کامل مدل
                  <ArrowLeft size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  جلسه امکان‌سنجی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Governance, Insurance & SLA Guarantees ── */}
      <section className="border-t border-slate-200/50 bg-slate-50 py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              حکمرانی و اعتماد سازمانی
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              تضمین‌های حقوقی، بیمه‌ای و امنیتی میکائیل
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              همکاری با میکائیل بر پایه بالاترین استانداردهای شفافیت، پوشش بیمه کامل و ممیزی آنلاین بنا شده است.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governance.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-blue-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── B2B Collaboration Banner ── */}
      <section className="mx-auto max-w-7xl px-5 pt-20 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-8 py-14 text-white shadow-lg sm:px-12 sm:py-16 border border-slate-800">
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
                شروع همکاری تجاری
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white tracking-tight">
                بیایید مدل اقتصادی مناسب شما را طراحی کنیم
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-7 text-slate-300">
                در یک جلسه ۳۰ دقیقه‌ای، تیم توسعه تجاری میکائیل ظرفیت ترافیکی، پتانسیل درآمدزایی و بهترین مسیر استقرار را برای مجموعه شما ترسیم خواهد کرد.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500 active:scale-[0.98] transition-all duration-300"
              >
                درخواست جلسه تجاری
                <ArrowLeft size={16} />
              </Link>
              <a
                href="mailto:business@mitech.ir"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all duration-300"
              >
                مکاتبه مستقیم (business@mitech.ir)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

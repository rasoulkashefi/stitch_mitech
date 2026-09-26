'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ShieldCheck,
  Zap,
  Workflow,
  DollarSign,
  Boxes,
  Users,
  Clock,
  TrendingUp,
  HelpCircle,
  Activity,
  FileSpreadsheet,
} from 'lucide-react';
import BusinessSubNav from './BusinessSubNav';
import BusinessVisualDiagram from './BusinessVisualDiagram';
import {
  BusinessModelSlug,
  businessModelsData,
} from './business-model-data';

interface BusinessDetailViewProps {
  slug: BusinessModelSlug;
}

export default function BusinessDetailView({ slug }: BusinessDetailViewProps) {
  const data = businessModelsData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <div className="py-20 text-center" dir="rtl">
        <h1 className="text-2xl font-bold text-blue-950">صفحه مدل مورد نظر یافت نشد.</h1>
        <Link href="/business-model" className="mt-4 inline-block text-emerald-600 font-bold">
          بازگشت به مرکز مدل‌های کسب‌وکار
        </Link>
      </div>
    );
  }

  const {
    eyebrow,
    tagline,
    title,
    subtitle,
    fullDesc,
    promise,
    promiseSub,
    icon: PageIcon,
    metrics,
    benefits,
    serviceLayers,
    revenueStreams,
    steps,
    faq,
    relatedSolutions,
    ctaTitle,
    ctaSubtitle,
  } = data;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const siblingSlug: BusinessModelSlug =
    slug === 'amaas' ? 'revenue-sharing' : 'amaas';
  const siblingData = businessModelsData[siblingSlug];

  return (
    <div className="w-full bg-white pb-24" dir="rtl">
      {/* ── Sub Navigation ── */}
      <BusinessSubNav activeSlug={slug} />

      {/* ── Hero Section ── */}
      <section className="mx-auto max-w-7xl px-5 pt-8 pb-14 lg:px-8 lg:pt-12 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Text */}
          <div className="relative z-10">
            {/* Status Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs">
              <PageIcon size={14} className="text-emerald-600" />
              <span>{eyebrow}</span>
            </div>

            {/* Tagline */}
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
              {tagline}
            </p>

            {/* H1 Headline */}
            <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.25] text-blue-950 tracking-tight">
              {title}
            </h1>

            {/* Full Description */}
            <p className="mt-6 max-w-xl text-pretty text-base sm:text-lg leading-8 text-slate-600">
              {fullDesc}
            </p>

            {/* Promise Box */}
            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-50/70 p-5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>تعهد و وعده اقتصادی میکائیل:</span>
              </div>
              <p className="mt-2 text-base font-extrabold text-blue-950 leading-7">
                {promise}
              </p>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                {promiseSub}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 active:scale-[0.98] transition-all duration-300"
              >
                درخواست جلسه و بررسی پایلوت
                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/50 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
              >
                مراحل ۴ گانه استقرار
              </a>
            </div>
          </div>

          {/* Right Visual Diagram */}
          <div>
            <BusinessVisualDiagram type={slug} />
          </div>
        </div>
      </section>

      {/* ── Key Metrics Bar ── */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-12 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
                {m.value}
              </p>
              <h3 className="mt-2 text-sm font-bold text-blue-950">{m.label}</h3>
              {m.subtext && (
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {m.subtext}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Benefits Section ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            مزیت‌های استراتژیک مدل
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            چرا این الگو بالاترین بازدهی را برای سازمان خلق می‌کند؟
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/50 bg-slate-50 p-6 shadow-xs hover:border-emerald-400 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-blue-950">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-600">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Service Layers (AMaaS) OR Revenue Streams (Revenue Sharing) ── */}
      {serviceLayers && (
        <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
                معماری ۳ لایه سرویس
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
                پوشش جامع ۳۶۰ درجه عملیات در مدل AMaaS
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                از تأمین ناوگان سخت‌افزاری تا هوش مصنوعی ابری و تکنسین‌های میدانی؛ همه‌چیز در اشتراک ماهانه گنجانده شده است.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {serviceLayers.map((layer, idx) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-7 shadow-xs hover:border-emerald-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-600">
                          {layer.category}
                        </span>
                        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-emerald-400">
                          <Icon size={18} />
                        </div>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-blue-950">
                        {layer.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {layer.desc}
                      </p>

                      <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                        {layer.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {revenueStreams && (
        <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
                جریان‌های چندگانه سودآوری
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
                ۳ منبع مستقل درآمدزایی برای شریک تجاری
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                با تجهیز مجموعه، مراجعین علاوه بر لذت بردن از راحتی تردد، منابع سود مستمری را برای مدیریت فضا ایجاد می‌کنند.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {revenueStreams.map((stream, idx) => {
                const Icon = stream.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-7 shadow-xs hover:border-emerald-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-emerald-50 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-700">
                          {stream.shareBadge}
                        </span>
                        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-emerald-400">
                          <Icon size={18} />
                        </div>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-blue-950">
                        {stream.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {stream.desc}
                      </p>

                      <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                        {stream.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 4-Step Rollout Workflow ── */}
      <section id="workflow" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            نقشه راه استقرار و اجرا
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            مسیر ۴ گانه از اولین تصمیم تا درآمدزایی و عملیات
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            فرآیندی استاندارد و چابک برای راه‌اندازی بدون ایجاد اختلال در تردد جاری مجموعه.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-slate-50 p-6 shadow-xs hover:border-emerald-400 hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-full bg-slate-900 text-xs font-extrabold text-emerald-400">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {st.step}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-blue-950">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
                  {st.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="size-1 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -left-3 top-10 z-10">
                  <div className="flex size-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xs">
                    <ChevronLeft size={14} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              شفافیت حقوقی و عملیاتی
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              پرسش‌های متداول درباره این مدل همکاری
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              پاسخ به متداول‌ترین سوالات مدیران مجموعه‌ها پیرامون قرارداد، بیمه، تسویه مالی و نگهداری.
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-slate-200/50 bg-white shadow-xs transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-right font-bold text-blue-950 transition-all duration-300 hover:bg-slate-50"
                  >
                    <span className="text-sm sm:text-base">{item.question}</span>
                    <div
                      className={
                        isOpen
                          ? 'flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 rotate-180 bg-emerald-100 text-emerald-800'
                          : 'flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 bg-slate-100 text-slate-700'
                      }
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50 p-5 sm:p-6 text-xs sm:text-sm leading-8 text-slate-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sibling Model Switcher & Related Solutions ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Sibling Model Card */}
          <div className="rounded-2xl border border-slate-200/50 bg-white p-8 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                مدل همکاری مکمل
              </span>
              <h3 className="mt-3 text-2xl font-bold text-blue-950">
                بررسی مدل {siblingData.navTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {siblingData.subtitle}
              </p>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-5">
              <Link
                href={`/business-model/${siblingSlug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700"
              >
                <span>مشاهده صفحه {siblingData.navTitle}</span>
                <ArrowLeft size={15} />
              </Link>
            </div>
          </div>

          {/* Related Solutions */}
          <div className="rounded-2xl border border-slate-200/50 bg-slate-50 p-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              راهکارهای سازمانی متصل
            </span>
            <h3 className="mt-2 text-xl font-bold text-blue-950">
              راهکارهای سازمانی متصل به این مدل
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {relatedSolutions.map((sol, i) => {
                const SolIcon = sol.icon;
                return (
                  <Link
                    key={i}
                    href={sol.href}
                    className="group rounded-2xl border border-slate-200/50 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg"
                  >
                    <div className="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-emerald-400">
                      <SolIcon size={16} />
                    </div>
                    <h4 className="mt-3 text-xs font-bold text-blue-950 group-hover:text-emerald-600 transition-colors">
                      {sol.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {sol.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── B2B Conversion CTA Banner ── */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
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
                {ctaTitle}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-7 text-slate-300">
                {ctaSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500 active:scale-[0.98] transition-all duration-300"
              >
                درخواست جلسه امکان‌سنجی
                <ArrowLeft size={16} />
              </Link>
              <Link
                href="/business-model"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all duration-300"
              >
                مرکز مدل‌های کسب‌وکار
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

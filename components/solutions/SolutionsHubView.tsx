'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  ShoppingBag,
  Plane,
  HeartPulse,
  Landmark,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Workflow,
  CheckCircle2,
  DollarSign,
  Award,
  Users,
} from 'lucide-react';
import SolutionSubNav from './SolutionSubNav';
import SolutionDiagram from './SolutionDiagram';
import { solutionsHubOverviewData } from './solutions-data';

export default function SolutionsHubView() {
  const {
    eyebrow,
    title,
    highlight,
    subtitle,
    heroMetrics,
    industries,
    amaasTitle,
    amaasSubtitle,
    amaasPillars,
    roadmapTitle,
    roadmapSubtitle,
    roadmapSteps,
    valueProps,
  } = solutionsHubOverviewData;

  return (
    <div className="w-full bg-white pb-24" dir="rtl">
      
      {/* ── Sub Navigation ── */}
      <SolutionSubNav />

      {/* ── Hero Section ── */}
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-16 lg:px-8 lg:pt-14 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left / Text Side */}
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
                href="#industries"
                className="group flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 active:scale-[0.98] transition-all duration-200"
              >
                بررسی ۴ صنعت هدف
                <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
              <Link
                href="/contact/request-demo"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] transition-all duration-200"
              >
                درخواست جلسه و پایلوت میدانی
              </Link>
            </div>

            {/* Live Metrics Row matching StatsBar.tsx */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-200/80 pt-6">
              {heroMetrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col gap-1 rounded-2xl border border-slate-200/50 bg-slate-50 p-4 text-center transition-all duration-300 hover:bg-white hover:shadow-sm"
                >
                  <span className="text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight">
                    {m.value}
                  </span>
                  <p className="text-xs font-bold text-slate-700 leading-5">
                    {m.label}
                  </p>
                  {m.subLabel && (
                    <span className="text-[11px] text-slate-500">
                      {m.subLabel}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right / Dynamic Visual Diagram */}
          <div className="relative">
            <SolutionDiagram type="hub" systemCode="MITECH-AMAAS-HUB-v3.2" />
          </div>

        </div>
      </section>

      {/* ── 4 Target Industries Showcase Grid ── */}
      <section id="industries" className="border-t border-slate-200/50 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                ۴ صنعت هدف راهکارهای خودران
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
                راهکارهای اختصاصی برای محیط‌های پرتردد
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base leading-7 text-slate-600">
              هر صنعت با چالش‌های حرکتی و لجستیکی متفاوتی روبروست. ام‌آی‌تک پکیج اختصاصی هر محیط را همراه با ناوگان و سناریوی عملیاتی آماده استقرار ارائه می‌دهد.
            </p>
          </div>

          {/* 4 Industry Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-7 sm:p-9 shadow-xs hover:border-slate-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Top Row: Index, Badge, Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-emerald-600">
                          ۰{index + 1}
                        </span>
                        <span className="text-slate-300">/</span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                          {ind.badge}
                        </span>
                      </div>
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mt-5">
                      <h3 className="text-2xl font-extrabold text-blue-950 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {ind.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {ind.shortDesc}
                    </p>

                    {/* Pain Point vs Mitech Solution Preview Box */}
                    <div className="mt-6 space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-xs leading-6">
                      <div className="flex items-start gap-2 text-slate-700">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-slate-400" />
                        <p><strong className="font-bold text-blue-950">چالش سنتی: </strong>{ind.painPointSummary}</p>
                      </div>
                      <div className="flex items-start gap-2 text-emerald-800">
                        <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-600" />
                        <p><strong className="font-bold">راهکار ام‌آی‌تک: </strong>{ind.mitechSolutionSummary}</p>
                      </div>
                    </div>

                    {/* Fleet Preview Badges */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold text-slate-500">ناوگان مستقر:</span>
                      {ind.fleetPreview.map((fleetItem) => (
                        <span
                          key={fleetItem}
                          className="rounded-lg bg-emerald-50 border border-emerald-500/20 px-2.5 py-1 text-[11px] font-bold text-emerald-800"
                        >
                          {fleetItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Key Metric & Link */}
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div>
                      <span className="text-xl font-extrabold text-emerald-600 tracking-tight block">
                        {ind.keyMetric.value}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {ind.keyMetric.label}
                      </span>
                    </div>

                    <Link
                      href={ind.href}
                      className="group/link inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition-colors"
                    >
                      <span>مشاهده کامل راهکار</span>
                      <ArrowUpLeft size={15} className="transition-transform group-hover/link:-translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── The AMaaS Business Model Section (Zero CAPEX) ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="rounded-3xl bg-slate-950 p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Engineering Background Grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(52, 211, 153, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 211, 153, 0.2) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
                حمل‌ونقل خودران به عنوان خدمت (AMaaS)
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {amaasTitle}
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-8 text-slate-200">
                {amaasSubtitle}
              </p>
            </div>

            {/* 4 AMaaS Pillars Grid */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {amaasPillars.map((pillar) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={pillar.number}
                    className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/90 p-6 backdrop-blur-sm hover:border-slate-700 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-400">
                          {pillar.number}
                        </span>
                        <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-emerald-400">
                          <PillarIcon size={18} />
                        </div>
                      </div>
                      <h3 className="mt-6 text-lg font-bold text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {pillar.englishTitle}
                      </p>
                      <p className="mt-3 text-xs leading-6 text-slate-300">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-slate-800 pt-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        {pillar.highlight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout Banner */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-slate-950">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    آماده تعریف پایلوت اختصاصی برای سازمان خود هستید؟
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    تیم مهندسی و مالی ام‌آی‌تک طرح توجیهی و تحلیل ترافیک مجموعه شما را به رایگان تدوین می‌کند.
                  </p>
                </div>
              </div>
              <Link
                href="/contact/request-demo"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white hover:bg-emerald-500 transition-colors"
              >
                <span>درخواست جلسه مشاوره AMaaS</span>
                <ArrowLeft size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4-Stage Deployment Roadmap ── */}
      <section className="border-t border-slate-200/50 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              مراحل استقرار و راه‌اندازی
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              {roadmapTitle}
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-8">
              {roadmapSubtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roadmapSteps.map((s) => (
              <div
                key={s.step}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-6 sm:p-7 shadow-xs hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-50 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-700">
                      {s.step}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      {s.timeframe}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-blue-950 leading-7">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-600">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-[11px] font-bold text-slate-700 mb-2">خروجی‌های کلیدی این فاز:</p>
                  <ul className="space-y-1.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[11px] text-slate-600 leading-5">
                        <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-emerald-600" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Enterprise Value Propositions ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {valueProps.map((vp) => {
            const VpIcon = vp.icon;
            return (
              <div
                key={vp.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/50 bg-white p-6 shadow-xs"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <VpIcon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-blue-950">
                    {vp.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {vp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Enterprise CTA ── */}
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <div className="rounded-2xl bg-slate-950 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg border border-slate-800">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
              شروع با یک پایلوت میدانی
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              همین امروز زیرساخت مجموعه خود را هوشمند کنید
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-7">
              یک جلسه کوتاه با تیم مهندسی و توسعه کسب‌وکار ام‌آی‌تک جهت بررسی پلان فضا، طراحی ناوگان بهینه و تعریف پایلوت میدانی بدون هزینه اولیه.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact/request-demo"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-500 transition-colors"
            >
              <span>درخواست جلسه مشاوره و دمو</span>
              <ArrowLeft size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-700 transition-colors"
            >
              تماس با کارشناسان
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

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
  Sparkles,
  Workflow,
  DollarSign,
  Boxes,
  Users,
  Clock,
  TrendingUp,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import SolutionSubNav from './SolutionSubNav';
import SolutionDiagram from './SolutionDiagram';
import { SolutionSlug, solutionsSubPagesData } from './solutions-data';

interface SolutionDetailViewProps {
  slug: SolutionSlug;
}

export default function SolutionDetailView({ slug }: SolutionDetailViewProps) {
  const data = solutionsSubPagesData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <div className="py-20 text-center" dir="rtl">
        <h1 className="text-2xl font-bold text-blue-950">صفحه راهکار مورد نظر یافت نشد.</h1>
        <Link href="/solutions" className="mt-4 inline-block text-emerald-600 font-bold">
          بازگشت به مرکز راهکارها
        </Link>
      </div>
    );
  }

  const {
    eyebrow,
    tagline,
    title,
    fullDesc,
    icon: PageIcon,
    systemCode,
    painTitle,
    painSubtitle,
    pains,
    solutionTitle,
    solutionSubtitle,
    solutionHighlights,
    valueTitle,
    valueSubtitle,
    outcomes,
    metrics,
    businessModelSummary,
    fleetArrayTitle,
    fleetArrayDesc,
    deployedFleet,
    deploymentProcessTitle,
    deploymentProcessDesc,
    deploymentSteps,
    faq,
    relatedTech,
    siblingSolutions,
  } = data;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-white pb-24" dir="rtl">
      
      {/* ── Sub Navigation ── */}
      <SolutionSubNav activeSlug={slug} />

      {/* ── Hero Section ── */}
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-16 lg:px-8 lg:pt-14 lg:pb-20">
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

            {/* Description */}
            <p className="mt-6 max-w-xl text-pretty text-base sm:text-lg leading-8 text-slate-600">
              {fullDesc}
            </p>

            {/* Feature Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                <CheckCircle2 size={13} className="text-emerald-600" />
                استقرار با مدل AMaaS (Zero CAPEX)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                <ShieldCheck size={13} className="text-emerald-600" />
                پوشش ۱۰۰٪ بیمه و نگهداری شبانه‌روزی
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/request-demo"
                className="group flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 active:scale-[0.98] transition-all duration-300"
              >
                درخواست جلسه و تعریف پایلوت
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              </Link>
              <a
                href="#fleet"
                className="flex items-center gap-2 rounded-full border border-slate-200/50 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
              >
                مشاهده ناوگان مستقر
              </a>
            </div>

          </div>

          {/* Right Visual Diagram */}
          <div className="relative">
            <SolutionDiagram type={slug} systemCode={systemCode} />
          </div>

        </div>
      </section>

      {/* ── Challenge to Value Matrix (Pain Points vs Solution) ── */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              از چالش عملیاتی تا ارزش قابل اندازه‌گیری
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              مقایسه رویکرد سنتی با راهکار هوشمند ام‌آی‌تک
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-7">
              بررسی دقیق مشکلات متداول مدیران در این حوزه و نحوه رفع اساسی آن‌ها با فناوری‌های خودران و مدل اقتصادی پایدار.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Left: Traditional Pain Points Card */}
            <div className="rounded-2xl border border-slate-200/50 bg-slate-50 p-7 sm:p-9 shadow-xs">
              <div className="flex items-center gap-3 text-slate-900 mb-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-slate-200 text-slate-700">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">چالش‌ها و دردهای مدیران</h3>
                  <p className="text-xs text-slate-500">هزینه‌های پنهان، اتلاف زمان و نارضایتی مراجعین</p>
                </div>
              </div>

              <div className="space-y-4">
                {pains.map((p, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                    <p className="font-bold text-blue-950 text-sm flex items-start gap-2">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-slate-400" />
                      {p.problem}
                    </p>
                    <p className="mt-1.5 text-xs leading-6 text-slate-600 pr-4">
                      <strong className="text-slate-800">پیامد عملیاتی: </strong>{p.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mitech Modern Solution Card */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50 p-7 sm:p-9 shadow-xs">
              <div className="flex items-center gap-3 text-emerald-950 mb-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">راهکار اختصاصی و بومی ام. آی. تک.</h3>
                  <p className="text-xs text-emerald-700">ناوگان خودران، اتوماسیون کامل و درآمدزایی</p>
                </div>
              </div>

              <div className="space-y-4">
                {solutionHighlights.map((sol, idx) => {
                  return (
                    <div key={idx} className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-blue-950 font-bold text-sm">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                          <span>{sol.title}</span>
                        </div>
                        {sol.badge && (
                          <span className="rounded-full bg-emerald-50 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                            {sol.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs leading-6 text-slate-600 pr-6">
                        {sol.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Measurable Value Creation & Key Metrics ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left: ROI Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-slate-50 p-6 text-center shadow-xs hover:border-slate-300 hover:bg-white transition-all duration-300"
              >
                <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600 tracking-tight">
                  {m.value}
                </span>
                <div className="mt-3">
                  <p className="text-xs font-bold text-slate-800 leading-5">
                    {m.label}
                  </p>
                  {m.subLabel && (
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {m.subLabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Key Outcomes List */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              ارزش‌آفرینی و نتایج قابل اندازه‌گیری
            </p>
            <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">
              {valueTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-7">
              {valueSubtitle}
            </p>

            <ul className="mt-8 space-y-3.5">
              {outcomes.map((outcome, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 text-xs sm:text-sm leading-6 text-slate-700 shadow-xs"
                >
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── Business Model Spotlight (AMaaS Zero CAPEX) ── */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded-2xl bg-slate-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-lg border border-slate-800">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-bold text-emerald-300 mb-4">
                <DollarSign size={13} />
                مدل مالی و کسب‌وکار
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {businessModelSummary.title}
              </h3>
              <p className="text-xs text-emerald-400 font-bold mt-1">
                مدل: {businessModelSummary.modelType}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-7">
                {businessModelSummary.description}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm">
              <p className="text-xs font-bold text-emerald-400 mb-3">مزایای اختصاصی این مدل برای سازمان شما:</p>
              <ul className="space-y-2.5">
                {businessModelSummary.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-6">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-emerald-400" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deployed Fleet Array ── */}
      <section id="fleet" className="border-t border-slate-200/50 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                محصولات و تجهیزات سخت‌افزاری
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
                {fleetArrayTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              {fleetArrayDesc}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {deployedFleet.map((product) => (
              <div
                key={product.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-7 sm:p-9 shadow-xs hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-50 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-800">
                      {product.tag}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Boxes size={20} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-blue-950 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {product.role}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    <p className="text-xs font-bold text-slate-800">مشخصات کلیدی این محصول:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feat, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-slate-50 border border-slate-200/60 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5"
                        >
                          <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-slate-700"
                  >
                    <span>مشاهده مشخصات فنی کامل محصول</span>
                    <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Implementation Process ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
            نقشه راه استقرار در مجموعه
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            {deploymentProcessTitle}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-8">
            {deploymentProcessDesc}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {deploymentSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-6 shadow-xs hover:border-slate-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600">
                    گام {step.stepNumber}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-blue-950 leading-6">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-slate-600">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-[11px] font-bold text-slate-700 mb-2">خروجی‌ها:</p>
                <ul className="space-y-1.5">
                  {step.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-5">
                      <CheckCircle2 size={11} className="mt-0.5 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="border-t border-slate-200/50 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          
          <div className="text-center mb-14">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              پرسش‌های متداول مدیران
            </p>
            <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">
              پاسخ به سوالات کلیدی پیرامون این راهکار
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/50 bg-white overflow-hidden shadow-xs transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-right font-bold text-blue-950 text-sm sm:text-base hover:text-emerald-700 transition-all duration-300"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-xs sm:text-sm leading-7 text-slate-600 bg-slate-50">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Sibling Solutions & Related Technologies ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Sibling Solutions */}
          <div className="rounded-2xl border border-slate-200/50 bg-white p-7 shadow-xs">
            <h3 className="text-lg font-bold text-blue-950 mb-4">سایر راهکارهای سازمانی ام‌آی‌تک</h3>
            <div className="space-y-3">
              {siblingSolutions.map((sib) => {
                const SibIcon = sib.icon;
                return (
                  <Link
                    key={sib.href}
                    href={sib.href}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 hover:border-slate-300 hover:bg-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-emerald-50 text-emerald-700 p-2.5">
                        <SibIcon size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-blue-950 text-sm group-hover:text-emerald-700 transition-colors">
                          {sib.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{sib.desc}</p>
                      </div>
                    </div>
                    <ChevronLeft size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Related Technologies */}
          <div className="rounded-2xl border border-slate-200/50 bg-white p-7 shadow-xs">
            <h3 className="text-lg font-bold text-blue-950 mb-4">فناوری‌های بنیادین به‌کاررفته</h3>
            <div className="space-y-3">
              {relatedTech.map((tech) => (
                <Link
                  key={tech.href}
                  href={tech.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 hover:border-slate-300 hover:bg-white transition-all duration-300 group"
                >
                  <div>
                    <p className="font-bold text-blue-950 text-sm group-hover:text-emerald-700 transition-colors">
                      {tech.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{tech.desc}</p>
                  </div>
                  <ChevronLeft size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <div className="rounded-2xl bg-slate-950 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg border border-slate-800">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
              آماده استقرار در مجموعه خود هستید؟
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              اجرای پایلوت این راهکار در مجموعه شما
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-7">
              همین امروز با کارشناسان سازمانی ام‌آی‌تک تماس بگیرید تا ظرف ۴۸ ساعت طرح اولیه استقرار و تحلیل درآمدی مجموعه شما آماده شود.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact/request-demo"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-500 transition-colors"
            >
              <span>درخواست پایلوت میدانی</span>
              <ArrowLeft size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-700 transition-all duration-300"
            >
              تماس با واحد فروش B2B
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

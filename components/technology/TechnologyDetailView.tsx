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
} from 'lucide-react';
import TechSubNav from './TechSubNav';
import TechnicalDiagram from './TechnicalDiagram';
import { TechSlug, techSubPagesData } from './tech-data';

interface TechnologyDetailViewProps {
  slug: TechSlug;
}

export default function TechnologyDetailView({ slug }: TechnologyDetailViewProps) {
  const data = techSubPagesData[slug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <div className="py-20 text-center" dir="rtl">
        <h1 className="text-2xl font-bold text-blue-950">صفحه مورد نظر یافت نشد.</h1>
        <Link href="/technology" className="mt-4 inline-block text-emerald-600 font-bold">
          بازگشت به مرکز فناوری
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
    diagramType,
    systemCode,
    features,
    metrics,
    architectureTitle,
    architectureDesc,
    layers,
    useCasesTitle,
    useCasesDesc,
    useCases,
    faq,
    relatedProducts,
  } = data;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-white pb-24" dir="rtl">
      
      {/* ── Sub Navigation ── */}
      <TechSubNav activeSlug={slug} />

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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 size={13} className="text-emerald-600" />
                فناوری بومی R&D میکائیل
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
                <ShieldCheck size={13} className="text-emerald-600" />
                لایه ایمنی اضطراری سخت‌افزاری
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-800">
                <Zap size={13} className="text-blue-600" />
                پردازش بلادرنگ در لبه
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/request-demo"
                className="group flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 active:scale-[0.98] transition-all duration-200"
              >
                درخواست مشاوره فنی و تست آزمایشگاهی
                <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
              </Link>
              <a
                href="#features"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                مشاهده مشخصات فنی
              </a>
            </div>
          </div>

          {/* Right Diagram */}
          <div>
            <TechnicalDiagram type={diagramType} systemCode={systemCode} />
          </div>

        </div>
      </section>

      {/* ── Performance Benchmarks & Metrics (matching StatsBar.tsx on dark background) ── */}
      <section className="border-y border-slate-800/80 bg-slate-950 text-white py-12 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col gap-1.5 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-center shadow-xs transition-all duration-300 hover:bg-slate-900 hover:border-emerald-500/40"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 tracking-tight">
                  {metric.value}
                </span>
                <p className="mt-1 text-sm font-bold text-white leading-snug">
                  {metric.label}
                </p>
                {metric.subLabel && (
                  <p className="text-xs text-slate-400 leading-normal">{metric.subLabel}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Capabilities & Modules Grid ── */}
      <section id="features" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              قابلیت‌های کلیدی
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              ویژگی‌های الگوریتمی و سخت‌افزاری
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-7 text-slate-600">
            توسعه‌یافته بر پایه استانداردهای صنعتی بین‌المللی با تمرکز بر بالاترین ضریب اطمینان و ایمنی.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const FeatIcon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-slate-50 p-7 shadow-xs hover:border-emerald-400 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-900 text-emerald-400 shadow-md group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <FeatIcon size={22} />
                    </div>
                    {feature.badge && (
                      <span className="rounded-full bg-emerald-50 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-blue-950 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── System Architecture & Data Flow Pipeline ── */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
              خط لوله پردازش داده
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              {architectureTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              {architectureDesc}
            </p>
          </div>

          {/* 4 Layers Step Flow */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {layers.map((layer, index) => (
              <div
                key={layer.step}
                className="relative rounded-2xl border border-slate-200/50 bg-white p-6 shadow-xs flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 text-sm font-extrabold">
                      {layer.step}
                    </span>
                    {index < layers.length - 1 && (
                      <span className="hidden lg:block text-slate-300 font-bold text-xl">
                        ←
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-base font-bold text-blue-950">{layer.title}</h3>
                  <p className="text-xs text-emerald-700 font-bold mt-1">
                    {layer.sub}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm leading-6 text-slate-600">
                    {layer.desc}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real-World Operational Use Cases ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            کاربردهای عملیاتی
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            {useCasesTitle}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {useCasesDesc}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-7 shadow-xs hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <span className="inline-block rounded-full bg-emerald-50 border border-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-700">
                  {useCase.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold text-blue-950">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{useCase.desc}</p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-bold text-emerald-700 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                <span>{useCase.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Technical FAQ Accordion ── */}
      <section className="border-t border-slate-200/50 bg-slate-50 py-16 px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              پرسش و پاسخ فنی
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              پرسش‌های متداول مهندسی
            </h2>
          </div>

          <div className="space-y-3">
            {faq.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200/50 bg-white overflow-hidden shadow-xs transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-right font-bold text-blue-950 hover:text-emerald-700 transition-all duration-300"
                  >
                    <span className="text-sm sm:text-base">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 shrink-0 mr-3 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Related Fleet Products Cross-Links ── */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-950">
            محصولات و ناوگان مجهز به این فناوری
          </h2>
          <Link
            href="/fleet"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-600"
          >
            مشاهده تمام ناوگان
            <ChevronLeft size={16} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {relatedProducts.map((prod) => (
            <Link
              key={prod.title}
              href={prod.href}
              className="group rounded-2xl border border-slate-200/50 bg-white p-5 shadow-xs hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-blue-950 group-hover:text-emerald-700 transition-colors text-base">
                  {prod.title}
                </h3>
                <ArrowUpLeft size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </div>
              <p className="mt-2 text-xs leading-6 text-slate-500">{prod.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Final Enterprise CTA ── */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-8 py-12 text-white shadow-xl sm:px-12 border border-slate-800">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                درخواست دمو و همکاری سازمانی
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
                آماده‌اید این فناوری را در سازمان یا محصول خود پیاده کنید؟
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                دریافت داکیومنت فنی (Whitepaper) یا جلسه حضوری با تیم تحقیق و توسعه میکائیل.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-500 transition-colors"
              >
                درخواست جلسه تخصصی
                <ArrowLeft size={16} />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white px-3 py-2"
              >
                بازگشت به مرکز فناوری
                <ChevronLeft size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

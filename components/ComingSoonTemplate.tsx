"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ChevronLeft,
  Clock,
  Send,
  PhoneCall,
  CheckCircle2,
  Cpu,
  Boxes,
} from 'lucide-react';

export interface SiblingLink {
  label: string;
  href: string;
  desc?: string;
}

export interface HighlightItem {
  title: string;
  desc: string;
}

interface ComingSoonTemplateProps {
  title: string;
  englishTitle?: string;
  category: string;
  categoryHref: string;
  description: string;
  highlights?: HighlightItem[];
  siblingLinks?: SiblingLink[];
  ctaText?: string;
  ctaHref?: string;
}

export default function ComingSoonTemplate({
  title,
  englishTitle,
  category,
  categoryHref,
  description,
  highlights = [],
  siblingLinks = [],
  ctaText = 'درخواست مشاوره و دمو',
  ctaHref = '/contact/request-demo',
}: ComingSoonTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-8 font-[Vazirmatn,sans-serif]" dir="rtl">
      {/* ── Breadcrumb ── */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium py-3">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            صفحه اصلی
          </Link>
          <ChevronLeft size={14} className="text-slate-400" />
          <Link href={categoryHref} className="hover:text-emerald-600 transition-colors">
            {category}
          </Link>
          <ChevronLeft size={14} className="text-slate-400" />
          <span className="text-blue-950 font-bold">{title}</span>
        </nav>
      </div>

      {/* ── Hero Banner ── */}
      <section className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          {/* Subtle Background Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-slate-800/40 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl">
            {/* Category + Status Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400 backdrop-blur-md">
                <Boxes size={14} />
                {category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                <Clock size={13} className="animate-pulse" />
                در دست آماده‌سازی و توسعه محتوا
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl leading-tight text-white">
              {title}
            </h1>

            {englishTitle && (
              <p className="mt-2 text-sm font-semibold tracking-wider text-slate-400 uppercase" dir="ltr">
                {englishTitle}
              </p>
            )}

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/30"
              >
                {ctaText}
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights / Features Preview ── */}
      {highlights.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pt-14 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
              ویژگی‌های کلیدی و معماری
            </p>
            <h2 className="text-xl font-bold text-blue-950">محورها و مشخصات در دست پیاده‌سازی</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200/50 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm">
                    0{idx + 1}
                  </span>
                  <h3 className="font-bold text-blue-950 text-base">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Sibling / Navigation Links in this Section ── */}
      {siblingLinks.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pt-14 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Boxes size={20} className="text-emerald-600" />
              <h2 className="text-xl font-bold text-blue-950">سایر بخش‌های مرتبط در {category}</h2>
            </div>
            <Link
              href={categoryHref}
              className="text-xs font-bold text-slate-600 hover:text-emerald-600 flex items-center gap-1"
            >
              مشاهده منوی جامع
              <ChevronLeft size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siblingLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-5 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-950 group-hover:text-emerald-700 transition-colors">
                      {link.label}
                    </span>
                    <ArrowLeft
                      size={16}
                      className="text-slate-400 transition-transform group-hover:-translate-x-1 group-hover:text-emerald-600"
                    />
                  </div>
                  {link.desc && (
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{link.desc}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Direct Contact & Pilot Request Banner ── */}
      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200/50 bg-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-2">
              <CheckCircle2 size={16} />
              پایلوت آزمایشی و مشاوره مهندسی
            </div>
            <h3 className="text-2xl font-bold text-blue-950">
              نیاز به پیاده‌سازی اختصاصی یا مشاوره فنی دارید؟
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              تیم فنی و مهندسی ام‌آی‌تک آماده پاسخگویی به سوالات، برگزاری جلسات دمو حضوری و امکان‌سنجی پروژه‌های خودران است.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact/sales"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/50 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors duration-300"
            >
              <PhoneCall size={16} className="text-slate-700" />
              تماس با واحد فروش
            </Link>
            <Link
              href="/contact/request-demo"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600 transition-colors duration-300 shadow-xs"
            >
              <Send size={16} />
              ثبت درخواست دمو
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

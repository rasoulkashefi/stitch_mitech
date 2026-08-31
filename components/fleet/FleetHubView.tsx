'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  CircleDot,
  Radar,
  Route,
  Navigation,
  ScanLine,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Activity,
  Radio,
} from 'lucide-react';
import { fleetProducts, fleetCategories, ProductItem } from '@/lib/fleet-products';
import ProductVisual from '@/components/fleet/ProductVisual';

export default function FleetHubView() {
  const [activeFilter, setActiveFilter] = useState<string>(fleetCategories[0]);

  const visibleProducts = useMemo(() => {
    if (activeFilter === fleetCategories[0]) return fleetProducts;
    return fleetProducts.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  const getFilterCount = (filterName: string) => {
    if (filterName === fleetCategories[0]) return fleetProducts.length;
    return fleetProducts.filter((p) => p.category === filterName).length;
  };

  return (
    <div className="w-full bg-white pb-24 font-[Vazirmatn,sans-serif]" dir="rtl">
      
      {/* ── Breadcrumb ── */}
      <div className="border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-xs">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-3 text-xs text-slate-500 lg:px-8">
          <Link href="/" className="transition-colors hover:text-emerald-600">
            صفحه اصلی
          </Link>
          <ChevronRight size={14} className="rotate-180 text-slate-400" />
          <span className="font-semibold text-slate-900">محصولات و ناوگان خودران</span>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-16 lg:px-8 lg:pt-16 lg:pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-b from-slate-50 via-white to-slate-50 p-8 text-center shadow-xs sm:p-12 md:p-16">
          <div className="mx-auto max-w-3xl">
            
            {/* Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              اکوسیستم ناوگان هوشمند و تجهیزات توانبخشی
            </div>

            {/* H1 Headline */}
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.25] text-blue-950 tracking-tight">
              آزادی در حرکت،
              <br />
              <span className="text-emerald-600">قدرت در کنترل</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base sm:text-lg leading-8 text-slate-600">
              از ویلچرهای خودران شخصی تا ناوگان رباتیک حمل بار سازمانی. پلتفرم‌های حرکتی میکائیل برای استقلال انسان، بالاترین ضریب ایمنی و هوشمندسازی محیط‌های پرتردد مهندسی شده‌اند.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#products"
                className="group flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 active:scale-[0.98] transition-all duration-200"
              >
                مشاهده محصولات ناوگان
                <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
              <Link
                href="/contact/request-demo"
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] transition-all duration-200"
              >
                درخواست دمو و پایلوت میدانی
              </Link>
            </div>
          </div>

          {/* Telemetry Status Bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/80 pt-6 gap-4 text-xs text-slate-500">
            <div className="hero-signals hidden sm:flex">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                <CircleDot size={12} className="text-emerald-600" />
                MITECH AUTONOMY SUITE v2.4
              </span>
              <div className="signal-line" />
              <span className="flex items-center gap-1 text-slate-600">
                INDOOR SLAM / READY
              </span>
            </div>

            <div className="flex w-full items-center justify-center gap-6 sm:w-auto sm:justify-end text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Activity size={15} className="text-emerald-600" />
                ایمنی فعال ۳۶۰°
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Radio size={15} className="text-sky-600" />
                ارتباط بلادرنگ ابری
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products & Ecosystem Section ── */}
      <section id="products" className="bg-slate-50 py-20 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-right">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                محصولات و تجهیزات ناوگان هوشمند
              </p>
              <h2 className="text-3xl font-extrabold text-blue-950 lg:text-5xl leading-tight tracking-tight">
                اکوسیستم جامع حرکت هوشمند
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="فیلتر محصولات ناوگان">
              {fleetCategories.map((item) => {
                const isSelected = activeFilter === item;
                const count = getFilterCount(item);

                return (
                  <button
                    key={item}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveFilter(item)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{item}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => {
              return (
                <Link
                  key={product.id}
                  href={product.href}
                  className="product-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-4 shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Visual Graphic */}
                    <ProductVisual icon={product.icon} tone={product.tone} />

                    {/* Card Body */}
                    <div className="p-3 pt-5">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
                          {product.category}
                        </p>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {product.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-blue-950 group-hover:text-emerald-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="font-mono text-xs text-slate-400 mt-0.5">
                        {product.englishTitle}
                      </p>

                      <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-slate-500">
                        {product.description}
                      </p>

                      {/* Specs Chips */}
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
                        {product.specs.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                          >
                            <CheckCircle2 size={13} className="text-emerald-600" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 p-3 pt-4">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      مشاهده جزئیات و مشخصات فنی
                    </span>
                    <span className="grid size-9 place-items-center rounded-full bg-slate-50 border border-slate-200 text-slate-700 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpLeft size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── AMaaS (Autonomous Mobility as a Service) Enterprise Banner ── */}
      <section id="amaas" className="bg-slate-950 px-5 py-24 lg:px-8 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            
            {/* Right column: Info & Actions */}
            <div className="max-w-2xl text-right">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
                خدمات حمل‌ونقل خودران سازمانی (AMaaS)
              </p>
              
              <h2 className="text-3xl font-extrabold leading-tight text-white lg:text-5xl tracking-tight">
                فضاهای بزرگ‌تر،
                <br />
                ناوگان <span className="text-emerald-400">خودران و هوشمند.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-200">
                بدون نیاز به خرید سنگین تجهیزات، فرودگاه، مجتمع تجاری یا مرکز درمانی خود را به ناوگان مدرن و خودران مجهز کنید. مدیریت متمرکز نرم‌افزاری، شارژ خودکار، کاهش هزینه‌های عملیاتی و ارتقای چشمگیر کلاس خدماتی مجموعه شما.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/request-demo"
                  className="group flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 hover:bg-emerald-500 hover:shadow-emerald-900/50 active:scale-[0.98] transition-all duration-200"
                >
                  درخواست مشاوره سازمانی و پایلوت
                  <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
                </Link>
                <Link
                  href="/business-model/amaas"
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/40 active:scale-[0.98] transition-all duration-200"
                >
                  آشنایی با مدل تجاری AMaaS
                </Link>
              </div>
            </div>

            {/* Left column: High-Tech Interactive Radar Visual */}
            <div className="amaas-graphic" aria-hidden="true">
              <div className="radar-sweep" />
              <Route className="absolute left-8 top-8 text-emerald-400" size={38} strokeWidth={1.2} />
              <Navigation className="absolute right-10 top-12 text-slate-400" size={28} strokeWidth={1.2} />
              <ScanLine className="absolute bottom-10 left-16 text-slate-500" size={44} strokeWidth={1.2} />
              <div className="graphic-core">
                <Radar size={68} strokeWidth={0.8} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── Structured Product Guide / Specifications Grid ── */}
      <section
        id="product-information"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"
        aria-labelledby="product-information-title"
      >
        <div className="rounded-2xl border border-slate-200/50 bg-white p-8 md:p-12 shadow-xs">
          
          <div className="max-w-3xl text-right">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              راهنمای انتخاب و معماری ناوگان
            </p>
            <h2
              id="product-information-title"
              className="text-2xl font-extrabold text-blue-950 sm:text-3xl lg:text-4xl tracking-tight"
            >
              محصولات و ناوگان میکائیل چه نیازی را پوشش می‌دهند؟
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              میکائیل یک پلتفرم یکپارچه از تجهیزات توانبخشی پیشرفته، وسایل نقلیه خودران انفرادی و زیرساخت‌های نرم‌افزاری هدایت ناوگان است که برای افزایش استقلال فردی و خودکارسازی لجستیک در فضاهای پرتردد طراحی شده است.
            </p>
          </div>

          <div className="mt-10 grid gap-6 border-t border-slate-100 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {fleetProducts.map(({ title, englishTitle, description, category, tag, href }) => (
              <article
                key={title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-slate-50 p-6 transition-all hover:border-slate-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div>
                  <meta itemProp="brand" content="Mitech" />
                  <meta itemProp="category" content={category} />
                  
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700">{category}</span>
                    <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-xs font-semibold text-slate-700">{tag}</span>
                  </div>

                  <h3 itemProp="name" className="text-base font-bold text-blue-950">
                    <Link href={href} className="hover:text-emerald-600 transition-colors">
                      {title}
                    </Link>
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mb-2 mt-0.5">{englishTitle}</p>
                  
                  <p itemProp="description" className="text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    اطلاعات کامل
                    <ArrowLeft size={14} />
                  </Link>
                  <span className="text-xs text-slate-400">گارانتی و پشتیبانی رسمی</span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── JSON-LD Structured Data for SEO ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'محصولات و ناوگان خودران میکائیل (Mitech Fleet)',
            description: 'اکوسیستم وسایل نقلیه خودران، ویلچر هوشمند، ربات‌های باربر و سیستم‌های ناوبری رباتیک میکائیل.',
            itemListElement: fleetProducts.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Product',
                name: item.title,
                alternateName: item.englishTitle,
                description: item.description,
                category: item.category,
                url: `https://mitech.ir${item.href}`,
                brand: {
                  '@type': 'Brand',
                  name: 'میکائیل (Mitech)',
                },
              },
            })),
          }),
        }}
      />
    </div>
  );
}

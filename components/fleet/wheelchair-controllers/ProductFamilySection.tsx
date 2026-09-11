'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Tv, 
  Sliders, 
  Lightbulb, 
  SlidersHorizontal,
  ChevronDown,
  ArrowLeft,
  Volume2
} from 'lucide-react';

interface ProductCardData {
  id: string;
  name: string;
  englishName: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  displayType: string;
  accentColor: string;
  highlightPill: string;
  features: string[];
  keySpecs: { label: string; value: string }[];
}

const products: ProductCardData[] = [
  {
    id: 'mini',
    name: 'میکائیل مینی (Mini)',
    englishName: 'Mikaeel Mini',
    badge: 'اقتصادی و فشرده',
    tagline: 'بالاترین سطح مانورپذیری در فضاهای بسته و محدود',
    description: 'مدلی مینیمال با نمایشگر LED، طراحی شده برای ایجاد بالاترین سطح مانورپذیری در فضاهای بسته و محدود. ابعاد بسیار کوچک این ماژول، خطر برخورد جویستیک با دیواره‌ها را به صفر می‌رساند.',
    image: '/images/fleet/controllers/mini.jpg',
    displayType: 'نمایشگر LED خطی',
    accentColor: 'border-slate-300 text-slate-700 bg-white',
    highlightPill: 'حداقل ابعاد • صفر برخورد',
    features: [
      'نمایشگر خطی LED شفاف برای باتری و سرعت',
      'طراحی فوق فشرده ارگونومیک جهت پیشگیری از برخورد با چهارچوب درها',
      'بهینه‌سازی شده برای فضاهای محدود مسکونی و بالابرها',
      'حداکثر خروجی آمپر: 55A / 90A',
      'دمای عملیاتی فوق‌العاده: ۲۵- تا ۵۰+ درجه سانتی‌گراد',
    ],
    keySpecs: [
      { label: 'نمایشگر', value: 'LED خطی' },
      { label: 'توان جریان', value: '55A / 90A' },
      { label: 'جک جانبی', value: 'ندارد' },
      { label: 'ابعاد', value: 'فوق فشرده' },
    ],
  },
  {
    id: 'pro',
    name: 'میکائیل پرو (Pro)',
    englishName: 'Mikaeel Pro',
    badge: 'پیشرفته با نمایشگر گرافیکی',
    tagline: 'شخصی‌سازی خانگی و پشتیبانی از ضعف عضلانی',
    description: 'مجهز به نمایشگر LCD گرافیکی قدرتمند و پشتیبانی از زیرساخت کد فعال‌سازی و درگاه‌های کمکی.',
    image: '/images/fleet/controllers/pro.jpg',
    displayType: 'Graphic LCD Display',
    accentColor: 'border-slate-300 text-slate-700 bg-white',
    highlightPill: 'Programmable @Home',
    features: [
      'Programmable @Home: امکان شخصی‌سازی تنظیمات نرم‌افزاری در منزل بدون نیاز به مراجعه حضوری',
      'مدیریت جک‌ها: پشتیبانی از یک جک جانبی برقی (مانند جک ایستا)',
      'تطبیق با ضعف عضلانی: پشتیبانی از کلیدهای روشن/خاموش خارجی (External Buddy-Button)',
      'فعال‌سازی حساسیت ۴ برابر اهرم (4x Sensitivity) برای توان‌یابان با توان حرکتی محدود',
      'ورودی‌ها: پشتیبانی از حداکثر ۳ ورودی برنامه‌پذیر',
    ],
    keySpecs: [
      { label: 'نمایشگر', value: 'Graphic LCD' },
      { label: 'جک برقی', value: '۱ عدد (ایستا)' },
      { label: 'تنظیمات در منزل', value: 'پشتیبانی دارد' },
      { label: 'رابط عضلانی', value: 'کلید کمکی + 4x' },
    ],
  },
  {
    id: 'xpro',
    name: 'میکائیل ایکسپرو (X-Pro)',
    englishName: 'Mikaeel X-Pro',
    badge: 'پرچمدار هوشمند (Flagship)',
    tagline: 'روشنایی StVZO، مدیریت ۵ جک و ایمنی برتر شهری',
    description: 'پیشرفته‌ترین عضو خانواده که تمام قابلیت‌های نسخه Pro را به سطح بالاتری ارتقا داده است.',
    image: '/images/fleet/controllers/xpro.jpg',
    displayType: 'Full Graphic Color LCD',
    accentColor: 'border-emerald-600 text-emerald-700 bg-emerald-50',
    highlightPill: 'iSeating تا ۵ جک • روشنایی StVZO',
    features: [
      'سیستم روشنایی بین‌المللی: پشتیبانی کامل از چراغ‌ها، پروژکتور و فلاشر با استاندارد اروپایی StVZO',
      'پشتیبانی گسترده از جک‌ها (iSeating): قابلیت کنترل حداکثر ۵ جک جانبی برقی (ایستا، کمری، پایی و...) ',
      'ورودی‌های توسعه‌یافته: پشتیبانی از حداکثر ۶ ورودی برنامه‌پذیر (Programmable Inhibits)',
      'فضای باز و شهری: مجهز به بوق پرقدرت اختصاصی برای تردد ایمن در محیط‌های پررفت‌وآمد شهری',
      'تمام قابلیت‌های مدل Pro شامل Programmable @Home و فیلترهای تطبیق ضعف عضلانی',
    ],
    keySpecs: [
      { label: 'نمایشگر', value: 'Graphic LCD' },
      { label: 'جک برقی', value: 'تا ۵ جک (iSeating)' },
      { label: 'سیستم روشنایی', value: 'استاندارد StVZO' },
      { label: 'ورودی برنامه‌پذیر', value: 'تا ۶ ورودی' },
    ],
  },
];

export default function ProductFamilySection() {
  const [selectedMobileTab, setSelectedMobileTab] = useState('pro');

  return (
    <section id="product-family" className="py-24 lg:py-32 bg-white text-[#0F172A]" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-[#F1F5F9] px-4 py-1 text-xs font-bold text-[#0F172A] mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span>تنوع سبد محصولات توانبخشی</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
            خانواده کنترلرهای
            <br />
            <span className="text-emerald-600">ویلچر برقی میکائیل</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600 font-normal text-justify">
            سبد محصولات میکائیل در سه رده فشرده، پیشرفته و فول‌آپشن برای پوشش تمامی نیازهای حرکتی و محدودیت‌های فیزیکی توان‌یابان طراحی شده است تا هر کاربر با هر سطح از توانایی جسمی، حرکتی امن، دقیق و مستقل را تجربه کند.
          </p>
        </div>

        {/* Mobile Quick Selector Tabs */}
        <div className="flex sm:hidden rounded-2xl bg-[#F1F5F9] p-1.5 mb-8 border border-slate-200">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedMobileTab(p.id)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                selectedMobileTab === p.id
                  ? 'bg-white text-[#0F172A] shadow-sm'
                  : 'text-slate-500 hover:text-[#0F172A]'
              }`}
            >
              {p.name.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* 3 Modular Product Cards (Desktop Grid / Responsive) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const isSelectedOnMobile = selectedMobileTab === product.id;
            const isFeatured = product.id === 'xpro';

            return (
              <div
                key={product.id}
                className={`product-card group rounded-3xl ${
                  isFeatured
                    ? 'bg-white border-2 border-emerald-500/50 shadow-xl ring-2 ring-emerald-500/20'
                    : 'bg-[#F1F5F9] border border-slate-200'
                } p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isSelectedOnMobile ? 'block' : 'hidden sm:flex'
                }`}
              >
                <div>
                  {/* Top Header & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${product.accentColor}`}>
                      {product.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {product.englishName}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-black text-[#0F172A] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium text-emerald-700 mb-6">
                    {product.tagline}
                  </p>

                  {/* Product Visual Container */}
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white/70 border border-slate-200/80 mb-6 group-hover:border-slate-300 shadow-inner">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    
                    {/* Corner Tag */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-[#0F172A] shadow-xs">
                      {product.highlightPill}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-6 text-slate-700 mb-6 text-justify">
                    {product.description}
                  </p>

                  {/* Mini Spec Matrix */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/70 mb-6">
                    {product.keySpecs.map((spec, i) => (
                      <div key={i} className="text-right p-1.5">
                        <div className="text-xs text-slate-400 font-medium">{spec.label}</div>
                        <div className="text-xs font-bold text-[#0F172A] mt-0.5 truncate">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Points List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      مشخصات و قابلیت‌های برجسته:
                    </div>
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A] leading-5">
                        <span className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action / Footer */}
                <div className="mt-8 pt-6 border-t border-slate-200/90 flex flex-col gap-3">
                  <a
                    href="#specs-comparison"
                    className={`w-full py-3 px-4 rounded-xl text-center text-xs font-bold ${
                      isFeatured ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-[#0F172A] text-white hover:bg-slate-800'
                    } active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm`}
                  >
                    <span>مقایسه دقیق در جدول فنی</span>
                    <ArrowLeft size={14} />
                  </a>

                  <a
                    href="#golden-warranty"
                    className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    استعلام قیمت و مشاوره خرید
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

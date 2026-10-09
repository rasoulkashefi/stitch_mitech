'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Check, 
  Boxes, 
  Tv, 
  Sliders, 
  Lightbulb, 
  Smartphone, 
  ArrowLeft, 
  Volume2, 
  ShieldCheck, 
  Eye, 
  Gauge, 
  Flame,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface AngleView {
  label: string;
  image: string;
}

interface ProductModelVariant {
  name: string;
  power: string;
  app: string;
}

interface ProductCardData {
  id: string;
  name: string;
  englishName: string;
  badge: string;
  tagline: string;
  description: string;
  defaultImage: string;
  angles: AngleView[];
  variants: ProductModelVariant[];
  displayType: string;
  accentColor: string;
  highlightPill: string;
  features: string[];
  keySpecs: { label: string; value: string }[];
}

const products: ProductCardData[] = [
  {
    id: 'mini',
    name: 'آرتک مینی (ARTECH-Mini)',
    englishName: 'ARTECH-Mini Controller Series',
    badge: 'فوق‌فشرده و اقتصادی',
    tagline: 'بالاترین سطح مانورپذیری در فضاهای بسته و ناهمواری‌ها',
    description: 'کنترلر آرتک- مینی با نمایشگر LED خطی، مجهز به نرم‌افزار هدایت‌پذیری پیشرفته و کنترل سرعت هوشمند در ناهمواری‌ها. طراحی فوق‌فشرده این ماژول خطر برخورد جویستیک با چارچوب درها را به صفر می‌رساند.',
    defaultImage: '/images/fleet/controllers/mini.webp',
    angles: [
      { label: 'نمای روبه‌رو', image: '/images/fleet/controllers/mini.webp' },
      { label: 'برچسب اصالت', image: '/images/fleet/controllers/manufacturing-label.webp' },
      { label: 'پورت شارژ و خروجی صوتی', image: '/images/fleet/controllers/joystick-port-detail.webp' },
    ],
    variants: [
      { name: 'ARTECH-Mini 50', power: 'موتورهای تا ۳۵۰ وات', app: 'ویلچرهای سبک و ارتوپدی' },
      { name: 'ARTECH-Mini 90', power: 'موتورهای تا ۷۰۰ وات', app: 'ویلچرهای مبله و توان بالا' },
    ],
    displayType: 'نمایشگر LED خطی چندرنگ',
    accentColor: 'border-slate-300 text-slate-700 bg-white',
    highlightPill: 'حداقل ابعاد • صفر برخورد',
    features: [
      'نمایشگر خطی LED شفاف با نشانگر تفکیکی سرعت و وضعیت شارژ باتری',
      'نرم‌افزار هدایت‌پذیری پیشرفته و کنترل سرعت تطبیقی هوشمند در عبور از موانع و شیب',
      'قابلیت شخصی‌سازی و برنامه‌پذیری پارامترهای حرکتی در منزل (Programmable @Home)',
      'ابعاد مینیمال ارگونومیک جهت تردد آسان در فضاهای محدود مسکونی و آسانسورها',
      'معماری دوبخشی ماژولار همراه با ۳۰ ماه گارانتی طلایی تعویض',
    ],
    keySpecs: [
      { label: 'نمایشگر', value: 'LED خطی چندسطحی' },
      { label: 'توان خروجی', value: '350W و 700W' },
      { label: 'جک برقی', value: 'ندارد' },
      { label: 'تنظیم خانگی', value: 'پشتیبانی دارد' },
    ],
  },
  {
    id: 'pro',
    name: 'آرتک پرو (ARTECH-PRO)',
    englishName: 'ARTECH-PRO Touch & Action',
    badge: 'پیشرفته با نمایشگر LCD و تاچ موبایل',
    tagline: 'صفحه نمایش فارسی، هدایت لمسی با موبایل و پشتیبانی از جک برقی',
    description: 'جویستیک هوشمند آرتک-پرو با نمایشگر LCD گرافیکی به زبان فارسی و ۵ زبان بین‌المللی با تنظیم خودکار نور. مجهز به اتصال بلوتوث برای هدایت کامل از طریق صفحه لمسی گوشی و کنترل جک‌های برقی.',
    defaultImage: '/images/fleet/controllers/pro.webp',
    angles: [
      { label: 'نمای روبه‌رو', image: '/images/fleet/controllers/pro.webp' },
      { label: 'نیم‌رخ ارگونومیک', image: '/images/fleet/controllers/joystick-profile-detail.webp' },
      { label: 'پورت شارژر XLR', image: '/images/fleet/controllers/joystick-port-detail.webp' },
    ],
    variants: [
      { name: 'ARTECH-PRO Touch (50/90)', power: 'توان ۳۵۰W و ۷۰۰W', app: 'نمایشگر فارسی + ناوبری لمسی با گوشی' },
      { name: 'ARTECH-PRO Action (50/90)', power: 'توان ۳۵۰W و ۷۰۰W', app: 'کنترل جک‌های برقی ایستا، نشیمن و کمری' },
    ],
    displayType: 'نمایشگر گرافیکی LCD چندزبانه',
    accentColor: 'border-slate-300 text-slate-700 bg-white',
    highlightPill: 'LCD فارسی • هدایت با موبایل',
    features: [
      'نمایشگر LCD گرافیکی با پشتیبانی از زبان فارسی و ۵ زبان دیگر با تنظیم خودکار نور محیط',
      'اتصال مستقیم به گوشی هوشمند اندروید و کنترل کامل ناوبری از صفحه لمسی موبایل',
      'نسخه Action: پشتیبانی و کنترل یک یا چند جک برقی (ایستا، نشیمن، کمری و زیرپایی) از جویستیک و گوشی',
      'رابط‌های اختصاصی ضعف عضلانی: کلید خارجی کمکی (Buddy-Button) و حساسیت ۴ برابری اهرم',
      'امکان شخصی‌سازی کامل در منزل با کد فعال‌سازی Programmable @Home',
    ],
    keySpecs: [
      { label: 'نمایشگر', value: 'Graphic LCD سنسوردار' },
      { label: 'کنترل با گوشی', value: 'بلوتوث + اندروید' },
      { label: 'جک برقی', value: 'نسخه Action (۱+ جک)' },
      { label: 'توان خروجی', value: '350W و 700W' },
    ],
  },
  {
    id: 'xpro',
    name: 'آرتک ایکسپرو (ARTECH-XPRO)',
    englishName: 'ARTECH-XPRO Flagship Series',
    badge: 'پرچمدار هوشمند (Full Option)',
    tagline: 'روشنایی استاندارد اروپایی، مدیریت چند جک iSeating و بوق شهری',
    description: 'کامل‌ترین و پیشرفته‌ترین عضو خانواده کنترلرهای توانبخشی میکائیل. مجهز به خروجی سیستم روشنایی کامل و فلاشرها، هدایت بلوتوثی با تلفن همراه، بوق شهری و مدیریت چندگانه محرک‌های وضعیت.',
    defaultImage: '/images/fleet/controllers/xpro.webp',
    angles: [
      { label: 'نمای روبه‌رو', image: '/images/fleet/controllers/xpro.webp' },
      { label: 'جزئیات پنل و LCD', image: '/images/fleet/controllers/xpro-panel-detail.webp' },
      { label: 'پورت صنعتی و اسپیکر', image: '/images/fleet/controllers/joystick-port-detail.webp' },
    ],
    variants: [
      { name: 'ARTECH-XPRO Light (50/90)', power: 'توان ۳۵۰W و ۷۰۰W', app: 'سیستم روشنایی، چراغ جلو و فلاشرهای چپ/راست' },
      { name: 'ARTECH-XPRO Action (50/90)', power: 'توان ۳۵۰W و ۷۰۰W', app: 'فول آپشن روشنایی + کنترل تا ۵ جک iSeating' },
    ],
    displayType: 'Full Graphic LCD با تله‌متری جامع',
    accentColor: 'border-emerald-600 text-emerald-700 bg-emerald-50',
    highlightPill: 'روشنایی StVZO • تا ۵ جک iSeating',
    features: [
      'سیستم روشنایی استاندارد اروپایی StVZO: کلیدهای اختصاصی چراغ جلو، فلاشرهای چپ و راست و چراغ هشدار',
      'پشتیبانی جامع iSeating: قابلیت کنترل و مدیریت همزمان تا ۵ جک جانبی برقی (نشیمن، پشتی، ایستا و...)',
      'کنترل و پایش دوگانه: هدایت مستقیم از اهرم جویستیک و اپلیکیشن اختصاصی تلفن همراه',
      'بوق قدرتمند اختصاصی با گریل آکوستیک تقویت‌شده جهت تردد ایمن در خیابان‌ها و اماکن پرتردد',
      'حداکثر ورودی‌های بازدارنده و ایمنی (Programmable Inhibits) تا ۶ ورودی مستقل',
    ],
    keySpecs: [
      { label: 'سیستم روشنایی', value: 'استاندارد StVZO + فلاشر' },
      { label: 'جک‌های برقی', value: 'تا ۵ جک (iSeating)' },
      { label: 'کنترل موبایل', value: 'Bluetooth Android' },
      { label: 'توان خروجی', value: '350W و 700W' },
    ],
  },
];

function ProductImageCarousel({ product }: { product: ProductCardData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const slides = product.angles;
  const total = slides.length;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStartX(null);
  };

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <div
      className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs mb-6 group/slider select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Product Image Stage */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-5">
        <Image
          src={currentSlide.image}
          alt={`${product.name} - ${currentSlide.label}`}
          fill
          className="object-contain p-4 sm:p-5 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Top Attribute Badge */}
      <div className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-[#0F172A] shadow-xs pointer-events-none">
        {product.highlightPill}
      </div>

      {/* Modern Navigation Controls */}
      {total > 1 && (
        <>
          {/* Previous / Next Arrow Controls */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="تصویر قبلی"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 size-8 sm:size-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200 shadow-md flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover/slider:opacity-100 transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight size={18} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="تصویر بعدی"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 size-8 sm:size-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200 shadow-md flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover/slider:opacity-100 transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Discreet Pagination Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 backdrop-blur-md">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`نمایش زاویه ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-4 h-1.5 bg-emerald-400'
                    : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProductFamilySection() {
  const [selectedMobileTab, setSelectedMobileTab] = useState('pro');

  return (
    <section id="product-family" className="py-24 lg:py-32 bg-white text-[#0F172A]" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-[#F1F5F9] px-4 py-1 text-xs font-bold text-[#0F172A] mb-4">
            <Boxes size={14} className="text-emerald-600" />
            <span>تنوع سبد محصولات توانبخشی آرتک</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
            خانواده کنترلرهای
            <br />
            <span className="text-emerald-600">ویلچر برقی میکائیل (سری ARTECH)</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600 font-normal text-justify">
            خانواده کنترلرهای ویلچر برقی آرتک در سه رده مینی (فشرده و مانورپذیر)، پرو (مجهز به نمایشگر فارسی و هدایت موبایل) و ایکسپرو (پرچمدار روشنایی و جک‌های چندگانه) تولید می‌شوند. تمام مدل‌ها با موتورهای ۳۵۰ وات و ۷۰۰ وات سازگار بوده و همراه با ۳۰ ماه گارانتی طلایی تعویض عرضه می‌گردند.
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

        {/* 3 Modular Product Cards */}
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
                    : 'bg-[#F8FAFC] border border-slate-200'
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

                  {/* Modern Product Image Carousel (Swipeable, Dot indicators, Arrow controls) */}
                  <ProductImageCarousel product={product} />

                  {/* Description */}
                  <p className="text-sm leading-6 text-slate-700 mb-6 text-justify">
                    {product.description}
                  </p>

                  {/* Model Sub-Variants Table */}
                  <div className="rounded-2xl bg-white border border-slate-200 p-3 mb-6">
                    <div className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                      تیپ‌ها و ظرفیت‌های توان این خانواده:
                    </div>
                    <div className="space-y-2">
                      {product.variants.map((v, vIdx) => (
                        <div key={vIdx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-b-0 gap-1">
                          <span className="font-bold text-slate-900">{v.name}</span>
                          <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px] self-start sm:self-auto">
                            {v.power}
                          </span>
                          <span className="text-slate-500 text-[11px]">{v.app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

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
                    href="#modules-and-subsystems"
                    className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
                  >
                    مشاهده ماژول درایور و لوازم جانبی
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

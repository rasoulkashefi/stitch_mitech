'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Bot,
  Accessibility,
  Cpu,
  Sparkles,
  FileText,
  PhoneCall,
  Search,
  type LucideIcon,
} from 'lucide-react';

export type ProductCategory = 'all' | 'fleet' | 'rehab' | 'hardware';

export interface ProductItem {
  id: string;
  category: 'fleet' | 'rehab' | 'hardware';
  title: string;
  englishTitle: string;
  href: string;
  image: string;
  badges: string[];
  statusTag: string;
  summary: string;
  specs: { label: string; value: string }[];
}

export const officialProducts: ProductItem[] = [
  {
    id: 'autonomous-wheelchair',
    category: 'fleet',
    title: 'ویلچر برقی خودران و هوشمند',
    englishTitle: 'Autonomous Smart Wheelchair',
    href: '/fleet/autonomous-wheelchairs',
    image: '/images/fleet/autonomous-wheelchair-hero.jpg',
    badges: ['ناوبری مستقل (Indoor SLAM)', 'سنسورهای ۳۶۰° ضد تصادف', 'مدل سازمانی AMaaS'],
    statusTag: 'آماده استقرار سازمانی',
    summary:
      'نسل جدید سکوهای حمل‌ونقل انفرادی خودران مجهز به هوش مصنوعی و بینایی ماشین؛ تردد کاملاً مستقل در فرودگاه‌ها، مراکز درمانی و مجتمع‌های تجاری بدون نیاز به اینترنت و GPS.',
    specs: [
      { label: 'ظرفیت باربری', value: '۱۲۰ کیلوگرم' },
      { label: 'مداومت باتری', value: '۸ ساعت پیمایش مداوم' },
      { label: 'سیستم ناوبری', value: 'تلفیق سنسورها (LiDAR + Vision)' },
    ],
  },
  {
    id: 'smart-family-cart',
    category: 'fleet',
    title: 'کالسکه هوشمند خانواده',
    englishTitle: 'Smart Family Cart',
    href: '/fleet/smart-family-carts',
    image: '/images/fleet/smart-family-cart-hero.jpg',
    badges: ['تبلت و نقشه تعاملی مال‌ها', 'دستیار الکتریکی', 'مدل درآمد اشتراکی'],
    statusTag: 'بهره‌برداری در مال‌ها',
    summary:
      'کالسکه برقی هوشمند مجهز به تبلت لمسی راهنمای خرید و ناوبری داخلی جهت تردد آسوده خانواده‌ها و کودکان با قابلیت درآمدزایی پایدار برای مجتمع‌های تجاری.',
    specs: [
      { label: 'ظرفیت سرنشین', value: '۲ کودک + سبد خرید بزرگ' },
      { label: 'نمایشگر هوشمند', value: 'تبلت تعاملی با نقشه و آفرها' },
      { label: 'ایمنی حرکتی', value: 'ترمز خودکار در شیب‌ها' },
    ],
  },
  {
    id: 'following-amr',
    category: 'fleet',
    title: 'ربات باربر تعقیب‌کننده (AMR)',
    englishTitle: 'Human-Following Cargo Robot',
    href: '/fleet/following-amrs',
    image: '/images/fleet/following-amr-hero.jpg',
    badges: ['بینایی ماشین AI', 'فرمان‌های اشاره‌ای دست', 'حرکت کاروانی'],
    statusTag: 'تولید صنعتی',
    summary:
      'ربات خودران حمل بار و چمدان مجهز به پردازش تصویر پیشرفته بدون نیاز به تگ سخت‌افزاری و با قابلیت تشکیل کاروان در پایانه‌های فرودگاهی و مراکز لجستیک.',
    specs: [
      { label: 'ظرفیت بارگیری', value: 'تا ۱۰۰+ کیلوگرم بار' },
      { label: 'نحوه شناسایی', value: 'بینایی ماشین بدون تگ فیزیکی' },
      { label: 'سیستم حرکتی', value: 'چرخش درجا (Zero Turn)' },
    ],
  },
  {
    id: 'smart-mobile-sofa',
    category: 'fleet',
    title: 'مبل هوشمند متحرک',
    englishTitle: 'Smart Mobile Sofa',
    href: '/fleet/smart-mobile-sofas',
    image: '/images/fleet/smart-mobile-sofa-hero.jpg',
    badges: ['طراحی لوکس VIP', 'تعلیق نرم و بی‌صدا', 'هوشمندسازی فضا'],
    statusTag: 'سفارشی‌سازی لانژ',
    summary:
      'نشیمنگاه لوکس و متحرک خودران جهت جابه‌جایی اختصاصی سرنشینان در سالن‌های VIP فرودگاهی، گالری‌های معماری و مجتمع‌های لوکس اقامتی و گردشگری.',
    specs: [
      { label: 'نوع کاربری', value: 'سالن‌های تشریفات و گالری‌ها' },
      { label: 'پیشرانه', value: 'موتورهای هاب بدون نویز' },
      { label: 'ارگونومی', value: 'صندلی مبله مموری‌فوم دو نفره' },
    ],
  },
  {
    id: 'stair-climber',
    category: 'rehab',
    title: 'پله‌پیما و بالابر هوشمند',
    englishTitle: 'Smart Tracked Stair Climber',
    href: '/fleet/stair-climbers',
    image: '/images/fleet/stair-climber-hero.jpg',
    badges: ['شنی پلیمری ضدلغزش', 'ترمز خودکار Fail-Safe', 'بدون تخریب بنا'],
    statusTag: '۳۰ ماه گارانتی طلایی',
    summary:
      'بالابر توانبخشی پرتابل با شنی‌های پلیمری تقویت‌شده و تراز خودکار ژیروسکوپی جهت صعود و فرود فوق‌العاده امن میان طبقات بدون نیاز به ریل‌کشی ثابت.',
    specs: [
      { label: 'ظرفیت وزن', value: '۱۶۰ کیلوگرم' },
      { label: 'پیمایش با شارژ', value: '۸۰ طبقه (۱۵۰۰ پله)' },
      { label: 'وزن دستگاه', value: '۲۹ کیلوگرم (تاشو و پرتابل)' },
    ],
  },
  {
    id: 'wheelchair-controllers',
    category: 'hardware',
    title: 'کنترلر، جوی‌استیک و درایورهای توانبخشی',
    englishTitle: 'Mobility Controllers & DC Drivers',
    href: '/fleet/wheelchair-controllers',
    image: '/images/fleet/controllers/hero.jpg',
    badges: ['۳۰ ماه گارانتی طلایی', 'خانواده مینی، پرو و ایکسپرو', 'معماری دو بخشی'],
    statusTag: 'تولید و تامین قطعات',
    summary:
      'خانواده تخصصی کنترلرها و جوی‌استیک‌های ارگونومیک توانبخشی با درایورهای ماسفت توان‌بالا، پایش حرارتی و امکان شخصی‌سازی پارامترهای حرکتی.',
    specs: [
      { label: 'انواع خانواده', value: 'میکائیل Mini, Pro, XPro' },
      { label: 'نوع جوی‌استیک', value: 'مغناطیسی Hall بدون سایش' },
      { label: 'گارانتی رسمی', value: '۳۰ ماه ضمانت طلایی تعویض' },
    ],
  },
  {
    id: 'industrial-drives',
    category: 'hardware',
    title: 'سامانه ناوبری مستقل و درایورهای صنعتی',
    englishTitle: 'Autonomous Navigation & Industrial Drives',
    href: '/technology/drives-and-positioning',
    image: '/images/fleet/controllers/robotics-driver.jpg',
    badges: ['ماژول ناوبری SLAM', 'درایورهای براشلس BLDC', 'باس CANopen / Modbus'],
    statusTag: 'سخت‌افزار دانش‌بنیان',
    summary:
      'زیرسیستم‌های ناوبری خودران، ماژول‌های موقعیت‌یابی دقیق و درایورهای موتور بدون جاروبک BLDC ویژه ربات‌های صنعتی، ربات‌های انبارداری و پلتفرم‌های روباتیک.',
    specs: [
      { label: 'پروتکل‌های صنعتی', value: 'CAN, RS485, Modbus' },
      { label: 'توان درایور', value: 'تا ۱۲۰۰ وات پیوسته' },
      { label: 'هسته‌های پردازشی', value: 'DSP ۳۲ بیتی بلادرنگ' },
    ],
  },
];

const categoryTabs: { id: ProductCategory; label: string; icon: LucideIcon; count: number }[] = [
  { id: 'all', label: 'همه محصولات', icon: Sparkles, count: 7 },
  { id: 'fleet', label: 'ناوگان و ربات‌های خودران', icon: Bot, count: 4 },
  { id: 'rehab', label: 'تجهیزات توانبخشی فردی', icon: Accessibility, count: 1 },
  { id: 'hardware', label: 'کنترلر و سامانه‌های سخت‌افزاری', icon: Cpu, count: 2 },
];

export default function ProductsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return officialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !normalizedQuery ||
        product.title.toLowerCase().includes(normalizedQuery) ||
        product.englishTitle.toLowerCase().includes(normalizedQuery) ||
        product.summary.toLowerCase().includes(normalizedQuery) ||
        product.badges.some((b) => b.toLowerCase().includes(normalizedQuery));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20 font-[Vazirmatn,sans-serif]">
      {/* Search and Quick Filters Bar */}
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-xs'
                }`}
              >
                <Icon className={`size-4 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-mono ${
                    isSelected ? 'bg-white/20 text-emerald-300' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-80">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجوی محصول..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-10 pl-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-emerald-500 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-slate-900/5"
          >
            {/* Image Header with Badges */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Status Badge */}
              <div className="absolute top-4 right-4 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-emerald-400 shadow-xs">
                {product.statusTag}
              </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              {/* Product Badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {product.badges.map((b, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-extrabold text-blue-950 tracking-tight transition-colors group-hover:text-emerald-700">
                {product.title}
              </h3>
              <p className="font-mono text-[11px] text-slate-400 mt-0.5 uppercase tracking-wider">
                {product.englishTitle}
              </p>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm leading-7 text-slate-600 line-clamp-3">
                {product.summary}
              </p>

              {/* Specs Snippet Box */}
              <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-100 p-3.5 space-y-2 text-xs">
                {product.specs.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-500 font-medium">{s.label}</span>
                    <span className="font-bold text-slate-800">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <Link
                  href={product.href}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-3 px-4 text-center text-xs font-bold text-white transition-all duration-300 hover:bg-emerald-600 active:scale-95"
                >
                  <span>مشخصات فنی</span>
                  <ArrowLeft className="size-3.5" />
                </Link>
                <Link
                  href="/contact/request-demo"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-3 px-3.5 text-center text-xs font-bold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:border-emerald-500/40 hover:text-emerald-700 active:scale-95"
                >
                  <FileText className="size-3.5 text-emerald-600" />
                  <span>پیش‌فاکتور</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise Consultation & Customization Banner */}
      <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 size-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 text-right">
            <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
              سفارشی‌سازی پلتفرم‌های روباتیک
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              نیاز به راهکار اختصاصی یا سفارشی‌سازی شاسی و ناوبری دارید؟
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-8 text-slate-300 max-w-2xl">
              تیم تحقیق و توسعه شرکت فناوری هوشمند میکائیل به عنوان طراح و سازنده پلتفرم‌های خودران، آمادگی دارد محصولات را متناسب با استانداردهای ابعادی، توان باربری و شرایط عملیاتی سازمان یا پروژه شما بازطراحی نماید.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/contact/request-demo"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
            >
              <span>درخواست جلسه مشاوره سازمانی</span>
              <ArrowLeft className="size-4" />
            </Link>
            <Link
              href="/contact/sales"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-95"
            >
              <PhoneCall className="size-4 text-emerald-400" />
              <span>تماس با واحد فروش</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

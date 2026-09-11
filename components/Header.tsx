"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  ArrowLeft,
  ShoppingBag,
  Plane,
  Building,
  Palmtree,
  Bot,
  Baby,
  Cpu,
  Armchair,
  Sliders,
  Navigation,
  Compass,
  Zap,
  Boxes,
  Layers,
  TrendingUp,
  History,
  Info,
  PhoneCall,
  Send,
  BookOpen,
  Newspaper,
  Sparkles,
  Wrench,
  Cog,
  PackageCheck,
  Globe,
  type LucideIcon,
} from 'lucide-react';

interface SubCategoryItem {
  label: string;
  href: string;
  desc?: string;
  icon?: LucideIcon;
}

interface NavSubCategory {
  title: string;
  href: string;
  desc?: string;
  icon: LucideIcon;
  items: SubCategoryItem[];
}

interface MacroNavItem {
  id: string;
  label: string;
  subCategories: NavSubCategory[];
  dropdownWidth: string;
  dropdownAlignClass: string;
}

const macroNavItems: MacroNavItem[] = [
  {
    id: 'products-tech',
    label: 'محصولات و فناوری',
    dropdownWidth: 'w-[840px] max-w-[90vw]',
    dropdownAlignClass: 'right-0 origin-top-right',
    subCategories: [
      {
        title: 'محصولات و ناوگان',
        href: '/fleet',
        desc: 'تجهیزات حرکتی هوشمند و ویلچرهای خودران',
        icon: Bot,
        items: [
          {
            label: 'کاتالوگ جامع محصولات',
            href: '/products',
            desc: 'مشاهده و مقایسه تمام محصولات فعال',
            icon: Sparkles,
          },
          {
            label: 'ویلچرهای خودران و هوشمند',
            href: '/fleet/autonomous-wheelchairs',
            desc: 'آزادی حرکت و استقلال با هوش مصنوعی',
            icon: Bot,
          },
          {
            label: 'پله‌پیما و بالابر هوشمند',
            href: '/fleet/stair-climbers',
            desc: 'تردد امن طبقات بدون نیاز به ریل‌کشی',
            icon: Sparkles,
          },
          {
            label: 'کالسکه‌های هوشمند خانواده',
            href: '/fleet/smart-family-carts',
            desc: 'دستیار برقی و نقشه تعاملی مال‌ها',
            icon: Baby,
          },
          {
            label: 'ربات‌های باربر تعقیب‌کننده (AMR)',
            href: '/fleet/following-amrs',
            desc: 'دنبال‌کردن خودکار فرد و جابجایی بار',
            icon: Cpu,
          },
          {
            label: 'مبل‌های هوشمند متحرک',
            href: '/fleet/smart-mobile-sofas',
            desc: 'تجربه لوکس و متحرک در فضاهای مدرن',
            icon: Armchair,
          },
          {
            label: 'سیستم‌های کنترل و جویستیک',
            href: '/fleet/wheelchair-controllers',
            desc: 'کنترلر ارگونومیک توانبخشی و هوشمند',
            icon: Sliders,
          },
          {
            label: 'سیستم‌های ناوبری رباتیک',
            href: '/fleet/robotic-navigation-systems',
            desc: 'واحدهای ناوبری خودران و سنسور فیوژن',
            icon: Navigation,
          },
        ],
      },
      {
        title: 'راهکارها',
        href: '/solutions',
        desc: 'استقرار میدانی ناوگان در صنایع و مال‌ها',
        icon: ShoppingBag,
        items: [
          {
            label: 'مجتمع‌های تجاری و مال‌ها',
            href: '/solutions/malls',
            desc: 'ناوگان هوشمند تردد مراجعین و خریداران',
            icon: ShoppingBag,
          },
          {
            label: 'فرودگاه‌ها و پایانه‌ها',
            href: '/solutions/airports',
            desc: 'ترانزیت مسافران توان‌خواه و پرواز ویژه',
            icon: Plane,
          },
          {
            label: 'مراکز درمانی و بیمارستان‌ها',
            href: '/solutions/healthcare',
            desc: 'جابجایی ایمن و بهداشتی بیماران',
            icon: Building,
          },
          {
            label: 'مراکز گردشگری و هتل‌ها',
            href: '/solutions/tourism',
            desc: 'تورهای خودران تفریحی و اقامتی',
            icon: Palmtree,
          },
        ],
      },
      {
        title: 'فناوری',
        href: '/technology',
        desc: 'هسته‌های نرم‌افزاری و سخت‌افزاری',
        icon: Compass,
        items: [
          {
            label: 'ناوبری مستقل از GPS',
            href: '/technology/gps-independent-navigation',
            desc: 'نقشه‌برداری و مسیریابی SLAM',
            icon: Compass,
          },
          {
            label: 'پیشران و موقعیت‌یابی',
            href: '/technology/drives-and-positioning',
            desc: 'موتورهای BLDC و درایورهای هوشمند',
            icon: Zap,
          },
          {
            label: 'پلتفرم دوقلوی دیجیتال',
            href: '/technology/digital-twin-platform',
            desc: 'داشبورد ابری و مانیتورینگ زنده',
            icon: Boxes,
          },
        ],
      },
    ],
  },
  {
    id: 'services-collab',
    label: 'همکاری و خدمات',
    dropdownWidth: 'w-[600px] max-w-[90vw]',
    dropdownAlignClass: 'right-1/2 translate-x-1/2 origin-top',
    subCategories: [
      {
        title: 'خدمات',
        href: '/services',
        desc: 'پشتیبانی، گارانتی و تأمین قطعات رسمی',
        icon: Wrench,
        items: [
          {
            label: 'تعمیرات تخصصی',
            href: '/services/repairs',
            desc: 'تعمیرات تجهیزات حرکتی و هوشمند ام‌آی‌تک',
            icon: Wrench,
          },
          {
            label: 'نگهداری ناوگان',
            href: '/services/fleet-maintenance',
            desc: 'نگهداری پیشگیرانه برای فرودگاه‌ها و مال‌ها',
            icon: Cog,
          },
          {
            label: 'قطعات یدکی',
            href: '/services/spare-parts',
            desc: 'تأمین قطعات یدکی اصیل و سازگار ناوگان',
            icon: PackageCheck,
          },
        ],
      },
      {
        title: 'مدل‌های کسب‌وکار',
        href: '/business-model',
        desc: 'طرح‌های سرمایه‌گذاری و استقرار منعطف',
        icon: TrendingUp,
        items: [
          {
            label: 'جابجایی خودران به عنوان سرویس (AMaaS)',
            href: '/business-model/amaas',
            desc: 'اشتراک کامل ناوگان، نگهداری و نرم‌افزار',
            icon: Layers,
          },
          {
            label: 'اشتراک درآمد و سرمایه‌گذاری',
            href: '/business-model/revenue-sharing',
            desc: 'تسهیم سود حاصل از ناوگان و تبلیغات',
            icon: TrendingUp,
          },
        ],
      },
    ],
  },
  {
    id: 'about-mitech',
    label: 'درباره ام‌آی‌تک',
    dropdownWidth: 'w-[760px] max-w-[90vw]',
    dropdownAlignClass: 'left-0 origin-top-left',
    subCategories: [
      {
        title: 'درباره ما',
        href: '/about',
        desc: 'هویت شرکت، مأموریت و چشم‌انداز آینده',
        icon: Info,
        items: [
          {
            label: 'درباره میکائیل',
            href: '/about',
            desc: 'معرفی شرکت و بیانیه مأموریت',
            icon: Info,
          },
          {
            label: 'تاریخچه و چشم‌انداز',
            href: '/about/history-vision',
            desc: 'مسیر نوآوری و برنامه‌های راهبردی',
            icon: History,
          },
          {
            label: 'سوالات متداول (FAQ)',
            href: '/faq',
            desc: 'پاسخ به سوالات ناوگان خودران و خدمات',
            icon: Info,
          },
          {
            label: 'دفتر بین‌المللی عمان (GCC)',
            href: '/about/oman',
            desc: 'توسعه منطقه‌ای و پروژه‌های مسقط',
            icon: Globe,
          },
        ],
      },
      {
        title: 'وبلاگ',
        href: '/blog',
        desc: 'دیدگاه‌های تخصصی و رویدادهای رباتیک',
        icon: BookOpen,
        items: [
          {
            label: 'دیدگاه‌های صنعت',
            href: '/blog/category/industry-insights',
            desc: 'تحلیل روندهای جهانی رباتیک و هوش مصنوعی',
            icon: BookOpen,
          },
          {
            label: 'مطالعات موردی',
            href: '/blog/category/case-studies',
            desc: 'گزارش نتایج استقرار در سازمان‌ها',
            icon: Sparkles,
          },
          {
            label: 'اخبار شرکت',
            href: '/blog/category/company-news',
            desc: 'تازه‌ترین رویدادها و دستاوردهای ام‌آی‌تک',
            icon: Newspaper,
          },
        ],
      },
      {
        title: 'تماس با ما',
        href: '/contact',
        desc: 'راه‌های ارتباطی و هماهنگی جلسات',
        icon: PhoneCall,
        items: [
          {
            label: 'درخواست دمو و پایلوت',
            href: '/contact/request-demo',
            desc: 'تست میدانی ناوگان در مجموعه شما',
            icon: Send,
          },
          {
            label: 'واحد فروش و امور تجاری',
            href: '/contact/sales',
            desc: 'استعلام قیمت، قراردادها و نمایندگی',
            icon: PhoneCall,
          },
        ],
      },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMacroExpanded, setMobileMacroExpanded] = useState<{ [key: string]: boolean }>({
    'products-tech': true,
  });
  const [mobileSubExpanded, setMobileSubExpanded] = useState<{ [key: string]: boolean }>({});
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const toggleMobileMacro = (id: string) => {
    setMobileMacroExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMobileSub = (key: string) => {
    setMobileSubExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 font-[Vazirmatn,sans-serif] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/60'
          : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/40'
      }`}
      dir="rtl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        
        {/* ── Brand Logo ── */}
        <Link href="/" className="flex items-center shrink-0" aria-label="صفحه اصلی ام‌آی‌تک">
          <Image
            src="/logo/logo.png"
            alt="شرکت فناوری هوشمند میکائیل"
            width={140}
            height={48}
            className="h-11 sm:h-12 w-auto object-contain shrink-0"
            priority
          />
        </Link>

        {/* ── Desktop Navigation (3 Macro Categories) ── */}
        <nav
          ref={navContainerRef}
          className="hidden items-center gap-6 lg:flex xl:gap-8 text-sm"
          aria-label="منوی اصلی"
        >
          {macroNavItems.map((macro) => {
            const isMacroActive = macro.subCategories.some(
              (cat) =>
                pathname === cat.href ||
                cat.items.some((sub) => pathname === sub.href)
            );
            const isMenuOpen = openDropdown === macro.id;

            return (
              <div
                key={macro.id}
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter(macro.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(isMenuOpen ? null : macro.id)}
                  aria-expanded={isMenuOpen}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer select-none ${
                    isMacroActive
                      ? 'text-emerald-700 bg-emerald-50/90 font-bold'
                      : isMenuOpen
                      ? 'text-emerald-700 bg-slate-100/70'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="whitespace-nowrap">{macro.label}</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 shrink-0 ${
                      isMenuOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* ── Desktop Dropdown Panel ── */}
                {isMenuOpen && (
                  <div
                    className={`absolute top-full pt-2.5 z-50 ${macro.dropdownWidth} ${macro.dropdownAlignClass} animate-in fade-in slide-in-from-top-2 duration-200`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/98 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-2xl">
                      
                      {/* Products & Tech: 3 columns layout (6 cols for fleet, 3 for solutions, 3 for tech) */}
                      {macro.id === 'products-tech' && (
                        <div>
                          <div className="grid grid-cols-12 gap-6">
                            
                            {/* Column 1: محصولات و ناوگان (col-span-6) */}
                            <div className="col-span-6 flex flex-col">
                              {(() => {
                                const cat = macro.subCategories[0];
                                const CatIcon = cat.icon;
                                const isCatActive = pathname === cat.href || cat.items.some((i) => pathname === i.href);
                                return (
                                  <>
                                    <Link
                                      href={cat.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className="group/head flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 transition-colors"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover/head:bg-emerald-600 group-hover/head:text-white transition-colors">
                                          <CatIcon size={16} />
                                        </span>
                                        <span className={`text-sm font-bold whitespace-nowrap transition-colors ${
                                          isCatActive ? 'text-emerald-700' : 'text-slate-900 group-hover/head:text-emerald-600'
                                        }`}>
                                          {cat.title}
                                        </span>
                                      </div>
                                      <span className="text-xs text-slate-400 group-hover/head:text-emerald-600 flex items-center gap-1 font-medium transition-colors whitespace-nowrap">
                                        <span>مشاهده همه</span>
                                        <ArrowLeft size={12} className="transition-transform group-hover/head:-translate-x-0.5" />
                                      </span>
                                    </Link>

                                    {/* 2-column micro-grid for the 8 product items */}
                                    <div className="grid grid-cols-2 gap-1.5">
                                      {cat.items.map((sub) => {
                                        const isSubActive = pathname === sub.href;
                                        const SubIcon = sub.icon;
                                        return (
                                          <Link
                                            key={sub.href}
                                            href={sub.href}
                                            onClick={() => setOpenDropdown(null)}
                                            className={`group flex items-start gap-2.5 rounded-xl p-2 text-xs transition-all ${
                                              isSubActive
                                                ? 'bg-emerald-50 text-emerald-700 font-bold'
                                                : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
                                            }`}
                                          >
                                            {SubIcon && (
                                              <span
                                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5 transition-colors ${
                                                  isSubActive
                                                    ? 'bg-emerald-600 text-white'
                                                    : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                                                }`}
                                              >
                                                <SubIcon size={14} />
                                              </span>
                                            )}
                                            <div className="flex-1 min-w-0">
                                              <div className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors whitespace-nowrap truncate text-xs">
                                                {sub.label}
                                              </div>
                                              {sub.desc && (
                                                <div className="text-[11px] text-slate-400 mt-0.5 font-normal truncate leading-4">
                                                  {sub.desc}
                                                </div>
                                              )}
                                            </div>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </>
                                );
                              })()}
                            </div>

                            {/* Column 2: راهکارها (col-span-3) */}
                            <div className="col-span-3 flex flex-col border-r border-slate-100 pr-5">
                              {(() => {
                                const cat = macro.subCategories[1];
                                const CatIcon = cat.icon;
                                const isCatActive = pathname === cat.href || cat.items.some((i) => pathname === i.href);
                                return (
                                  <>
                                    <Link
                                      href={cat.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className="group/head flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 transition-colors"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover/head:bg-emerald-600 group-hover/head:text-white transition-colors">
                                          <CatIcon size={16} />
                                        </span>
                                        <span className={`text-sm font-bold whitespace-nowrap transition-colors ${
                                          isCatActive ? 'text-emerald-700' : 'text-slate-900 group-hover/head:text-emerald-600'
                                        }`}>
                                          {cat.title}
                                        </span>
                                      </div>
                                      <span className="text-xs text-slate-400 group-hover/head:text-emerald-600 flex items-center gap-1 font-medium transition-colors whitespace-nowrap">
                                        <span>همه</span>
                                        <ArrowLeft size={12} className="transition-transform group-hover/head:-translate-x-0.5" />
                                      </span>
                                    </Link>

                                    <div className="flex flex-col gap-1.5">
                                      {cat.items.map((sub) => {
                                        const isSubActive = pathname === sub.href;
                                        const SubIcon = sub.icon;
                                        return (
                                          <Link
                                            key={sub.href}
                                            href={sub.href}
                                            onClick={() => setOpenDropdown(null)}
                                            className={`group flex items-start gap-2.5 rounded-xl p-2 text-xs transition-all ${
                                              isSubActive
                                                ? 'bg-emerald-50 text-emerald-700 font-bold'
                                                : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
                                            }`}
                                          >
                                            {SubIcon && (
                                              <span
                                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5 transition-colors ${
                                                  isSubActive
                                                    ? 'bg-emerald-600 text-white'
                                                    : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                                                }`}
                                              >
                                                <SubIcon size={14} />
                                              </span>
                                            )}
                                            <div className="flex-1 min-w-0">
                                              <div className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors whitespace-nowrap truncate text-xs">
                                                {sub.label}
                                              </div>
                                              {sub.desc && (
                                                <div className="text-[11px] text-slate-400 mt-0.5 font-normal truncate leading-4">
                                                  {sub.desc}
                                                </div>
                                              )}
                                            </div>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </>
                                );
                              })()}
                            </div>

                            {/* Column 3: فناوری (col-span-3) */}
                            <div className="col-span-3 flex flex-col border-r border-slate-100 pr-5">
                              {(() => {
                                const cat = macro.subCategories[2];
                                const CatIcon = cat.icon;
                                const isCatActive = pathname === cat.href || cat.items.some((i) => pathname === i.href);
                                return (
                                  <>
                                    <Link
                                      href={cat.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className="group/head flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 transition-colors"
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover/head:bg-emerald-600 group-hover/head:text-white transition-colors">
                                          <CatIcon size={16} />
                                        </span>
                                        <span className={`text-sm font-bold whitespace-nowrap transition-colors ${
                                          isCatActive ? 'text-emerald-700' : 'text-slate-900 group-hover/head:text-emerald-600'
                                        }`}>
                                          {cat.title}
                                        </span>
                                      </div>
                                      <span className="text-xs text-slate-400 group-hover/head:text-emerald-600 flex items-center gap-1 font-medium transition-colors whitespace-nowrap">
                                        <span>همه</span>
                                        <ArrowLeft size={12} className="transition-transform group-hover/head:-translate-x-0.5" />
                                      </span>
                                    </Link>

                                    <div className="flex flex-col gap-1.5">
                                      {cat.items.map((sub) => {
                                        const isSubActive = pathname === sub.href;
                                        const SubIcon = sub.icon;
                                        return (
                                          <Link
                                            key={sub.href}
                                            href={sub.href}
                                            onClick={() => setOpenDropdown(null)}
                                            className={`group flex items-start gap-2.5 rounded-xl p-2 text-xs transition-all ${
                                              isSubActive
                                                ? 'bg-emerald-50 text-emerald-700 font-bold'
                                                : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
                                            }`}
                                          >
                                            {SubIcon && (
                                              <span
                                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5 transition-colors ${
                                                  isSubActive
                                                    ? 'bg-emerald-600 text-white'
                                                    : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                                                }`}
                                              >
                                                <SubIcon size={14} />
                                              </span>
                                            )}
                                            <div className="flex-1 min-w-0">
                                              <div className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors whitespace-nowrap truncate text-xs">
                                                {sub.label}
                                              </div>
                                              {sub.desc && (
                                                <div className="text-[11px] text-slate-400 mt-0.5 font-normal truncate leading-4">
                                                  {sub.desc}
                                                </div>
                                              )}
                                            </div>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </>
                                );
                              })()}
                            </div>

                          </div>

                          {/* Quick Bottom Banner */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-3 py-2 bg-slate-50/80 rounded-xl">
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <Sparkles size={14} className="text-emerald-600 shrink-0" />
                              <span className="whitespace-nowrap">نیاز به راهکار سفارشی یا مشاوره مهندسی ناوگان دارید؟</span>
                            </div>
                            <Link
                              href="/contact/request-demo"
                              onClick={() => setOpenDropdown(null)}
                              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors whitespace-nowrap"
                            >
                              درخواست دمو و پایلوت
                              <ArrowLeft size={13} />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Services & Collab: 2 columns layout */}
                      {macro.id === 'services-collab' && (
                        <div>
                          <div className="grid grid-cols-2 gap-6">
                            {macro.subCategories.map((cat, idx) => {
                              const CatIcon = cat.icon;
                              const isCatActive = pathname === cat.href || cat.items.some((i) => pathname === i.href);

                              return (
                                <div
                                  key={cat.href}
                                  className={`flex flex-col ${idx > 0 ? 'border-r border-slate-100 pr-6' : ''}`}
                                >
                                  <Link
                                    href={cat.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className="group/head flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 transition-colors"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover/head:bg-emerald-600 group-hover/head:text-white transition-colors">
                                        <CatIcon size={16} />
                                      </span>
                                      <span className={`text-sm font-bold whitespace-nowrap transition-colors ${
                                        isCatActive ? 'text-emerald-700' : 'text-slate-900 group-hover/head:text-emerald-600'
                                      }`}>
                                        {cat.title}
                                      </span>
                                    </div>
                                    <span className="text-xs text-slate-400 group-hover/head:text-emerald-600 flex items-center gap-1 font-medium transition-colors whitespace-nowrap">
                                      <span>مشاهده همه</span>
                                      <ArrowLeft size={12} className="transition-transform group-hover/head:-translate-x-0.5" />
                                    </span>
                                  </Link>

                                  <div className="flex flex-col gap-1.5">
                                    {cat.items.map((sub) => {
                                      const isSubActive = pathname === sub.href;
                                      const SubIcon = sub.icon;
                                      return (
                                        <Link
                                          key={sub.href}
                                          href={sub.href}
                                          onClick={() => setOpenDropdown(null)}
                                          className={`group flex items-start gap-2.5 rounded-xl p-2 text-xs transition-all ${
                                            isSubActive
                                              ? 'bg-emerald-50 text-emerald-700 font-bold'
                                              : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
                                          }`}
                                        >
                                          {SubIcon && (
                                            <span
                                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5 transition-colors ${
                                                isSubActive
                                                  ? 'bg-emerald-600 text-white'
                                                  : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                                              }`}
                                            >
                                              <SubIcon size={14} />
                                            </span>
                                          )}
                                          <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors whitespace-nowrap truncate text-xs">
                                              {sub.label}
                                            </div>
                                            {sub.desc && (
                                              <div className="text-[11px] text-slate-400 mt-0.5 font-normal truncate leading-4">
                                                {sub.desc}
                                              </div>
                                            )}
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Quick Bottom Banner */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-3 py-2 bg-slate-50/80 rounded-xl">
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <TrendingUp size={14} className="text-emerald-600 shrink-0" />
                              <span className="whitespace-nowrap">استقرار ناوگان بدون هزینه اولیه با مدل اشتراکی AMaaS</span>
                            </div>
                            <Link
                              href="/business-model/amaas"
                              onClick={() => setOpenDropdown(null)}
                              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors whitespace-nowrap"
                            >
                              بررسی مدل AMaaS
                              <ArrowLeft size={13} />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* About Mitech: 3 columns layout */}
                      {macro.id === 'about-mitech' && (
                        <div>
                          <div className="grid grid-cols-3 gap-6">
                            {macro.subCategories.map((cat, idx) => {
                              const CatIcon = cat.icon;
                              const isCatActive = pathname === cat.href || cat.items.some((i) => pathname === i.href);

                              return (
                                <div
                                  key={cat.href}
                                  className={`flex flex-col ${idx > 0 ? 'border-r border-slate-100 pr-6' : ''}`}
                                >
                                  <Link
                                    href={cat.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className="group/head flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 transition-colors"
                                  >
                                    <div className="flex items-center gap-2">
                                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover/head:bg-emerald-600 group-hover/head:text-white transition-colors">
                                        <CatIcon size={16} />
                                      </span>
                                      <span className={`text-sm font-bold whitespace-nowrap transition-colors ${
                                        isCatActive ? 'text-emerald-700' : 'text-slate-900 group-hover/head:text-emerald-600'
                                      }`}>
                                        {cat.title}
                                      </span>
                                    </div>
                                    <span className="text-xs text-slate-400 group-hover/head:text-emerald-600 flex items-center gap-1 font-medium transition-colors whitespace-nowrap">
                                      <span>مشاهده همه</span>
                                      <ArrowLeft size={12} className="transition-transform group-hover/head:-translate-x-0.5" />
                                    </span>
                                  </Link>

                                  <div className="flex flex-col gap-1.5">
                                    {cat.items.map((sub) => {
                                      const isSubActive = pathname === sub.href;
                                      const SubIcon = sub.icon;
                                      return (
                                        <Link
                                          key={sub.href}
                                          href={sub.href}
                                          onClick={() => setOpenDropdown(null)}
                                          className={`group flex items-start gap-2.5 rounded-xl p-2 text-xs transition-all ${
                                            isSubActive
                                              ? 'bg-emerald-50 text-emerald-700 font-bold'
                                              : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
                                          }`}
                                        >
                                          {SubIcon && (
                                            <span
                                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5 transition-colors ${
                                                isSubActive
                                                  ? 'bg-emerald-600 text-white'
                                                  : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-700'
                                              }`}
                                            >
                                              <SubIcon size={14} />
                                            </span>
                                          )}
                                          <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors whitespace-nowrap truncate text-xs">
                                              {sub.label}
                                            </div>
                                            {sub.desc && (
                                              <div className="text-[11px] text-slate-400 mt-0.5 font-normal truncate leading-4">
                                                {sub.desc}
                                              </div>
                                            )}
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Quick Bottom Banner */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-3 py-2 bg-slate-50/80 rounded-xl">
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <PhoneCall size={14} className="text-emerald-600 shrink-0" />
                              <span className="whitespace-nowrap">ارتباط با دفتر مرکزی و واحد فروش: ۰۲۱-۸۸۷۷۴۴۱۱</span>
                            </div>
                            <Link
                              href="/contact"
                              onClick={() => setOpenDropdown(null)}
                              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors whitespace-nowrap"
                            >
                              اطلاعات تماس
                              <ArrowLeft size={13} />
                            </Link>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ── CTA Button & Mobile Toggle ── */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact/request-demo"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95 sm:flex shrink-0 whitespace-nowrap"
          >
            <span className="whitespace-nowrap">درخواست دمو</span>
            <ArrowLeft size={15} className="shrink-0" />
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 lg:hidden hover:bg-slate-100 shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 text-sm lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {macroNavItems.map((macro) => {
              const isMacroExpanded = !!mobileMacroExpanded[macro.id];
              const isMacroActive = macro.subCategories.some(
                (cat) =>
                  pathname === cat.href ||
                  cat.items.some((sub) => pathname === sub.href)
              );

              return (
                <div key={macro.id} className="border-b border-slate-100 pb-3 last:border-none">
                  {/* Macro Header Accordion Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleMobileMacro(macro.id)}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl font-bold text-sm transition-colors ${
                      isMacroActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span className="whitespace-nowrap">{macro.label}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 shrink-0 ${
                        isMacroExpanded ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Subcategories inside Macro */}
                  {isMacroExpanded && (
                    <div className="mt-2 pr-2 flex flex-col gap-3">
                      {macro.subCategories.map((cat) => {
                        const subKey = `${macro.id}-${cat.href}`;
                        const isSubExpanded = mobileSubExpanded[subKey] ?? true; // default open
                        const isCatActive = pathname === cat.href;
                        const CatIcon = cat.icon;

                        return (
                          <div
                            key={cat.href}
                            className="bg-slate-50/70 rounded-xl p-2.5 border border-slate-100"
                          >
                            <div className="flex items-center justify-between">
                              <Link
                                href={cat.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-2 text-xs font-bold ${
                                  isCatActive ? 'text-emerald-700' : 'text-slate-800'
                                }`}
                              >
                                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100/60 text-emerald-700">
                                  <CatIcon size={13} />
                                </span>
                                <span className="whitespace-nowrap">{cat.title}</span>
                              </Link>

                              <button
                                type="button"
                                onClick={() => toggleMobileSub(subKey)}
                                className="p-1 text-slate-400 hover:text-slate-700"
                                aria-label="نمایش زیرمجموعه"
                              >
                                <ChevronDown
                                  size={16}
                                  className={`transition-transform duration-200 ${
                                    isSubExpanded ? 'rotate-180 text-emerald-600' : ''
                                  }`}
                                />
                              </button>
                            </div>

                            {/* Sub-items list */}
                            {isSubExpanded && (
                              <div className="mt-2 pt-2 border-t border-slate-200/60 flex flex-col gap-1 pr-3 border-r-2 border-emerald-500/40">
                                {cat.items.map((sub) => {
                                  const isSubActive = pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`flex flex-col py-1.5 text-xs transition-colors ${
                                        isSubActive
                                          ? 'text-emerald-700 font-bold'
                                          : 'text-slate-600 hover:text-emerald-600'
                                      }`}
                                    >
                                      <span className="whitespace-nowrap">{sub.label}</span>
                                      {sub.desc && (
                                        <span className="text-[11px] text-slate-400 mt-0.5 font-normal">
                                          {sub.desc}
                                        </span>
                                      )}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile CTAs */}
            <div className="mt-4 pt-2 flex flex-col gap-2.5">
              <Link
                href="/contact/request-demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-bold text-white shadow-xs hover:bg-emerald-600 transition-colors whitespace-nowrap"
              >
                <span>ثبت درخواست دمو و پایلوت</span>
                <ArrowLeft size={16} />
              </Link>
              <Link
                href="/contact/sales"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 whitespace-nowrap"
              >
                <span>تماس با واحد فروش (۰۲۱-۸۸۷۷۴۴۱۱)</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

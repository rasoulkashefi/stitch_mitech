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
} from 'lucide-react';

interface SubMenuItem {
  label: string;
  href: string;
  desc?: string;
  icon?: any;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
}

const navItems: NavItem[] = [
  {
    label: 'راهکارها',
    href: '/solutions',
    children: [
      {
        label: 'مجتمع‌های تجاری و مال‌ها',
        href: '/solutions/malls',
        desc: 'ناوگان هوشمند تردد مراجعین و خریداران',
        icon: ShoppingBag,
      },
      {
        label: 'فرودگاه‌ها و پایانه‌ها',
        href: '/solutions/airports',
        desc: 'ترانزیت مسافران توان‌خواه و پروازهای ویژه',
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
    label: 'محصولات و ناوگان',
    href: '/fleet',
    children: [
      {
        label: 'ویلچرهای خودران و هوشمند',
        href: '/fleet/autonomous-wheelchairs',
        desc: 'آزادی حرکت و استقلال با هوش مصنوعی',
        icon: Bot,
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
        desc: 'دنبال‌کردن خودکار فرد و جابجایی بار سنگین',
        icon: Cpu,
      },
      {
        label: 'مبل‌های هوشمند متحرک',
        href: '/fleet/smart-mobile-sofas',
        desc: 'تجربه لوکس و متحرک در فضاهای مدرن',
        icon: Armchair,
      },
      {
        label: 'سیستم‌های کنترل و جویستیک توانبخشی',
        href: '/fleet/wheelchair-controllers',
        desc: 'کنترلر ارگونومیک، ماژول توانبخشی و جوی‌استیک هوشمند',
        icon: Sliders,
      },
      {
        label: 'سیستم‌های کنترل و ناوبری رباتیک',
        href: '/fleet/robotic-navigation-systems',
        desc: 'واحدهای ناوبری خودران، سنسور فیوژن و کنترل حرکت',
        icon: Navigation,
      },
    ],
  },
  {
    label: 'فناوری',
    href: '/technology',
    children: [
      {
        label: 'ناوبری مستقل از GPS',
        href: '/technology/gps-independent-navigation',
        desc: 'نقشه‌برداری و مسیریابی درون‌ساختمانی SLAM',
        icon: Compass,
      },
      {
        label: 'سیستم‌های پیشران و موقعیت‌یابی',
        href: '/technology/drives-and-positioning',
        desc: 'موتورهای BLDC و درایورهای میکروپروسسوری',
        icon: Zap,
      },
      {
        label: 'پلتفرم دوقلوی دیجیتال',
        href: '/technology/digital-twin-platform',
        desc: 'داشبورد ابری و مانیتورینگ سه‌بعدی زنده',
        icon: Boxes,
      },
    ],
  },
  {
    label: 'مدل‌های کسب‌وکار',
    href: '/business-model',
    children: [
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
  {
    label: 'درباره ما',
    href: '/about',
    children: [
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
    ],
  },
  {
    label: 'وبلاگ',
    href: '/blog',
    children: [
      {
        label: 'دیدگاه‌های صنعت',
        href: '/blog/category/industry-insights',
        desc: 'تحلیل روندهای جهانی رباتیک و AI',
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
        desc: 'تازه‌ترین رویدادها و دستاوردها',
        icon: Newspaper,
      },
    ],
  },
  {
    label: 'تماس با ما',
    href: '/contact',
    children: [
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
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({});
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 font-[Vazirmatn,sans-serif] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50'
          : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/30'
      }`}
      dir="rtl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        
        {/* ── Brand Logo ── */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo/logo.png"
            alt="شرکت فناوری هوشمند میکائیل"
            width={140}
            height={48}
            className="h-11 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden items-center gap-1 xl:gap-2 text-sm lg:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.children && item.children.some((child) => pathname === child.href));
            const isMenuOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50/80 font-bold'
                      : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`text-slate-400 transition-transform duration-200 ${
                        isMenuOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && isMenuOpen && (
                  <div
                    className="absolute right-0 top-full pt-2 z-50 w-72 origin-top-right animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="overflow-hidden rounded-2xl border border-slate-200/50 bg-white/95 p-2 shadow-md backdrop-blur-xl">
                      <div className="mb-1.5 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-1"
                        >
                          مشاهده بخش {item.label}
                          <ArrowLeft size={12} />
                        </Link>
                      </div>

                      <div className="flex flex-col gap-0.5">
                        {item.children.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          const IconComponent = sub.icon;

                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`group flex items-start gap-3 rounded-xl p-2.5 text-xs transition-all ${
                                isSubActive
                                  ? 'bg-emerald-50 text-emerald-700 font-bold'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
                              }`}
                            >
                              {IconComponent && (
                                <span
                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                    isSubActive
                                      ? 'bg-emerald-600 text-white'
                                      : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                                  } transition-colors`}
                                >
                                  <IconComponent size={15} />
                                </span>
                              )}
                              <div className="flex-1">
                                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                  {sub.label}
                                </div>
                                {sub.desc && (
                                  <div className="text-xs leading-4 text-slate-400 mt-0.5 font-normal">
                                    {sub.desc}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ── Actions (CTA + Mobile Toggle) ── */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact/request-demo"
            className="hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-all hover:bg-emerald-600 hover:shadow-md active:scale-95 sm:flex"
          >
            درخواست دمو
            <ArrowLeft size={15} />
          </Link>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 lg:hidden hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="باز کردن منو"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-6 text-sm lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isExpanded = !!mobileExpanded[item.label];
              const isActive = pathname === item.href;

              return (
                <div key={item.label} className="border-b border-slate-100 pb-2 last:border-none">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-sm font-bold ${
                        isActive ? 'text-emerald-700' : 'text-slate-800'
                      }`}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="p-1 text-slate-400 hover:text-slate-700"
                        aria-label="نمایش زیرمنو"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-emerald-600' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu Accordion */}
                  {item.children && isExpanded && (
                    <div className="mt-1 flex flex-col gap-1.5 pr-3 border-r-2 border-emerald-500/40">
                      {item.children.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex flex-col py-1.5 text-xs ${
                              isSubActive
                                ? 'text-emerald-700 font-bold'
                                : 'text-slate-600 hover:text-emerald-600'
                            }`}
                          >
                            <span>{sub.label}</span>
                            {sub.desc && (
                              <span className="text-xs text-slate-400 mt-0.5">{sub.desc}</span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-4 pt-2 flex flex-col gap-2">
              <Link
                href="/contact/request-demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white shadow-xs hover:bg-emerald-600 transition-colors"
              >
                ثبت درخواست دمو و پایلوت
                <ArrowLeft size={16} />
              </Link>
              <Link
                href="/contact/sales"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100"
              >
                تماس با واحد فروش (۰۲۱-۸۸۷۷۴۴۱۱)
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

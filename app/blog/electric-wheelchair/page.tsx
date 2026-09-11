import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Scale,
  Wrench,
  BatteryCharging,
  TrendingUp,
  Cpu,
  ArrowLeft,
  ChevronLeft,
  BookOpen,
  PhoneCall,
  CheckCircle2,
  Sliders,
  Zap,
} from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { electricWheelchairPostsQuery } from '@/sanity/lib/queries';
import { PostSummary } from '@/sanity/types';
import BlogCard from '@/components/blog/BlogCard';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'دانشنامه و راهنمای جامع ویلچر برقی | ام. آی. تک. (Mitech)',
  description:
    'مرجع تخصصی راهنمای خرید، قیمت‌گذاری ویلچرهای نو و دست‌دوم، اصول عیب‌یابی و نگهداری، راهنمای باتری و تجهیزات جانبی ویلچر برقی.',
  keywords: [
    'ویلچر برقی',
    'راهنمای خرید ویلچر برقی',
    'قیمت ویلچر برقی دست دوم',
    'تعمیر ویلچر برقی',
    'باتری ویلچر برقی',
    'جوی استیک ویلچر برقی',
    'تجهیزات جانبی ویلچر',
    'دانشنامه ویلچر برقی',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'دانشنامه و راهنمای جامع ویلچر برقی | ام. آی. تک. (Mitech)',
    description:
      'مرجع تخصصی راهنمای خرید، قیمت‌گذاری ویلچرهای نو و دست‌دوم، اصول عیب‌یابی و نگهداری، راهنمای باتری و تجهیزات جانبی ویلچر برقی.',
    url: 'https://mitech.ir/blog/electric-wheelchair',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دانشنامه و راهنمای جامع ویلچر برقی | میکائیل',
    description:
      'مرجع تخصصی راهنمای خرید، قیمت‌گذاری ویلچرهای نو و دست‌دوم، اصول عیب‌یابی و نگهداری، راهنمای باتری و تجهیزات جانبی ویلچر برقی.',
  },
  alternates: {
    canonical: 'https://mitech.ir/blog/electric-wheelchair',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

// کلاسترهای ۶گانه استراتژی سئو و دانشنامه ویلچر برقی
const TOPIC_CLUSTERS = [
  {
    id: 'used',
    title: 'ویلچر برقی دست دوم',
    badge: 'کارشناسی و خرید مطمئن',
    description: 'قیمت روز، چک‌لیست کارشناسی فنی، نکات تست سلامت موتور، کنترلر و باتری پیش از خرید.',
    href: '/blog/electric-wheelchair/used',
    icon: ShieldCheck,
    accent: 'from-amber-500/20 to-emerald-500/10 text-amber-500',
  },
  {
    id: 'buying-guide',
    title: 'راهنمای خرید و مقایسه مدل‌ها',
    badge: 'راهنمای انتخاب هوشمند',
    description: 'مقایسه جامع مدل‌های تاشو مسافرتی، مبله و فوق‌سبک متناسب با توانایی حرکتی و آسیب نخاعی.',
    href: '/blog/electric-wheelchair/buying-guide',
    icon: Scale,
    accent: 'from-blue-500/20 to-emerald-500/10 text-blue-500',
  },
  {
    id: 'maintenance',
    title: 'اصول عیب‌یابی و نگهداری',
    badge: 'افزایش طول عمر تجهیزات',
    description: 'راهنمای رفع کدهای خطای متداول، نگهداری جوی‌استیک، موتور، ترمز مگنتی و گیربکس.',
    href: '/blog/electric-wheelchair/maintenance',
    icon: Wrench,
    accent: 'from-emerald-500/20 to-teal-500/10 text-emerald-500',
  },
  {
    id: 'battery',
    title: 'راهنمای باتری و شارژ',
    badge: 'پاور و پیمایش',
    description: 'اصول شارژ صحیح، مقایسه باتری‌های لیتیومی و سیلد اسید، روش افزایش عمر و زمان تعویض.',
    href: '/blog/electric-wheelchair/battery',
    icon: BatteryCharging,
    accent: 'from-emerald-500/20 to-lime-500/10 text-emerald-600',
  },
  {
    id: 'price',
    title: 'تحلیل قیمت و بازار',
    badge: 'بررسی اقتصادی',
    description: 'بررسی نوسانات بازار، عوامل تعیین‌کننده قیمت انواع برندهای داخلی، وارداتی و مقایسه ارزش خرید.',
    href: '/blog/electric-wheelchair/price',
    icon: TrendingUp,
    accent: 'from-purple-500/20 to-emerald-500/10 text-purple-500',
  },
  {
    id: 'accessories',
    title: 'لوازم جانبی و قطعات یدکی',
    badge: 'ارتقا و تجهیزات تکمیلی',
    description: 'کاورهای ضدآب، شارژرهای هوشمند، زیرپایی برقی، تایر ضدپنچری و قطعات یدکی پرمصرف.',
    href: '/blog/electric-wheelchair/accessories',
    icon: Cpu,
    accent: 'from-sky-500/20 to-indigo-500/10 text-sky-500',
  },
];

const TECHNICAL_PILLARS = [
  { text: 'کارشناسی فنی و ارزیابی استاندارد', icon: CheckCircle2 },
  { text: 'عیب‌یابی تخصصی درایور و موتور', icon: Sliders },
  { text: 'استاندارد تست ظرفیت باتری', icon: Zap },
  { text: 'تأمین قطعات و پشتیبانی مهندسی', icon: ShieldCheck },
];

async function getRelatedPosts(): Promise<PostSummary[]> {
  try {
    const posts = await client.fetch<PostSummary[]>(electricWheelchairPostsQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching electric wheelchair posts from Sanity:', error);
    return [];
  }
}

export default async function ElectricWheelchairHubPage() {
  const posts = await getRelatedPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'دانشنامه و راهنمای جامع ویلچر برقی | ام. آی. تک. (Mitech)',
    description:
      'مرجع تخصصی راهنمای خرید، قیمت‌گذاری ویلچرهای نو و دست‌دوم، اصول عیب‌یابی و نگهداری، راهنمای باتری و تجهیزات جانبی ویلچر برقی.',
    url: 'https://mitech.ir/blog/electric-wheelchair',
    inLanguage: 'fa-IR',
    publisher: {
      '@type': 'Organization',
      name: 'Mitech',
      url: 'https://mitech.ir',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mitech.ir/logo/mitech-icon.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: TOPIC_CLUSTERS.map((cluster, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: cluster.title,
        description: cluster.description,
        url: `https://mitech.ir${cluster.href}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50/70 pb-24 font-sans text-slate-800">
        {/* ۱. بخش Hero تخصصی (Dark Slate #0A101D با افکت‌های های‌تک و گارانتی دانش فنی) */}
        <section className="relative overflow-hidden bg-[#0A101D] text-white pt-28 pb-20 border-b border-slate-800/80">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-emerald-500/15 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav
              aria-label="مسیر راهنما"
              className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400"
            >
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                صفحه اصلی
              </Link>
              <span className="text-slate-600">/</span>
              <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                مجله و وبلاگ
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-200">دانشنامه ویلچر برقی</span>
            </nav>

            <div className="max-w-3xl">
              {/* Pillar Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>کلاستر تخصصی دانش توانبخشی و تحرک مستقل</span>
              </div>

              {/* H1 Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.25] mb-6">
                مرجع تخصصی و دانشنامه جامع ویلچرهای برقی و تجهیزات توانبخشی
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-8">
                پایگاه دانش مهندسی شرکت دانش‌بنیان میکائیل؛ از بررسی تخصصی سخت‌افزار، راهنمای کارشناسی خرید ویلچرهای کارکرده و نو، تا نگهداری علمی باتری‌ها و عیب‌یابی سیستم‌های پیشران.
              </p>

              {/* ۴ نشان تضمین دانش فنی (Technical Guarantee Badges) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/60">
                {TECHNICAL_PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2"
                    >
                      <Icon className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{pillar.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ۲. بخش دسترسی سریع به کلاسترهای ۶‌گانه سئو (Topic Cards Grid) */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-slate-200/50">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold text-emerald-600 tracking-wide uppercase">
                  مسیرهای راهبردی محتوا
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  شاخه‌های ۶‌گانه راهنمای جامع ویلچر برقی
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                موضوع مورد نظر خود را انتخاب کنید تا به مقالات عمیق، جداول مقایسه و چک‌لیست‌های تخصصی دسترسی یابید.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TOPIC_CLUSTERS.map((cluster) => {
                const IconComponent = cluster.icon;
                return (
                  <Link
                    key={cluster.id}
                    href={cluster.href}
                    className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-6 hover:border-emerald-500/50 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cluster.accent} border border-slate-200/60 transition-transform duration-300 group-hover:scale-105`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 border border-slate-200/60 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                        {cluster.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors flex items-center justify-between">
                      <span>{cluster.title}</span>
                      <ChevronLeft className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 group-hover:-translate-x-1 transition-all" />
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                      {cluster.description}
                    </p>

                    {/* Footer link indicator */}
                    <div className="pt-3 border-t border-slate-100/80 flex items-center text-xs font-semibold text-emerald-600 group-hover:text-emerald-700">
                      <span>مشاهده مقالات و راهنما</span>
                      <ArrowLeft className="mr-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ۳. بخش نمایش مقالات اخیر مرتبط از Sanity */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span>مقالات منتشر شده</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                تازه‌ترین تحلیل‌ها و راهنماهای کاربردی ویلچر برقی
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
            >
              مشاهده تمامی مقالات وبلاگ
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-slate-400 mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">
                در حال تدوین و به‌روزرسانی مقالات جدید
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-4">
                تیم محتوای فنی میکائیل در حال بارگذاری مقالات جدید کلاستر ویلچر برقی است. به زودی مطالب بیشتری در این بخش قرار می‌گیرد.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600 transition-colors"
              >
                بازگشت به همه مقالات وبلاگ
              </Link>
            </div>
          )}
        </section>

        {/* ۴. باکس CTA خدمات و تعمیرات تخصصی */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0A101D] p-8 sm:p-12 text-white shadow-2xl border border-slate-800">
            {/* Ambient emerald backlight */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4">
                <Wrench className="h-3.5 w-3.5 text-emerald-400" />
                <span>مرکز خدمات فنی و مهندسی میکائیل</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug">
                نیاز به تعمیر تخصصی، کارشناسی یا تأمین قطعات ویلچر برقی دارید؟
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
                مرکز تعمیرات تخصصی میکائیل با برخورداری از تجهیزات تست دیجیتال، کارگاه مجهز عیب‌یابی الکترونیک، تأمین قطعات یدکی اورجینال (باتری، موتور، جوی‌استیک و درایور) آماده ارائه خدمات سریع و تضمین‌شده به شماست.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/services/repairs"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/30"
                >
                  <span>ثبت درخواست تعمیر و کارشناسی تخصصی</span>
                  <ArrowLeft className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact/sales"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-emerald-400" />
                  <span>مشاوره با کارشناسان فنی</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

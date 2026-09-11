import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Bot,
  Cpu,
  Compass,
  Radio,
  Eye,
  ArrowLeft,
  ChevronLeft,
  BookOpen,
  PhoneCall,
  CheckCircle2,
  Sliders,
  Zap,
  FolderOpen,
  ArrowRight,
} from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { roboticsPostsQuery } from '@/sanity/lib/queries';
import { PostSummary } from '@/sanity/types';
import BlogCard from '@/components/blog/BlogCard';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'فناوری رباتیک و سیستم‌های خودران | مجله مهندسی ام. آی. تک. (Mitech)',
  description:
    'مرجع تخصصی مقالات رباتیک متحرک (UGV)، فناوری ناوبری SLAM مستقل از GPS، درایورهای پیشران، بینایی ماشین و اتوماسیون ناوگان خدماتی شرکت دانش‌بنیان میکائیل.',
  keywords: [
    'فناوری رباتیک',
    'رباتیک خودران',
    'ناوبری بدون GPS',
    'SLAM',
    'درایور موتور رباتیک',
    'ربات شستشوی پنل خورشیدی',
    'بینایی ماشین',
    'AMaaS',
    'میکائیل',
    'Mitech Robotics',
  ],
  openGraph: {
    title: 'فناوری رباتیک و سیستم‌های خودران | مجله مهندسی ام. آی. تک. (Mitech)',
    description:
      'مرجع تخصصی مقالات رباتیک متحرک، فناوری ناوبری هوشمند، درایورهای کنترل پیشران و مدیریت ناوگان خودران.',
    url: 'https://mitech.ir/blog/robotics',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فناوری رباتیک و سیستم‌های خودران | میکائیل',
    description:
      'مرجع تخصصی مقالات رباتیک متحرک، ناوبری هوشمند، درایورهای کنترل پیشران و اتوماسیون ناوگان.',
  },
  alternates: {
    canonical: 'https://mitech.ir/blog/robotics',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

// کلاسترهای موضوعی راهبردی حوزه رباتیک و ناوبری خودران
const ROBOTICS_CLUSTERS = [
  {
    id: 'slam-navigation',
    title: 'ناوبری و نقشه‌برداری مستقل از GPS',
    badge: 'الگوریتم‌های SLAM و سنسور فیوژن',
    description: 'تلفیق حسگرهای LiDAR، دوربین‌های عمق‌سنج و IMU برای مسیریابی میلی‌متری در فضاهای مسقف بزرگ فرودگاهی و تجاری.',
    href: '/technology/gps-independent-navigation',
    icon: Compass,
    accent: 'from-emerald-500/20 to-teal-500/10 text-emerald-400',
  },
  {
    id: 'motor-drives',
    title: 'درایورهای صنعتی و کنترل پیشران',
    badge: 'معماری سخت‌افزار',
    description: 'درایورهای دیجیتال میکائیل برای موتورهای براشلس و براش DC با پروتکل‌های صنعتی CANOpen، Modbus و سیستم‌های ضد هرزگردی.',
    href: '/technology/drives-and-positioning',
    icon: Cpu,
    accent: 'from-teal-500/20 to-cyan-500/10 text-teal-400',
  },
  {
    id: 'fleet-amaas',
    title: 'ناوگان ربات‌های متحرک خودران (AMR/UGV)',
    badge: 'مدل سازمانی AMaaS',
    description: 'استقرار ناوگان ربات‌های کمکی، سبدهای باربری خودران و خودروهای مبله بدون راننده با کنترل و نظارت ابری دوقلوی دیجیتال.',
    href: '/fleet',
    icon: Bot,
    accent: 'from-cyan-500/20 to-blue-500/10 text-cyan-400',
  },
  {
    id: 'industrial-service',
    title: 'ربات‌های خدمات تخصصی و نیروگاهی',
    badge: 'اتوماسیون صنعتی',
    description: 'مهندسی ربات‌های پاک‌سازی خودکار پنل‌های خورشیدی و سیستم‌های مکانیزه خدمات شهری در شرایط محیطی سخت و کویری.',
    href: '/fleet/following-amrs',
    icon: Radio,
    accent: 'from-amber-500/20 to-emerald-500/10 text-amber-400',
  },
];

const TECHNICAL_PILLARS = [
  { text: 'ناوبری دقیق SLAM بدون نیاز به GPS', icon: CheckCircle2 },
  { text: 'درایورهای صنعتی پرقدرت با فیدبک آنی', icon: Sliders },
  { text: 'هوش مصنوعی لبه و فیوژن داده سنسورها', icon: Zap },
  { text: 'استاندارد ایمنی صنعتی و مانیتورینگ زنده', icon: Sparkles },
];

const SIBLING_CATEGORIES = [
  { label: 'همه مقالات', href: '/blog' },
  { label: 'دانشنامه ویلچر برقی', href: '/blog/electric-wheelchair' },
  { label: 'مطالعات موردی', href: '/blog/case-studies' },
  { label: 'دیدگاه‌های صنعت', href: '/blog/category/industry-insights' },
  { label: 'اخبار شرکت', href: '/blog/category/company-news' },
];

async function getRoboticsPosts(): Promise<PostSummary[]> {
  try {
    const posts = await client.fetch<PostSummary[]>(roboticsPostsQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching robotics posts from Sanity:', error);
    return [];
  }
}

export default async function RoboticsHubPage() {
  const posts = await getRoboticsPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'فناوری رباتیک و سیستم‌های خودران | مجله مهندسی ام. آی. تک. (Mitech)',
    description:
      'مرجع تخصصی مقالات رباتیک متحرک (UGV)، فناوری ناوبری SLAM مستقل از GPS، درایورهای پیشران، بینایی ماشین و اتوماسیون ناوگان خدماتی شرکت دانش‌بنیان میکائیل.',
    url: 'https://mitech.ir/blog/robotics',
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
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `https://mitech.ir/blog/${post.slug.current}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50/70 pb-24 font-[Vazirmatn,sans-serif] text-slate-800" dir="rtl">
        {/* ۱. بخش Hero تخصصی های‌تک (Dark Slate #0A101D) */}
        <section className="relative overflow-hidden bg-[#0A101D] text-white pt-28 pb-20 border-b border-slate-800/80 font-[Vazirmatn,sans-serif]">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-teal-500/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

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
              <span className="text-slate-200">فناوری رباتیک</span>
            </nav>

            <div className="max-w-3xl">
              {/* Pillar Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-teal-300 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                <span>کلاستر تخصصی فناوری رباتیک، ناوبری خودران و درایورهای هوشمند</span>
              </div>

              {/* H1 Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.25] mb-6">
                مرجع تخصصی فناوری رباتیک، ناوبری هوشمند و اتوماسیون خودران
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-8">
                پایگاه دانش مهندسی شرکت دانش‌بنیان میکائیل؛ مقالات و راهنماهای تخصصی پیرامون ربات‌های متحرک زمینی (UGV)، ناوبری بدون GPS با الگوریتم‌های SLAM، طراحی درایورهای موتورهای صنعتی و پیاده‌سازی ناوگان‌های هوشمند.
              </p>

              {/* ۴ نشان تضمین دانش فنی رباتیک */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/60">
                {TECHNICAL_PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2"
                    >
                      <Icon className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                      <span className="truncate">{pillar.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ۲. بخش دسترسی سریع به کلاسترهای موضوعی رباتیک */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-xl shadow-slate-200/50">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold text-teal-600 tracking-wide uppercase">
                  معماری و ارکان دانش رباتیک
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  شاخه‌های راهبردی فناوری رباتیک و خودران
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                محورهای اصلی تحقیق و توسعه تیم مهندسی میکائیل؛ از سخت‌افزار درایور تا الگوریتم‌های ناوبری در محیط‌های پیچیده.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ROBOTICS_CLUSTERS.map((cluster) => {
                const IconComponent = cluster.icon;
                return (
                  <Link
                    key={cluster.id}
                    href={cluster.href}
                    className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/50 p-6 hover:border-teal-500/50 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cluster.accent} border border-slate-200/60 transition-transform duration-300 group-hover:scale-105`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>

                    <span className="inline-block text-[11px] font-semibold text-teal-700 mb-2">
                      {cluster.badge}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors flex items-center justify-between">
                      <span>{cluster.title}</span>
                      <ChevronLeft className="h-4 w-4 text-slate-400 group-hover:text-teal-600 group-hover:-translate-x-1 transition-all" />
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                      {cluster.description}
                    </p>

                    {/* Footer link indicator */}
                    <div className="pt-3 border-t border-slate-100/80 flex items-center text-xs font-semibold text-teal-600 group-hover:text-teal-700">
                      <span>بررسی جزییات فناوری</span>
                      <ArrowLeft className="mr-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ۳. بخش نوار دسته‌های مرتبط و مقالات Sanity */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          {/* Sibling Categories Pills */}
          <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-6">
            <span className="text-xs font-semibold text-slate-400 ml-2">سایر شاخه‌های وبلاگ:</span>
            {SIBLING_CATEGORIES.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-700 hover:bg-teal-50/50 transition-colors"
              >
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>

          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span>مقالات منتشر شده حوزه رباتیک</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                تازه‌ترین مقالات، بررسی‌ها و تحلیل‌های رباتیک و خودران
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors"
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
            <div className="my-10 rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-14 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200/60 text-teal-600 shadow-inner">
                <FolderOpen className="h-10 w-10 text-teal-600 stroke-[1.5]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                در حال بارگذاری و تدوین مقالات جدید شاخه رباتیک
              </h3>
              <p className="mx-auto max-w-lg text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                پژوهشگران و مهندسان شرکت دانش‌بنیان میکائیل در حال تألیف مستندات فنی و مقالات تحلیلی این شاخه هستند.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600 transition-colors"
              >
                <span>بازگشت به مقالات وبلاگ</span>
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>

        {/* ۴. باکس CTA خدمات و پروژه‌های اختصاصی رباتیک */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0A101D] p-8 sm:p-12 text-white shadow-2xl border border-slate-800">
            {/* Ambient teal backlight */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/50 px-3.5 py-1 text-xs font-semibold text-teal-300 mb-4">
                <Bot className="h-3.5 w-3.5 text-teal-400" />
                <span>همکاری در پروژه‌های اتوماسیون و رباتیک سازمانی</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug">
                نیاز به توسعه موبایل‌ربات‌ها، درایورهای سفارشی یا ناوبری مستقل دارید؟
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
                تیم تحقیق و توسعه میکائیل با تسلط بر طراحی بردهای کنترل پیشران، تلفیق سنسورها (Sensor Fusion) و پیاده‌سازی الگوریتم‌های هوش مصنوعی لبه، آماده همکاری در پروژه‌های سفارشی سازمانی و نیروگاهی است.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/request-demo"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold text-white hover:bg-teal-500 transition-colors shadow-lg shadow-teal-900/30"
                >
                  <span>درخواست جلسه فنی و دمو</span>
                  <ArrowLeft className="h-4 w-4" />
                </Link>

                <Link
                  href="/technology/drives-and-positioning"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  <span>مشاهده مشخصات فنی درایورها</span>
                  <ArrowLeft className="h-4 w-4 text-teal-400" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

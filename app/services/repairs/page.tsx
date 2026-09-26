import Script from 'next/script'
import Image from 'next/image'
import { CTA } from '@/components/services-pages'
import ServicesSubNav from '@/components/services/ServicesSubNav'
import { FaqAccordion } from './FaqAccordion'
import { Wrench, Zap, PowerOff, TriangleAlert, Ban, Joystick, Thermometer, Volume2, CheckCircle, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تعمیر ویلچر برقی و کنترلر | مرکز تخصصی میکائیل',
  description: 'مرکز تخصصی تعمیرات ویلچر برقی، کنترلر و جویستیک. عیب‌یابی دقیق، تامین قطعات اورجینال و تعمیر انواع بردهای PG و Dynamic با مشاوره رایگان در سراسر ایران.',
  alternates: {
    canonical: 'https://mitech.ir/services/repairs',
  },
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "هزینه تعمیر کنترلر یا جویستیک ویلچر برقی چقدر است؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "هزینه دقیق تعمیرات بستگی به نوع خرابی و قطعات مصرفی دارد. کارشناسان ما پس از دریافت ویدیو یا بررسی اولیه قطعه، برآورد هزینه را به صورت شفاف به شما اعلام می‌کنند. هیچ عملیات تعمیری پیش از تایید هزینه توسط شما انجام نخواهد شد."
        }
      },
      {
        "@type": "Question",
        "name": "پروسه تعمیرات و عیب‌یابی چقدر زمان می‌برد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بیشتر تعمیرات تخصصی کنترلر و جویستیک بین ۴۸ تا ۷۲ ساعت کاری پس از پذیرش قطعه در شرکت انجام می‌شود. در صورت نیاز به تامین قطعه خاص، زمان دقیق پیش از انجام کار به اطلاع شما خواهد رسید."
        }
      },
      {
        "@type": "Question",
        "name": "من در شهرستان ساکن هستم، چگونه دستگاه را برای شما ارسال کنم؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نیازی به ارسال کل ویلچر نیست. با راهنمایی تلفنی کارشناسان ما، می‌توانید بخش معیوب را باز کرده و از طریق تیپاکس، پست پیشتاز یا باربری به آدرس شرکت در تهران ارسال کنید. پس از تعمیر نیز دستگاه با بسته‌بندی ایمن عودت داده می‌شود."
        }
      },
      {
        "@type": "Question",
        "name": "آیا برای قطعات تعویض شده ضمانت و گارانتی ارائه می‌دهید؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بله، تمامی قطعات استفاده شده در شرکت میکائیل کاملاً اورجینال بوده و خدمات تعمیراتی ما دارای مهلت تست و تضمین کیفیت عملکرد می‌باشد."
        }
      }
    ]
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  )
}

const faqs = [
  {
    question: "هزینه تعمیر کنترلر یا جویستیک ویلچر برقی چقدر است؟",
    answer: "هزینه دقیق تعمیرات بستگی به نوع خرابی و قطعات مصرفی دارد. کارشناسان ما پس از دریافت ویدیو یا بررسی اولیه قطعه، برآورد هزینه را به صورت شفاف به شما اعلام می‌کنند. هیچ عملیات تعمیری پیش از تایید هزینه توسط شما انجام نخواهد شد."
  },
  {
    question: "پروسه تعمیرات و عیب‌یابی چقدر زمان می‌برد؟",
    answer: "بیشتر تعمیرات تخصصی کنترلر و جویستیک بین ۴۸ تا ۷۲ ساعت کاری پس از پذیرش قطعه در شرکت انجام می‌شود. در صورت نیاز به واردات قطعه خاص، زمان دقیق به اطلاع شما خواهد رسید."
  },
  {
    question: "من در شهرستان ساکن هستم، چگونه دستگاه را برای شما ارسال کنم؟",
    answer: "نیازی به ارسال کل ویلچر نیست. با راهنمایی تلفنی کارشناسان ما، می‌توانید بخش معیوب (مانند درایور یا جویستیک) را باز کرده و از طریق تیپاکس، پست پیشتاز یا باربری به آدرس شرکت در تهران ارسال کنید. پس از تعمیر نیز دستگاه با بسته‌بندی ایمن برای شما عودت داده می‌شود."
  },
  {
    question: "آیا برای قطعات تعویض شده ضمانت و گارانتی ارائه می‌دهید؟",
    answer: "بله، تمامی قطعات استفاده شده در شرکت میکائیل کاملاً اورجینال بوده و خدمات تعمیراتی ما دارای مهلت تست و تضمین کیفیت عملکرد می‌باشد تا با خیالی آسوده از دستگاه خود استفاده کنید."
  }
]

const supportedBrands = [
  {
    name: 'PG Drives Technology',
    subtitle: 'سیستم‌های درایور VR2, VSI, R-net',
    logo: '/images/brand-logo/pg_drives_technology.png',
    width: 559,
    height: 115,
  },
  {
    name: 'Dynamic Controls',
    subtitle: 'کنترلرهای LiNX, Shark, DX2',
    logo: '/images/brand-logo/Dynamic_Controls_logo_480x480%20(1).png',
    width: 893,
    height: 160,
  },
  {
    name: 'Curtiss-Wright',
    subtitle: 'سامانه‌های درایو و کنترل توانبخشی',
    logo: '/images/brand-logo/Curtiss-Wright_logo.svg.webp',
    width: 1278,
    height: 354,
  },
  {
    name: 'Quantum Rehab',
    subtitle: 'ویلچرهای پیشرفته و ماژول‌های Q-Logic',
    logo: '/images/brand-logo/Yoast-logo.webp',
    width: 858,
    height: 514,
  },
]

export default function RepairsRoute() {
  return (
    <div className="w-full bg-white pb-24" dir="rtl">
      <ServicesSubNav activeSlug="repairs" />
      <FaqSchema />
      
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_.72fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs">
              <Wrench className="size-4" /> SPECIALIST REPAIRS
            </div>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-blue-950 tracking-tight">
              مرکز تخصصی طراحی، تولید و <span className="text-emerald-600">تعمیر ویلچر برقی</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600">
              شرکت فناوری هوشمند میکائیل با بیش از یک دهه تجربه مهندسی، مرجع جامع و تخصصی تعمیر ویلچر برقی در ایران است. تمرکز اصلی دپارتمان فنی ما بر تعمیرات حساس‌ترین و حیاتی‌ترین بخش‌های دستگاه، یعنی کنترلر (درایور و جویستیک) و بردهای الکترونیکی است. ما علاوه بر تولید محصولات توانبخشی، یک کلینیک مجهز هستیم که سرویس‌های تست دوره‌ای، عیب‌یابی دقیق و ارجاع مطمئن برای سرویس موتور، باتری و مکانیک بدنه را به توانیابان عزیز ارائه می‌دهیم.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">تضمین قطعات اورجینال</span>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700">پوشش سراسر ایران</span>
            </div>
          </div>
          
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/10">
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(color-mix(in oklab, white 12%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, white 12%, transparent) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex justify-between font-mono text-[10px] tracking-widest text-slate-400">
                <span>MIKAIL / CLINIC</span>
                <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500 animate-pulse" />ONLINE</span>
              </div>
              <div className="flex justify-center">
                <div className="relative flex size-56 items-center justify-center rounded-full border border-white/10">
                  <div className="absolute inset-8 rounded-full border border-emerald-500/30" />
                  <div className="absolute inset-20 rounded-full bg-emerald-500/20 shadow-[0_0_50px_var(--color-emerald-500)]" />
                  <Wrench className="relative size-24 text-emerald-400" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] text-slate-400">SERVICE STATUS</p>
                  <p className="mt-1 text-2xl font-black text-white">EXPERT CARE<span className="text-emerald-500">.</span></p>
                </div>
                <Zap className="size-8 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section with Central Joystick */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-6 lg:px-10 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-emerald-600">نشانه‌های خرابی</span>
            <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">نشانه‌های نیاز به تعمیر کنترلر و جویستیک ویلچر برقی</h2>
            <p className="mt-4 text-base leading-8 text-slate-600 max-w-3xl mx-auto">
              بسیاری از مواقع، تشخیص زودهنگام نقص فنی می‌تواند از هزینه‌های سنگین تعویض کامل سیستم جلوگیری کند. در صورت مشاهده هر یک از موارد زیر، سیستم الکترونیکی شما نیاز به بررسی تخصصی دارد:
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] items-center">
            {/* Right Column (RTL) - 3 Items */}
            <div className="flex flex-col gap-6">
              {[
                { title: 'روشن نشدن دستگاه یا قطعی و وصلی مداوم جریان برق', icon: PowerOff },
                { title: 'کد خطای چشمک‌زن روی مانیتور یا پنل جویستیک', icon: TriangleAlert },
                { title: 'حرکت نکردن ویلچر با وجود روشن بودن سیستم و شارژ کامل', icon: Ban },
              ].map((point, i) => (
                <div key={i} className="flex gap-4 rounded-2xl border border-slate-200/50 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-x-2 hover:border-emerald-500/50 hover:shadow-lg">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-emerald-600">
                    <point.icon className="size-6" />
                  </div>
                  <p className="text-sm font-bold leading-7 text-blue-950 flex-1 my-auto">{point.title}</p>
                </div>
              ))}
            </div>

            {/* Center Column - Minimal Animated Joystick */}
            <div className="relative mx-auto w-64 rounded-[3rem] bg-slate-900 p-6 shadow-2xl shadow-slate-900/20 border-4 border-slate-800 flex flex-col items-center justify-between h-[360px]">
              {/* Top Display/LEDs */}
              <div className="w-full flex justify-center mb-4">
                <div className="flex gap-1.5 bg-slate-950 px-4 py-2 rounded-full border border-slate-800/80 shadow-inner">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-2.5 h-3.5 rounded-sm bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full px-4 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500/40 bg-slate-800 flex items-center justify-center shadow-inner">
                   <PowerOff className="size-5 text-emerald-400" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-rose-500/40 bg-slate-800 flex items-center justify-center place-self-end shadow-inner">
                   <Volume2 className="size-5 text-rose-400" />
                </div>
              </div>

              {/* Joystick Lever */}
              <div className="relative w-28 h-28 mt-4 rounded-full bg-slate-800 border-[10px] border-slate-950 shadow-inner flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-slate-700 shadow-[0_10px_15px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.1)] border border-slate-600 relative after:absolute after:inset-1 after:rounded-full after:bg-gradient-to-br after:from-white/10 after:to-transparent" />
                 {/* Crosshair accents */}
                 <div className="absolute top-1 bottom-1 left-1/2 w-0.5 bg-slate-900/50 -translate-x-1/2" />
                 <div className="absolute left-1 right-1 top-1/2 h-0.5 bg-slate-900/50 -translate-y-1/2" />
              </div>
              
              {/* Decorative rings around joystick */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-emerald-500/10 rounded-full -z-10 animate-[spin_10s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-emerald-500/5 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Left Column (RTL) - 2 Items */}
            <div className="flex flex-col gap-6">
              {[
                { title: 'انحراف مسیر یا تاخیر در فرمان‌پذیری اهرم جویستیک', icon: Joystick },
                { title: 'داغ شدن بیش از حد درایور موتور یا شارژر', icon: Thermometer },
              ].map((point, i) => (
                <div key={i} className="flex gap-4 rounded-2xl border border-slate-200/50 bg-white p-6 shadow-xs transition-all duration-300 hover:translate-x-2 hover:border-emerald-500/50 hover:shadow-lg">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-emerald-600">
                    <point.icon className="size-6" />
                  </div>
                  <p className="text-sm font-bold leading-7 text-blue-950 flex-1 my-auto">{point.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Bar (Narrow Section) */}
      <section className="border-b border-slate-200/60 bg-gradient-to-b from-slate-50/40 to-white py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-slate-700">
                برندهای تخصصی تحت پوشش تعمیرات و عیب‌یابی در کلینیک میکائیل
              </span>
            </div>
            <span className="rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
              قطعات ۱۰۰٪ اورجینال
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:gap-6">
            {supportedBrands.map((brand) => (
              <div
                key={brand.name}
                className="group relative flex flex-col items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md"
              >
                <div className="relative flex h-14 w-full items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="max-h-10 w-auto max-w-[140px] sm:max-w-[160px] object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="block text-xs font-bold text-slate-800 transition-colors group-hover:text-emerald-700">
                    {brand.name}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-medium text-slate-500">
                    {brand.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & OEM Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-emerald-600">قطعات اصلی و برندها</span>
            <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">برندهای تحت پوشش و تضمین استفاده از قطعات یدکی اورجینال</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              استفاده از قطعات فیک در سیستم‌های پزشکی و توانبخشی می‌تواند خطرات جانی و مالی به همراه داشته باشد. در فرآیند تعمیر تجهیزات الکترونیکی، شرکت میکائیل منحصراً از قطعات اورجینال (آی‌سی‌های تخصصی، اهرم جویستیک اصلی و بردهای استاندارد) استفاده می‌کند. دپارتمان ما تجهیزات برندهای معتبر جهانی را با بالاترین دقت عیب‌یابی و تعمیر می‌کند:
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-200/50 p-5">
                <CheckCircle className="mt-1 size-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-bold leading-7 text-blue-950">برندهای اصلی: محصولات نام‌آشنای PG Drives Technology و Dynamic Controls</span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-200/50 p-5">
                <CheckCircle className="mt-1 size-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-bold leading-7 text-blue-950">مدل‌های پرکاربرد تحت پشتیبانی: VR2, New VSI, VSI, Egg, Linx, Sharks</span>
              </li>
            </ul>
          </div>
          <div className="flex h-full min-h-[350px] flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900 p-10 text-white relative overflow-hidden shadow-xl shadow-slate-900/10">
             <div className="absolute -right-20 -top-20 size-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
             <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
             <h3 className="relative text-2xl font-extrabold tracking-tight">ضمانت کیفیت</h3>
             <p className="relative mt-4 text-base leading-8 text-slate-300">قطعات اصلی نه تنها طول عمر دستگاه را افزایش می‌دهند، بلکه ایمنی کاربر را نیز در مسیرهای مختلف تضمین می‌کنند. ما با واردات مستقیم قطعات حیاتی، این اطمینان را به شما می‌دهیم.</p>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-emerald-600">فرآیند اجرایی</span>
          <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">چهار گام سریع برای تعمیرات دستگاه (پوشش سراسر ایران)</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 max-w-3xl">
            فرآیند خدمات ما برای جلوگیری از اتلاف وقت و رفت‌وآمدهای غیرضروری بهینه‌سازی شده است. تفاوتی ندارد در کجای ایران هستید، ما از تهران تا تمامی شهرستان‌ها خدمات خود را با این مراحل شفاف ارائه می‌دهیم:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'مشاوره و تشخیص آنلاین', desc: 'ارسال ویدیو از مشکل یا کد خطای دستگاه به واتساپ واحد فنی. در این مرحله مشخص می‌شود آیا مشکل با راهنمایی از راه دور قابل حل است یا نیاز به ارسال قطعه دارد.' },
              { title: 'عیب‌یابی دقیق و برآورد هزینه', desc: 'پس از دریافت قطعه، بررسی تخصصی انجام شده و هزینه دقیق اعلام می‌گردد (انجام تعمیرات برای مبالغ بیش از یک میلیون تومان منوط به تایید نهایی شماست).' },
              { title: 'تعمیر و تست نهایی', desc: 'رفع نقص سیستم با قطعات اورجینال و انجام تست‌های عملکردی زیر بار توسط متخصصان واحد فنی شرکت میکائیل.' },
              { title: 'ارسال ایمن به سراسر کشور', desc: 'تحویل حضوری یا ارسال با پیک در تهران، و ارسال ایمن از طریق تیپاکس، پست یا باربری به تمامی استان‌ها و شهرستان‌ها.' }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-7 shadow-xs">
                <div>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-slate-900 font-extrabold text-emerald-400">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-blue-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
                </div>
                <Clock className="absolute bottom-7 left-7 size-6 text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="text-center mb-12">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-emerald-600">پاسخ به ابهامات شما</span>
          <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">پرسش‌های متداول</h2>
          <p className="mt-4 text-base text-slate-600">پاسخ به سوالات پرتکرار شما درباره تعمیرات تخصصی ویلچر برقی</p>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      <CTA />
    </div>
  )
}

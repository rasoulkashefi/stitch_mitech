import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import OmanMeetingRequest from '@/components/about/OmanMeetingRequest';
import {
  ChevronLeft,
  Globe,
  Plane,
  Building2,
  Handshake,
  Cpu,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  Compass,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'دفتر عمان و توسعه منطقه‌ای | ام. آی. تک. (Mitech Oman)',
  description:
    'گسترش فناوری‌های ناوبری خودران، جابه‌جایی هوشمند فرودگاهی و خدمات AMaaS ام. آی. تک. در سلطنت عمان و خاورمیانه.',
  keywords: [
    'ام آی تک عمان',
    'Mitech Oman',
    'ناوبری خودران عمان',
    'حمل و نقل فرودگاهی مسقط',
    'رباتیک خلیج فارس',
    'خدمات AMaaS در عمان',
    'تجهیزات توانبخشی مسقط',
    'Autonomous Wheelchairs GCC',
  ],
  openGraph: {
    title: 'دفتر عمان و توسعه منطقه‌ای ام. آی. تک. | Mitech Oman',
    description:
      'گسترش فناوری‌های ناوبری خودران، جابه‌جایی هوشمند فرودگاهی و خدمات AMaaS ام. آی. تک. در سلطنت عمان و خاورمیانه.',
    url: 'https://mitech.ir/about/oman',
    siteName: 'فناوری هوشمند میکائیل (Mitech)',
    images: [
      {
        url: '/images/about/oman-og.jpg',
        width: 1200,
        height: 675,
        alt: 'حضور بین‌المللی ام آی تک در مسقط عمان',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دفتر عمان و توسعه منطقه‌ای | ام. آی. تک. (Mitech Oman)',
    description:
      'گسترش فناوری‌های ناوبری خودران، جابه‌جایی هوشمند فرودگاهی و خدمات AMaaS در عمان و خلیج فارس.',
    images: ['/images/about/oman-og.jpg'],
  },
  alternates: {
    canonical: 'https://mitech.ir/about/oman',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const regionalPillars = [
  {
    icon: Plane,
    title: 'هوشمندسازی پایانه‌های فرودگاهی',
    subtitle: 'Muscat (MCT) & Salalah (SLL) Airports',
    desc: 'استقرار ناوگان ویلچرهای خودران انفرادی و ربات‌های تعقیب‌کننده بار برای ترانزیت بدون دغدغه مسافران کم‌توان، سالمندان و مسافران ترانزیت در پایانه‌های پروازهای بین‌المللی خلیج فارس.',
    points: ['تردد کاملاً مستقل بدون نیاز به همراه', 'پایش لحظه‌ای با داشبورد Fleet OS', 'بازگشت خودکار به داک‌های شارژ'],
  },
  {
    icon: Building2,
    title: 'جابه‌جایی هوشمند در مراکز تجاری و درمانی',
    subtitle: 'Malls & Healthcare Hubs in GCC',
    desc: 'پیاده‌سازی پلتفرم کالسکه‌های هوشمند خانواده، مبل‌های متحرک و ناوگان توانبخشی در مجتمع‌های تجاری بزرگ (مانند عمان مال و مسقط مال) و مراکز درمانی فوق‌تخصصی منطقه.',
    points: ['مدل درآمدزایی مشترک (Revenue Sharing)', 'نقشه تعاملی و خدمات تبلیغاتی دیجیتال', 'افزایش رضایت و مدت ماندگاری مراجعین'],
  },
  {
    icon: Cpu,
    title: 'انتقال دانش فنی و R&D مشترک',
    subtitle: 'Technology Transfer & Regional Innovation',
    desc: 'همکاری نزدیک با دانشگاه‌ها، انکوباتورهای فناوری و پارک‌های علم و فناوری عمان (KOM) جهت بومی‌سازی الگوریتم‌های ناوبری مستقل، سازگاری با اقلیم خلیج فارس و توسعه سامانه‌های پایدار.',
    points: ['مقاوم‌سازی حرارتی در برابر گرمای بالای ۵۰ درجه', 'کالیبراسیون سنسورها در شرایط گردوغبار محیطی', 'تربیت نیروی متخصص بومی در حوزه رباتیک'],
  },
];

const gccBusinessModels = [
  {
    title: 'مدل AMaaS سازمانی (Zero CapEx)',
    englishTitle: 'Autonomous Mobility-as-a-Service',
    desc: 'مجموعه‌های فرودگاهی و تجاری نیازی به خرید سخت‌افزار ناوگان ندارند؛ ام‌آی‌تک ناوگان را مستقر کرده و تمامی مسئولیت‌های پایش ابری، بیمه و نگهداری را بر عهده می‌گیرد.',
    badge: 'محبوب‌ترین مدل سازمانی',
  },
  {
    title: 'نمایندگی‌های انحصاری و شبکه توزیع',
    englishTitle: 'Authorized Dealership & Service Hubs',
    desc: 'اعطای نمایندگی رسمی فروش، تعمیرات تخصصی و تامین قطعات یدکی اورجینال برای شرکت‌های توانبخشی و پزشکی در عمان، امارات، قطر و عربستان سعودی.',
    badge: 'توسعه شبکه منطقه‌ای',
  },
  {
    title: 'پروژه‌های پایلوت با استقرار سریع',
    englishTitle: '48-Hour Fast Pilot Deployment',
    desc: 'امکان ارزیابی عملیاتی ناوگان در فضای واقعی پروژه ظرف ۴۸ ساعت، بدون نیاز به سیم‌کشی یا تغییر در معماری ساختمانی مجتمع‌های میزبان.',
    badge: 'ارزیابی بدون ریسک',
  },
];

export default function OmanPage() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mitech Oman - Mikail Smart Technology',
    url: 'https://mitech.ir/about/oman',
    logo: 'https://mitech.ir/logo/mitech-logo.png',
    description:
      'Regional headquarters of Mitech in Muscat, Sultanate of Oman for autonomous micro-mobility, smart airport fleets, and rehabilitation robotics across the GCC.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Muscat',
      addressCountry: 'Oman',
      streetAddress: 'Knowledge Oasis Muscat (KOM), Innovation Complex',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+968-9123-4567',
        contactType: 'sales',
        email: 'oman@mitech.ir',
        areaServed: ['OM', 'AE', 'QA', 'SA', 'KW', 'BH'],
      },
    ],
  };

  return (
    <main className="w-full bg-slate-50 font-[Vazirmatn,sans-serif]" dir="rtl">
      {/* Schema.org Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[760px] lg:min-h-[820px] flex items-center overflow-hidden bg-slate-950 text-white">
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/oman-hero.jpg"
            alt="حضور منطقه‌ای ام آی تک در مسقط عمان"
            fill
            priority
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
        </div>

        {/* Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/85 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 z-0" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-24 lg:py-32">
          {/* Breadcrumb */}
          <nav aria-label="راهنمای مسیر" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              صفحه اصلی
            </Link>
            <ChevronLeft className="size-3 text-slate-500" />
            <Link href="/about" className="hover:text-emerald-400 transition-colors">
              درباره ما
            </Link>
            <ChevronLeft className="size-3 text-slate-500" />
            <span className="font-semibold text-white">دفتر عمان و بازارهای منطقه‌ای</span>
          </nav>

          <div className="max-w-2xl text-right">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md text-xs font-semibold text-emerald-400">
              <Globe className="size-4" />
              <span>GCC REGIONAL HEADQUARTERS • مسقط، سلطنت عمان</span>
            </div>

            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-white tracking-tight">
              گسترش مرزهای نوآوری؛
              <br />
              <span className="text-emerald-400">حضور فعال در سلطنت عمان.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-8 text-slate-300 font-normal max-w-xl">
              توسعه راهکارهای ناوبری مستقل، خدمات جابه‌جایی خودران فرودگاهی (AMaaS) و تجهیزات پیشرفته توانبخشی ام‌آی‌تک در مسقط و کشورهای حوزه خلیج فارس (GCC).
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#meeting"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95 cursor-pointer"
              >
                <span>هماهنگی جلسه تجاری در مسقط</span>
                <ArrowLeft className="size-4" />
              </a>
              <Link
                href="/contact/sales"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95"
              >
                <Handshake className="size-4 text-emerald-400" />
                <span>استعلام ارزی پروژه‌ها</span>
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              <div>
                <div className="text-xs text-slate-400 font-medium">هاب منطقه‌ای</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">مسقط <span className="text-xs font-normal text-emerald-400">عمان</span></div>
              </div>
              <div className="border-r border-white/10 pr-6">
                <div className="text-xs text-slate-400 font-medium">پوشش منطقه‌ای</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">۶ کشور <span className="text-xs font-normal text-emerald-400">GCC</span></div>
              </div>
              <div className="border-r border-white/10 pr-6">
                <div className="text-xs text-slate-400 font-medium">مدل استقرار</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">Zero CapEx</div>
              </div>
              <div className="border-r border-white/10 pr-6">
                <div className="text-xs text-slate-400 font-medium">پشتیبانی و SLA</div>
                <div className="text-xl sm:text-2xl font-black text-white mt-1">۲۴/۷ <span className="text-xs font-normal text-emerald-400">منطقه‌ای</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Vision & Strategic Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28 font-[Vazirmatn,sans-serif]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
            <Compass className="size-3.5 text-emerald-600" />
            <span>چشم‌انداز و مأموریت‌های استراتژیک در منطقه</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            توسعه زیرساخت‌های حمل‌ونقل هوشمند در خاورمیانه
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
            حضور رسمی ام‌آی‌تک در عمان، بستری راهبردی برای ارائه راهکارهای خودران و توانبخشی به پروژه‌های تحول دیجیتال کشورهای حوزه خلیج فارس است.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {regionalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-900 text-emerald-400 shadow-md shadow-slate-900/10 mb-6">
                    <Icon className="size-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-blue-950 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-xs text-emerald-700 mt-1 uppercase tracking-wider">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-8 text-slate-600">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                  {pillar.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GCC Business Models Section */}
      <section className="border-y border-slate-200/80 bg-white py-20 lg:py-28 font-[Vazirmatn,sans-serif]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700 mb-3">
              الگوهای تجاری و شراکت در GCC
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              مدل‌های همکاری انعطاف‌پذیر با سازمان‌های منطقه
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-8">
              طراحی‌شده متناسب با ساختارهای مالی و استانداردهای حاکمیتی پروژه‌های کلان خلیج فارس
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gccBusinessModels.map((model, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-xs hover:border-emerald-500/40 transition-all duration-300"
              >
                <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-800 mb-4">
                  {model.badge}
                </span>
                <h3 className="text-xl font-bold text-blue-950">{model.title}</h3>
                <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider">
                  {model.englishTitle}
                </p>
                <p className="mt-4 text-sm leading-8 text-slate-600">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Contact & B2B Meeting Section */}
      <section id="meeting" className="mx-auto max-w-7xl px-6 py-20 lg:py-28 font-[Vazirmatn,sans-serif]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Office Details (col-span-5) */}
          <div className="lg:col-span-5 text-right space-y-6">
            <div>
              <span className="inline-block rounded-full bg-emerald-100 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
                اطلاعات ارتباطی دفتر منطقه‌ای
              </span>
              <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">
                ارتباط مستقیم با دفتر مسقط
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                جهت استعلام قراردادهای دولتی، نمایندگی‌های تجاری و برگزاری جلسات حضوری در عمان:
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-emerald-600">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500">نشانی دفتر منطقه‌ای عمان</h4>
                  <p className="mt-1 text-sm font-bold text-blue-950 leading-6">
                    سلطنت عمان، مسقط، واحة المعرفة (Knowledge Oasis Muscat - KOM)، مجتمع نوآوری و فناوری
                  </p>
                  <p className="font-mono text-xs text-slate-400 mt-1" dir="ltr">
                    KOM, Innovation Hub, Muscat, Sultanate of Oman
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-emerald-600">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500">ایمیل‌های رسمی امور بین‌الملل</h4>
                  <div className="mt-1 space-y-1 text-sm font-bold text-emerald-700" dir="ltr">
                    <p>oman@mitech.ir</p>
                    <p>gcc@mitech.ir</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-emerald-600">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500">پشتیبانی و ارتباط تجاری بین‌الملل</h4>
                  <p className="mt-1 text-sm font-bold text-blue-950" dir="ltr">
                    +968 9123 4567 (Oman)
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    پاسخگویی به زبان‌های عربی، انگلیسی و فارسی
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Meeting Request Form (col-span-7) */}
          <div className="lg:col-span-7">
            <OmanMeetingRequest />
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import ControllersHero from '@/components/fleet/wheelchair-controllers/ControllersHero';
import RoboticsNavigationSection from '@/components/fleet/wheelchair-controllers/RoboticsNavigationSection';
import CorePlatformFeatures from '@/components/fleet/wheelchair-controllers/CorePlatformFeatures';
import ProductFamilySection from '@/components/fleet/wheelchair-controllers/ProductFamilySection';
import ModulesAndAccessoriesSection from '@/components/fleet/wheelchair-controllers/ModulesAndAccessoriesSection';
import SpecsComparisonTable from '@/components/fleet/wheelchair-controllers/SpecsComparisonTable';
import GoldenWarrantyCTA from '@/components/fleet/wheelchair-controllers/GoldenWarrantyCTA';

export const metadata: Metadata = {
  title: 'خانواده کنترلرهای ویلچر برقی آرتک و درایورهای موتور DC | شرکت فناوری هوشمند میکائیل',
  description:
    'شرکت فناوری هوشمند میکائیل، مرجع تخصصی طراحی و تولید زیرسیستم‌های ناوبری، درایورهای موتور DC و خانواده کنترلرهای ویلچر برقی ARTECH (مینی، پرو و ایکسپرو) با ۳۰ ماه گارانتی طلایی تعویض.',
  keywords: [
    'کنترلر ویلچر برقی',
    'جویستیک ویلچر برقی',
    'درایور موتور DC',
    'ناوبری رباتیک',
    'میکائیل مینی',
    'میکائیل پرو',
    'میکائیل ایکسپرو',
    'آرتک',
    'ARTECH',
    'ماژول قدرت XPM',
    'تجهیزات توانبخشی',
    'UGV',
    'AGV',
    'AUV',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'خانواده کنترلرهای ویلچر برقی آرتک و درایورهای ناوبری | شرکت فناوری هوشمند میکائیل',
    description:
      'طراحی و تولید انواع زیرسیستم‌های ناوبری، درایورهای موتور DC و خانواده کنترلرهای ویلچر برقی آرتک با الگوریتم‌های پردازش هوشمند و ۳۰ ماه گارانتی طلایی.',
    url: 'https://mitech.ir/fleet/wheelchair-controllers',
    siteName: 'فناوری هوشمند میکائیل (Mitech)',
    images: [
      {
        url: '/images/fleet/controllers/hero-single-left.webp',
        width: 1200,
        height: 675,
        alt: 'خانواده کنترلرها و درایورهای ویلچر برقی آرتک میکائیل',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خانواده کنترلرهای ویلچر برقی و درایورهای ناوبری میکائیل',
    description: 'درایورهای موتور DC، ناوبری UGV/AGV و کنترلرهای ویلچر برقی آرتک مینی، پرو و ایکسپرو.',
    images: ['/images/fleet/controllers/hero-single-left.webp'],
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet/wheelchair-controllers',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function WheelchairControllersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'خانواده کنترلرهای ویلچر برقی آرتک و درایورهای موتور DC میکائیل',
    image: 'https://mitech.ir/images/fleet/controllers/hero-single-left.webp',
    description:
      'مرجع تخصصی طراحی و تولید زیرسیستم‌های ناوبری، درایورهای موتور DC و خانواده کنترلرهای ویلچر برقی ARTECH با معماری دو بخشی مجزا و ۳۰ ماه گارانتی طلایی.',
    brand: {
      '@type': 'Brand',
      name: 'میکائیل (Mitech - ARTECH)',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
    },
    hasVariant: [
      {
        '@type': 'Product',
        name: 'آرتک مینی (ARTECH-Mini 50 / 90)',
        description: 'مدل مینیمال فوق‌فشرده با نمایشگر LED خطی برای بالاترین سطح مانورپذیری در فضاهای بسته و ناهمواری‌ها.',
        image: 'https://mitech.ir/images/fleet/controllers/mini.webp',
      },
      {
        '@type': 'Product',
        name: 'آرتک پرو تاچ و اکشن (ARTECH-PRO Touch & Action)',
        description: 'مجهز به نمایشگر LCD گرافیکی چندزبانه، هدایت لمسی با تلفن همراه، کد فعال‌سازی Programmable @Home و جک ایستا.',
        image: 'https://mitech.ir/images/fleet/controllers/pro.webp',
      },
      {
        '@type': 'Product',
        name: 'آرتک ایکسپرو (ARTECH-XPRO Light & Action)',
        description: 'پرچمدار هوشمند با استاندارد روشنایی اروپایی StVZO، پشتیبانی تا ۵ جک برقی iSeating و نمایشگر گرافیکی پیشرفته.',
        image: 'https://mitech.ir/images/fleet/controllers/xpro.webp',
      },
      {
        '@type': 'Product',
        name: 'ماژول درایور توان بالای موتور DC سری XPM',
        description: 'درایور موتورهای DC توان بالا تا ۷۰۰ وات (XPM-50/90/100) با خنک‌کاری پسیو هیت‌سینک و اتصالات اندرسون و داینامیک.',
        image: 'https://mitech.ir/images/fleet/controllers/power-module-xpm.webp',
      },
      {
        '@type': 'Product',
        name: 'ویلچر برقی خودران میکائیل (Autonomous Wheelchair)',
        description: 'پلتفرم ناوبری خودران توانبخشی و UGV مجهز به سنسور LiDAR و تبلت ناوبری جهت هدایت خودمختار در فضاهای شهری و داخلی.',
        image: 'https://mitech.ir/images/fleet/controllers/autonomous-wheelchair-real.webp',
      },
    ],
  };

  return (
    <main className="w-full overflow-hidden" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ۱. بخش هیرو معرفی شرکت میکائیل و شاخص‌های کلیدی */}
      <ControllersHero />

      {/* ۲. معماری درایورهای موتور DC و ناوبری موبایل‌ربات‌ها (UGV/AGV و AUV/RCV) */}
      <RoboticsNavigationSection />

      {/* ۳. ویژگی‌های مشترک سیستم‌های کنترل توانبخشی میکائیل (معماری دوبخشی، ایمنی، باتری و...) */}
      <CorePlatformFeatures />

      {/* ۴. خانواده کنترلرهای ویلچر برقی آرتک (مینی، پرو، ایکسپرو) */}
      <ProductFamilySection />

      {/* ۵. ماژول‌های قدرت XPM، ماژول‌های جویستیک و لوازم جانبی کامل */}
      <ModulesAndAccessoriesSection />

      {/* ۶. ماتریس مقایسه فنی کامل ماژول‌ها و پکیج‌های کامل */}
      <SpecsComparisonTable />

      {/* ۷. بخش گارانتی طلایی ۳۰ ماهه میکائیل همراه با پلاک اصالت ساخت ایران، خدمات و مشاوره فنی */}
      <GoldenWarrantyCTA />
    </main>
  );
}

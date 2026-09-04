import type { Metadata } from 'next';
import ControllersHero from '@/components/fleet/wheelchair-controllers/ControllersHero';
import RoboticsNavigationSection from '@/components/fleet/wheelchair-controllers/RoboticsNavigationSection';
import CorePlatformFeatures from '@/components/fleet/wheelchair-controllers/CorePlatformFeatures';
import ProductFamilySection from '@/components/fleet/wheelchair-controllers/ProductFamilySection';
import SpecsComparisonTable from '@/components/fleet/wheelchair-controllers/SpecsComparisonTable';
import GoldenWarrantyCTA from '@/components/fleet/wheelchair-controllers/GoldenWarrantyCTA';

export const metadata: Metadata = {
  title: 'خانواده کنترلرهای ویلچر برقی و درایورهای موتور DC | شرکت فناوری هوشمند میکائیل',
  description:
    'شرکت فناوری هوشمند میکائیل، مرجع تخصصی طراحی و تولید زیرسیستم‌های ناوبری، درایورهای موتور DC و خانواده کنترلرهای ویلچر برقی (مینی، پرو و ایکسپرو) با ۳۰ ماه گارانتی طلایی.',
  keywords: [
    'کنترلر ویلچر برقی',
    'جویستیک ویلچر برقی',
    'درایور موتور DC',
    'ناوبری رباتیک',
    'میکائیل مینی',
    'میکائیل پرو',
    'میکائیل ایکسپرو',
    'تجهیزات توانبخشی',
    'UGV',
    'AGV',
    'AUV',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'خانواده کنترلرهای ویلچر برقی و درایورهای ناوبری | شرکت فناوری هوشمند میکائیل',
    description:
      'طراحی و تولید انواع زیرسیستم‌های ناوبری، درایورهای موتور DC و خانواده کنترلرهای ویلچر برقی با الگوریتم‌های پردازش هوشمند و ۳۰ ماه گارانتی طلایی.',
    url: 'https://mitech.ir/fleet/wheelchair-controllers',
    siteName: 'فناوری هوشمند میکائیل (Mitech)',
    images: [
      {
        url: '/images/fleet/controllers/hero.jpg',
        width: 1200,
        height: 675,
        alt: 'خانواده کنترلرها و درایورهای ویلچر برقی میکائیل',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خانواده کنترلرهای ویلچر برقی و درایورهای ناوبری میکائیل',
    description: 'درایورهای موتور DC، ناوبری UGV/AGV و کنترلرهای ویلچر برقی مینی، پرو و ایکسپرو.',
    images: ['/images/fleet/controllers/hero.jpg'],
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
    name: 'خانواده کنترلرهای ویلچر برقی و درایورهای موتور DC میکائیل',
    image: 'https://mitech.ir/images/fleet/controllers/hero.jpg',
    description:
      'مرجع تخصصی طراحی و تولید زیرسیستم‌های ناوبری، درایورهای موتور DC و خانواده کنترلرهای ویلچر برقی با معماری دو بخشی و ۳۰ ماه گارانتی طلایی.',
    brand: {
      '@type': 'Brand',
      name: 'میکائیل (Mikaeel - Mitech)',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
    },
    hasVariant: [
      {
        '@type': 'Product',
        name: 'میکائیل مینی (Mikaeel Mini)',
        description: 'مدل مینیمال با نمایشگر LED برای بالاترین سطح مانورپذیری در فضاهای بسته و محدود.',
        image: 'https://mitech.ir/images/fleet/controllers/mini.jpg',
      },
      {
        '@type': 'Product',
        name: 'میکائیل پرو (Mikaeel Pro)',
        description: 'مجهز به نمایشگر LCD گرافیکی، کد فعال‌سازی Programmable @Home و جک ایستا.',
        image: 'https://mitech.ir/images/fleet/controllers/pro.jpg',
      },
      {
        '@type': 'Product',
        name: 'میکائیل ایکسپرو (Mikaeel X-Pro)',
        description: 'پرچمدار هوشمند با استاندارد روشنایی اروپایی StVZO و پشتیبانی تا ۵ جک iSeating.',
        image: 'https://mitech.ir/images/fleet/controllers/xpro.jpg',
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

      {/* ۴. خانواده کنترلرهای ویلچر برقی (مینی، پرو، ایکسپرو) با پالت #F1F5F9 و #0F172A */}
      <ProductFamilySection />

      {/* ۵. ماتریس مقایسه فنی کامل ماژول‌ها (جدول ریسپانسیو و موبایل‌فرست) */}
      <SpecsComparisonTable />

      {/* ۶. بخش گارانتی طلایی ۳۰ ماهه میکائیل، خدمات و مشاوره فنی */}
      <GoldenWarrantyCTA />
    </main>
  );
}

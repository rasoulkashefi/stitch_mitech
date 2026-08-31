import type { Metadata } from 'next';
import SofaHero from '@/components/fleet/smart-mobile-sofas/SofaHero';
import ParadigmShift from '@/components/fleet/smart-mobile-sofas/ParadigmShift';
import B2BVenues from '@/components/fleet/smart-mobile-sofas/B2BVenues';
import SafetyAndComfort from '@/components/fleet/smart-mobile-sofas/SafetyAndComfort';
import TechSpecs from '@/components/fleet/smart-mobile-sofas/TechSpecs';
import SofaCTA from '@/components/fleet/smart-mobile-sofas/SofaCTA';

export const metadata: Metadata = {
  title: 'مبل هوشمند سیار | مبلمان متحرک برای سالمندان | ام. آی. تک. (Mitech)',
  description:
    'مبل‌های هوشمند سیار ام. آی. تک.؛ راهکاری لوکس و راحت برای جابه‌جایی سالمندان و افراد کم‌توان در مجتمع‌های تجاری، مال‌ها و موزه‌ها با کنترل لمسی و ناوبری ایمن.',
  keywords: [
    'مبل هوشمند سیار',
    'مبلمان متحرک',
    'جابجایی سالمندان در مال',
    'ویلچر مبله',
    'تحرک هوشمند',
    'ام آی تک',
    'Smart Mobile Sofa',
  ],
  openGraph: {
    title: 'مبل هوشمند سیار ام. آی. تک. | تجربه یک گردش خانوادگی بدون خستگی',
    description:
      'همراهی پدربزرگ‌ها و مادربزرگ‌ها در فضاهای وسیع تجاری با مبلمان متحرک لوکس، هدایت آسان لمسی و سیستم ضدتصادف ۳۶۰ درجه.',
    url: 'https://mitech.ir/fleet/smart-mobile-sofas',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/images/fleet/smart-mobile-sofa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'سالمندان در حال استفاده از مبل هوشمند سیار در مجتمع تجاری',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مبل هوشمند سیار ام. آی. تک.',
    description: 'راهکاری لوکس و راحت برای جابه‌جایی سالمندان در مجتمع‌های تجاری.',
    images: ['/images/fleet/smart-mobile-sofa-og.jpg'],
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet/smart-mobile-sofas',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function SmartMobileSofasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'مبل هوشمند سیار',
    image: 'https://mitech.ir/images/fleet/smart-mobile-sofa-og.jpg',
    description: 'مبل‌های هوشمند سیار؛ راهکاری لوکس و راحت برای جابه‌جایی سالمندان در مجتمع‌های تجاری.',
    brand: {
      '@type': 'Brand',
      name: 'Mitech'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IRR',
      availability: 'https://schema.org/PreOrder'
    }
  };

  return (
    <main className="w-full overflow-hidden" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ماژول ۱: هیرو سکشن مبل هوشمند (SofaHero.tsx) */}
      <SofaHero />

      {/* ماژول ۲: تغییر پارادایم - از ویلچر تا مبلمان متحرک (ParadigmShift.tsx) */}
      <ParadigmShift />

      {/* ماژول ۳: ارزش افزوده برای مجتمع‌های تجاری (B2B Value) (B2BVenues.tsx) */}
      <B2BVenues />

      {/* ماژول ۴: ویژگی‌های ایمنی و راحتی (SafetyAndComfort.tsx) */}
      <SafetyAndComfort />

      {/* ماژول ۵: جدول مشخصات فنی (TechSpecs.tsx) */}
      <TechSpecs />

      {/* ماژول ۶: فراخوان پایانی خدمات ناوگان (SofaCTA.tsx) */}
      <SofaCTA />
    </main>
  );
}

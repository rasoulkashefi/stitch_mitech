import type { Metadata } from 'next';
import StairClimberHero from '@/components/fleet/stair-climbers/StairClimberHero';
import StairClimberGuardrail from '@/components/fleet/stair-climbers/StairClimberGuardrail';
import StairClimberTechSpecs from '@/components/fleet/stair-climbers/StairClimberTechSpecs';
import StairClimberSpecsTable from '@/components/fleet/stair-climbers/StairClimberSpecsTable';
import StairClimberCTA from '@/components/fleet/stair-climbers/StairClimberCTA';

export const metadata: Metadata = {
  title: 'پله‌پیما و بالابر هوشمند | ام. آی. تک. (Mitech)',
  description:
    'طراحی و ساخت انواع پله‌پیما و تجهیزات بالابر توانبخشی هوشمند با ایمنی فوق‌العاده و ارگونومی استاندارد جهت تردد مستقل توانیابان.',
  keywords: [
    'پله پیما',
    'پله پیما برقی',
    'قیمت پله پیما',
    'پله پیما خانگی',
    'ویلچر پله پیما',
    'ام آی تک',
    'Mitech',
    'تجهیزات توانبخشی',
    'بالابر پله',
    'پله نورد برقی',
  ],
  openGraph: {
    title: 'پله‌پیما و بالابر هوشمند ام. آی. تک. (Mitech) | آزادی در حرکت میان طبقات',
    description:
      'طراحی و ساخت انواع پله‌پیما و تجهیزات بالابر توانبخشی هوشمند با ایمنی فوق‌العاده و ارگونومی استاندارد جهت تردد مستقل توانیابان.',
    url: 'https://mitech.ir/fleet/stair-climbers',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/images/fleet/stair-climber-og.jpg',
        width: 1200,
        height: 675,
        alt: 'پله‌پیما و بالابر توانبخشی هوشمند ام آی تک',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پله‌پیما و بالابر هوشمند | ام. آی. تک. (Mitech)',
    description:
      'طراحی و ساخت انواع پله‌پیما و تجهیزات بالابر توانبخشی هوشمند با ایمنی فوق‌العاده و ارگونومی استاندارد.',
    images: ['/images/fleet/stair-climber-og.jpg'],
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet/stair-climbers',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function StairClimbersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'پله‌پیما و بالابر هوشمند ام. آی. تک. (Mitech Stair Climber)',
    image: 'https://mitech.ir/images/fleet/stair-climber-og.jpg',
    description:
      'طراحی و ساخت انواع پله‌پیما و تجهیزات بالابر توانبخشی هوشمند با ایمنی فوق‌العاده و ارگونومی استاندارد جهت تردد مستقل توانیابان و سالمندان میان طبقات.',
    brand: {
      '@type': 'Brand',
      name: 'Mitech',
    },
    category: 'Medical & Rehabilitation Robotics',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IRR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <main className="w-full overflow-hidden font-[Vazirmatn,sans-serif]" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero Section */}
      <StairClimberHero />

      {/* 2. Content Guardrail (Stair Climber vs. Legacy Stairlift) */}
      <StairClimberGuardrail />

      {/* 3. Core Tech Specs (Sensors, Emergency Brake, Brushless Motors, Lithium BMS) */}
      <StairClimberTechSpecs />

      {/* 4. Complete Engineering Specifications Table */}
      <StairClimberSpecsTable />

      {/* 5. Demo / Consultation CTA */}
      <StairClimberCTA />
    </main>
  );
}

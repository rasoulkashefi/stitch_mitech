import type { Metadata } from 'next';
import StairClimberHero from '@/components/fleet/stair-climbers/StairClimberHero';
import StairClimberGuardrail from '@/components/fleet/stair-climbers/StairClimberGuardrail';
import StairClimberTechSpecs from '@/components/fleet/stair-climbers/StairClimberTechSpecs';
import StairClimberSpecsTable from '@/components/fleet/stair-climbers/StairClimberSpecsTable';
import StairClimberCTA from '@/components/fleet/stair-climbers/StairClimberCTA';

export const metadata: Metadata = {
  title: 'درایور و سیستم کنترل هوشمند پله‌پیما ARTECH-Pro XLift | ام. آی. تک. (Mitech)',
  description:
    'طراحی و تولید درایور و سامانه کنترل پله‌پیما مدل ARTECH-Pro XLift با پشتیبانی از پله‌پیماهای تک‌موتوره و دو‌موتوره تا سقف ۷۰۰ وات؛ مناسب پله‌پیماهای مسیر مستقیم (Straight) و پیچشی سفارشی (Custom-curve).',
  keywords: [
    'درایور پله پیما',
    'کنترلر پله پیما',
    'ARTECH-Pro XLift',
    'درایور پله پیما ۷۰۰ وات',
    'پله پیما مستقیم',
    'پله پیما پیچشی',
    'Stairlift',
    'Custom-curve Stairlift',
    'برد پله پیما',
    'ام آی تک',
    'Mitech',
    'تعمیر درایور پله پیما',
    'بالابر پله خانگی',
  ],
  openGraph: {
    title: 'درایور و سیستم کنترل هوشمند پله‌پیما ARTECH-Pro XLift | ام. آی. تک. (Mitech)',
    description:
      'درایور صنعتی پله‌پیما با پشتیبانی از سیستم‌های تک‌موتوره و دو‌موتوره تا سقف ۷۰۰ وات؛ حرکت نرم S-Curve و ایمنی Fail-Safe در پله‌پیماهای مستقیم و پیچشی.',
    url: 'https://mitech.ir/fleet/stair-climbers',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/images/fleet/stairlift/curved-stairlift-landing.jpg',
        width: 1024,
        height: 768,
        alt: 'درایور و سیستم کنترل پله پیما ARTECH-Pro XLift ام آی تک',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'درایور و کنترلر پله‌پیما ARTECH-Pro XLift | ام. آی. تک. (Mitech)',
    description:
      'درایور پله‌پیما با پشتیبانی از پله‌پیماهای تک‌موتوره و دو‌موتوره تا سقف ۷۰۰ وات؛ سازگار با پله‌پیماهای مستقیم و پیچشی سفارشی.',
    images: ['/images/fleet/stairlift/curved-stairlift-landing.jpg'],
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
    name: 'درایور و سیستم کنترل هوشمند پله‌پیما ARTECH-Pro XLift',
    model: 'ARTECH-Pro XLift',
    image: 'https://mitech.ir/images/fleet/stairlift/artech-pro-xlift-driver.jpg',
    description:
      'طراحی و تولید درایور صنعتی پله‌پیما با پشتیبانی از پله‌پیماهای تک‌موتوره و دو‌موتوره تا سقف ۷۰۰ وات برای انواع پله‌پیماهای مسیر مستقیم (Straight Stairlift) و پیچشی سفارشی (Custom-curve Stairlift).',
    brand: {
      '@type': 'Brand',
      name: 'Mitech',
    },
    category: 'Industrial Drives & Rehabilitation Motion Control',
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
      {/* 1. Hero Section: ARTECH-Pro XLift Driver & Real Installation */}
      <StairClimberHero />

      {/* 2. Guardrail & Applications: Straight vs Custom-curve Stairlifts */}
      <StairClimberGuardrail />

      {/* 3. Core Tech Specs (High Power 700W, S-Curve, Fail-Safe Brake, Diagnostics) */}
      <StairClimberTechSpecs />

      {/* 4. Complete Engineering Specifications Table */}
      <StairClimberSpecsTable />

      {/* 5. Consultation & OEM / Retrofit Supply CTA */}
      <StairClimberCTA />
    </main>
  );
}

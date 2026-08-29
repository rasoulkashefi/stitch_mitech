import type { Metadata } from 'next';
import AmrHero from '@/components/fleet/following-amrs/AmrHero';
import VisionDifferentiator from '@/components/fleet/following-amrs/VisionDifferentiator';
import OperationModes from '@/components/fleet/following-amrs/OperationModes';
import IndustryUseCases from '@/components/fleet/following-amrs/IndustryUseCases';
import TechSpecs from '@/components/fleet/following-amrs/TechSpecs';
import AmrCTA from '@/components/fleet/following-amrs/AmrCTA';

export const metadata: Metadata = {
  title: 'ربات هوشمند حمل بار و تعقیب کاربر (Following AMR) | ام. آی. تک. (Mitech)',
  description:
    'ربات خودران حمل بار و چمدان مجهز به هوش مصنوعی، بینایی ماشین و کنترل با فرامین اشاره‌ای (بدون نیاز به تگ سخت‌افزاری) با قابلیت تشکیل کاروان در انبارها، فرودگاه‌ها و مجتمع‌های تجاری.',
  keywords: [
    'ربات حمل بار',
    'ربات تعقیب کننده',
    'AMR خودران',
    'بینایی ماشین',
    'ربات انبارداری',
    'ربات حمل چمدان',
    'ام آی تک',
    'Human-Following Robot',
  ],
  openGraph: {
    title: 'ربات تعقیب‌کننده و حمل بار ام. آی. تک. | همگام با شما در جابه‌جایی بار',
    description:
      'جابه‌جایی هوشمند و ایمن بار تا ۱۰۰+ کیلوگرم با سیستم بینایی ماشین، فرمان‌های حرکتی دست و قابلیت اتصال کاروانی رباتها.',
    url: 'https://mitech.ir/fleet/following-amrs',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/images/fleet/following-amr-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ربات تعقیب کننده و حمل بار هوشمند ام آی تک',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet/following-amrs',
  },
};

export default function FollowingAmrsPage() {
  return (
    <main className="w-full overflow-hidden" dir="rtl">
      {/* Module 1: Hero Section */}
      <AmrHero />

      {/* Module 2: AI Vision Differentiator vs Legacy */}
      <VisionDifferentiator />

      {/* Module 3: Three Operation Modes (Interactive Tabs) */}
      <OperationModes />

      {/* Module 4: Industry Use Cases Grid */}
      <IndustryUseCases />

      {/* Module 5: Technical Specifications (Filterable) */}
      <TechSpecs />

      {/* Module 6: Pilot Request CTA Form */}
      <AmrCTA />
    </main>
  );
}

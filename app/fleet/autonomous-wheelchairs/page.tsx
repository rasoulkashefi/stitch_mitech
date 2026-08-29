import type { Metadata } from 'next';
import WheelchairHero from '@/components/fleet/autonomous-wheelchair/WheelchairHero';
import ValueProposition from '@/components/fleet/autonomous-wheelchair/ValueProposition';
import WorkflowSteps from '@/components/fleet/autonomous-wheelchair/WorkflowSteps';
import FleetManagement from '@/components/fleet/autonomous-wheelchair/FleetManagement';
import TechSpecs from '@/components/fleet/autonomous-wheelchair/TechSpecs';
import WheelchairCTA from '@/components/fleet/autonomous-wheelchair/WheelchairCTA';

export const metadata: Metadata = {
  title: 'ویلچر برقی خودران و هوشمند | ام. آی. تک. (Mitech)',
  description:
    'نسل جدید سکوهای حمل‌ونقل انفرادی خودران مجهز به هوش مصنوعی و بینایی ماشین؛ مناسب برای فرودگاه‌ها، مراکز درمانی، نمایشگاه‌ها و مجتمع‌های تجاری.',
  keywords: [
    'ویلچر خودران',
    'ویلچر برقی هوشمند',
    'حمل و نقل فرودگاهی',
    'ناوگان خودران',
    'ام آی تک',
    'AMaaS',
    'تجهیزات توانبخشی هوشمند',
  ],
  openGraph: {
    title: 'ویلچر برقی خودران ام. آی. تک. | آزادی در حرکت با ناوبری هوشمند',
    description:
      'استقلال کامل حرکتی در فضاهای پرتردد با ناوبری خودکار، سنسورهای ۳۶۰ درجه و قابلیت بازگشت هوشمند به ایستگاه مبدا.',
    url: 'https://mitech.ir/fleet/autonomous-wheelchairs',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/images/fleet/autonomous-wheelchair-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ویلچر خودران هوشمند ام آی تک در فرودگاه',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet/autonomous-wheelchairs',
  },
};

export default function AutonomousWheelchairsPage() {
  return (
    <main className="w-full overflow-hidden" dir="rtl">
      {/* Module 1: Hero Section */}
      <WheelchairHero />

      {/* Module 2: Dual Value Proposition (B2C & B2B) */}
      <ValueProposition />

      {/* Module 3: Step-by-Step Workflow & Journey */}
      <WorkflowSteps />

      {/* Module 4: Central Fleet OS Management & Monitoring */}
      <FleetManagement />

      {/* Module 5: Detailed Technical Specifications */}
      <TechSpecs />

      {/* Module 6: Enterprise Demo & Pilot Request CTA */}
      <WheelchairCTA />
    </main>
  );
}

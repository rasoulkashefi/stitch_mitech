import type { Metadata } from 'next';
import FamilyCartHero from '@/components/fleet/smart-family-carts/FamilyCartHero';
import DualValue from '@/components/fleet/smart-family-carts/DualValue';
import LeadingPacingWorkflow from '@/components/fleet/smart-family-carts/LeadingPacingWorkflow';
import SafetyAndComfort from '@/components/fleet/smart-family-carts/SafetyAndComfort';
import TechSpecs from '@/components/fleet/smart-family-carts/TechSpecs';
import FamilyCartCTA from '@/components/fleet/smart-family-carts/FamilyCartCTA';

export const metadata: Metadata = {
  title: 'کالسکه و سبد همراه هوشمند خانواده | ام. آی. تک. (Mitech)',
  description:
    'کالسکه و سبد خرید خودران هوشمند برای حمل و سرگرمی کودکان در مجتمعهای تجاری، هایپرمارکتها، موزهها و فضاهای گردشگری مجهز به بینایی ماشین و حرکت ایمن در جلوی دید والدین.',
  keywords: [
    'کالسکه هوشمند',
    'سبد خرید هوشمند خانواده',
    'ربات همراه خانواده',
    'کالسکه خودران',
    'ام آی تک',
    'Smart Stroller',
    'Gluxkind Ella',
  ],
  openGraph: {
    title: 'کالسکه همراه هوشمند خانواده ام. آی. تک. | تجربهای شاد و آسوده از خرید',
    description:
      'حرکت خودکار و هوشمند در میدان دید والدین، حمل ۱ یا ۲ کودک همراه با فضای خرید، و توقف ایمن ۳۶۰ درجه در مجتمعهای تجاری.',
    url: 'https://mitech.ir/fleet/smart-family-carts',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/images/fleet/smart-family-cart-og.jpg',
        width: 1200,
        height: 630,
        alt: 'کالسکه و سبد هوشمند خانواده ام آی تک در مرکز خرید',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet/smart-family-carts',
  },
};

export default function SmartFamilyCartsPage() {
  return (
    <main className="w-full overflow-hidden" dir="rtl">
      {/* ماژول ۱: هیرو سکشن سبد هوشمند خانواده */}
      <FamilyCartHero />

      {/* ماژول ۲: ارزش پیشنهادی دوگانه - خانواده‌ها و مراکز تجاری */}
      <DualValue />

      {/* ماژول ۳: نحوه عملکرد و هوشمندی حرکتی (الگوریتم حرکت پیشرو) */}
      <LeadingPacingWorkflow />

      {/* ماژول ۴: ویژگی‌های ایمنی و راحتی کودک (Bento Box) */}
      <SafetyAndComfort />

      {/* ماژول ۵: جدول مشخصات فنی و مهندسی */}
      <TechSpecs />

      {/* ماژول ۶: فراخوان پایانی و فرم تجهیز ناوگان مراکز تجاری */}
      <FamilyCartCTA />
    </main>
  );
}

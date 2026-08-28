import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'ویلچرهای برقی و خودران | میکائیل',
  description: 'ویلچرهای فوق‌پیشرفته هوشمند با فناوری ناوبری خودکار، دستیار صوتی و کنترل حرکتی دقیق.',
};

export default function AutonomousWheelchairsPage() {
  return (
    <ComingSoonTemplate
      title="ویلچرهای برقی و خودران"
      englishTitle="Smart & Autonomous Wheelchairs"
      category="ناوگان"
      categoryHref="/fleet"
      description="ترکیبی بی‌نظیر از ارگونومی پزشکی، استقلال حرکتی مطلق و هوش مصنوعی. طراحی شده برای توان‌خواهان و سالمندان با قابلیت رانندگی خودران در محیط‌های بسته و باز."
      highlights={[
        {
          title: 'کنترل خودکار به سمت مقصد',
          desc: 'تعیین مقصد روی نمایشگر لمسی یا از طریق اپلیکیشن موبایل و حرکت خودران و ایمن دستگاه.',
        },
        {
          title: 'جوی‌استیک ارگونومیک با فیدبک هوشمند',
          desc: 'کنترل فوق‌العاده نرم با قابلیت تنظیم حساسیت و هشدارهای لرزشی ایمنی.',
        },
        {
          title: 'اتصال به فضای ابری و پایش سلامت',
          desc: 'ثبت پارامترهای سلامت، وضعیت باتری و امکان اعلام هشدار سقوط و درخواست کمک اضطراری (SOS).',
        },
      ]}
      siblingLinks={[
        {
          label: 'کالسکه‌های هوشمند خانواده',
          href: '/fleet/smart-family-carts',
          desc: 'کالسکه‌های هوشمند ویژه فضاهای تجاری',
        },
        {
          label: 'ربات‌های باربر تعقیب‌کننده',
          href: '/fleet/following-amrs',
          desc: 'حمل وسایل و بار با دنبال‌کردن خودکار',
        },
        {
          label: 'ناوبری مستقل از GPS',
          href: '/technology/gps-independent-navigation',
          desc: 'فناوری ناوبری دقیق داخلی و SLAM',
        },
      ]}
    />
  );
}

import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'کالسکه‌های هوشمند خانواده | میکائیل',
  description: 'کالسکه‌های مدرن مجهز به پیشران برقی و سیستم‌های ناوبری ویژه مراکز خرید و تفریحی.',
};

export default function SmartFamilyCartsPage() {
  return (
    <ComingSoonTemplate
      title="کالسکه‌های هوشمند خانواده"
      englishTitle="Smart Family Carts & Strollers"
      category="ناوگان"
      categoryHref="/fleet"
      description="تجربه‌ای دلپذیر و بدون خستگی برای خانواده‌های دارای کودک در پاساژها و مراکز بزرگ. همراه با موتور کمکی هوشمند در شیب‌ها، قفل الکترونیکی و شارژر وایرلس گوشی."
      highlights={[
        {
          title: 'دستیار الکتریکی هوشمند (Power-Assist)',
          desc: 'حس سبکی مطلق هنگام هل دادن کالسکه و ترمز کمکی خودکار در سرپایینی‌ها.',
        },
        {
          title: 'نمایشگر لمسی اختصاصی و نقشه مال',
          desc: 'راهنمای صوتی و تصویری طبقات و پیدا کردن آسان اتاق مادر و کودک، آسانسورها و رستوران‌ها.',
        },
        {
          title: 'سیستم ضدسرقت و حصار جغرافیایی (Geofence)',
          desc: 'قفل خودکار چرخ‌ها در صورت خروج از محدوده مجاز و ردیابی لحظه‌ای دستگاه.',
        },
      ]}
      siblingLinks={[
        {
          label: 'ویلچرهای برقی خودران',
          href: '/fleet/autonomous-wheelchairs',
          desc: 'ویلچرهای نسل جدید با ناوبری هوشمند',
        },
        {
          label: 'مبل‌های هوشمند متحرک',
          href: '/fleet/smart-mobile-sofas',
          desc: 'مبلمان برقی متحرک برای مراکز تجاری',
        },
        {
          label: 'راهکار مجتمع‌های تجاری و مال‌ها',
          href: '/solutions/malls',
          desc: 'بسته جامع خدمات ناوگان برای مراکز خرید',
        },
      ]}
    />
  );
}

import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'محصولات و ناوگان خودران | میکائیل',
  description: 'مجموعه ناوگان پیشرفته رباتیک و حمل‌ونقل هوشمند شامل ویلچرهای خودران، کالسکه‌های هوشمند و ربات‌های باربر.',
};

export default function FleetPage() {
  return (
    <ComingSoonTemplate
      title="محصولات و ناوگان خودران"
      englishTitle="Autonomous Fleet & Smart Mobility"
      category="ناوگان"
      categoryHref="/fleet"
      description="مجموعه کامل وسایل نقلیه هوشمند و تجهیزات خودران میکائیل طراحی شده برای استقلال فردی، تفریح خانوادگی و ارتقای خدمات سازمانی با بالاترین ایمنی."
      highlights={[
        {
          title: 'ماژولار و قابل شخصی‌سازی',
          desc: 'قابلیت نصب انواع سنسورها، سیستم‌های مانیتورینگ و اکسسوری‌های ارگونومیک بر روی تمامی پلتفرم‌ها.',
        },
        {
          title: 'ایمنی فعال ۳۶۰ درجه',
          desc: 'تجهیز به رادارهای اولتراسونیک، دوربین‌های عمق‌سنج و سیستم ترمز اضطراری خودکار ضدبرخورد.',
        },
        {
          title: 'باتری‌های نسل جدید لیتیومی',
          desc: 'طول عمر بالا، شارژ سریع و پشتیبانی از داک شارژ اتوماتیک بدون نیاز به دخالت کاربر.',
        },
      ]}
      siblingLinks={[
        {
          label: 'ویلچرهای برقی خودران',
          href: '/fleet/autonomous-wheelchairs',
          desc: 'ویلچر هوشمند با کنترل دقیق و رانش خودکار',
        },
        {
          label: 'کالسکه‌های هوشمند خانواده',
          href: '/fleet/smart-family-carts',
          desc: 'کالسکه مدرن با موتور کمکی و ناوبری داخل مال',
        },
        {
          label: 'ربات‌های باربر تعقیب‌کننده (AMR)',
          href: '/fleet/following-amrs',
          desc: 'ربات هوشمند حمل بار با قابلیت دنبال‌کردن کاربر',
        },
        {
          label: 'مبل‌های هوشمند متحرک',
          href: '/fleet/smart-mobile-sofas',
          desc: 'مبلمان برقی متحرک برای اماکن لوکس و نمایشگاه‌ها',
        },
      ]}
    />
  );
}

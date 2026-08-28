import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'فناوری و پلتفرم‌های مهندسی | میکائیل',
  description: 'معماری فناوری‌های بنیادین میکائیل در حوزه‌های ناوبری بدون GPS، کنترلرهای الکترونیکی و پلتفرم ابری دوقلوی دیجیتال.',
};

export default function TechnologyPage() {
  return (
    <ComingSoonTemplate
      title="فناوری و پلتفرم‌های مهندسی"
      englishTitle="Core Technologies & Engineering Platforms"
      category="فناوری"
      categoryHref="/technology"
      description="شرکت دانش‌بنیان میکائیل با تکیه بر هسته فناوری بومی، پیشرفته‌ترین الگوریتم‌های ناوبری درون‌ساختمانی، سخت‌افزارهای محرکه اختصاصی و سامانه‌های نرم‌افزاری تله‌متری را توسعه می‌دهد."
      highlights={[
        {
          title: 'هسته ناوبری بومی و مستقل از اینترنت',
          desc: 'پردازش بلادرنگ روی لایه Edge و حرکت کاملا پایدار حتی در صورت قطع کامل شبکه.',
        },
        {
          title: 'دقت میلی‌متری در توقف و پارک داک',
          desc: 'ترکیب فیوژن سنسورهای LiDAR، Visual SLAM و اینرسیال (IMU) برای رانش بدون نقص.',
        },
        {
          title: 'امنیت سایبری لایه سخت‌افزار و نرم‌افزار',
          desc: 'رمزنگاری دوطرفه ارتباطات ناوگان با سرور مرکزی جهت جلوگیری از هرگونه نفوذ و اختلال.',
        },
      ]}
      siblingLinks={[
        {
          label: 'ناوبری مستقل از GPS',
          href: '/technology/gps-independent-navigation',
          desc: 'نقشه‌برداری و موقعیت‌یابی بلادرنگ در فضاهای مسقف',
        },
        {
          label: 'سیستم‌های پیشران و موقعیت‌یابی',
          href: '/technology/drives-and-positioning',
          desc: 'موتورهای هاب بدون گیربکس و کنترلرهای هوشمند',
        },
        {
          label: 'پلتفرم دوقلوی دیجیتال',
          href: '/technology/digital-twin-platform',
          desc: 'مانیتورینگ سه‌بعدی و هوش مصنوعی مدیریت ناوگان',
        },
      ]}
    />
  );
}

import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'مبل‌ها و صندلی‌های هوشمند متحرک | میکائیل',
  description: 'مبلمان برقی متحرک و هوشمند برای سالن‌های VIP، نمایشگاه‌ها، موزه‌ها و لابی‌های مدرن.',
};

export default function SmartMobileSofasPage() {
  return (
    <ComingSoonTemplate
      title="مبل‌ها و صندلی‌های هوشمند متحرک"
      englishTitle="Smart Mobile Sofas & Lounge Pods"
      category="ناوگان"
      categoryHref="/fleet"
      description="تلفیق راحتی مبلمان لوکس با پلتفرم خودران. مناسب برای تورهای نمایشگاهی بدون خستگی، لابی هتل‌های مجلل و استراحتگاه‌های فرودگاهی با کنترل اختصاصی یا مسیردهی خودکار."
      highlights={[
        {
          title: 'ارگونومی فوق‌العاده با متریال پریمیوم',
          desc: 'روکش‌های چرمی باکیفیت، نشیمن طبی ارگونومیک، پورت شارژ سریع و زیرپایی برقی قابل تنظیم.',
        },
        {
          title: 'حرکت گروهی سنکرون (Swarm Navigation)',
          desc: 'قابلیت حرکت هماهنگ چند مبل به صورت همزمان در تورهای هدایت‌شده موزه و گالری.',
        },
        {
          title: 'سیستم صوتی استریو محیطی و مانیتورینگ',
          desc: 'اسپیکرهای داخلی با کیفیت بالا جهت پخش موسیقی آرامش‌بخش یا راهنمای صوتی تور.',
        },
      ]}
      siblingLinks={[
        {
          label: 'راهکار مراکز گردشگری و هتل‌ها',
          href: '/solutions/tourism',
          desc: 'کاربردهای مبلمان متحرک در گردشگری',
        },
        {
          label: 'کالسکه‌های هوشمند خانواده',
          href: '/fleet/smart-family-carts',
          desc: 'ناوگان خانواده در مجموعه‌های تفریحی',
        },
        {
          label: 'سیستم‌های پیشران و موقعیت‌یابی',
          href: '/technology/drives-and-positioning',
          desc: 'موتورها و درایورهای بی‌صدا و پرقدرت',
        },
      ]}
    />
  );
}

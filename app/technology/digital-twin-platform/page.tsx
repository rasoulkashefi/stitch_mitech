import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'پلتفرم دوقلوی دیجیتال و مدیریت ناوگان | فناوری میکائیل',
  description: 'پلتفرم ابری شبیه‌سازی و نظارت سه‌بعدی بلادرنگ بر ناوگان رباتیک، تحلیل ترافیک و نگهداری پیش‌بینانه.',
};

export default function DigitalTwinPlatformPage() {
  return (
    <ComingSoonTemplate
      title="پلتفرم دوقلوی دیجیتال و مانیتورینگ ناوگان"
      englishTitle="Digital Twin Platform & Fleet Management"
      category="فناوری"
      categoryHref="/technology"
      description="پلتفرم ابری میکائیل یک کپی دیجیتال سه‌بعدی زنده از محیط و ناوگان ایجاد می‌کند که به مدیران سازمان امکان کنترل، تحلیل رفتار مشتریان و بهینه‌سازی مسیرها را در زمان واقعی می‌دهد."
      highlights={[
        {
          title: 'داشبورد تله‌متری سه‌بعدی زنده',
          desc: 'مشاهده مکان زنده هر وسیله، درصد باتری، سرعت، مسیر پیموده شده و وضعیت مسافر روی نقشه سه‌بعدی.',
        },
        {
          title: 'نگهداری پیش‌بینانه مبتنی بر هوش مصنوعی (PdM)',
          desc: 'تشخیص زودهنگام استهلاک قطعات مکانیکی و سلول‌های باتری پیش از وقوع خرابی فیزیکی.',
        },
        {
          title: 'هیت‌مپ تردد و تحلیل رفتار مشتریان',
          desc: 'گزارش‌گیری از مسیرهای پرترافیک و نقاط توقف محبوب برای افزایش راندمان تجاری مال‌ها.',
        },
      ]}
      siblingLinks={[
        {
          label: 'ناوبری مستقل از GPS',
          href: '/technology/gps-independent-navigation',
          desc: 'زیرساخت موقعیت‌یابی ناوگان',
        },
        {
          label: 'جابجایی خودران به عنوان سرویس (AMaaS)',
          href: '/business-model/amaas',
          desc: 'بهره‌برداری از پلتفرم در مدل خدماتی',
        },
        {
          label: 'ربات‌های باربر تعقیب‌کننده',
          href: '/fleet/following-amrs',
          desc: 'کنترل و فراخوانی ربات‌های AMR',
        },
      ]}
    />
  );
}

import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'تاریخچه و چشم‌انداز | فناوری هوشمند میکائیل',
  description: 'مسیر شکل‌گیری میکائیل از آزمایشگاه‌های پژوهشی تا تجاری‌سازی صنعتی و چشم‌انداز آینده حمل‌ونقل هوشمند.',
};

export default function HistoryVisionPage() {
  return (
    <ComingSoonTemplate
      title="تاریخچه و چشم‌انداز"
      englishTitle="Company History & Strategic Vision"
      category="درباره ما"
      categoryHref="/about"
      description="از ساخت اولین پروتوتایپ‌های ویلچر هوشمند تا استقرار ناوگان‌های خودران سازمانی در سطح کشور؛ روایت تلاش میکائیل برای تغییر استاندارد جابجایی درون‌شهری و درون‌ساختمانی."
      highlights={[
        {
          title: 'داستان پیدایش',
          desc: 'شروع فعالیت توسط جمعی از فارغ‌التحصیلان برتر دانشگاه‌های مهندسی با هدف حل چالش واقعی تردد توان‌یابان.',
        },
        {
          title: 'چشم‌انداز ۲۰۳۰',
          desc: 'تبدیل شدن به مرجع برتر فناوری‌های خودران و زیرساخت AMaaS در خاورمیانه و شمال آفریقا (MENA).',
        },
        {
          title: 'ارزش‌های سازمانی',
          desc: 'نوآوری بی‌وقفه، تمرکز عمیق بر ایمنی و قابلیت اطمینان، و تعهد به تجربه کاربری فوق‌العاده.',
        },
      ]}
      siblingLinks={[
        {
          label: 'درباره میکائیل',
          href: '/about',
          desc: 'معرفی کلی شرکت و حوزه فعالیت‌ها',
        },
        {
          label: 'اخبار و رویدادهای شرکت',
          href: '/blog/category/company-news',
          desc: 'گزارش حضور در رویدادها و دستاوردهای جدید',
        },
        {
          label: 'مطالعات موردی و پایلوت‌ها',
          href: '/blog/category/case-studies',
          desc: 'نتایج پیاده‌سازی‌های عملیاتی در سازمان‌ها',
        },
      ]}
    />
  );
}

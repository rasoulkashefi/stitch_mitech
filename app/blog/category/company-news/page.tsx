import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'اخبار و رویدادهای شرکت (Company News) | میکائیل',
  description: 'آخرین اخبار، رونمایی محصولات جدید، تفاهم‌نامه‌ها و اطلاعیه‌های رسمی شرکت فناوری هوشمند میکائیل.',
};

export default function CompanyNewsPage() {
  return (
    <ComingSoonTemplate
      title="اخبار و رویدادهای شرکت"
      englishTitle="Company News & Press Releases"
      category="مجله و مقالات"
      categoryHref="/blog"
      description="پایگاه رسمی اطلاع‌رسانی شرکت دانش‌بنیان فناوری هوشمند میکائیل؛ دستاوردهای علمی، افتخارات، حضور در نمایشگاه‌های بین‌المللی و گزارش انعقاد تفاهم‌نامه‌های همکاری."
      highlights={[
        {
          title: 'رونمایی از نسل جدید ویلچرهای خودران میکائیل',
          desc: 'معرفی ویژگی‌های اختصاصی نسخه جدید با دستیار صوتی هوشمند و حسگرهای پیشرفته.',
        },
        {
          title: 'حضور در رویدادهای فناوری و رباتیک کشور',
          desc: 'گزارش تصویری غرفه میکائیل و تست زنده محصولات توسط بازدیدکنندگان و مسئولان.',
        },
        {
          title: 'توسعه شبکه نمایندگی‌های فروش و خدمات پس از فروش',
          desc: 'گسترش مراکز پشتیبانی فنی در استان‌های مختلف کشور جهت تسریع خدمت‌رسانی.',
        },
      ]}
      siblingLinks={[
        {
          label: 'دیدگاه‌های صنعت',
          href: '/blog/category/industry-insights',
          desc: 'مقالات علمی و تحلیلی',
        },
        {
          label: 'مطالعات موردی',
          href: '/blog/category/case-studies',
          desc: 'گزارش پروژه‌های پیاده‌سازی‌شده',
        },
        {
          label: 'درباره میکائیل',
          href: '/about',
          desc: 'آشنایی بیشتر با تاریخچه و اهداف شرکت',
        },
      ]}
    />
  );
}

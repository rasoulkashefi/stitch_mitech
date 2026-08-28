import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'دیدگاه‌های صنعت (Industry Insights) | مجله میکائیل',
  description: 'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی، بینایی ماشین و هوشمندسازی فضاهای عمومی.',
};

export default function IndustryInsightsPage() {
  return (
    <ComingSoonTemplate
      title="دیدگاه‌های صنعت"
      englishTitle="Industry Insights & Future Tech"
      category="مجله و مقالات"
      categoryHref="/blog"
      description="یادداشت‌ها و مقالات عمیق مهندسی پیرامون مرزهای دانش رباتیک، اثرات اقتصادی جابجایی خودران (AMaaS) و فناوری‌های نسل بعد ناوبری."
      highlights={[
        {
          title: 'آینده توانبخشی و استقلال معلولین با AI',
          desc: 'چگونه یادگیری ماشین و سنسورهای بیومتریک در حال دگرگونی ویلچرهای هوشمند هستند.',
        },
        {
          title: 'اقتصاد مال‌های نسل ۴ و ترابری خریداران',
          desc: 'نقش ناوگان‌های رفاهی در رشد وفاداری مشتریان و افزایش میانگین زمان اقامت در مجتمع‌های تجاری.',
        },
        {
          title: 'مقایسه الگوریتم‌های SLAM در سالن‌های وسیع',
          desc: 'بررسی دقت، هزینه محاسباتی و پایداری روش‌های Visual در مقابل LiDAR.',
        },
      ]}
      siblingLinks={[
        {
          label: 'مطالعات موردی',
          href: '/blog/category/case-studies',
          desc: 'بررسی پروژه‌های پیاده‌سازی‌شده',
        },
        {
          label: 'اخبار شرکت',
          href: '/blog/category/company-news',
          desc: 'تازه‌های شرکت میکائیل',
        },
        {
          label: 'صفحه اصلی وبلاگ',
          href: '/blog',
          desc: 'مشاهده همه دسته‌بندی‌ها',
        },
      ]}
    />
  );
}

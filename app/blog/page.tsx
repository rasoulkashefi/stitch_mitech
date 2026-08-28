import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'مجله و وبلاگ تخصصی رباتیک و خودران | میکائیل',
  description: 'آخرین مقالات، دیدگاه‌های تحلیلی صنعت، مطالعات موردی و اخبار رسمی شرکت دانش‌بنیان میکائیل.',
};

export default function BlogPage() {
  return (
    <ComingSoonTemplate
      title="مجله و وبلاگ تخصصی میکائیل"
      englishTitle="Mitech Robotics & Autonomous Mobility Journal"
      category="وبلاگ"
      categoryHref="/blog"
      description="مرجع یادداشت‌های تحلیلی، بینش‌های فناوری خودران، تحولات بازار رباتیک خدمات و گزارش دستاوردهای نوآورانه در ایران و جهان."
      highlights={[
        {
          title: 'دیدگاه‌های تحلیلی صنعت (Industry Insights)',
          desc: 'بررسی روندهای جهانی رباتیک، شهرهای هوشمند، هوش مصنوعی و اقتصاد حمل‌ونقل درون‌ساختمانی.',
        },
        {
          title: 'مطالعات موردی و نتایج پایلوت‌ها (Case Studies)',
          desc: 'گزارش‌های مستند از اثربخشی استقرار ناوگان در مراکز تجاری، فرودگاه‌ها و بیمارستان‌ها.',
        },
        {
          title: 'اخبار رسمی و رویدادها (Company News)',
          desc: 'پوشش دستاوردها، رونمایی محصولات جدید، افتخارات و گزارش حضور در نمایشگاه‌های بین‌المللی.',
        },
      ]}
      siblingLinks={[
        {
          label: 'دیدگاه‌های صنعت',
          href: '/blog/category/industry-insights',
          desc: 'مقالات علمی و تحلیلی روندهای آینده',
        },
        {
          label: 'مطالعات موردی',
          href: '/blog/category/case-studies',
          desc: 'داستان‌های موفقیت پیاده‌سازی سازمانی',
        },
        {
          label: 'اخبار شرکت',
          href: '/blog/category/company-news',
          desc: 'اطلاعیه‌ها، رویدادها و دستاوردهای میکائیل',
        },
      ]}
      ctaText="مشاهده آخرین مقالات"
      ctaHref="/blog/category/industry-insights"
    />
  );
}

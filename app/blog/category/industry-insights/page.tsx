import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'دیدگاه‌های صنعت (Industry Insights) | ام. آی. تک. (Mitech)',
  description: 'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی، بینایی ماشین و هوشمندسازی فضاهای عمومی.',
  keywords: [
    'مقالات تخصصی رباتیک',
    'آینده فناوری خودران',
    'Industry Insights',
    'هوشمندسازی فضاها',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'دیدگاه‌های صنعت (Industry Insights) | میکائیل',
    description: 'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی و هوشمندسازی فضاهای عمومی.',
    url: 'https://mitech.ir/blog/category/industry-insights',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دیدگاه‌های صنعت (Industry Insights)',
    description: 'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی و هوشمندسازی فضاهای عمومی.',
  },
  alternates: {
    canonical: 'https://mitech.ir/blog/category/industry-insights',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function IndustryInsightsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'دیدگاه‌های صنعت (Industry Insights)',
    description: 'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی، بینایی ماشین و هوشمندسازی فضاهای عمومی.',
    publisher: {
      '@type': 'Organization',
      name: 'Mitech'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}

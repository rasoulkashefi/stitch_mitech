import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'مطالعات موردی و پروژه‌ها (Case Studies) | ام. آی. تک. (Mitech)',
  description: 'گزارش‌های مستند و تحلیل بازگشت سرمایه (ROI) حاصل از استقرار ناوگان میکائیل در پروژه‌های واقعی.',
  keywords: [
    'مطالعات موردی رباتیک',
    'پروژه های اجرا شده',
    'موفقیت استقرار خودران',
    'Case Studies',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'مطالعات موردی و پروژه‌ها (Case Studies) | میکائیل',
    description: 'گزارش‌های مستند و تحلیل بازگشت سرمایه (ROI) حاصل از استقرار ناوگان میکائیل در پروژه‌های واقعی.',
    url: 'https://mitech.ir/blog/category/case-studies',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مطالعات موردی و پروژه‌ها (Case Studies)',
    description: 'گزارش‌های مستند و تحلیل بازگشت سرمایه (ROI) حاصل از استقرار ناوگان میکائیل.',
  },
  alternates: {
    canonical: 'https://mitech.ir/blog/category/case-studies',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'مطالعات موردی و پروژه‌ها (Case Studies)',
    description: 'گزارش‌های مستند و تحلیل بازگشت سرمایه (ROI) حاصل از استقرار ناوگان میکائیل.',
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
      title="مطالعات موردی و پروژه‌های عملیاتی"
      englishTitle="Case Studies & Real-World Deployments"
      category="مجله و مقالات"
      categoryHref="/blog"
      description="مستندات واقعی از چالش‌های حل‌شده، بهبود بهره‌وری، تجربه مراجعین و میزان بازگشت سرمایه حاصل از راه‌اندازی ناوگان میکائیل در بیمارستان‌ها، مال‌ها و پایانه‌ها."
      highlights={[
        {
          title: 'پایلوت ترانزیت مسافری در فرودگاه بین‌المللی',
          desc: 'کاهش ۶۵ درصدی زمان انتظار مسافران PRM و ارتقای امتیاز رضایت مسافرین ویژه.',
        },
        {
          title: 'ناوگان کالسکه هوشمند در مرکز خرید ۵۰ هزار متری',
          desc: 'ثبت بیش از ۱۲ هزار سفر موفق در ماه نخست و افزایش زمان حضور خانواده‌ها.',
        },
        {
          title: 'ربات‌های تعقیب‌کننده در مرکز جراحی و انبار دارویی',
          desc: 'بهینه‌سازی جابجایی نمونه‌های آزمایشگاهی و کاهش خستگی پرسنل درمانی.',
        },
      ]}
      siblingLinks={[
        {
          label: 'دیدگاه‌های صنعت',
          href: '/blog/category/industry-insights',
          desc: 'تحلیل‌های تخصصی آینده فناوری',
        },
        {
          label: 'اخبار شرکت',
          href: '/blog/category/company-news',
          desc: 'اخبار و اطلاعیه‌های رسمی',
        },
        {
          label: 'درخواست دمو و پایلوت',
          href: '/contact/request-demo',
          desc: 'سفارش اجرای پایلوت مشابه در مجموعه شما',
        },
      ]}
    />
    </>
  );
}

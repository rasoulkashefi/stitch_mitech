import type { Metadata } from 'next';
import ServiceDetailView from '@/components/services/ServiceDetailView';

export const metadata: Metadata = {
  title: 'نگهداری پیشگیرانه و مانیتورینگ ناوگان سازمانی | ام‌آی‌تک (Mitech)',
  description:
    'خدمات تخصصی نگهداری و تعمیرات پیشگیرانه (PdM) ناوگان خودران در فرودگاه‌ها، مراکز تجاری و بیمارستان‌ها با تضمین توافق‌نامه سطح خدمات (SLA) تا ۹۹.۸٪ پایداری.',
  keywords: [
    'نگهداری ناوگان',
    'مدیریت ناوگان خودران',
    'قرارداد SLA نگهداری',
    'تعمیرات پیشگیرانه PdM',
    'مانیتورینگ ناوگان فرودگاهی',
    'تله‌متری دوقلوی دیجیتال',
    'سرویس ویلچر برقی سازمانی',
    'میکائیل',
    'ام‌آی‌تک',
    'Mitech',
  ],
  openGraph: {
    title: 'نگهداری پیشگیرانه و مانیتورینگ ناوگان سازمانی | میکائیل',
    description:
      'تضمین پایداری مداوم ناوگان جابه‌جایی هوشمند با پایش تله‌متری ابری، کالیبراسیون دوره‌ای سنسورها و کاهش زمان توقف به زیر ۲ درصد.',
    url: 'https://mitech.ir/services/fleet-maintenance',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نگهداری پیشگیرانه و مانیتورینگ ناوگان سازمانی | میکائیل',
    description: 'تضمین پایداری مداوم ناوگان جابه‌جایی هوشمند با قراردادهای رسمی SLA.',
  },
  alternates: {
    canonical: 'https://mitech.ir/services/fleet-maintenance',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function FleetMaintenanceRoute() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'نگهداری پیشگیرانه و مدیریت ناوگان سازمانی',
    serviceType: 'Fleet Maintenance and Predictive Monitoring',
    provider: {
      '@type': 'Organization',
      name: 'Mitech',
      url: 'https://mitech.ir',
    },
    description:
      'خدمات تخصصی نگهداری و تعمیرات پیشگیرانه (PdM) ناوگان خودران با تضمین SLA تا ۹۹.۸٪ پایداری.',
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'بسته‌های نگهداری و پشتیبانی ناوگان',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'سطح طلایی فرودگاهی ۲۴/۷ (Enterprise Platinum)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'سطح نقره‌ای مال‌ها و مراکز خرید (Commercial Pro)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'سطح استاندارد ناوگان سبک (Standard Fleet)',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailView slug="fleet-maintenance" />
    </>
  );
}

import type { Metadata } from 'next';
import ServicesHubView from '@/components/services/ServicesHubView';

export const metadata: Metadata = {
  title: 'مرکز خدمات، نگهداری و پشتیبانی تخصصی | ام‌آی‌تک (Mitech)',
  description:
    'شبکه یکپارچه خدمات تخصصی میکائیل: نگهداری و مانیتورینگ ناوگان سازمانی، تأمین قطعات یدکی اصیل OEM و کلینیک عیب‌یابی و تعمیرات مکاترونیک.',
  keywords: [
    'خدمات میکائیل',
    'پشتیبانی ام‌آی‌تک',
    'تعمیرات ویلچر برقی',
    'نگهداری ناوگان خودران',
    'قطعات یدکی اورجینال',
    'SLA پشتیبانی',
    'Mitech Services',
  ],
  openGraph: {
    title: 'مرکز خدمات، نگهداری و پشتیبانی تخصصی | میکائیل',
    description:
      'از نگهداری ناوگان‌های بزرگ فرودگاهی تا تأمین قطعات اورجینال و تعمیرات فوق‌تخصصی الکترونیک و مکانیک.',
    url: 'https://mitech.ir/services',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مرکز خدمات و پشتیبانی تخصصی ام‌آی‌تک',
    description: 'شبکه یکپارچه خدمات مهندسی، نگهداری ناوگان و تأمین قطعات یدکی اصیل.',
  },
  alternates: {
    canonical: 'https://mitech.ir/services',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'خدمات کلیدی ام‌آی‌تک (Mitech Services)',
    description: 'شبکه یکپارچه خدمات مهندسی، نگهداری ناوگان و تأمین قطعات',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'نگهداری و مانیتورینگ ناوگان سازمانی',
          url: 'https://mitech.ir/services/fleet-maintenance',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'تأمین قطعات یدکی اصیل OEM',
          url: 'https://mitech.ir/services/spare-parts',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'تعمیرات تخصصی تجهیزات حرکتی و ویلچر برقی',
          url: 'https://mitech.ir/services/repairs',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHubView />
    </>
  );
}

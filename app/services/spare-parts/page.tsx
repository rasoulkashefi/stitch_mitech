import type { Metadata } from 'next';
import ServiceDetailView from '@/components/services/ServiceDetailView';

export const metadata: Metadata = {
  title: 'تأمین قطعات یدکی اصیل و ماژول‌های OEM | ام‌آی‌تک (Mitech)',
  description:
    'مرجع تخصصی تأمین قطعات اورجینال، بردهای درایور PG و Dynamic، جویستیک، باتری‌های LiFePO4 با Smart BMS و موتورهای FOC با گارانتی تعویض و ارسال سریع سراسر ایران.',
  keywords: [
    'قطعات یدکی ویلچر برقی',
    'قطعات OEM میکائیل',
    'درایور PG Drives',
    'جویستیک Dynamic Controls',
    'کنترلر ویلچر برقی',
    'باتری لیتیومی ویلچر',
    'BMS هوشمند',
    'موتور براشلس ویلچر',
    'پارت نامبر قطعات توانبخشی',
    'Mitech',
  ],
  openGraph: {
    title: 'تأمین قطعات یدکی اصیل تجهیزات و ناوگان حرکتی | میکائیل',
    description:
      'تضمین ۱۰۰٪ اصالت قطعات OEM، استعلام سریع شماره فنی، ارسال ۲۴ تا ۴۸ ساعته به سراسر کشور و ۶ ماه ضمانت تعویض.',
    url: 'https://mitech.ir/services/spare-parts',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تأمین قطعات یدکی اصیل تجهیزات و ناوگان حرکتی | میکائیل',
    description: 'تضمین ۱۰۰٪ اصالت قطعات OEM و ارسال اکسپرس به سراسر ایران.',
  },
  alternates: {
    canonical: 'https://mitech.ir/services/spare-parts',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function SparePartsRoute() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'تأمین قطعات یدکی اصیل و اورجینال OEM',
    serviceType: 'OEM Spare Parts Supply and Verification',
    provider: {
      '@type': 'Organization',
      name: 'Mitech',
      url: 'https://mitech.ir',
    },
    description:
      'تأمین مستقیم قطعات اورجینال تجهیزات حرکتی، کنترلرها، درایورها، باتری‌ها و سنسورها با تضمین اصالت و ارسال سریع.',
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'دسته‌بندی‌های قطعات یدکی',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'سامانه‌های الکترونیک و بردهای کنترلی PG و Dynamic',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'سیستم‌های پیشران، موتورهای FOC و گیربکس',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'پک‌های باتری LiFePO4 و سنسورهای ناوبری لیدار',
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
      <ServiceDetailView slug="spare-parts" />
    </>
  );
}

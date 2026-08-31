import type { Metadata } from 'next';
import TechnologyDetailView from '@/components/technology/TechnologyDetailView';

export const metadata: Metadata = {
  title: 'پلتفرم دوقلوی دیجیتال و مدیریت ناوگان | ام. آی. تک. (Mitech)',
  description:
    'پلتفرم ابری ارکستراسیون ناوگان رباتیک، مانیتورینگ سه‌بعدی زنده، نگهداری پیش‌بینانه (PdM) و تحلیل کلان داده‌های تردد و ترافیک.',
  keywords: [
    'دوقلوی دیجیتال',
    'مدیریت ناوگان رباتیک',
    'ارکستراسیون ناوگان',
    'نگهداری پیش‌بینانه',
    'تله‌متری ابری',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'پلتفرم دوقلوی دیجیتال و مانیتورینگ ناوگان | میکائیل',
    description:
      'نظارت سه‌بعدی زنده بر صدها دستگاه خودران، بهینه‌سازی مسیرها با هوش مصنوعی و نگهداری پیش‌بینانه در یک کنسول متمرکز.',
    url: 'https://mitech.ir/technology/digital-twin-platform',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پلتفرم دوقلوی دیجیتال و مانیتورینگ ناوگان',
    description: 'نظارت سه‌بعدی زنده بر صدها دستگاه خودران و بهینه‌سازی مسیرها.',
  },
  alternates: {
    canonical: 'https://mitech.ir/technology/digital-twin-platform',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function DigitalTwinPlatformPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'پلتفرم دوقلوی دیجیتال و مدیریت ناوگان',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    description: 'پلتفرم ابری ارکستراسیون ناوگان رباتیک، مانیتورینگ سه‌بعدی زنده، نگهداری پیش‌بینانه (PdM)',
    provider: {
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
      <TechnologyDetailView slug="digital-twin-platform" />
    </>
  );
}

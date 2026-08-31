import type { Metadata } from 'next';
import TechnologyDetailView from '@/components/technology/TechnologyDetailView';

export const metadata: Metadata = {
  title: 'ناوبری ۳۶۰ درجه و موقعیت‌یابی مستقل از GPS | ام. آی. تک. (Mitech)',
  description:
    'فناوری‌های پیشرفته 3D LiDAR SLAM، بینایی ماشین و سنسور فیوژن برای موقعیت‌یابی و مسیریابی زیر ۲ سانتی‌متر در محیط‌های سرپوشیده و فاقد سیگنال ماهواره‌ای.',
  keywords: [
    'ناوبری مستقل از GPS',
    'LiDAR SLAM',
    'سنسور فیوژن',
    'موقعیت‌یابی درون‌ساختمانی',
    'بینایی ماشین',
    'ناوبری رباتیک',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'ناوبری ۳۶۰ درجه و موقعیت‌یابی مستقل از GPS | میکائیل',
    description:
      'موقعیت‌یابی زیر ۲ سانتی‌متر در فرودگاه‌ها، مراکز درمانی و مال‌ها با الگوریتم‌های بلادرنگ SLAM و پردازش در لبه.',
    url: 'https://mitech.ir/technology/gps-independent-navigation',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'موقعیت‌یابی مستقل از GPS',
    description: 'موقعیت‌یابی زیر ۲ سانتی‌متر با الگوریتم‌های بلادرنگ SLAM و پردازش در لبه.',
  },
  alternates: {
    canonical: 'https://mitech.ir/technology/gps-independent-navigation',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function GpsIndependentNavigationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'سیستم ناوبری ۳۶۰ درجه مستقل از GPS',
    description: 'فناوری‌های پیشرفته 3D LiDAR SLAM، بینایی ماشین و سنسور فیوژن برای موقعیت‌یابی دقیق.',
    brand: {
      '@type': 'Brand',
      name: 'Mitech'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechnologyDetailView slug="gps-independent-navigation" />
    </>
  );
}

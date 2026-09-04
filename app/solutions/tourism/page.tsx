import type { Metadata } from 'next';
import SolutionDetailView from '@/components/solutions/SolutionDetailView';

export const metadata: Metadata = {
  title: 'راهکار گردشگری، موزه‌ها و مراکز تفریحی | تورهای هوشمند | ام. آی. تک.',
  description:
    'استقرار مبل‌های متحرک و ناوگان تفریحی با توقفگاه‌های برنامه‌ریزی‌شده و راهنمای صوتی چندزبانه تعاملی جهت دسترسی‌پذیری کامل برای تمام نسل‌ها.',
  keywords: [
    'مبل متحرک موزه',
    'تور هوشمند خودران',
    'گردشگری فراگیر',
    'راهنمای صوتی تعاملی',
    'هوشمندسازی مراکز تفریحی',
    'خدمات VIP موزه',
    'میکائیل',
  ],
  openGraph: {
    title: 'راهکار گردشگری، موزه‌ها و مراکز تفریحی | تحرک بدون مرز | میکائیل',
    description:
      'دسترسی‌پذیری کامل برای تمام نسل‌ها، تورهای خودکار با توقفگاه‌های برنامه‌ریزی‌شده و تمایز چشمگیر مرکز تفریحی شما با ناوگان ام‌آی‌تک.',
    url: 'https://mitech.ir/solutions/tourism',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'راهکار گردشگری، موزه‌ها و مراکز تفریحی',
    description: 'دسترسی‌پذیری کامل برای تمام نسل‌ها، تورهای خودکار با توقفگاه‌های برنامه‌ریزی‌شده.',
  },
  alternates: {
    canonical: 'https://mitech.ir/solutions/tourism',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function TourismSolutionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'راهکار گردشگری، موزه‌ها و مراکز تفریحی (تورهای خودران هوشمند)',
    provider: {
      '@type': 'Organization',
      name: 'Mitech'
    },
    description: 'استقرار مبل‌های متحرک و ناوگان تفریحی با توقفگاه‌های برنامه‌ریزی‌شده و راهنمای صوتی چندزبانه تعاملی.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionDetailView slug="tourism" />
    </>
  );
}

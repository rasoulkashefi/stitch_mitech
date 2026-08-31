import type { Metadata } from 'next';
import SolutionDetailView from '@/components/solutions/SolutionDetailView';

export const metadata: Metadata = {
  title: 'راهکار مجتمع‌های تجاری و مال‌ها | هوشمندسازی مراکز خرید | ام. آی. تک.',
  description:
    'استقرار ناوگان کالسکه‌های هوشمند خانواده و مبل‌های متحرک در مراکز خرید برای افزایش زمان ماندگاری مشتریان (Dwell Time)، رفع خستگی و درآمدزایی پایدار.',
  keywords: [
    'هوشمندسازی مجتمع‌های تجاری',
    'کالسکه هوشمند خانواده',
    'مبل متحرک مال',
    'افزایش Dwell Time',
    'خدمات VIP مرکز خرید',
    'تسهیم درآمد مال',
    'AMaaS مراکز تجاری',
    'میکائیل',
  ],
  openGraph: {
    title: 'راهکار مراکز تجاری و مال‌ها | تحرک هوشمند خانوادگی | میکائیل',
    description:
      'خلق تجربه خرید لوکس، رفع خستگی خانواده‌ها و افزایش فروش مغازه‌ها با ناوگان هوشمند مایتک بدون هزینه سرمایه‌ای.',
    url: 'https://mitech.ir/solutions/malls',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'راهکار مجتمع‌های تجاری و مال‌ها | تحرک هوشمند خانوادگی',
    description: 'خلق تجربه خرید لوکس، رفع خستگی خانواده‌ها و افزایش فروش مغازه‌ها.',
  },
  alternates: {
    canonical: 'https://mitech.ir/solutions/malls',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function MallsSolutionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'راهکار مجتمع‌های تجاری و مال‌ها (هوشمندسازی مراکز خرید)',
    provider: {
      '@type': 'Organization',
      name: 'Mitech'
    },
    description: 'استقرار ناوگان کالسکه‌های هوشمند خانواده و مبل‌های متحرک در مراکز خرید برای افزایش زمان ماندگاری مشتریان.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionDetailView slug="malls" />
    </>
  );
}

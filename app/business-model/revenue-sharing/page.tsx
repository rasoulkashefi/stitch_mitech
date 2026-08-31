import type { Metadata } from 'next';
import BusinessDetailView from '@/components/business-model/BusinessDetailView';

export const metadata: Metadata = {
  title: 'اشتراک درآمد و سرمایه‌گذاری مشترک | ام. آی. تک. (Mitech)',
  description:
    'مدل همکاری برد-برد جهت راه‌اندازی ناوگان خودران در مراکز تجاری، گردشگری و رفاهی بر پایه تقسیم عواید کرایه و تبلیغات هوشمند دیجیتال بدون سرمایه‌گذاری اولیه.',
  keywords: [
    'اشتراک درآمد',
    'Revenue Sharing',
    'سرمایه گذاری مشترک',
    'تسهیم درآمد',
    'مدل همکاری',
    'تبلیغات هوشمند',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'اشتراک درآمد و سرمایه‌گذاری مشترک | ام. آی. تک.',
    description: 'مدل همکاری برد-برد جهت راه‌اندازی ناوگان خودران بر پایه تقسیم عواید بدون سرمایه‌گذاری اولیه.',
    url: 'https://mitech.ir/business-model/revenue-sharing',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'اشتراک درآمد و سرمایه‌گذاری مشترک',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'اشتراک درآمد و سرمایه‌گذاری مشترک',
    description: 'مدل همکاری برد-برد جهت راه‌اندازی ناوگان خودران بدون سرمایه‌گذاری اولیه.',
    images: ['/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://mitech.ir/business-model/revenue-sharing',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function RevenueSharingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'اشتراک درآمد و سرمایه‌گذاری مشترک',
    provider: {
      '@type': 'Organization',
      name: 'Mitech'
    },
    description: 'مدل همکاری برد-برد جهت راه‌اندازی ناوگان خودران در مراکز تجاری و گردشگری بر پایه تقسیم عواید.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BusinessDetailView slug="revenue-sharing" />
    </>
  );
}

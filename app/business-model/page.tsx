import type { Metadata } from 'next';
import BusinessHubView from '@/components/business-model/BusinessHubView';

export const metadata: Metadata = {
  title: 'مدل‌های کسب‌وکار و همکاری تجاری | ام. آی. تک. (Mitech)',
  description:
    'مدل‌های نوین اقتصاد جابجایی هوشمند؛ جابجایی خودران به عنوان سرویس (AMaaS) و اشتراک درآمد و سرمایه‌گذاری (Revenue Sharing) با تضمین صفر ریال CAPEX.',
  keywords: [
    'مدل کسب و کار',
    'AMaaS',
    'اشتراک درآمد',
    'Revenue Sharing',
    'تسهیم درآمد',
    'جابجایی هوشمند',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'مدل‌های کسب‌وکار و همکاری تجاری | ام. آی. تک.',
    description: 'مدل‌های نوین اقتصاد جابجایی هوشمند با تضمین صفر ریال CAPEX.',
    url: 'https://mitech.ir/business-model',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'مدل‌های کسب و کار ام آی تک',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مدل‌های کسب‌وکار و همکاری تجاری',
    description: 'مدل‌های نوین اقتصاد جابجایی هوشمند با تضمین صفر ریال CAPEX.',
    images: ['/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://mitech.ir/business-model',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function BusinessModelPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'مدل‌های کسب‌وکار و همکاری تجاری (AMaaS و Revenue Sharing)',
    provider: {
      '@type': 'Organization',
      name: 'Mitech'
    },
    description: 'مدل‌های نوین اقتصاد جابجایی هوشمند؛ جابجایی خودران به عنوان سرویس و اشتراک درآمد.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BusinessHubView />
    </>
  );
}

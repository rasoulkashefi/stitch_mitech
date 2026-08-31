import type { Metadata } from 'next';
import BusinessDetailView from '@/components/business-model/BusinessDetailView';

export const metadata: Metadata = {
  title: 'جابجایی خودران به عنوان سرویس (AMaaS) | ام. آی. تک. (Mitech)',
  description:
    'مدل جامع Autonomous Mobility as a Service؛ ناوگان رباتیک، پلتفرم ابری، نگهداری دوره‌ای و پوشش ۱۰۰٪ بیمه در قالب یک اشتراک چابک با تضمین ۹۹.۹٪ Uptime.',
  keywords: [
    'AMaaS',
    'Mobility as a Service',
    'ناوگان رباتیک',
    'اشتراک ناوگان',
    'جابجایی به عنوان سرویس',
    'پلتفرم ابری',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'جابجایی خودران به عنوان سرویس (AMaaS) | ام. آی. تک.',
    description: 'مدل جامع Autonomous Mobility as a Service در قالب یک اشتراک چابک.',
    url: 'https://mitech.ir/business-model/amaas',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'جابجایی خودران به عنوان سرویس AMaaS',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'جابجایی خودران به عنوان سرویس (AMaaS)',
    description: 'مدل جامع Autonomous Mobility as a Service در قالب یک اشتراک چابک.',
    images: ['/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://mitech.ir/business-model/amaas',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function AmaasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'جابجایی خودران به عنوان سرویس (AMaaS)',
    provider: {
      '@type': 'Organization',
      name: 'Mitech'
    },
    description: 'مدل جامع Autonomous Mobility as a Service؛ ناوگان رباتیک، پلتفرم ابری، نگهداری دوره‌ای و پوشش ۱۰۰٪ بیمه.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BusinessDetailView slug="amaas" />
    </>
  );
}

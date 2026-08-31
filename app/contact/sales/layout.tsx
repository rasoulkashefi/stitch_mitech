import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فروش و توسعه تجاری | ام. آی. تک. (Mitech)',
  description:
    'جهت دریافت پیش‌فاکتور رسمی، اخذ نمایندگی، استعلام قیمت تجهیزات و مشاوره خرید مدل‌های AMaaS با کارشناسان فروش میکائیل در ارتباط باشید.',
  keywords: [
    'فروش میکائیل',
    'استعلام قیمت',
    'خرید ویلچر خودران',
    'اخذ نمایندگی Mitech',
    'مدل‌های AMaaS',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'فروش و توسعه تجاری | ام. آی. تک.',
    description: 'جهت استعلام قیمت تجهیزات و مشاوره خرید مدل‌های AMaaS با ما در ارتباط باشید.',
    url: 'https://mitech.ir/contact/sales',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فروش و توسعه تجاری | ام. آی. تک.',
    description: 'جهت استعلام قیمت تجهیزات و مشاوره خرید مدل‌های AMaaS با ما در ارتباط باشید.',
  },
  alternates: {
    canonical: 'https://mitech.ir/contact/sales',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function SalesContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'فروش و توسعه تجاری',
    description: 'جهت استعلام قیمت تجهیزات و مشاوره خرید مدل‌های AMaaS با کارشناسان فروش میکائیل در ارتباط باشید.',
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
      {children}
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'درخواست دمو و پایلوت | ام. آی. تک. (Mitech)',
  description:
    'ثبت درخواست دمو و اجرای پایلوت آزمایشی تجهیزات خودران و سیستم‌های AMaaS در محیط سازمان شما.',
  keywords: [
    'درخواست دمو',
    'تست پایلوت',
    'آزمایش ویلچر خودران',
    'پایلوت AMaaS',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'درخواست دمو و پایلوت | ام. آی. تک.',
    description: 'ثبت درخواست دمو و اجرای پایلوت آزمایشی تجهیزات خودران میکائیل.',
    url: 'https://mitech.ir/contact/request-demo',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'درخواست دمو و پایلوت | ام. آی. تک.',
    description: 'ثبت درخواست دمو و اجرای پایلوت آزمایشی تجهیزات خودران.',
  },
  alternates: {
    canonical: 'https://mitech.ir/contact/request-demo',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function RequestDemoLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'درخواست دمو و پایلوت',
    description: 'ثبت درخواست دمو و اجرای پایلوت آزمایشی تجهیزات خودران میکائیل در محیط سازمان شما.',
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

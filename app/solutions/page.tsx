import type { Metadata } from 'next';
import SolutionsHubView from '@/components/solutions/SolutionsHubView';

export const metadata: Metadata = {
  title: 'راهکارهای هوشمند سازمانی و شهری (AMaaS) | ام. آی. تک. (Mitech)',
  description:
    'استقرار ناوگان هوشمند جابجایی خودران (AMaaS) بدون هزینه سرمایه‌گذاری اولیه (Zero CAPEX) در مجتمع‌های تجاری، فرودگاه‌ها، بیمارستان‌ها و مراکز گردشگری.',
  keywords: [
    'حمل و نقل به عنوان خدمت',
    'AMaaS',
    'هوشمندسازی مجتمع‌های تجاری',
    'ناوگان خودران سازمانی',
    'Zero CAPEX',
    'ویلچر خودران فرودگاهی',
    'کالسکه هوشمند مال',
    'تسهیم درآمد',
    'رباتیک سازمانی',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'راهکارهای هوشمند سازمانی و شهری AMaaS | میکائیل',
    description:
      'استقرار ناوگان جابجایی خودران در مراکز تجاری، فرودگاه‌ها، بیمارستان‌ها و گردشگری بدون هزینه سرمایه‌گذاری با مدل تسهیم درآمد.',
    url: 'https://mitech.ir/solutions',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'راهکارهای هوشمند سازمانی و شهری AMaaS | میکائیل',
    description: 'استقرار ناوگان جابجایی خودران (AMaaS) بدون هزینه سرمایه‌گذاری اولیه.',
  },
  alternates: {
    canonical: 'https://mitech.ir/solutions',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function SolutionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'راهکارهای هوشمند سازمانی و شهری (AMaaS)',
    provider: {
      '@type': 'Organization',
      name: 'Mitech'
    },
    description: 'استقرار ناوگان هوشمند جابجایی خودران (AMaaS) بدون هزینه سرمایه‌گذاری اولیه در مجتمع‌های تجاری، فرودگاه‌ها، بیمارستان‌ها و مراکز گردشگری.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionsHubView />
    </>
  );
}

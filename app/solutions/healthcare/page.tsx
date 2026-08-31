import type { Metadata } from 'next';
import SolutionDetailView from '@/components/solutions/SolutionDetailView';

export const metadata: Metadata = {
  title: 'راهکار بیمارستان‌ها و مراکز درمانی | جابجایی هوشمند بیماران | ام. آی. تک.',
  description:
    'استقرار ویلچرهای خودران بیمارستانی با ناوبری ۳۶۰ درجه ضدبرخورد و ربات‌های لجستیک استریل جهت آزادسازی وقت کادر درمان و تردد کاملاً ایمن.',
  keywords: [
    'ویلچر خودران بیمارستانی',
    'جابجایی ایمن بیمار',
    'ربات لجستیک دارو',
    'هوشمندسازی بیمارستان',
    'کاهش بار کاری پرستاران',
    'ناوبری ۳۶۰ درجه کلینیکی',
    'میکائیل',
  ],
  openGraph: {
    title: 'راهکار بیمارستان‌ها و مراکز درمانی | رباتیک سلامت | میکائیل',
    description:
      'آزادسازی زمان حیاتی کادر درمان، تردد کاملاً ایمن و بهداشتی بیماران در راهروهای شلوغ و جابجایی خودکار دارو و ملحفه.',
    url: 'https://mitech.ir/solutions/healthcare',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'راهکار بیمارستان‌ها و مراکز درمانی | رباتیک سلامت',
    description: 'تردد کاملاً ایمن بیماران در راهروهای شلوغ و جابجایی خودکار دارو و ملحفه.',
  },
  alternates: {
    canonical: 'https://mitech.ir/solutions/healthcare',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function HealthcareSolutionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'راهکار بیمارستان‌ها و مراکز درمانی (جابجایی هوشمند بیماران و لجستیک دارو)',
    provider: {
      '@type': 'Organization',
      name: 'Mitech'
    },
    description: 'استقرار ویلچرهای خودران بیمارستانی با ناوبری ۳۶۰ درجه ضدبرخورد و ربات‌های لجستیک استریل.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionDetailView slug="healthcare" />
    </>
  );
}

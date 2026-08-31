import type { Metadata } from 'next';
import TechnologyDetailView from '@/components/technology/TechnologyDetailView';

export const metadata: Metadata = {
  title: 'سیستم‌های پیشران، درایورهای FOC و موقعیت‌یابی دقیق | ام. آی. تک.',
  description:
    'درایورهای موتور براشلس (BLDC) با کنترل برداری FOC، انکودرهای تفکیک‌پذیری بالا، بازیابی انرژی ترمز (KERS) و سیستم‌های کنترل حرکت چندمحوره.',
  keywords: [
    'درایور FOC',
    'موتور هاب BLDC',
    'کنترل حرکت دقیق',
    'بازیابی انرژی KERS',
    'پیشران الکتریکی',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'سیستم‌های پیشران و موقعیت‌یابی دقیق | میکائیل',
    description:
      'گشتاور بالا، حرکت بی‌صدا و بدون لرزش با کنترل برداری پیشرفته FOC و مدیریت هوشمند توان الکتریکی.',
    url: 'https://mitech.ir/technology/drives-and-positioning',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سیستم‌های پیشران و موقعیت‌یابی دقیق',
    description: 'گشتاور بالا، حرکت بی‌صدا و بدون لرزش با کنترل برداری پیشرفته FOC.',
  },
  alternates: {
    canonical: 'https://mitech.ir/technology/drives-and-positioning',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function DrivesAndPositioningPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'سیستم‌های پیشران و درایورهای FOC',
    description: 'درایورهای موتور براشلس (BLDC) با کنترل برداری FOC، انکودرهای تفکیک‌پذیری بالا.',
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
      <TechnologyDetailView slug="drives-and-positioning" />
    </>
  );
}

import type { Metadata } from 'next';
import FleetHubView from '@/components/fleet/FleetHubView';

export const metadata: Metadata = {
  title: 'محصولات و ناوگان خودران | شرکت فناوری هوشمند میکائیل (Mitech)',
  description:
    'مجموعه ناوگان پیشرفته رباتیک و حمل‌ونقل هوشمند میکائیل شامل ویلچرهای خودران، کالسکه‌های هوشمند خانواده، ربات‌های باربر تعقیب‌کننده و سیستم‌های ناوبری مستقل از GPS.',
  keywords: [
    'ناوگان خودران',
    'ویلچر خودران',
    'ویلچر برقی هوشمند',
    'ربات باربر تعقیب‌کننده',
    'کالسکه هوشمند',
    'مبل برقی متحرک',
    'جویستیک توانبخشی',
    'سیستم ناوبری رباتیک',
    'AMaaS',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'محصولات و ناوگان خودران میکائیل | آزادی در حرکت، قدرت در کنترل',
    description:
      'اکوسیستم یکپارچه وسایل نقلیه خودران، تجهیزات توانبخشی و ربات‌های لجستیک هوشمند برای استقلال فردی و خودکارسازی سازمانی.',
    url: 'https://mitech.ir/fleet',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/images/og-fleet.jpg',
        width: 1200,
        height: 630,
        alt: 'اکوسیستم ناوگان خودران میکائیل',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'محصولات و ناوگان خودران میکائیل | آزادی در حرکت، قدرت در کنترل',
    description: 'اکوسیستم یکپارچه وسایل نقلیه خودران و ربات‌های لجستیک هوشمند.',
    images: ['/images/og-fleet.jpg'],
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function FleetPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ناوگان رباتیک و محصولات خودران میکائیل',
    description: 'لیست محصولات هوشمند شامل ویلچرهای خودران، ربات‌های باربر تعقیب‌کننده، کالسکه‌های هوشمند و غیره.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: 'ویلچر برقی خودران',
          url: 'https://mitech.ir/fleet/autonomous-wheelchairs',
          description: 'ویلچر برقی خودران با ناوبری هوشمند بدون نیاز به GPS، مجهز به سنسورهای جلوگیری از برخورد.',
          brand: {
            '@type': 'Brand',
            name: 'Mitech'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'ربات باربر تعقیب‌کننده (AMR)',
          url: 'https://mitech.ir/fleet/following-amrs',
          description: 'ربات لجستیک خودران با قابلیت تعقیب کاربر و حمل بار ایمن.',
          brand: {
            '@type': 'Brand',
            name: 'Mitech'
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FleetHubView />
    </>
  );
}

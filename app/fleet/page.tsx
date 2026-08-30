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
    siteName: 'شرکت فناوری هوشمند میکائیل (Mitech)',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'اکوسیستم ناوگان خودران میکائیل',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet',
  },
};

export default function FleetPage() {
  return <FleetHubView />;
}

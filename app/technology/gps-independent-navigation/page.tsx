import type { Metadata } from 'next';
import TechnologyDetailView from '@/components/technology/TechnologyDetailView';

export const metadata: Metadata = {
  title: 'ناوبری ۳۶۰ درجه و موقعیت‌یابی مستقل از GPS | فناوری میکائیل',
  description:
    'فناوری‌های پیشرفته 3D LiDAR SLAM، بینایی ماشین و سنسور فیوژن برای موقعیت‌یابی و مسیریابی زیر ۲ سانتی‌متر در محیط‌های سرپوشیده و فاقد سیگنال ماهواره‌ای.',
  keywords: [
    'ناوبری مستقل از GPS',
    'LiDAR SLAM',
    'سنسور فیوژن',
    'موقعیت‌یابی درون‌ساختمانی',
    'بینایی ماشین',
    'ناوبری رباتیک',
    'میکائیل',
  ],
  openGraph: {
    title: 'ناوبری ۳۶۰ درجه و موقعیت‌یابی مستقل از GPS | میکائیل',
    description:
      'موقعیت‌یابی زیر ۲ سانتی‌متر در فرودگاه‌ها، مراکز درمانی و مال‌ها با الگوریتم‌های بلادرنگ SLAM و پردازش در لبه.',
    url: 'https://mitech.ir/technology/gps-independent-navigation',
    siteName: 'فناوری هوشمند میکائیل',
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mitech.ir/technology/gps-independent-navigation',
  },
};

export default function GpsIndependentNavigationPage() {
  return <TechnologyDetailView slug="gps-independent-navigation" />;
}

import type { Metadata } from 'next';
import TechnologyDetailView from '@/components/technology/TechnologyDetailView';

export const metadata: Metadata = {
  title: 'پلتفرم دوقلوی دیجیتال، تله‌متری زنده و مدیریت ناوگان | فناوری میکائیل',
  description:
    'پلتفرم ابری ارکستراسیون ناوگان رباتیک، مانیتورینگ سه‌بعدی زنده، نگهداری پیش‌بینانه (PdM) و تحلیل کلان داده‌های تردد و ترافیک.',
  keywords: [
    'دوقلوی دیجیتال',
    'مدیریت ناوگان رباتیک',
    'ارکستراسیون ناوگان',
    'نگهداری پیش‌بینانه',
    'تله‌متری ابری',
    'میکائیل',
  ],
  openGraph: {
    title: 'پلتفرم دوقلوی دیجیتال و مانیتورینگ ناوگان | میکائیل',
    description:
      'نظارت سه‌بعدی زنده بر صدها دستگاه خودران، بهینه‌سازی مسیرها با هوش مصنوعی و نگهداری پیش‌بینانه در یک کنسول متمرکز.',
    url: 'https://mitech.ir/technology/digital-twin-platform',
    siteName: 'فناوری هوشمند میکائیل',
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mitech.ir/technology/digital-twin-platform',
  },
};

export default function DigitalTwinPlatformPage() {
  return <TechnologyDetailView slug="digital-twin-platform" />;
}

import type { Metadata } from 'next';
import TechnologyDetailView from '@/components/technology/TechnologyDetailView';

export const metadata: Metadata = {
  title: 'سیستم‌های پیشران، درایورهای FOC و موقعیت‌یابی دقیق | فناوری میکائیل',
  description:
    'درایورهای موتور براشلس (BLDC) با کنترل برداری FOC، انکودرهای تفکیک‌پذیری بالا، بازیابی انرژی ترمز (KERS) و سیستم‌های کنترل حرکت چندمحوره.',
  keywords: [
    'درایور FOC',
    'موتور هاب BLDC',
    'کنترل حرکت دقیق',
    'بازیابی انرژی KERS',
    'پیشران الکتریکی',
    'میکائیل',
  ],
  openGraph: {
    title: 'سیستم‌های پیشران و موقعیت‌یابی دقیق | میکائیل',
    description:
      'گشتاور بالا، حرکت بی‌صدا و بدون لرزش با کنترل برداری پیشرفته FOC و مدیریت هوشمند توان الکتریکی.',
    url: 'https://mitech.ir/technology/drives-and-positioning',
    siteName: 'فناوری هوشمند میکائیل',
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mitech.ir/technology/drives-and-positioning',
  },
};

export default function DrivesAndPositioningPage() {
  return <TechnologyDetailView slug="drives-and-positioning" />;
}

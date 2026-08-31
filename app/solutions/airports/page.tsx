import type { Metadata } from 'next';
import SolutionDetailView from '@/components/solutions/SolutionDetailView';

export const metadata: Metadata = {
  title: 'راهکار فرودگاه‌ها و پایانه‌ها | مدیریت خودران مسافران | ام. آی. تک.',
  description:
    'استقرار ناوگان ویلچرهای خودران متصل به دیتابیس پرواز (FIDS) با قابلیت بازگشت خودکار به داک و ربات‌های باربر تعقیب‌کننده جهت کاهش ۵۰٪ هزینه‌های فرودگاهی.',
  keywords: [
    'ویلچر خودران فرودگاهی',
    'مدیریت مسافران PRM',
    'هوشمندسازی فرودگاه',
    'اتصال به FIDS',
    'Auto Docking ویلچر',
    'ربات حمل چمدان',
    'کاهش هزینه فرودگاه',
    'میکائیل',
  ],
  openGraph: {
    title: 'راهکار فرودگاه‌ها و پایانه‌ها | ناوبری هوشمند PRM | میکائیل',
    description:
      'ترانزیت زمان‌بندی‌شده و دقیق مسافر توان‌یاب تا گیت پرواز، حذف ویلچرهای رهاشده با بازگشت خودکار به داک و کاهش ۵۰٪ هزینه‌های پرسنلی.',
    url: 'https://mitech.ir/solutions/airports',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'راهکار فرودگاه‌ها و پایانه‌ها | مدیریت خودران مسافران',
    description: 'ترانزیت زمان‌بندی‌شده مسافر توان‌یاب تا گیت پرواز و بازگشت خودکار به داک.',
  },
  alternates: {
    canonical: 'https://mitech.ir/solutions/airports',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function AirportsSolutionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'راهکار فرودگاه‌ها و پایانه‌ها (مدیریت خودران مسافران توان‌یاب)',
    provider: {
      '@type': 'Organization',
      name: 'Mitech'
    },
    description: 'استقرار ناوگان ویلچرهای خودران متصل به دیتابیس پرواز (FIDS) و ربات‌های باربر تعقیب‌کننده جهت کاهش ۵۰٪ هزینه‌های فرودگاهی.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionDetailView slug="airports" />
    </>
  );
}

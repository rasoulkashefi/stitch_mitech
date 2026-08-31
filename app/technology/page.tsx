import type { Metadata } from 'next';
import TechnologyHubView from '@/components/technology/TechnologyHubView';

export const metadata: Metadata = {
  title: 'فناوری و پلتفرم‌های مهندسی | ام. آی. تک. (Mitech)',
  description:
    'معماری یکپارچه فناوری‌های بنیادین میکائیل در حوزه‌های ناوبری بدون GPS، الگوریتم‌های SLAM، سیستم‌های پیشران FOC و پلتفرم ابری دوقلوی دیجیتال.',
  keywords: [
    'فناوری ناوبری میکائیل',
    'ناوبری بدون GPS',
    'درایور FOC',
    'دوقلوی دیجیتال ناوگان',
    'بینایی ماشین',
    'سنسور فیوژن',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'فناوری و پلتفرم‌های مهندسی میکائیل | هوشمندی در حرکت',
    description:
      'معماری چهارلایه سیستم‌های هوشمند میکائیل از ادراک حسگرها تا پردازش در لبه و پلتفرم ابری ارکستراسیون ناوگان.',
    url: 'https://mitech.ir/technology',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فناوری و پلتفرم‌های مهندسی میکائیل',
    description: 'معماری چهارلایه سیستم‌های هوشمند میکائیل از ادراک حسگرها تا پردازش در لبه.',
  },
  alternates: {
    canonical: 'https://mitech.ir/technology',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function TechnologyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'فناوری‌های کلیدی ام. آی. تک.',
    description: 'معماری یکپارچه فناوری‌های بنیادین میکائیل',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'پلتفرم دوقلوی دیجیتال',
          url: 'https://mitech.ir/technology/digital-twin-platform'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'سیستم‌های پیشران و موقعیت‌یابی',
          url: 'https://mitech.ir/technology/drives-and-positioning'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: 'ناوبری مستقل از GPS',
          url: 'https://mitech.ir/technology/gps-independent-navigation'
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
      <TechnologyHubView />
    </>
  );
}

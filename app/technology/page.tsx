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
    siteName: 'فناوری هوشمند میکائیل',
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mitech.ir/technology',
  },
};

export default function TechnologyPage() {
  return <TechnologyHubView />;
}

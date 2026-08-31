import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'سیستم‌های کنترل و جویستیک توانبخشی | ام. آی. تک. (Mitech)',
  description: 'جویستیک و کنترلر فرمان انواع ویلچر برقی، ماژول‌های کمکی توانبخشی و درایورهای هوشمند حرکتی شرکت ام. آی. تک.',
  keywords: [
    'جویستیک توانبخشی',
    'کنترلر ویلچر برقی',
    'درایور هوشمند',
    'ماژول کمکی حرکت',
    'میکائیل',
    'Mitech',
    'ام آی تک'
  ],
  openGraph: {
    title: 'سیستم‌های کنترل و جویستیک توانبخشی | ام. آی. تک.',
    description: 'تولید تخصصی انواع جوی‌استیک‌های ارگونومیک و کنترلرهای فرمان ویلچر برقی.',
    url: 'https://mitech.ir/fleet/wheelchair-controllers',
    siteName: 'ام. آی. تک. (Mitech)',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'سیستم‌های کنترل و جویستیک توانبخشی',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سیستم‌های کنترل و جویستیک توانبخشی',
    description: 'جویستیک و کنترلر فرمان انواع ویلچر برقی و درایورهای هوشمند.',
    images: ['/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://mitech.ir/fleet/wheelchair-controllers',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function WheelchairControllersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'سیستم‌های کنترل و جویستیک توانبخشی',
    image: 'https://mitech.ir/logo/logo.png',
    description: 'تولید تخصصی انواع جوی‌استیک‌های ارگونومیک، کنترلرهای فرمان ویلچر برقی.',
    brand: {
      '@type': 'Brand',
      name: 'Mitech'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IRR',
      availability: 'https://schema.org/PreOrder'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ComingSoonTemplate
        title="سیستم‌های کنترل و جویستیک توانبخشی"
        englishTitle="Wheelchair & Mobility Controllers"
        category="محصولات و ناوگان"
        categoryHref="/fleet"
        description="تولید تخصصی انواع جوی‌استیک‌های ارگونومیک، کنترلرهای فرمان ویلچر برقی، درایورهای میکروکنترلری پیشرفته و سیستم‌های کمکی حرکت برای توان‌یابان و مراکز درمانی."
        highlights={[
          {
            title: 'جوی‌استیک ارگونومیک ۳۶۰ درجه با فیدبک هپتیک',
            desc: 'کنترل دقیق و بدون لغزش با رزولوشن بالا، قابلیت تنظیم ناحیه مرده (Deadband) و پاسخ‌دهی خطی متناسب با توانایی دست توان‌یاب.',
          },
          {
            title: 'درایور هوشمند موتورهای DC و براشلس (BLDC)',
            desc: 'کنترل نرم شتاب‌گیری و ترمز هوشمند ضدلغزش در سراشیبی‌ها با محافظت کامل در برابر جریان اضافه و داغ شدن موتور.',
          },
          {
            title: 'قابلیت شخصی‌سازی پروفایل‌های حرکتی و اتصال ابری',
            desc: 'امکان تعریف چند پروفایل رانندگی (داخل منزل، فضای باز، سرعت آهسته) و ارسال داده‌های سلامت سیستم به اپلیکیشن همراه.',
          },
        ]}
        siblingLinks={[
          {
            label: 'ویلچرهای برقی و خودران',
            href: '/fleet/autonomous-wheelchairs',
            desc: 'ویلچرهای نسل جدید مجهز به ناوبری هوشمند',
          },
          {
            label: 'سیستم‌های کنترل و ناوبری رباتیک',
            href: '/fleet/robotic-navigation-systems',
            desc: 'کنترلرها و ماژول‌های ناوبری خودران',
          },
          {
            label: 'سیستم‌های پیشران و موقعیت‌یابی',
            href: '/technology/drives-and-positioning',
            desc: 'درایورهای صنعتی و موتورهای توان بالا',
          },
        ]}
      />
    </>
  );
}

import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ProductsShowcase from '@/components/ProductsShowcase';
import FeaturesBento from '@/components/FeaturesBento';
import Experience from '@/components/Experience';
import Enterprise from '@/components/Enterprise';
import Story from '@/components/Story';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'پلتفرم رباتیک خودران و AMaaS سازمانی | Mitech',
  description: 'ام. آی. تک. (Mitech) پیشگام در ارائه ناوگان رباتیک خودران و خدمات AMaaS (موبیلیتی به عنوان سرویس) برای سازمان‌ها، فرودگاه‌ها، بیمارستان‌ها و مجتمع‌های تجاری.',
  keywords: [
    'رباتیک خودران',
    'ناوگان رباتیک سازمانی',
    'AMaaS',
    'موبیلیتی به عنوان سرویس',
    'ام آی تک',
    'Mitech',
    'ویلچر خودران',
    'هوش مصنوعی در حمل و نقل',
    'لجستیک هوشمند',
    'اتوماسیون سازمانی'
  ],
  openGraph: {
    title: 'تحول سازمانی با ناوگان رباتیک خودران ام. آی. تک.',
    description: 'راهکارهای نوین AMaaS برای مدیریت هوشمند ناوگان، کاهش هزینه‌ها و ارتقای تجربه کاربری در محیط‌های پرتردد تجاری و درمانی.',
    url: 'https://mitech.ir/',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'اکوسیستم ناوگان رباتیک و خودران ام. آی. تک.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پلتفرم رباتیک خودران و AMaaS سازمانی | Mitech',
    description: 'راهکارهای نوین AMaaS برای مدیریت هوشمند ناوگان سازمانی.',
    images: ['/images/og-homepage.jpg'],
  },
  alternates: {
    canonical: 'https://mitech.ir/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function Page() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mitech',
      alternateName: 'ام. آی. تک.',
      url: 'https://mitech.ir',
      logo: 'https://mitech.ir/logo/logo.png',
      description: 'ارائه‌دهنده راهکارهای نوین AMaaS (موبیلیتی به عنوان سرویس) و ناوگان رباتیک خودران سازمانی.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'آیا ویلچرهای هوشمند و ربات‌های میکائیل برای حرکت نیاز به اینترنت یا زیرساخت خاصی دارند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'خیر. سیستم‌های ناوبری پیشرفته ما کاملاً مستقل از GPS و اینترنت عمل می‌کنند. این ربات‌ها با بهره‌گیری از سنسور فیوژن (بینایی ماشین و رادار)، محیط اطراف را در لحظه اسکن کرده و در فضاهای بسته (Indoor) حرکتی کاملاً ایمن و مستقل دارند.'
          }
        },
        {
          '@type': 'Question',
          name: 'مدل خدمات خودران سازمانی (AMaaS) برای مجتمع‌های تجاری و فرودگاه‌ها چگونه کار می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'در این مدل، مجموعه شما نیازی به سرمایه‌گذاری سنگین برای خرید سخت‌افزار ندارد. ما ناوگان هوشمند را مستقر و نگهداری می‌کنیم و هزینه‌ها بر اساس میزان پیمایش یا اشتراک ماهانه محاسبه می‌شود که ریسک عملیاتی و استهلاک را به صفر می‌رساند.'
          }
        },
        {
          '@type': 'Question',
          name: 'شرایط گارانتی و تامین قطعات به چه صورت است؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'تمامی محصولات تولیدی میکائیل از جمله ویلچرها، کالسکه‌های هوشمند و کنترلرها دارای گارانتی معتبر شرکتی و تضمین بلندمدت تامین قطعات یدکی هستند. تیم پشتیبانی فنی ما به صورت مستقیم پاسخگوی شماست.'
          }
        },
        {
          '@type': 'Question',
          name: 'آیا امکان سفارشی‌سازی ربات‌های باربر یا تجهیزات توانبخشی برای مراکز وجود دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. به عنوان طراح و سازنده پلتفرم‌های حرکتی و الگوریتم‌های ناوبری، این توانایی را داریم که ظرفیت باربری، ابعاد شاسی و رابط کاربری را متناسب با نیازهای اختصاصی مرکز یا بیمارستان شما مهندسی و شخصی‌سازی کنیم.'
          }
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-600">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StatsBar />
      <ProductsShowcase />
      <FeaturesBento />
      <Experience />
      <Enterprise />
      <Story />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}


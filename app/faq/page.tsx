import type { Metadata } from 'next';
import Link from 'next/link';
import FaqExplorer, { allFaqs } from '@/components/faq/FaqExplorer';
import { Sparkles, ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'سوالات متداول رباتیک، ناوگان خودران و خدمات توانبخشی | ام. آی. تک.',
  description:
    'پاسخ به متداول‌ترین پرسش‌ها پیرامون ویلچرهای خودران، تجهیزات جابه‌جایی هوشمند، خدمات تعمیر و نگهداری، و نحوه همکاری B2B با ام. آی. تک.',
  keywords: [
    'سوالات متداول میکائیل',
    'سوالات متداول ویلچر خودران',
    'تعمیر ویلچر برقی سوالات',
    'مدل جابجایی خودران AMaaS',
    'ناوبری بدون GPS',
    'پله پیما هوشمند',
    'ام آی تک',
    'Mitech FAQ',
  ],
  openGraph: {
    title: 'سوالات متداول رباتیک، ناوگان خودران و خدمات توانبخشی | ام. آی. تک.',
    description:
      'پاسخ به متداول‌ترین پرسش‌ها پیرامون ویلچرهای خودران، تجهیزات جابه‌جایی هوشمند، خدمات تعمیر و نگهداری، و نحوه همکاری B2B با ام. آی. تک.',
    url: 'https://mitech.ir/faq',
    siteName: 'فناوری هوشمند میکائیل (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سوالات متداول رباتیک، ناوگان خودران و خدمات توانبخشی | ام. آی. تک.',
    description:
      'پاسخ به متداول‌ترین پرسش‌ها پیرامون ویلچرهای خودران، تجهیزات جابه‌جایی هوشمند، خدمات تعمیر و نگهداری، و نحوه همکاری B2B.',
  },
  alternates: {
    canonical: 'https://mitech.ir/faq',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="w-full bg-slate-50 font-[Vazirmatn,sans-serif]" dir="rtl">
      {/* Official Google FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="border-b border-slate-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* Breadcrumb */}
          <nav aria-label="راهنمای مسیر" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              صفحه اصلی
            </Link>
            <ChevronLeft className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-900">سوالات متداول (FAQ)</span>
          </nav>

          <div className="text-right">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 shadow-xs">
              <Sparkles className="size-3.5" />
              <span>مرکز راهنما و پایگاه دانش ام‌آی‌تک</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight leading-[1.2]">
              پاسخ به سوالات متداول و <span className="text-emerald-600">راهنمای جامع</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
              پاسخ‌های شفاف و مستند پیرامون عملکرد ناوگان رباتیک خودران، سامانه‌های ناوبری بدون اینترنت، خدمات عیب‌یابی و تعمیرات توانبخشی، و مدل‌های سرمایه‌گذاری و همکاری سازمانی B2B.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Explorer (Search, Filters, Accordion) */}
      <FaqExplorer />
    </main>
  );
}

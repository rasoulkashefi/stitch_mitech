import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { PhoneCall, Phone, Mail, MapPin, Send, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تماس با ما و مشاوره | ام. آی. تک. (Mitech)',
  description: 'راه‌های ارتباطی با شرکت دانش‌بنیان فناوری هوشمند میکائیل، مشاوره خرید محصولات و همکاری‌های تجاری.',
  keywords: [
    'تماس با میکائیل',
    'پشتیبانی ام آی تک',
    'شماره تماس Mitech',
    'آدرس شرکت میکائیل',
    'مشاوره خرید رباتیک',
    'Mitech',
  ],
  openGraph: {
    title: 'تماس با ما و مشاوره | ام. آی. تک.',
    description: 'راه‌های ارتباطی با شرکت دانش‌بنیان فناوری هوشمند میکائیل و مشاوره خرید.',
    url: 'https://mitech.ir/contact',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تماس با ما و مشاوره',
    description: 'راه‌های ارتباطی با شرکت دانش‌بنیان فناوری هوشمند میکائیل و مشاوره خرید.',
  },
  alternates: {
    canonical: 'https://mitech.ir/contact',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'تماس با ام. آی. تک. (Mitech)',
    description: 'راه‌های ارتباطی با شرکت دانش‌بنیان فناوری هوشمند میکائیل.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Mitech',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+98-21-88774411',
        contactType: 'customer service',
        email: 'info@mitech.ir',
        availableLanguage: ['Persian', 'English']
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16 font-[Vazirmatn,sans-serif]" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Top Header ── */}
      <div className="bg-gradient-to-b from-blue-950 to-slate-900 text-white py-16 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400 mb-4">
            <PhoneCall size={14} />
            ارتباط مستقیم
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">تماس با فناوری هوشمند میکائیل</h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            ما مشتاقانه آماده شنیدن نظرات شما، پاسخ به سوالات فنی و بررسی فرصت‌های همکاری سازمانی و سرمایه‌گذاری هستیم.
          </p>

          {/* Quick Sub-navigation */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/request-demo"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-emerald-600 transition-all"
            >
              <Send size={16} />
              ثبت درخواست دمو و پایلوت
            </Link>
            <Link
              href="/contact/sales"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
            >
              <Phone size={16} />
              ارتباط با واحد فروش و نمایندگی‌ها
            </Link>
          </div>
        </div>
      </div>

      {/* ── Contact Section with Interactive Form ── */}
      <Contact />
    </div>
  );
}

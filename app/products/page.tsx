import type { Metadata } from 'next';
import Link from 'next/link';
import ProductsCatalog from '@/components/products/ProductsCatalog';
import { officialProducts } from '@/components/products/products-data';
import { ChevronLeft, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'محصولات و تجهیزات هوشمند جابه‌جایی و رباتیک | ام. آی. تک. (Mitech)',
  description:
    'کاتالوگ رسمی محصولات خودران، ویلچرهای برقی پیشرفته، تجهیزات پله‌پیما، سامانه‌های کنترل و سیستم‌های ناوبری هوشمند شرکت فناوری میکائیل.',
  keywords: [
    'محصولات ام آی تک',
    'ویلچر خودران',
    'کالسکه هوشمند',
    'ربات باربر AMR',
    'پله پیما برقی',
    'کنترلر ویلچر برقی',
    'درایور موتور DC',
    'ناوبری بدون GPS',
    'Mitech Products',
  ],
  openGraph: {
    title: 'محصولات و تجهیزات هوشمند جابه‌جایی و رباتیک | ام. آی. تک. (Mitech)',
    description:
      'کاتالوگ رسمی محصولات خودران، ویلچرهای برقی پیشرفته، تجهیزات پله‌پیما، سامانه‌های کنترل و سیستم‌های ناوبری هوشمند شرکت فناوری میکائیل.',
    url: 'https://mitech.ir/products',
    siteName: 'فناوری هوشمند میکائیل (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'محصولات و تجهیزات هوشمند جابه‌جایی و رباتیک | ام. آی. تک.',
    description:
      'کاتالوگ رسمی محصولات خودران، ویلچرهای برقی پیشرفته، تجهیزات پله‌پیما و درایورهای ناوبری.',
  },
  alternates: {
    canonical: 'https://mitech.ir/products',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsPage() {
  const productsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'کاتالوگ رسمی محصولات شرکت فناوری هوشمند میکائیل',
    description:
      'محصولات خودران، تجهیزات توانبخشی هوشمند، درایورها و سامانه‌های کنترل حرکت ام‌آی‌تک',
    itemListElement: officialProducts.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: p.title,
      url: `https://mitech.ir${p.href}`,
    })),
  };

  return (
    <main className="w-full bg-slate-50 font-[Vazirmatn,sans-serif]" dir="rtl">
      {/* Schema.org ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />

      {/* Hero Header */}
      <section className="border-b border-slate-200/80 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <nav aria-label="راهنمای مسیر" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              صفحه اصلی
            </Link>
            <ChevronLeft className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-900">محصولات و تجهیزات هوشمند</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl text-right">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 shadow-xs">
                <Sparkles className="size-3.5" />
                <span>کاتالوگ تجاری محصولات فعال MITECH</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 tracking-tight leading-[1.2]">
                تجهیزات هوشمند جابه‌جایی و <span className="text-emerald-600">پلتفرم‌های رباتیک</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
                مجموعه راهکارهای تجاری شرکت دانش‌بنیان میکائیل شامل ناوگان جابه‌جایی خودران (AMaaS)، تجهیزات توانبخشی پیشرفته و زیرسیستم‌های ناوبری صنعتی؛ مهندسی‌شده بر پایه فناوری بومی و استانداردهای بین‌المللی.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap gap-4 shrink-0">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-right min-w-[130px]">
                <div className="text-xs font-medium text-slate-500">پلتفرم‌های فعال</div>
                <div className="text-xl font-black text-blue-950 mt-1">۷ محصول</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-right min-w-[130px]">
                <div className="text-xs font-medium text-slate-500">گارانتی طلایی</div>
                <div className="text-xl font-black text-emerald-600 mt-1">۳۰ ماه</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-right min-w-[130px]">
                <div className="text-xs font-medium text-slate-500">استقلال از GPS</div>
                <div className="text-xl font-black text-blue-950 mt-1">۱۰۰٪ Indoor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Products Catalog */}
      <ProductsCatalog />
    </main>
  );
}

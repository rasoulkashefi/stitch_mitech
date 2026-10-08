import type { Metadata } from 'next';
import './globals.css';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://mitech.ir'),
  title: {
    default: 'فناوری هوشمند میکائیل | پلتفرم جامع رباتیک و حمل‌ونقل خودران',
    template: '%s | میکائیل (Mitech)',
  },
  description:
    'شرکت دانش‌بنیان فناوری هوشمند میکائیل؛ ارائه‌دهنده راهکارهای نوین حمل‌ونقل خودران (AMaaS)، تولیدکننده ویلچر برقی هوشمند، ربات باربر و پیشرفته‌ترین تجهیزات کنترلی برای استقلال فردی و هوشمندسازی سازمانی.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/mitech-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'فناوری هوشمند میکائیل | پلتفرم جامع رباتیک و حمل‌ونقل خودران',
    description:
      'شرکت دانش‌بنیان فناوری هوشمند میکائیل؛ ارائه‌دهنده راهکارهای نوین حمل‌ونقل خودران (AMaaS) و تولیدکننده تجهیزات توانبخشی و ناوبری هوشمند.',
    url: 'https://mitech.ir',
    siteName: 'فناوری هوشمند میکائیل (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className="antialiased font-sans bg-slate-50 text-slate-600 leading-relaxed min-h-screen"
        suppressHydrationWarning
      >
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}


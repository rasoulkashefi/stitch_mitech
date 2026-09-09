import type { Metadata } from 'next';
import './globals.css';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://mitech.ir'),
  title: 'فناوری هوشمند میکائیل | پلتفرم جامع رباتیک و حمل‌ونقل خودران',
  description:
    'شرکت دانش‌بنیان فناوری هوشمند میکائیل؛ ارائه‌دهنده راهکارهای نوین حمل‌ونقل خودران (AMaaS)، تولیدکننده ویلچر برقی هوشمند، ربات باربر و پیشرفته‌ترین تجهیزات کنترلی برای استقلال فردی و هوشمندسازی سازمانی.',
  icons: {
    icon: '/logo/mitech-icon.png',
    shortcut: '/logo/mitech-icon.png',
    apple: '/logo/mitech-icon.png',
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


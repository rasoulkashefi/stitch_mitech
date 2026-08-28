import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
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
    <html lang="fa" dir="rtl">
      <body className="antialiased font-sans bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}


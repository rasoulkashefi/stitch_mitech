import type { Metadata } from 'next';
// If using standard next.js setup without local Vazirmatn font files, you would import a generic font.
// Assuming the CSS brings in Vazirmatn globally via import.
import './globals.css';

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
      <body className="antialiased font-sans bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}

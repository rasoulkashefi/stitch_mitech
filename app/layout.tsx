import type { Metadata } from 'next';
// If using standard next.js setup without local Vazirmatn font files, you would import a generic font.
// Assuming the CSS brings in Vazirmatn globally via import.
import './globals.css';

export const metadata: Metadata = {
  title: 'میتک | بازآفرینی تجربه تحرک',
  description: 'پلتفرم یکپارچه AMaaS',
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

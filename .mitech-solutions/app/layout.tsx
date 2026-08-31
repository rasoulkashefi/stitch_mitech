import { Analytics } from '@vercel/analytics/next'
import { Vazirmatn } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const vazirmatn = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazirmatn', display: 'swap' })

export const metadata: Metadata = {
  title: 'مایتک | فناوری برای فردا',
  description: 'مایتک؛ نقطه تلاقی ایده‌های بزرگ و فناوری‌های عمیق.',
  generator: 'Mitech',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f8fb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="bg-background">
      <body className={`${vazirmatn.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

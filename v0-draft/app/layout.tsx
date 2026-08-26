import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], variable: '--font-vazirmatn' })

export const metadata: Metadata = {
  title: 'mitech | حرکت، دوباره ممکن است',
  description: 'فناوری هوشمند برای حرکت مستقل و زندگی بهتر.',
  generator: 'mitech.ir',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fdfdfb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={`bg-background ${vazirmatn.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

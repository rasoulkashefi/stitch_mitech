import type { Metadata } from 'next'
import { BusinessHub } from '@/components/business-model-pages'

export const metadata: Metadata = { title: 'مدل کسب‌وکار | مایتک', description: 'مدل‌های همکاری و اقتصاد هوشمند مایتک.' }

export default function BusinessModelPage() {
  return <BusinessHub />
}

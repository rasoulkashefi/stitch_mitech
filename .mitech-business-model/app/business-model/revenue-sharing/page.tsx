import type { Metadata } from 'next'
import { BusinessDetail } from '@/components/business-model-pages'

export const metadata: Metadata = { title: 'Revenue Sharing | مایتک', description: 'خلق درآمد جدید با مشارکت هوشمند مایتک.' }

export default function RevenueSharingPage() {
  return <BusinessDetail modelKey="revenue-sharing" />
}

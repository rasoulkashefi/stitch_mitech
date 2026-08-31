import type { Metadata } from 'next'
import { BusinessDetail } from '@/components/business-model-pages'

export const metadata: Metadata = { title: 'AMaaS | مایتک', description: 'ناوگان هوشمند به‌عنوان سرویس، بدون هزینه سرمایه‌ای.' }

export default function AMaaSPage() {
  return <BusinessDetail modelKey="amaas" />
}

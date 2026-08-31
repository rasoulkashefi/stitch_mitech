import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import OurExpertise from '@/components/about/OurExpertise';
import MiddleEastVision from '@/components/about/MiddleEastVision';
import OfficialContact from '@/components/about/OfficialContact';

export const metadata: Metadata = {
  title: 'درباره ام. آی. تک. | پیشگام در فناوری ناوبری خودران و تحرک هوشمند',
  description:
    'داستان توسعه شرکت ام آی تک از سال ۲۰۱۰؛ تیمی متخصص در مهندسی درایوهای الکتریکی، رباتیک صنعتی و تجهیزات توانبخشی هوشمند با چشم‌انداز توسعه در خاورمیانه.',
  keywords: [
    'درباره ام آی تک',
    'تاریخچه mitech',
    'رباتیک هوشمند',
    'CTSC خاورمیانه',
    'تجهیزات توانبخشی',
    'ناوبری خودران',
    'میکائیل',
    'Mitech'
  ],
  openGraph: {
    title: 'درباره ام. آی. تک. | پیشگام در تحرک هوشمند',
    description: 'تیمی متخصص در مهندسی درایوهای الکتریکی و رباتیک صنعتی با چشم‌انداز توسعه خاورمیانه.',
    url: 'https://mitech.ir/about',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'درباره ام. آی. تک. (Mitech)',
    description: 'تیمی متخصص در مهندسی درایوهای الکتریکی و رباتیک صنعتی.',
  },
  alternates: {
    canonical: 'https://mitech.ir/about',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ام. آی. تک. (Mitech)',
    url: 'https://mitech.ir',
    logo: 'https://mitech.ir/logo/logo.png',
    description: 'پیشگام در فناوری ناوبری خودران، رباتیک صنعتی و تجهیزات توانبخشی هوشمند در خاورمیانه.',
    foundingDate: '2010',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-21-88774411',
      contactType: 'customer service',
      areaServed: 'IR',
      availableLanguage: ['Persian', 'English']
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden font-[Vazirmatn,sans-serif]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero Section & Story Genesis */}
      <AboutHero />

      {/* 2. Product Architecture & Expertise Bento Grid */}
      <OurExpertise />

      {/* 3. Regional Vision & CTSC Hub */}
      <MiddleEastVision />

      {/* 4. Official Headquarters & Contact Hub */}
      <OfficialContact />
    </main>
  );
}

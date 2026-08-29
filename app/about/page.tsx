import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import OurExpertise from '@/components/about/OurExpertise';
import MiddleEastVision from '@/components/about/MiddleEastVision';
import OfficialContact from '@/components/about/OfficialContact';

export const metadata: Metadata = {
  title: 'درباره ام. آی. تک. | پیشگام در فناوری ناوبری خودران و تحرک هوشمند',
  description:
    'داستان توسعه شرکت ام آی تک از سال ۲۰۱۰؛ تیمی متخصص در مهندسی درایوهای الکتریکی، رباتیک صنعتی و تجهیزات توانبخشی هوشمند با چشمانداز توسعه در خاورمیانه.',
  keywords: [
    'درباره ام آی تک',
    'تاریخچه mitech',
    'رباتیک هوشمند',
    'CTSC خاورمیانه',
    'تجهیزات توانبخشی',
    'ناوبری خودران',
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden font-[Vazirmatn,sans-serif]">
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

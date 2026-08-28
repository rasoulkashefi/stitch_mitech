import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ProductsShowcase from '@/components/ProductsShowcase';
import FeaturesBento from '@/components/FeaturesBento';
import Experience from '@/components/Experience';
import Enterprise from '@/components/Enterprise';
import Story from '@/components/Story';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Hero />
      <StatsBar />
      <ProductsShowcase />
      <FeaturesBento />
      <Experience />
      <Enterprise />
      <Story />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}


import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ProductsShowcase from '@/components/ProductsShowcase';
import Technology from '@/components/Technology';
import Experience from '@/components/Experience';
import Enterprise from '@/components/Enterprise';
import Story from '@/components/Story';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Header />
      <Hero />
      <StatsBar />
      <ProductsShowcase />
      <Technology />
      <Experience />
      <Enterprise />
      <Story />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ProductsShowcase from '@/components/ProductsShowcase';
import AutonomousService from '@/components/AutonomousService';
import CoreInfrastructure from '@/components/CoreInfrastructure';
import SimpleLeadGen from '@/components/SimpleLeadGen';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <Header />
      <HeroSlider />
      <ProductsShowcase />
      <AutonomousService />
      <CoreInfrastructure />
      <SimpleLeadGen />
    </main>
  );
}

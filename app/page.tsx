import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ParadigmShift from '@/components/ParadigmShift';
import SolutionsGrid from '@/components/SolutionsGrid';
import FleetShowcase from '@/components/FleetShowcase';
import ProprietaryTech from '@/components/ProprietaryTech';
import LeadGenFooter from '@/components/LeadGenFooter';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <ParadigmShift />
      <SolutionsGrid />
      <FleetShowcase />
      <ProprietaryTech />
      <LeadGenFooter />
    </main>
  );
}

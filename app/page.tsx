import { StickyWhatsApp } from '@/components/StickyWhatsApp';
import { Navbar } from '@/components/Navbar';
import { FinalCTASection } from '@/sections/FinalCTASection';
import { HeroSection } from '@/sections/HeroSection';
import { LeadMagnetSection } from '@/sections/LeadMagnetSection';
import { MethodSection } from '@/sections/MethodSection';
import { ProblemSolutionSection } from '@/sections/ProblemSolutionSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <MethodSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <StickyWhatsApp />
    </main>
  );
}

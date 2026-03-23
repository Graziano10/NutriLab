import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/site-data';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servizi"
          title="Percorsi nutrizionali su misura per i tuoi obiettivi."
          description="Dimagrimento, sport, educazione alimentare e supporto continuo: scegli ciò che ti serve davvero."
          align="center"
          theme="dark"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

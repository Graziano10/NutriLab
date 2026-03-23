import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/site-data';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servizi"
          title="Servizi di nutrizione personalizzata per dimagrimento, sport, educazione alimentare e supporto continuativo."
          description="Scegli il percorso più adatto al tuo obiettivo: migliorare l’alimentazione, perdere peso, aumentare la massa muscolare o trovare un equilibrio sostenibile nel tempo."
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

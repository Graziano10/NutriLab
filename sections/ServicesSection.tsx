import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/site-data';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servizi"
          title="Un’offerta presentata con più impatto, ordine e conversione."
          description="Le card sono state ridisegnate con una UI più professionale, hover più ricchi e una gerarchia visiva che valorizza ogni servizio anche su schermi piccoli."
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

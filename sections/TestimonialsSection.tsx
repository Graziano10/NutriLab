import { SectionHeading } from '@/components/SectionHeading';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/lib/site-data';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonianze"
          title="Esperienze reali di chi ha seguito un percorso nutrizionale personalizzato."
          description="Le testimonianze aiutano a capire come un piano alimentare costruito sul singolo possa migliorare organizzazione, costanza, energia e rapporto con il cibo."
          align="center"
          theme="dark"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

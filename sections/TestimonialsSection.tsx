import { SectionHeading } from '@/components/SectionHeading';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/lib/site-data';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Risultati"
          title="Una social proof più forte, più elegante e più convincente."
          description="Le testimonianze ora vivono in uno spazio visivamente più premium, con contrasto elevato e hover delicati che aggiungono profondità all’esperienza."
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

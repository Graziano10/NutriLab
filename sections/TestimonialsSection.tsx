import { SectionHeading } from '@/components/SectionHeading';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/lib/site-data';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Results"
          title="Proof that practical nutrition coaching changes more than a number on the scale"
          description="These examples reflect the kind of progress clients make when their plan fits their day-to-day reality."
          align="center"
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

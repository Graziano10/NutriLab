import { SectionHeading } from '@/components/SectionHeading';
import { methodSteps } from '@/lib/site-data';

export function MethodSection() {
  return (
    <section id="method" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Method"
          title="A simple, guided process that keeps you progressing"
          description="Clarity creates consistency. Every stage is designed to reduce overwhelm and help you focus on the next best action."
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {methodSteps.map((item) => (
            <article key={item.step} className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-brand-50" />
              <p className="relative text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">Step {item.step}</p>
              <h3 className="relative mt-6 text-2xl font-bold text-ink">{item.title}</h3>
              <p className="relative mt-4 text-sm leading-7 text-ink/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { painPoints } from '@/lib/site-data';
import { SectionHeading } from '@/components/SectionHeading';

export function ProblemSolutionSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <SectionHeading
          eyebrow="Why most plans fail"
          title="You don’t need more willpower. You need a plan built for your life."
          description="Most people already know they should eat better. The real challenge is building consistency when stress, travel, cravings, and conflicting advice get in the way."
        />
        <div className="grid gap-6">
          {painPoints.map((point, index) => (
            <div key={point} className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-500">Pain point {index + 1}</p>
              <p className="mt-3 text-lg font-medium leading-8 text-ink">{point}</p>
            </div>
          ))}
          <div className="rounded-[2rem] bg-brand-600 p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-100">The solution</p>
            <h3 className="mt-3 text-2xl font-bold">Personalized nutrition that matches your routine, your body, and your goals.</h3>
            <p className="mt-4 text-base leading-7 text-white/80">
              Together, we turn nutrition into a clear system: what to eat, when to eat, how to stay consistent, and how to adjust without losing momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

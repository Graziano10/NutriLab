import { Button } from '@/components/Button';

export function FinalCTASection() {
  return (
    <section id="book" className="pb-20 pt-10 sm:pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-ink px-8 py-12 text-white shadow-soft sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Book now</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to build a nutrition strategy you can actually sustain?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Consultation spots are intentionally limited so each client receives high-touch support. Claim your spot now before this month’s availability is gone.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="mailto:hello@nutrilab.example?subject=Nutrition%20Consultation">Book a consultation</Button>
            <Button href="#services" variant="secondary">
              Review services again
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/Button';
import { stats } from '@/lib/site-data';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-glow pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-brand-700 shadow-soft ring-1 ring-brand-100">
            Personalized nutrition for fat loss, muscle gain, and lasting habits
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Stop guessing what to eat. Start seeing measurable results.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75 sm:text-xl">
            Built for busy professionals, gym-goers, and anyone ready to improve body composition, energy, and confidence with a plan that actually fits real life.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#book">Book a consultation</Button>
            <Button href="#services" variant="secondary">
              Explore services
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/70 bg-white/90 p-5 shadow-soft backdrop-blur">
                <p className="text-2xl font-bold text-ink">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-ink/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-brand-100">
            <div className="rounded-[1.5rem] bg-brand-900 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Your transformation roadmap</p>
              <div className="mt-6 space-y-5">
                {[
                  'Lose body fat without crash dieting',
                  'Build muscle with smarter fueling',
                  'Create a simple, repeatable eating routine',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                    <span className="mt-0.5 text-brand-200">✓</span>
                    <p className="text-sm leading-6 text-white/90">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-white/75">Next available intake calls</p>
                <p className="mt-2 text-3xl font-bold">Only 6 spots this month</p>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  Secure a consultation before the current coaching calendar fills up.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-3xl bg-brand-50 p-5 shadow-soft sm:block">
            <p className="text-sm font-semibold text-brand-700">Trusted by clients with busy schedules</p>
            <p className="mt-1 text-sm text-ink/70">Remote coaching, practical plans, and real accountability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

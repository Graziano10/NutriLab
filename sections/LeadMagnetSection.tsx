import { Button } from '@/components/Button';
import { CalorieCalculator } from '@/components/CalorieCalculator';
import { SectionHeading } from '@/components/SectionHeading';
import { quizBenefits } from '@/lib/site-data';

export function LeadMagnetSection() {
  return (
    <section id="quiz" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Lead magnet"
            title="Discover your nutrition profile before you commit"
            description="Use the quiz-style CTA and calorie estimator to understand where you are now, then take the next step with expert guidance."
          />
          <div className="mt-8 rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-ink">Interactive quiz CTA</h3>
            <p className="mt-3 text-base leading-7 text-ink/70">
              Discover your nutrition profile and get quick recommendations based on your habits, goal, and current routine.
            </p>
            <ul className="mt-6 space-y-4">
              {quizBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-ink/75">
                  <span className="mt-1 text-brand-500">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#book">Discover your nutrition profile</Button>
              <Button href="mailto:hello@nutrilab.example" variant="secondary">
                Email for the quiz
              </Button>
            </div>
          </div>
        </div>
        <CalorieCalculator />
      </div>
    </section>
  );
}

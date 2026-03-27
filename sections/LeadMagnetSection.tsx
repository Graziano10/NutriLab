import { Button } from '@/components/Button';
import { CalorieCalculator } from '@/components/CalorieCalculator';
import { SectionHeading } from '@/components/SectionHeading';
import { CheckCircleIcon } from '@/components/SiteIcons';
import { quizBenefits } from '@/lib/site-data';

export function LeadMagnetSection() {
  return (
    <section id="quiz" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Strumento gratuito"
            title="Scopri il tuo fabbisogno calorico in pochi secondi."
            description="Una stima veloce per orientarti meglio prima della consulenza."
            theme="dark"
          />
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-[0_25px_75px_rgba(6,15,12,0.18)] backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white">Un primo passo semplice e utile</h3>
            <p className="mt-3 text-base leading-7 text-white/70">
              Inserisci pochi dati e ottieni subito una stima iniziale per capire da dove partire.
            </p>
            <ul className="mt-6 space-y-4">
              {quizBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-white/78">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#book">Prenota la prima visita</Button>
              <Button href="mailto:info@nutrilab.it" variant="secondary">
                Richiedi info
              </Button>
            </div>
          </div>
        </div>
        <CalorieCalculator />
      </div>
    </section>
  );
}

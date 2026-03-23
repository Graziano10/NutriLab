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
            eyebrow="Strumento gratuito"
            title="Calcola il tuo fabbisogno calorico stimato e preparati alla prima consulenza nutrizionale."
            description="Questo calcolatore è un supporto informativo utile per avere un primo orientamento. Il fabbisogno reale viene definito in modo più preciso durante la valutazione professionale."
            theme="dark"
          />
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-[0_25px_75px_rgba(6,15,12,0.18)] backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white">Un piccolo strumento utile, prima di iniziare il percorso</h3>
            <p className="mt-3 text-base leading-7 text-white/70">
              Inserisci pochi dati per ottenere una stima iniziale delle calorie giornaliere e capire meglio quale approccio può essere più adatto ai tuoi obiettivi.
            </p>
            <ul className="mt-6 space-y-4">
              {quizBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-white/78">
                  <span className="mt-1 text-brand-300">✦</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#book">Prenota la prima visita</Button>
              <Button href="mailto:info@nutrilab.it" variant="secondary">
                Richiedi informazioni
              </Button>
            </div>
          </div>
        </div>
        <CalorieCalculator />
      </div>
    </section>
  );
}

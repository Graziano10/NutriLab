import { painPoints } from '@/lib/site-data';
import { SectionHeading } from '@/components/SectionHeading';

export function ProblemSolutionSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:px-8">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Perché funziona"
            title="Non basta una dieta generica: serve un’esperienza guidata, credibile e adatta alla vita reale."
            description="Ho riposizionato il layout con una struttura più chiara e una narrativa più forte: prima il problema, poi il sistema, poi la prova sociale e infine la conversione."
            theme="dark"
          />
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.08] p-7 shadow-[0_25px_70px_rgba(6,15,12,0.16)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-brand-200">Nuova percezione</p>
            <p className="mt-4 text-3xl font-bold text-white">Più autorevole, più premium, più chiaro.</p>
            <p className="mt-4 text-base leading-7 text-white/70">
              Ogni sezione ora comunica strategia, fiducia e valore con un design più maturo e una risposta migliore su mobile.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {painPoints.map((point, index) => (
            <div
              key={point}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_20px_55px_rgba(6,15,12,0.14)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-brand-300/40"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-300 to-brand-500 font-semibold text-brand-900">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-200">Pain point</p>
                  <p className="mt-3 text-lg font-medium leading-8 text-white/90">{point}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="overflow-hidden rounded-[2rem] border border-brand-300/20 bg-gradient-to-br from-brand-500/25 via-brand-600/15 to-cyan-400/10 p-8 text-white shadow-[0_25px_70px_rgba(12,35,28,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-100">La soluzione</p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Una presenza digitale che rende il coaching desiderabile, moderno e immediatamente comprensibile.</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/82">
              Ho enfatizzato contenuti modulari, card più eleganti, blocchi ad alto contrasto e CTA più visibili per rendere il sito davvero “spettacolare” senza sacrificare chiarezza o usabilità.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

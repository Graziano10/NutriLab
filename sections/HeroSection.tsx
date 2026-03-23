import { Button } from '@/components/Button';
import { stats } from '@/lib/site-data';

const highlights = [
  'Percorsi nutrizionali personalizzati per dimagrimento, ricomposizione corporea e benessere',
  'Supporto professionale con monitoraggio costante, educazione alimentare e obiettivi realistici',
  'Consulenze nutrizionali online o in studio, con strategie pratiche da applicare ogni giorno',
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="absolute inset-0 bg-hero-grid opacity-60" />
      <div className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute right-[-5rem] top-28 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-soft backdrop-blur-xl">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-300 shadow-[0_0_18px_rgba(138,223,181,0.9)]" />
            Nutrizionista per percorsi alimentari personalizzati, sostenibili e orientati ai risultati
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl xl:text-7xl">
            Nutrizionista online e in studio per piano alimentare personalizzato e risultati duraturi.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            Ti aiuto a migliorare alimentazione, energia, composizione corporea e rapporto con il cibo con un percorso nutrizionale costruito sulla tua vita reale, non su una dieta standard.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#book">Prenota una consulenza nutrizionale</Button>
            <Button href="#services" variant="secondary">
              Scopri i percorsi
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-5 shadow-[0_20px_45px_rgba(6,15,12,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 top-10 hidden h-24 w-24 rounded-full border border-brand-300/40 bg-brand-400/10 blur-sm lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-3 shadow-[0_35px_90px_rgba(4,12,10,0.3)] backdrop-blur-2xl">
            <div className="rounded-[1.7rem] border border-white/10 bg-[#07110e]/90 p-7 text-white sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-200">Consulenza nutrizionale</p>
                  <p className="mt-2 text-3xl font-bold">Percorso costruito su di te</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/75">Prima visita</div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/60">Focus del percorso</p>
                  <p className="mt-2 text-4xl font-bold text-brand-200">100%</p>
                  <p className="mt-3 text-sm leading-6 text-white/65">Strategia personalizzata su obiettivi, routine, preferenze e sostenibilità.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-brand-500/18 to-cyan-400/12 p-5">
                  <p className="text-sm text-white/60">Modalità di supporto</p>
                  <p className="mt-2 text-4xl font-bold">1:1</p>
                  <p className="mt-3 text-sm leading-6 text-white/65">Un confronto diretto per chiarire dubbi, monitorare progressi e aggiornare il piano.</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {highlights.map((point, index) => (
                  <div key={point} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-white/10">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-brand-200">
                      0{index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-white/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

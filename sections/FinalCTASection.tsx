import { Button } from '@/components/Button';

const trustPoints = ['Posti limitati ogni mese', 'Percorso 1:1', 'Piano su misura'];

export function FinalCTASection() {
  return (
    <section id="book" className="pb-20 pt-10 sm:pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(138,223,181,0.22),transparent_28%),linear-gradient(135deg,#07110e_0%,#0d1e19_55%,#123127_100%)] px-8 py-12 text-white shadow-[0_35px_100px_rgba(4,12,10,0.34)] sm:px-12 sm:py-16">
          <div className="absolute -right-12 top-0 h-56 w-56 rounded-full bg-brand-400/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span key={point} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/82">
                  {point}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Prenota la consulenza</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
              Dai inizio al cambiamento con un percorso pensato per te.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Richiedi la prima consulenza e scopri il percorso più adatto ai tuoi obiettivi.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:info@nutrilab.it?subject=Richiesta%20consulenza%20nutrizionale">Prenota una consulenza</Button>
              <Button href="#services" variant="secondary">
                Vedi i servizi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

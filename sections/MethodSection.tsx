import { SectionHeading } from '@/components/SectionHeading';
import { methodSteps } from '@/lib/site-data';

export function MethodSection() {
  return (
    <section id="method" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Metodo"
          title="Un percorso chiaro in 4 step."
          description="Analisi, piano su misura, supporto e aggiornamenti costanti."
          align="center"
          theme="dark"
        />
        <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          {methodSteps.map((item) => (
            <article
              key={item.step}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-[0_20px_55px_rgba(6,15,12,0.16)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-brand-300/40"
            >
              <div className="absolute right-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-brand-200">
                {item.step}
              </div>
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-200">Fase {item.step}</p>
                <h3 className="mt-6 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

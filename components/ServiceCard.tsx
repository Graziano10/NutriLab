import { Button } from '@/components/Button';

const serviceIcons: Record<string, string> = {
  'Piano alimentare personalizzato': '✦',
  'Nutrizione sportiva': '⚡',
  'Educazione alimentare': '◎',
  'Percorso online con check-in': '◉',
};

type ServiceCardProps = {
  title: string;
  description: string;
  outcome: string;
  cta: string;
};

export function ServiceCard({ title, description, outcome, cta }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-[0_25px_80px_rgba(6,15,12,0.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-brand-300/50 hover:bg-white/[0.12]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/80 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-200 to-brand-500 text-xl font-bold text-brand-900 shadow-[0_18px_40px_rgba(47,171,114,0.25)]">
        {serviceIcons[title] ?? title.charAt(0)}
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-white/70">{description}</p>
      <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/10 p-4 text-sm text-white/84">
        <span className="font-semibold text-brand-200">Beneficio:</span> {outcome}
      </div>
      <Button href="#book" variant="secondary" className="mt-6 w-full justify-between border-white/10 text-white">
        {cta}
      </Button>
    </article>
  );
}

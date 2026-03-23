import { Button } from '@/components/Button';

type ServiceCardProps = {
  title: string;
  description: string;
  outcome: string;
  cta: string;
};

export function ServiceCard({ title, description, outcome, cta }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl font-bold text-brand-600">
        {title.charAt(0)}
      </div>
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-ink/70">{description}</p>
      <div className="mt-6 rounded-2xl bg-brand-50 p-4 text-sm text-brand-900">
        <span className="font-semibold">Outcome:</span> {outcome}
      </div>
      <Button href="#book" variant="secondary" className="mt-6 w-full">
        {cta}
      </Button>
    </article>
  );
}

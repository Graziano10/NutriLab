type TestimonialCardProps = {
  name: string;
  result: string;
  quote: string;
};

export function TestimonialCard({ name, result, quote }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-white/60 bg-white p-8 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-ink">{name}</h3>
          <p className="text-sm text-brand-600">{result}</p>
        </div>
        <span className="rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
          Verified client
        </span>
      </div>
      <p className="mt-6 text-base leading-7 text-ink/75">“{quote}”</p>
    </article>
  );
}

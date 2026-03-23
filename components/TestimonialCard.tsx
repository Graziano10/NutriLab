type TestimonialCardProps = {
  name: string;
  result: string;
  quote: string;
};

export function TestimonialCard({ name, result, quote }: TestimonialCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-[0_25px_70px_rgba(6,15,12,0.16)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-brand-300/40">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-1 text-brand-200" aria-hidden="true">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-brand-200">{result}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
          Recensione
        </span>
      </div>
      <p className="mt-6 text-base leading-7 text-white/78">“{quote}”</p>
    </article>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl';

  return (
    <div className={alignment}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-ink/70 sm:text-lg">{description}</p>
    </div>
  );
}

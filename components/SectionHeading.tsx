type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl';
  const eyebrowClass = theme === 'dark' ? 'text-brand-200' : 'text-brand-600';
  const titleClass = theme === 'dark' ? 'text-white' : 'text-ink';
  const descriptionClass = theme === 'dark' ? 'text-white/72' : 'text-ink/70';

  return (
    <div className={alignment}>
      <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${titleClass}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionClass}`}>{description}</p>
    </div>
  );
}

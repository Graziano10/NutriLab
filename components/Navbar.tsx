import { Button } from '@/components/Button';

const navItems = [
  { label: 'Metodo', href: '#method' },
  { label: 'Servizi', href: '#services' },
  { label: 'Testimonianze', href: '#testimonials' },
  { label: 'Calcolatore', href: '#quiz' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-300 via-brand-500 to-brand-700 text-lg font-black shadow-[0_16px_35px_rgba(47,171,114,0.32)]">
            N
          </span>
          <span>
            <span className="block text-lg font-bold tracking-[0.2em]">NUTRILAB</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-white/55">Nutrizione personalizzata</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/15551234567?text=Ciao%2C%20vorrei%20prenotare%20una%20consulenza%20NutriLab."
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition duration-300 hover:border-white/35 hover:text-white sm:inline-flex"
          >
            WhatsApp
          </a>
          <Button href="#book" className="px-5 py-2.5 text-sm">
            Prenota ora
          </Button>
        </div>
      </div>
    </header>
  );
}

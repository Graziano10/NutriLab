import {
  CalculatorIcon,
  CalendarIcon,
  ChatIcon,
  FlaskIcon,
  HomeIcon,
  UsersIcon,
} from '@/components/SiteIcons';

const quickNav = [
  { label: 'Home', href: '#top', icon: HomeIcon },
  { label: 'Metodo', href: '#method', icon: FlaskIcon },
  { label: 'Servizi', href: '#services', icon: UsersIcon },
  { label: 'Testimonianze', href: '#testimonials', icon: ChatIcon },
  { label: 'Calcolatore', href: '#quiz', icon: CalculatorIcon },
  { label: 'Prenota', href: '#book', icon: CalendarIcon },
];

export function FloatingSectionNav() {
  return (
    <aside className="pointer-events-none fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-max -translate-x-1/2 md:bottom-6 lg:bottom-auto lg:left-4 lg:top-1/2 lg:w-auto lg:-translate-x-0 lg:-translate-y-1/2 xl:left-8">
      <nav className="pointer-events-auto rounded-3xl border border-white/15 bg-ink/80 p-2 shadow-[0_20px_60px_rgba(3,10,8,0.45)] backdrop-blur-xl">
        <ul className="flex items-center gap-1.5 lg:flex-col">
          {quickNav.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white/70 transition duration-300 hover:bg-white/10 hover:text-brand-200 sm:h-11 sm:w-11"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

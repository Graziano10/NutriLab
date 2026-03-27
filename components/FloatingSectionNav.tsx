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
    <aside className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-8">
      <nav className="pointer-events-auto rounded-3xl border border-white/15 bg-ink/80 p-2 shadow-[0_20px_60px_rgba(3,10,8,0.45)] backdrop-blur-xl">
        <ul className="flex flex-col gap-1.5">
          {quickNav.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white/70 transition duration-300 hover:bg-white/10 hover:text-brand-200"
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

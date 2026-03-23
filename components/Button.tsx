import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const variantClasses = {
  primary:
    'bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 text-white shadow-[0_18px_40px_rgba(47,171,114,0.35)] hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(47,171,114,0.45)] focus-visible:outline-brand-300',
  secondary:
    'border border-white/15 bg-white/8 text-white backdrop-blur-md hover:border-white/30 hover:bg-white/14 focus-visible:outline-white/60 dark-ring',
};

export function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition duration-300 group-hover:translate-x-0.5">→</span>
      <span className="absolute inset-0 translate-y-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent)] transition duration-500 group-hover:translate-y-0" />
    </Link>
  );
}

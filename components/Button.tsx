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
    'border border-white/15 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 text-white shadow-[0_16px_35px_rgba(47,171,114,0.34)] hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(47,171,114,0.42)] active:translate-y-0 focus-visible:outline-brand-300',
  secondary:
    'border border-white/15 bg-white/8 text-white backdrop-blur-md hover:border-white/30 hover:bg-white/14 focus-visible:outline-white/60 dark-ring',
};

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:gap-2 ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 leading-none">{children}</span>
      <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition duration-300 group-hover:translate-x-0.5 group-hover:bg-white/30 sm:h-7 sm:w-7">
        <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
    </Link>
  );
}

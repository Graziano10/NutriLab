import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 20c7 0 12-5 12-12V4h-4C6 4 3 9 3 14c0 3 2 6 6 6Z" />
      <path d="M7 17c3-4 6-6 10-8" />
    </BaseIcon>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9z" />
      <path d="M8.5 10h7" />
      <path d="M8.5 14h7" />
    </BaseIcon>
  );
}

export function DumbbellIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 10v4" />
      <path d="M20 10v4" />
      <path d="M7 9v6" />
      <path d="M17 9v6" />
      <path d="M7 12h10" />
    </BaseIcon>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M2 9l10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v4c0 2 3 4 6 4s6-2 6-4v-4" />
    </BaseIcon>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="14" height="11" rx="2" />
      <path d="M8 19h4" />
      <rect x="18" y="8" width="3" height="8" rx="1" />
    </BaseIcon>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.3 2.4L15.5 9.5" />
    </BaseIcon>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </BaseIcon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 20v-2a4 4 0 0 0-8 0v2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M22 20v-2a3 3 0 0 0-2.4-2.9" />
      <path d="M2 20v-2a3 3 0 0 1 2.4-2.9" />
    </BaseIcon>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 3h6" />
      <path d="M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3" />
      <path d="M8 15h8" />
    </BaseIcon>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H5l-2 2v-6.5A8.5 8.5 0 1 1 21 12Z" />
    </BaseIcon>
  );
}

export function CalculatorIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 12h.01" />
      <path d="M12 12h.01" />
      <path d="M15 12h.01" />
      <path d="M9 16h.01" />
      <path d="M12 16h.01" />
      <path d="M15 16h.01" />
    </BaseIcon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M3 10h18" />
      <path d="M8 14h8" />
    </BaseIcon>
  );
}

import Link from 'next/link';

export function StickyWhatsApp() {
  return (
    <Link
      href="https://wa.me/15551234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20nutrition%20consultation."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-105 hover:bg-[#1fb85a]"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">💬</span>
      WhatsApp
    </Link>
  );
}

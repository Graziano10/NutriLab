import Link from 'next/link';

export function StickyWhatsApp() {
  return (
    <Link
      href="https://wa.me/15551234567?text=Ciao%2C%20vorrei%20prenotare%20una%20consulenza%20NutriLab."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(37,211,102,0.38)] transition duration-300 hover:scale-105 hover:shadow-[0_24px_55px_rgba(37,211,102,0.48)] sm:bottom-5"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-base shadow-inner shadow-white/10">
        💬
      </span>
      <span className="hidden sm:inline">Parla con un nutrizionista</span>
      <span className="sm:hidden">WhatsApp</span>
    </Link>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nutrilab.example'),
  title: 'NutriLab | Nutrizionista online e piano alimentare personalizzato',
  description:
    'NutriLab è la landing page di un nutrizionista che offre consulenze online e in studio, piani alimentari personalizzati, nutrizione sportiva ed educazione alimentare.',
  keywords: [
    'nutrizionista online',
    'piano alimentare personalizzato',
    'consulenza nutrizionale',
    'nutrizione sportiva',
    'educazione alimentare',
    'dimagrimento sostenibile',
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'NutriLab | Nutrizionista online e piano alimentare personalizzato',
    description:
      'Prenota una consulenza nutrizionale per ricevere un piano alimentare personalizzato, supporto professionale e strategie sostenibili per i tuoi obiettivi.',
    url: 'https://nutrilab.example',
    siteName: 'NutriLab',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NutriLab | Nutrizionista online e piano alimentare personalizzato',
    description:
      'Percorsi nutrizionali personalizzati per dimagrimento, benessere, ricomposizione corporea e nutrizione sportiva.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}

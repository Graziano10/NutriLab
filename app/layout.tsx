import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nutrilab.example'),
  title: 'NutriLab | Personalized Nutrition Coaching',
  description:
    'Professional nutrition coaching for weight loss, muscle gain, and healthier eating habits with personalized plans and ongoing support.',

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  openGraph: {
    title: 'NutriLab | Personalized Nutrition Coaching',
    description:
      'Book a consultation to get a nutrition plan tailored to your lifestyle, body composition goals, and performance needs.',
    url: 'https://nutrilab.example',
    siteName: 'NutriLab',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NutriLab | Personalized Nutrition Coaching',
    description:
      'Conversion-focused nutrition coaching website built for people seeking fat loss, muscle gain, and sustainable eating habits.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

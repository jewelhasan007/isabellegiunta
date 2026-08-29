import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Isabelle Giunta | Los Angeles Makeup Artist',
  description: 'Isabelle Giunta is a Los Angeles-based makeup artist specializing in personalized beauty, soft glam, full glam and professional makeup services.',
  keywords: ['Los Angeles makeup artist', 'soft glam', 'full glam', 'beauty makeup', 'Isabelle Giunta'],
  openGraph: {
    title: 'Isabelle Giunta | Los Angeles Makeup Artist',
    description: 'Personalized beauty, soft glam and professional makeup services in Los Angeles.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isabelle Giunta | Los Angeles Makeup Artist',
    description: 'Personalized beauty, soft glam and professional makeup services in Los Angeles.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}

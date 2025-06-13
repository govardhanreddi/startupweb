import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'KodingKompany - Innovative Technology Solutions',
  description: 'We help businesses thrive in the digital age with innovative technology solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
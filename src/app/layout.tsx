import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

import './globals.css';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CACCOM',
  description: 'Site oficial do CACCOM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${inter.variable} bg-background`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

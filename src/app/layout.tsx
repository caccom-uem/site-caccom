import type { Metadata } from 'next';

import './globals.css';
import { Navbar } from './components/NavBar';
import { Folder } from './components/Footer';

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
      <body className="bg-background">
        <Navbar />
        <main>{children} </main>
        <Folder />
      </body>
    </html>
  );
}

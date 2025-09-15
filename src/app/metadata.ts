import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'CACCOM - Centro Acadêmico de Ciência da Computação',
    template: '%s | CACCOM',
  },
  description:
    'Site oficial do CACCOM - Centro Acadêmico de Ciência da Computação da UEM. Fique por dentro de eventos, informações e novidades.',
  keywords: [
    'CACCOM',
    'UEM',
    'Universidade Estadual de Maringá',
    'Centro Acadêmico',
    'Ciência da Computação',
    'Tecnologia',
    'Maringá',
    'Estudantes',
    'Graduação',
    'Computação',
  ],
  authors: [{ name: 'CACCOM UEM', url: 'https://github.com/caccom-uem' }],
  creator: 'CACCOM UEM',
  metadataBase: new URL('https://site-caccom.vercel.app/'),
  openGraph: {
    title: 'CACCOM - Centro Acadêmico de Ciência da Computação',
    description: 'Acompanhe informações, eventos e novidades do CACCOM - UEM.',
    url: 'https://site-caccom.vercel.app/',
    siteName: 'CACCOM',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CACCOM - Centro Acadêmico de Ciência da Computação',
    description:
      'Site oficial do CACCOM da UEM. Fique por dentro das novidades.',
  },
};

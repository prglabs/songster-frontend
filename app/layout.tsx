import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '../styles/globals.css';
import { ballo2, foroSans } from './font';

export const metadata: Metadata = {
  title: 'Songster Group',
  description:
    'An American private equity firm investing in the advancements of cloud computing, artificial intelligence, and quantum mechanics',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body
        className={`${ballo2.className} ${foroSans.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

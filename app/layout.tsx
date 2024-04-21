import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '../styles/globals.css';
import { avenirLight } from './font';

export const metadata: Metadata = {
  title: 'Songster Group',
  description:
    'A technology-focused private equity firm investing in the advancements of cloud computing, artificial intelligence, and quantum mechanics',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body className={cn(avenirLight.className)} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '../styles/globals.css';
import { ballo2 } from './font';

export const metadata: Metadata = {
  title: 'Songster Group',
  description:
    'An American private equity firm investing in the advancements of cloud computing, artificial intelligence, and quantum mechanics',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body className={cn(ballo2.className)} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

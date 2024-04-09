import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '../styles/globals.css';
import { inter, openSans } from './font';

export const metadata: Metadata = {
  title: 'Songster Capital',
  description:
    'We invest in cloud computing, artificial intelligence, and the commercialization of quantum mechanics',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body
        className={cn(inter.variable, openSans.variable, 'font-body')}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { inter, openSans } from './font';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Songster Capital',
  description:
    'We invest in cloud computing, artificial intelligence, and the commercialization of quantum mechanics',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body
        className={cn(inter.variable, openSans.variable)}
        suppressHydrationWarning
      >
        {children}
        <Footer darkMode />
      </body>
    </html>
  );
}

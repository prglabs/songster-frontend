import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { inter, openSans } from '../font';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body
        className={cn(inter.variable, openSans.variable, 'font-body')}
        suppressHydrationWarning
      >
        {children}
        <Footer darkMode />
      </body>
    </html>
  );
}

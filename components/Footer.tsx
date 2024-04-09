import { footerProps } from '@/@types/general';
import { cn } from '@/lib/utils';
import React from 'react';

function Footer({ darkMode = false, asDiv = false }: footerProps) {
  const variant = {};
  return (
    <>
      {asDiv ? (
        <div
          className={`${
            darkMode ? 'text-secondary' : 'bg-primary text-sm text-white'
          } font-open-sans w-full py-4 text-center`}
        >
          &#169; {new Date().getFullYear()} Songster Capital LLC. - All rights
          reserved
        </div>
      ) : (
        <footer
          className={cn(
            'font-open-sans w-full py-4 text-center text-xs',
            darkMode ? 'text-secondary' : 'text-white'
          )}
        >
          &#169; {new Date().getFullYear()} Songster Capital LLC. - All rights
          reserved
        </footer>
      )}
    </>
  );
}

export default Footer;

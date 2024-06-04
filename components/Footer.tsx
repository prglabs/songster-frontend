import { footerProps } from '@/@types/general';
import { cn } from '@/lib/utils';
import React from 'react';

function Footer({ darkMode = false, asDiv = false }: footerProps) {
  const DEFAULT_STYLE =
    'font-open-sans w-full py-4 text-center text-xs md:text-sm';
  const FOOTER_CONTENT = `${new Date().getFullYear()} Songster Group LLC - All rights reserved`;
  return (
    <>
      {asDiv ? (
        <div
          className={cn(
            DEFAULT_STYLE,
            darkMode ? 'text-secondary' : 'text-white'
          )}
        >
          &#169; {FOOTER_CONTENT}
        </div>
      ) : (
        <footer
          className={cn(
            DEFAULT_STYLE,
            darkMode ? 'text-secondary' : 'text-white'
          )}
        >
          &#169; {FOOTER_CONTENT}
        </footer>
      )}
    </>
  );
}

export default Footer;

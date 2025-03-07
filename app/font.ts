import { Inter, Open_Sans, Baloo_2 } from 'next/font/google';
import localFont from 'next/font/local';
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
});

export const ballo2 = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
});

export const foroSans = localFont({ src: './ForoSans-Light.otf',variable: "--font-foro-sans" });

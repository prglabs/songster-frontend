import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: 'Songster Capital',
  description: 'A global investment firm with subject matter expertise in cloud computing, artificial intelligence, and generative AI',
}
const openSans = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='overflow bg-black' lang="en bg-black">
      <body className={openSans.className} suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
export const metadata: Metadata = {
  title: 'Peregrine Labs',
  description: 'Cloud Native Services Firm',
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
      <body className={openSans.className}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '10vh' }}>
            <Navbar/>
          </div>
          <div>
        {children}
        <footer className="py-4 font-semibold tracking-tighter text-center w-full footer text-center text-gray-500 mt-20 text-xs " style={{ textAlign: 'center', backgroundColor: 'black' }}>
        {new Date().getFullYear()} Peregrine Labs Inc. All rights reserved.
      </footer>
        </div>
        
        </body>
    </html>
  )
}

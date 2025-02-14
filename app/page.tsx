import Hero from '@/components/Home/Hero';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <header className='sticky top-0 bg-black py-10'>
      <div className='container flex items-center gap-x-6'>
        <Image
          src='/logo-songster-light.svg'
          height={32}
          width={32}
          alt='logo'
        />
        <Link href='/login' className='text-lg text-white'>
          LP Login
        </Link>
      </div>
    </header>
  );
}
const SongsterPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center bg-black text-slate-50 h-[calc(100dvh-112px)]'>
        <Hero />
      </main>
    </>
  );
};

export default SongsterPage;

'use client';
import Contacts from '@/components/Contacts';
import SectionWrapper from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <main className='flex min-h-[100dvh] flex-col items-center justify-center bg-black'>
      <SectionWrapper
        bgColor='black'
        className='mx-auto flex max-w-md flex-col items-center justify-center'
      >
        <div className='mx-2 mt-10 w-full border border-gray-900 px-12 py-10 text-center bg-[#151515] rounded-sm'>
          <Link href="/" title='back to home page'>
            <Image
              src='/logo-songster-light.svg'
              width={64}
              height={64}
              className='mx-auto mb-2'
              alt='songster capital logo'
            />
          </Link>
          <h1 className='mb-8 text-4xl font-medium text-white'>Sign In</h1>
          <form onSubmit={onSubmitHandler}>
            <Input type='email' placeholder='Email' className='mb-3' />
            <Input type='password' placeholder='Password' className='mb-4' />
            <div className='flex items-center space-x-2'>
              <Checkbox id='rememberMe' />
              <label
                htmlFor='rememberMe'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Remember Me
              </label>
            </div>
            <Button type='submit' className='mt-10'>
              Next
            </Button>
          </form>
          <Link href='#' className='mt-4 block underline'>
            Reset Password
          </Link>
        </div>
        {/* <h1 className='relative z-10 mt-16 justify-center text-[42px] font-bold'>
          Songster Capital
        </h1>
        <p className='mt-6 max-w-96 text-center'>
          We invest in cloud computing, artificial intelligence, and the
          commercialization of quantum mechanics
        </p>
        <Contacts color='black' className='mt-6' /> */}
      </SectionWrapper>
    </main>
  );
};

export default LoginPage;

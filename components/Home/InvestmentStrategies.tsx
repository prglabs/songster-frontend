import Image from 'next/image';
import data from '../../constant/investmentStrategies.json';
import { Fragment } from 'react';
import SectionWrapper from '../SectionWrapper';
const InvestmentStrategies = () => {
  return (
    <SectionWrapper bgColor='white' id='investment' className='min-h-svh'>
      <div className='mx-4 max-w-7xl py-12 xl:mx-auto'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <div className='flex flex-col gap-5 md:flex-row'>
            <div className='flex-initial'>
              <a href='#'>
                <Image
                  src='/logo-192x192.webp'
                  width={64}
                  height={64}
                  alt='logo'
                />
              </a>
            </div>
            <div className='flex-1'>
              <h2 className='section-title'>Investment Strategies</h2>
              {data.data.map(({ title, description }, index) => (
                <div key={title} className='mb-8'>
                  <h3 className='mt-2 text-2xl font-medium underline decoration-primary decoration-4 underline-offset-[6px]'>
                    {title}
                  </h3>
                  <p className='mt-2 text-sm text-gray-400 last:mb-0'>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <Image
              src='/Box Art 3D.svg'
              height={600}
              width={500}
              alt='Box art 3D image'
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InvestmentStrategies;

import Image from 'next/image';
import React from 'react';
import SectionWrapper from '../SectionWrapper';

const Services = () => {
  return (
    <SectionWrapper bgColor='black' id='services'>
      <>
        <div className='mx-4 my-20 max-w-6xl text-center lg:mx-auto'>
          <h2 className='font-open-sans text-2xl font-bold leading-snug md:text-3xl lg:text-4xl'>
            Decades of Experience Building and Operating Cloud-Native Businesses
          </h2>
        </div>
        <div className='flex min-h-screen w-full flex-col justify-center bg-white'>
          <div className='mx-4 my-12 max-w-7xl lg:mx-auto'>
            <div className='grid grid-cols-1 gap-y-4 md:gap-20 lg:grid-cols-2'>
              <div className='my-auto'>
                <h2 className='font-open-sans mb-4 text-2xl font-bold leading-none text-slate-900 md:text-4xl md:leading-snug lg:text-5xl'>
                  More than a Financial Engineering Exercise
                </h2>
                <p className='text-sm font-light text-gray-400'>
                  We make disciplined investments in sectors where we believe
                  our subject matter expertise can influence the outcome.
                </p>
              </div>
              <div>
                <Image
                  src='/All-services.png'
                  width={800}
                  height={800}
                  alt='all services pictures'
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Services;

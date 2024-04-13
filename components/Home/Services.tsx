import Image from 'next/image';
import React from 'react';
import SectionWrapper from '../SectionWrapper';

const Services = () => {
  return (
    <SectionWrapper bgColor='white' id='services' className='min-h-svh'>
      <div className='mx-4 my-12 max-w-7xl lg:mx-auto'>
        <div className='grid grid-cols-1 gap-y-4 md:gap-20 lg:grid-cols-2'>
          <div className='my-auto'>
            <h2 className='section-title mb-4 '>
              Investing in our Areas of <br className='hidden md:block' />
              Subject Matter Expertise
            </h2>
            <p className='text-secondary'>
              We make disciplined investments in sectors where we believe our
              experience and expertise can influence the outcome.
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
    </SectionWrapper>
  );
};

export default Services;

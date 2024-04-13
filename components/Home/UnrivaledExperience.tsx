import React from 'react';
import SectionWrapper from '../SectionWrapper';
import unrivaledExperienceData from '@/constant/unrivaledExperience.json';

const UnrivaledExperience = () => {
  return (
    <SectionWrapper bgColor='white' className='min-h-svh'>
      <div className='bg-primary'>
        <div className='mx-auto max-w-7xl items-center gap-y-4 px-4 py-8 text-center text-white 2xl:px-0'>
          <h2 className='section-title mb-4'>
            Unrivaled Experience in <br className='hidden md:block' />
            Cloud-Native Technology
          </h2>
          <p>
            We have held front-row seats to the past decade of innovation in
            both <br className='hidden md:block' /> technology startups and the
            industries largest cloud providers
          </p>
        </div>
      </div>
      <div className='flex-grow'>
        <div className='mx-auto my-12 grid max-w-7xl grid-cols-1 items-stretch gap-x-20 gap-y-6 px-4 md:grid-cols-2 md:gap-y-10 xl:grid-cols-3'>
          {unrivaledExperienceData.map(({ name, description }) => (
            <div className='col-span-1' key={name}>
              <h3 className='text-2xl font-medium'>{name}</h3>
              <p className='mt-2 md:mt-4'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default UnrivaledExperience;

import React from 'react';
import SectionWrapper from '../SectionWrapper';
import unrivaledExperienceData from '@/constant/unrivaledExperience.json';

const UnrivaledExperience = () => {
  return (
    <SectionWrapper bgColor='white'>
      <div className='bg-primary'>
        <div className='mx-auto max-w-7xl items-center gap-y-4 px-4 py-8 text-center text-white 2xl:px-0'>
          <h2 className='section-title mb-4'>
            Unrivaled Experience in <br />
            Cloud-Native Technology
          </h2>
          <p>
            We have held front-row seats to the past decade of innovation in
            both
            <br />
            technology startups and the industries largest cloud providers
          </p>
        </div>
      </div>

      <div className='mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-x-20 gap-y-10 px-4 md:grid-cols-2 xl:grid-cols-3'>
        {unrivaledExperienceData.map(({ name, description }) => (
          <div className='col-span-1' key={name}>
            <h3 className='text-3xl font-medium'>{name}</h3>
            <p className='mt-4'>{description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default UnrivaledExperience;

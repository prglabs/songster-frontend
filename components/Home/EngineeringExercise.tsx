import React from 'react';
import SectionWrapper from '../SectionWrapper';
import engineeringExerciseData from '@/constant/engineeringExercise.json';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const EngineeringExercise = () => {
  return (
    <SectionWrapper bgColor='white' className='relative'>
      <Image
        src='/mountains.png'
        fill
        className='absolute left-0 top-0 z-0'
        alt='mountains image background'
      />

      <div className='z-10 mx-auto max-w-7xl items-center gap-y-4 px-4 pb-8 pt-12 text-center 2xl:px-0'>
        <h2 className='section-title mb-4'>
          More than a Financial <br />
          Engineering Exercise
        </h2>
        <p className='text-secondary'>
          We take an active interest in the businesses we invest in and <br />
          bring the full force of our platform to our portfolio
        </p>
        <div className='my-12 grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-6'>
          {engineeringExerciseData.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                index < 3 ? 'col-span-2' : 'col-span-2 md:col-span-3',
                'mx-auto md:max-w-64'
              )}
            >
              <Image
                src={item.icon}
                width={64}
                height={48}
                alt='icon image'
                className='mx-auto mb-3 max-h-12 object-scale-down'
              />
              <h3 className='text-2xl font-semibold text-primary'>
                {item.title}
              </h3>
              <p className='mt-2 leading-snug text-secondary'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EngineeringExercise;

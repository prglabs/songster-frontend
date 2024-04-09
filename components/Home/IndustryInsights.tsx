import industryInsight from '@/constant/industryInsight.json';
import Image from 'next/image';
import Link from 'next/link';
import Contacts from '../Contacts';
import { Navigation } from '../Navigation';
import SectionWrapper from '../SectionWrapper';
const IndustryInsights = () => {
  return (
    <SectionWrapper id='about-us'>
      <div className='mx-4 max-w-7xl py-12 text-center lg:mx-auto'>
        <h2 className='section-title text-3xl font-semibold lg:text-5xl'>
          Industry Insights
        </h2>
        <p className='mt-4'>
          Follow us on LinkedIn and Medium for the latest industry insights
        </p>
        <div className='relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-x-14 xl:grid-cols-3 xl:gap-x-16 '>
          {industryInsight.map((item) => (
            <Link
              key={item.imageDescription}
              href={item.link}
              aria-label={item.link}
            >
              <div className='relative h-64 w-full lg:h-60 '>
                <Image
                  src={item.imageUrl}
                  alt={item.imageDescription}
                  fill
                  objectFit='cover'
                />
              </div>
              <div className='bg-slate-300 p-2'>
                <figcaption className='text-left font-bold text-slate-950'>
                  {item.title}
                </figcaption>
                <p className='text-right text-xs text-slate-500'>{item.date}</p>
              </div>
            </Link>
          ))}
          <div className='absolute -bottom-8 -left-8 hidden h-80 w-40 border-b-4 border-l-4 lg:block'></div>
          <div className='absolute -right-8 -top-8 hidden h-80 w-40 border-r-4 border-t-4 lg:block'></div>
        </div>
        <Navigation className='mt-12' />
        <p className='my-2 text-sm'>
          © 2024 Songster Capital LLC. - All rights reserved
        </p>
        <Contacts color='white' size='medium' />
      </div>
    </SectionWrapper>
  );
};

export default IndustryInsights;

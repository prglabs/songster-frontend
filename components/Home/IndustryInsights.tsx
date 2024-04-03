import Image from 'next/image';
import Link from 'next/link';
import data from '../../constant/industryinsight.json';
import Contacts from '../Contacts';
import SectionWrapper from '../SectionWrapper';
const IndustryInsights = () => {
  return (
    <SectionWrapper className='!bg-primary' id='industry'>
      <div className='mx-4 max-w-7xl py-12 text-center lg:mx-auto'>
        <h2 className='font-open-sans mb-16 text-3xl font-semibold lg:text-5xl'>
          Industry Insights
        </h2>
        <div className='relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 xl:gap-x-16'>
          {data.data.map((item) => (
            <Link
              key={item.imageDescription}
              href={item.link}
              aria-label={item.link}
            >
              <div className='relative h-64 w-full lg:h-60'>
                <Image
                  src={item.imageUrl}
                  alt={item.imageDescription}
                  fill
                  sizes=''
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
          <div className='absolute -bottom-8 -left-8 hidden h-64 w-40 border-b-4 border-l-4 lg:block'></div>
        </div>
        <h3 className='mt-14 text-lg font-semibold md:text-xl'>
          Follow us on LinkedIn for up-to-date investment and industry insights
        </h3>
        <Contacts color='primary' />
      </div>
    </SectionWrapper>
  );
};

export default IndustryInsights;

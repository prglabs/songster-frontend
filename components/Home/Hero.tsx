import { cn } from '@/lib/utils';
import Contacts from '../Contacts';
import Footer from '../Footer';
import SectionWrapper from '../SectionWrapper';
import WaterDropGrid from '../WaterDropGrid';
import { foroSans } from '@/app/font';

const Hero = () => {
  return (
    <SectionWrapper
      className='md:pt-18 my-auto min-h-dvh px-4 pb-12 pt-12 text-center sm:max-w-sm md:px-0 md:pb-8'
      id='home'
    >
      <WaterDropGrid />
      <div className='relative mx-auto w-max'>
        <h1
          className={cn(
            foroSans.className,
            'relative z-10 mt-8 justify-center text-[42px]'
          )}
        >
          Songster Group
        </h1>
        <div className='absolute bottom-[6px] z-0 w-full border border-b-[4px] border-primary'></div>
      </div>
      <p className='mt-6 text-sm text-slate-300 md:-ml-[88px] md:w-[560px] md:text-lg'>
        An American private equity firm investing in the advancements of cloud
        computing, artificial intelligence, and quantum mechanics
      </p>
      <Contacts color='white' className='mt-6' />
      <Footer asDiv darkMode />
    </SectionWrapper>
  );
};

export default Hero;

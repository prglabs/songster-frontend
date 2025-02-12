import { cn } from '@/lib/utils';
import Contacts from '../Contacts';
import SectionWrapper from '../SectionWrapper';
import WaterDropGrid from '../WaterDropGrid';
import { foroSans } from '@/app/font';

const Hero = () => {
  return (
    <SectionWrapper
      className='md:pt-18 my-auto px-4 pb-12 pt-12 text-center sm:max-w-sm md:px-0 md:pb-8 lg:scale-90'
      id='home'
    >
      <WaterDropGrid />
      <p className='mx-auto mt-6 w-10/12 text-sm text-slate-300 md:-ml-[88px] md:w-[560px] md:text-lg'>
        Investing in AI, High-Performance Computing, and the Commercialization
        of Quantum Mechanics
      </p>
      <Contacts color='white' className='mt-6' />
    </SectionWrapper>
  );
};

export default Hero;

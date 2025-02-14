import Contacts from '../Contacts';
import SectionWrapper from '../SectionWrapper';
import WaterDropGrid from '../WaterDropGrid';

const Hero = () => {
  return (
    <SectionWrapper
      className='px-4 text-center justify-start sm:max-w-sm md:px-0 lg:scale-90'
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

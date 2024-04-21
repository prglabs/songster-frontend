import Contacts from '../Contacts';
import Footer from '../Footer';
import SectionWrapper from '../SectionWrapper';
import WaterDropGrid from '../WaterDropGrid';

const Hero = () => {
  return (
    <SectionWrapper
      className='md:pt-18 my-auto min-h-screen px-4 pb-8 pt-12 text-center sm:max-w-sm md:px-0'
      id='home'
    >
      <WaterDropGrid />
      <div className='relative mx-auto w-max'>
        <h1 className='relative z-10 mt-8 justify-center font-display text-[42px] font-bold'>
          Songster Group
        </h1>
        <div className='absolute bottom-[5px] z-0 w-full border border-b-[4px] border-primary'></div>
      </div>
      <p className='mt-6 text-slate-300 md:-ml-[98px] md:w-[580px]'>
        A technology-focused private equity firm investing in the advancements
        of cloud computing, artificial intelligence, and quantum mechanics
      </p>
      <Contacts color='white' className='mt-6' />
      <Footer asDiv darkMode />
    </SectionWrapper>
  );
};

export default Hero;

import Contacts from '../Contacts';
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
          Songster Capital
        </h1>
        <div className='absolute bottom-2 z-0 w-full border border-b-[5px] border-primary'></div>
      </div>
      <p className='mt-6 md:-ml-[68px] md:w-[520px]'>
        We invest in cloud computing, artificial intelligence, and the
        commercialization of quantum mechanics
      </p>
      <Contacts color='white' className='mt-6' />
    </SectionWrapper>
  );
};

export default Hero;

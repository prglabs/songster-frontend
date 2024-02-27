import Contacts from "../Contacts";
import SectionWrapper from "../SectionWrapper";
import WaterDropGrid from "../WaterDropGrid";

const Hero = () => {
  return (
    <SectionWrapper
      className="sm:max-w-sm px-4 md:px-0 text-center pb-12 pt-12 md:pt-18"
      id="home"
    >
      <>
        <WaterDropGrid />
        <div className="relative w-max mx-auto">
          <h1 className="relative z-10 justify-center font-bold text-[42px] mt-8">
            Songster Capital
          </h1>
          <div className="absolute bottom-2 z-0 border-b-[5px] border border-primary w-full"></div>
        </div>
        <p className="mt-6 md:w-[520px] md:-ml-[68px]">
          We invest in cloud computing, artificial intelligence, and the
          commercialization of quantum mechanics
        </p>
        <Contacts color="white" />
      </>
    </SectionWrapper>
  );
};

export default Hero;

import Contacts from "../Contacts";
import SectionWrapper from "../SectionWrapper";
import WaterDropGrid from "../WaterDropGrid";

const Hero = () => {
  return (
    <SectionWrapper
      className="sm:max-w-sm px-4 md:px-0 text-center pb-12 pt-12 md:pt-24"
      id="home"
    >
      <>
        <WaterDropGrid />
        <div className="border-b-[5px] border-primary w-max mx-auto">
          <h1 className="justify-center font-bold text-4xl mt-8">
            Songster Capital
          </h1>
        </div>
        <p className="text-sm mt-6 md:w-[500px] md:-ml-[58px]">
          We invest in cloud computing, artificial intelligence, and the
          commercialization of quantum mechanics
        </p>
        <Contacts color="white" />
      </>
    </SectionWrapper>
  );
};

export default Hero;

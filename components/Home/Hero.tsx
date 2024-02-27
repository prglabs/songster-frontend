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
        <h1 className="underline decoration-primary decoration-4 justify-center font-bold text-4xl mt-8">
          Songster Capital
        </h1>
        <p className="text-sm mt-6 md:w-[500px] md:-ml-[58px]">
          A technology-focused private equity firm investing in the advancements
          of cloud computing, artificial intelligence, and quantum mechanics
        </p>
        <Contacts color="white" />
      </>
    </SectionWrapper>
  );
};

export default Hero;

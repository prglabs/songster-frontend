import Image from "next/image";
import React from "react";
import SectionWrapper from "../SectionWrapper";

const Services = () => {
  return (
    <SectionWrapper bgColor="black" id="services">
      <>
        <div className="text-center mx-4 lg:mx-auto my-20 max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-open-sans font-bold leading-snug">
            Decades of Experience Building and Operating Cloud-Native Businesses
          </h2>
        </div>
        <div className="bg-white w-full min-h-screen flex flex-col justify-center">
          <div className="mx-4 lg:mx-auto my-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 md:gap-20">
              <div className="my-auto">
                <h2 className="text-2xl md:text-4xl lg:text-5xl text-slate-900 font-bold font-open-sans mb-4 leading-none md:leading-snug">
                  More than a Financial Engineering Exercise
                </h2>
                <p className="font-light text-sm text-gray-400">
                  We make disciplined investments in sectors where we believe
                  our subject matter expertise can influence the outcome.
                </p>
              </div>
              <div>
                <Image
                  src="/All-services.png"
                  width={800}
                  height={800}
                  alt="all services pictures"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Services;

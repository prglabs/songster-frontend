import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="w-full text-slate-50" id="services">
      <div className="px-4 md:px-0 text-center mx-4 lg:mx-auto py-12 max-w-6xl">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-open-sans font-bold leading-snug">
          Decades of Experience Building and Operating Cloud-Native Businesses
        </h2>
      </div>
      <div className="bg-white w-full">
        <div className="px-4 md:px-0 mx-4 lg:mx-auto py-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-20">
            <div className="my-auto">
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-slate-900 font-bold font-open-sans mb-4 leading-none md:leading-snug">
                More than a Financial Engineering Exercise
              </h2>
              <p className="font-light text-sm text-gray-400">
                We make disciplined investments in sectors where we believe our
                subject matter expertise can influence the outcome.
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
    </section>
  );
};

export default Services;

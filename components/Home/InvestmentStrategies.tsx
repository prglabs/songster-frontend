import Image from "next/image";
import data from "../../constant/investmentStrategies.json";
import { Fragment } from "react";
import SectionWrapper from "../SectionWrapper";
const InvestmentStrategies = () => {
  return (
    <SectionWrapper bgColor="white" id="investment">
      <div className="px-4 md:px-0 mx-4 xl:mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-initial">
              <a href="#">
                <Image
                  src="/logo-192x192.webp"
                  width={64}
                  height={64}
                  alt="logo"
                />
              </a>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-open-sans font-bold mb-2">
                Investment Strategies
              </h2>
              {data.data.map(({ title, description }, index) => (
                <Fragment key={title}>
                  <h3 className="text-2xl font-bold underline decoration-primary decoration-4 underline-offset-[6px] mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-8 last:mb-0">
                    {description}
                  </p>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/Box Art 3D.svg"
              height={600}
              width={500}
              alt="Box art 3D image"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InvestmentStrategies;

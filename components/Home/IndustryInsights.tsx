import Image from "next/image";
import Link from "next/link";
import data from "../../constant/industryinsight.json";
import Contacts from "../Contacts";
import SectionWrapper from "../SectionWrapper";
const IndustryInsights = () => {
  return (
    <SectionWrapper className="!bg-primary" id="industry">
      <div className="text-center mx-4 lg:mx-auto py-12 max-w-7xl">
        <h2 className="text-3xl lg:text-5xl mb-16 font-open-sans font-semibold">
          Industry Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-14 xl:gap-x-16 relative">
          {data.data.map((item) => (
            <Link
              key={item.imageDescription}
              href={item.link}
              aria-label={item.link}
            >
              <div className="relative w-full h-64 lg:h-60">
                <Image
                  src={item.imageUrl}
                  alt={item.imageDescription}
                  fill
                  sizes=""
                />
              </div>
              <div className="p-2 bg-slate-300">
                <figcaption className="text-left text-slate-950 font-bold">
                  {item.title}
                </figcaption>
                <p className="text-right text-xs text-slate-500">{item.date}</p>
              </div>
            </Link>
          ))}
          <div className="hidden lg:block absolute h-64 w-40 border-l-4 border-b-4 -bottom-8 -left-8"></div>
        </div>
        <h3 className="font-semibold mt-14 text-lg md:text-xl">
          Follow us on LinkedIn for up-to-date investment and industry insights
        </h3>
        <Contacts color="primary" />
      </div>
    </SectionWrapper>
  );
};

export default IndustryInsights;

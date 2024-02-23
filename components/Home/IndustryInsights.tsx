import React from "react";
import data from "../../constant/industryinsight.json";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
            <div key={item.imageDescription}>
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
            </div>
          ))}
          <div className="hidden lg:block absolute h-64 w-40 border-l-4 border-b-4 -bottom-8 -left-8"></div>
        </div>
        <h3 className="font-semibold mt-14 text-lg md:text-xl">
          Follow us on LinkedIn for up-to-date investment and industry insights
        </h3>
        <div className="flex gap-6 items-center justify-center mt-12">
          <a
            href="https://www.linkedin.com/company/songster-capital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block"
            title="Songster-capital Linkedin Profile"
            aria-label="Songster-capital Linkedin Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            href="mailto: media@songstercapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block"
            title="Send email to media@songstercapital.com"
            aria-label="Send email to media@songstercapital.com"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 480 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="30"
                y="80"
                width="420"
                height="320"
                rx="49"
                fill="white"
              />
              <path
                d="M241.314 208.372L397.729 80H82.2708L241.314 208.372Z"
                fill="#6366f3"
              />
              <path
                d="M360 248.636L240 323.51L119.759 400H360V248.636Z"
                fill="#6366f3"
              />
              <path
                d="M119.781 248.636L239.891 323.51L360 400H119.781V248.636Z"
                fill="#6366f3"
              />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IndustryInsights;

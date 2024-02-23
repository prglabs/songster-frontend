import React from "react";
import WaterDropGrid from "../WaterDropGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Footer from "../Footer";

const Hero = () => {
  return (
    <section className="sm:max-w-sm px-4 md:px-0 text-center" id="home">
      <div className="mt-12 md:mt-24">
        <WaterDropGrid />
        <h1 className="underline decoration-primary decoration-4 justify-center font-bold text-4xl mt-8">
          Songster Capital
        </h1>
        <p className="text-sm mt-6 md:w-[500px] md:-ml-[58px]">
          A technology-focused private equity firm investing in the advancements
          of cloud computing, artificial intelligence, and quantum mechanics
        </p>
        <div className="flex gap-6 items-center justify-center mt-12 mb-2">
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
            <Image
              src={"/mail-icon.svg"}
              width={48}
              height={48}
              alt="icon email"
            />
          </a>
        </div>
        <Footer darkMode />
      </div>
    </section>
  );
};

export default Hero;

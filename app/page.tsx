"use client";
import React from "react";
import Hero from "@/components/Home/Hero";
import IndustryInsights from "@/components/Home/IndustryInsights";
import Services from "@/components/Home/Services";
import InvestmentStrategies from "@/components/Home/InvestmentStrategies";

const SongsterPage: React.FC = () => {
  return (
    <>
      <Hero />
      <InvestmentStrategies />
      <Services />
      <IndustryInsights />
    </>
  );
};

export default SongsterPage;

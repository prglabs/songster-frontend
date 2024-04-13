'use client';
import Strategy from '@/components/Home/Strategy';
import EngineeringExercise from '@/components/Home/EngineeringExercise';
import Hero from '@/components/Home/Hero';
import IndustryInsights from '@/components/Home/IndustryInsights';
import InvestmentStrategies from '@/components/Home/InvestmentStrategies';
import Services from '@/components/Home/Services';
import UnrivaledExperience from '@/components/Home/UnrivaledExperience';
import React from 'react';

const SongsterPage: React.FC = () => {
  return (
    <main className='flex flex-col items-center bg-black text-slate-50'>
      <Hero />
      <Strategy />
      <EngineeringExercise />
      <InvestmentStrategies />
      <UnrivaledExperience />
      <Services />
      <IndustryInsights />
    </main>
  );
};

export default SongsterPage;

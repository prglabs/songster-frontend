'use client';
import Hero from '@/components/Home/Hero';
import React from 'react';

const SongsterPage: React.FC = () => {
  return (
    <main className='flex flex-col items-center bg-black text-slate-50'>
      <Hero />
      {/* <Strategy />
      <EngineeringExercise />
      <InvestmentStrategies />
      <UnrivaledExperience />
      <Services />
      <IndustryInsights /> */}
    </main>
  );
};

export default SongsterPage;

'use client';

import SectionWrapper from '@/components/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import React from 'react';
import contactData from '@/constant/contact.json';
import { accordionContactType } from '@/@types/contact';

const ServicesPage: React.FC = () => {
  return (
    <main className='mx-auto max-w-7xl px-4 2xl:px-0'>
      <SectionWrapper
        bgColor='white'
        className='my-auto grid min-h-[90dvh] grid-cols-1 items-center gap-y-4 pb-8 pt-12 lg:grid-cols-2'
      >
        <>
          <div>
            <h1 className='text-[28px] font-medium leading-snug md:text-[42px]'>
              Investing in Cloud-Native Technology Businesses
            </h1>
            <p className='mb-8 text-sm text-secondary'>
              We deploy investment strategies across various vehicles focused on
              long-term value creation and positive economic impact
            </p>
            <Button variant='default' size='lg'>
              Contact
            </Button>
          </div>
          <div>
            <Accordion
              type='single'
              collapsible
              className='flex flex-col gap-y-2'
            >
              {contactData.accordion.map(
                ({ title, content }: accordionContactType, index: number) => (
                  <AccordionItem key={title} value={'item-' + index}>
                    <AccordionTrigger>{title}</AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </div>
        </>
      </SectionWrapper>
    </main>
  );
};

export default ServicesPage;

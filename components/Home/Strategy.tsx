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
import Image from 'next/image';

const Contact = () => {
  return (
    <SectionWrapper
      id='strategy'
      bgColor='white'
      className='relative min-h-[90dvh] justify-start'
    >
      <Image
        src='/grey-city-background.jpg'
        width={800}
        height={200}
        className='relative top-0 aspect-auto h-80 w-screen object-cover object-[0_50%]'
        alt='building modern'
      />
      <div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-10 gap-y-4 px-4 pb-8 pt-12 lg:grid-cols-2 2xl:px-0'>
        <div>
          <h1 className='section-title mb-4'>
            Investing in Cloud-Native Technology Businesses
          </h1>
          <p className='mb-8 text-secondary'>
            We deploy investment strategies across various vehicles focused on
            long-term value creation and positive economic impact
          </p>
          <a href='mailto:media@songstercapital.com'>
            <Button variant='default' size='lg'>
              Contact
            </Button>
          </a>
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
      </div>
    </SectionWrapper>
  );
};

export default Contact;

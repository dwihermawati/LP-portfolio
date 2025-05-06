'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import React from 'react';

import { Section } from '@/components/layouts/section';

import {
  careerJourney,
  CareerJourneyProps,
} from '@/constants/career-journey-data';

export const CareerJourney: React.FC = () => {
  return (
    <Section
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
    >
      <div className='flex flex-col gap-4 md:gap-6'>
        {careerJourney.map((cj: CareerJourneyProps, idx: number) => {
          const isLast = idx === careerJourney.length - 1;

          return (
            <div
              key={idx}
              className='grid grid-cols-[1.25rem_auto] gap-x-2 md:grid-cols-[1.5rem_auto] md:gap-x-6'
            >
              <div className='relative flex flex-col items-center'>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className='bg-primary-100 z-10 h-5 w-5 rounded-full p-1.25 md:h-6 md:w-6 md:p-1.5'
                >
                  <div className='bg-gradient-purple-pink h-2.5 w-2.5 rounded-full md:h-3 md:w-3' />
                </motion.div>

                {!isLast && (
                  <motion.div
                    className='bg-gradient-purple-pink absolute top-0 left-1/2 h-[calc(100%+1rem)] w-1 origin-top -translate-x-1/2 md:h-[calc(100%+1.5rem)] md:w-[6px]'
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                      margin: '-20% 0% -20% 0%',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 20,
                      duration: 0.7,
                      delay: idx * 0.3,
                    }}
                  />
                )}
              </div>

              <div className='mb-4 rounded-[24px] bg-neutral-500 p-3 last:mb-0 md:mb-6 md:p-6'>
                <h3 className='text-md-bold md:display-xs-bold mb-3 text-neutral-100 md:mb-5'>
                  {cj.title}
                </h3>
                <div className='flex-start mb-3 flex-wrap gap-3 md:mb-5'>
                  <div className='flex-center gap-1.5'>
                    <Icon
                      icon='tabler:building'
                      className='h-5 w-5 md:h-6 md:w-6'
                    />
                    <p className='text-sm-regular md:text-md-regular text-neutral-100'>
                      {cj.companyName}
                    </p>
                  </div>
                  <div className='hidden rounded-full bg-neutral-100 md:flex md:h-1 md:w-1' />
                  <div className='flex-center gap-1.5'>
                    <Icon
                      icon='solar:calendar-outline'
                      className='h-5 w-5 md:h-6 md:w-6'
                    />
                    <p className='text-sm-regular md:text-md-regular text-neutral-100'>
                      {cj.date}
                    </p>
                  </div>
                </div>
                <ul className='list-none'>
                  {cj.description.map((pt, i) => (
                    <li
                      key={i}
                      className='text-sm-regular md:text-md-regular mb-3 flex items-center text-neutral-200 last:mb-0 md:mb-5'
                    >
                      <span className='mr-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-neutral-200' />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default CareerJourney;

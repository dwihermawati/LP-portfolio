'use client';

import { statisticsAboutExperience } from '@/constants/about-experience-data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

const AboutExperience: React.FC = () => {
  return (
    <div className='flex-between w-full flex-wrap gap-5'>
      {statisticsAboutExperience.map((statistic, index) => {
        const isEven = (index + 1) % 2 === 0;

        return (
          <motion.div
            key={statistic.data}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className='bg-gradient-purple-pink inline-block rounded-full p-[1px]'
          >
            <div
              className={cn(
                'flex-center h-37 w-37 flex-col gap-1.5 rounded-full p-2 md:h-68.25 md:w-68.25 md:gap-2 md:p-5',
                isEven
                  ? 'bg-gradient-purple-pink shadow-purple-glow'
                  : 'bg-neutral-500'
              )}
            >
              <p className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
                {statistic.data}
              </p>
              <p className='text-sm-regular md:text-md-regular text-neutral-100'>
                {statistic.info}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutExperience;

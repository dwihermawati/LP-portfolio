'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { statisticsAboutExperience } from '@/constants/about-experience-data';
import { generateClamp } from '@/function/generate-clamp';
import { cn } from '@/lib/utils';

const AboutExperience: React.FC = () => {
  // return (
  //   <div className='flex w-full flex-wrap gap-5'>
  //     {statisticsAboutExperience.map((statistic, index) => {
  //       const isEven = (index + 1) % 2 === 0;

  //       return (
  //         <motion.div
  //           key={statistic.data}
  //           initial={{ opacity: 0, x: -50 }}
  //           whileInView={{ opacity: 1, x: 0 }}
  //           viewport={{ once: false, amount: 0.5 }}
  //           transition={{ duration: 0.5, delay: index * 0.3 }}
  //           className='bg-gradient-purple-pink inline-block aspect-square rounded-full p-[1px]'
  //         >
  //           <div
  //             className={cn(
  //               'flex-center aspect-square h-auto flex-col rounded-full',
  //               isEven
  //                 ? 'bg-gradient-purple-pink shadow-purple-glow'
  //                 : 'bg-neutral-500'
  //             )}
  //             style={{
  //               width: generateClamp(148, 273, 1224),
  //               padding: generateClamp(8, 20, 1224),
  //               gap: generateClamp(6, 8, 1224),
  //             }}
  //           >
  //             <p
  //               className='font-extrabold tracking-normal text-neutral-100 md:tracking-[-0.02em]'
  //               style={{
  //                 fontSize: generateClamp(28, 48, 1224),
  //                 lineHeight: generateClamp(38, 60, 1224),
  //               }}
  //             >
  //               {statistic.data}
  //             </p>
  //             <p
  //               className='font-regular text-center text-neutral-100'
  //               style={{
  //                 fontSize: generateClamp(14, 16, 1224),
  //                 lineHeight: generateClamp(24, 30, 1224),
  //               }}
  //             >
  //               {statistic.info}
  //             </p>
  //           </div>
  //         </motion.div>
  //       );
  //     })}
  //   </div>
  // );
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
            className={cn(
              'aspect-square rounded-full p-[1px]',
              'bg-gradient-purple-pink',
              'flex-[0_0_calc(50%-0.625rem)] md:flex-[0_0_calc(25%-0.9375rem)]',
              'max-w-full min-w-[148px]'
            )}
          >
            <div
              className={cn(
                'flex-center aspect-square h-auto flex-col rounded-full',
                isEven
                  ? 'bg-gradient-purple-pink shadow-purple-glow'
                  : 'bg-neutral-500'
              )}
              style={{
                padding: generateClamp(8, 20, 1224),
                gap: generateClamp(6, 8, 1224),
              }}
            >
              <p className='stat-data font-extrabold tracking-normal text-neutral-100 md:tracking-[-0.02em]'>
                {statistic.data}
              </p>
              <p className='stat-data-info font-regular text-center text-neutral-100'>
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

import { Section } from '@/components/layouts/section';
import { whyMe } from '@/constants/why-me-data';
import { Icon } from '@iconify/react';
import React from 'react';

export const WhyMe: React.FC = () => {
  return (
    <Section
      title='What Sets Me Apart'
      subtitle='A comparison of my approach and skills against typical programmers.'
    >
      <div className='rounded-3xl bg-neutral-500 px-2.5 py-6 md:px-6'>
        <div className='bg-gradient-purple-pink grid h-12 grid-cols-[3fr_1fr_1fr] items-center rounded-full px-2.5 text-center md:h-14 md:grid-cols-3 md:px-0'>
          <div className='text-sm-semibold md:text-md-bold text-neutral-100'>
            Skill
          </div>
          <div className='text-sm-semibold md:text-md-bold text-center text-neutral-100'>
            Me
          </div>
          <div className='text-sm-semibold md:text-md-bold text-center text-neutral-100'>
            Other
          </div>
        </div>

        <div className='divide-y-[1px] divide-neutral-400'>
          {whyMe.value.map((skill, index) => (
            <div
              key={index}
              className='grid h-18 grid-cols-[3fr_1fr_1fr] items-center md:grid-cols-3'
            >
              <div className='md:text-md-semibold text-sm-semibold text-center text-neutral-100'>
                {skill}
              </div>
              <div className='flex justify-center'>
                <div className='bg-gradient-purple-pink flex h-5 w-5 items-center justify-center rounded-full md:h-7 md:w-7'>
                  <Icon
                    icon='material-symbols:check-rounded'
                    className='h-[17px] w-[17px] text-white md:h-[23px] md:w-[23px]'
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <div className='flex h-5 w-5 items-center justify-center rounded-full bg-neutral-300 md:h-7 md:w-7'>
                  <Icon
                    icon='material-symbols:close-rounded'
                    className='h-[13px] w-[13px] text-white md:h-[19px] md:w-[19px]'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

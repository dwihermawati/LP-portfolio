'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import AboutExperience from '@/components/ui/AboutExperience';

export const About: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section
      className='custom-container flex-center flex-col gap-10 py-10 md:gap-20 md:py-20 lg:mt-43.25'
      id='about'
    >
      <div
        className='flex-center bg-gradient-purple-pink relative h-31.75 w-full cursor-pointer overflow-hidden rounded-[12px] md:h-114.75 md:rounded-[24px]'
        onClick={handleClick}
      >
        <Image
          src='/Images/alex.png'
          alt='foto'
          width={0}
          height={0}
          sizes='100vw'
          className={cn(
            'h-full w-auto object-contain',
            isVideoPlaying && 'hidden'
          )}
        />
        <div className='absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-neutral-100 p-[2.55px] opacity-20 md:h-17.75 md:w-17.75 md:p-[7.63px]'></div>
        <Icon
          icon='gridicons:play'
          className='absolute top-1/2 left-1/2 z-10 h-[18.59px] w-[18.59px] -translate-x-1/2 -translate-y-1/2 transform text-neutral-100 md:h-[55.67px] md:w-[55.67px]'
        />
        {isVideoPlaying && (
          <div className='absolute top-0 left-0 z-20 h-full w-full'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/NmFXVPJ2Dhk?si=UbkposzI30IFrUOp'
              title='Youtube Video'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='h-full w-full rounded-[12px] bg-transparent p-4 md:rounded-[24px]'
            ></iframe>
          </div>
        )}
      </div>

      <div className='flex w-full flex-wrap justify-between gap-3 md:gap-6'>
        <h2 className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
          Who am I?
        </h2>
        <p className='text-sm-regular md:text-md-regular max-w-175 text-neutral-200'>
          Hi, I’m Alex, a Front-End Developer & Web Programming Instructor based
          in Jakarta. With over{' '}
          <span className='text-sm-bold md:text-md-bold text-neutral-100'>
            3 years of experience
          </span>
          , I specialize in crafting interactive, responsive, and user-friendly
          websites that deliver exceptional digital experiences. My expertise
          spans across various industries, including e-commerce, education, and
          SaaS. I am proficient in modern front-end technologies, clean coding
          practices, and performance optimization.{' '}
        </p>
      </div>
      <AboutExperience />
    </section>
  );
};

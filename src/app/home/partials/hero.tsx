import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import { Button } from '@/components/ui/button';
import HeroBgDecorations from '@/components/ui/heroBgDecorations';

import { About } from './about';

export const Hero: React.FC = () => {
  return (
    <section className='relative overflow-hidden' id='home'>
      <HeroBgDecorations />
      <div className='custom-container flex-center mt-26 flex-col gap-5 md:mt-55.5 md:gap-6'>
        <div className='shadow-purple-glow bg-gradient-purple-pink inline-block rounded-full p-[1px]'>
          <div className='flex-center gap-2 rounded-full bg-neutral-500 px-4 py-2 md:px-6'>
            <Image
              src='/Images/logo.png'
              alt='logo'
              width={0}
              height={0}
              sizes='100vw'
              style={{
                height: 'clamp(0.75rem, 1.31vw, 1rem)',
                width: 'auto',
              }}
            />
            <span className='text-xs-medium md:text-md-medium text-neutral-100'>
              Alex's Portfolio
            </span>
          </div>
        </div>
        <h1 className='display-xl-bold md:display-3xl-extrabold text-center text-neutral-100'>
          I am a
          <span className='ml-1.5 md:hidden'>
            <span className='relative mb-[6.75px] inline-block'>
              <span className='border-image-gradient-purple-pink pointer-events-none absolute inset-0 border-[1.74px]'>
                <span className='border-image-gradient-purple-pink absolute top-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute top-0 right-0 h-[6.91px] w-[8.85px] translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute bottom-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute right-0 bottom-0 h-[6.91px] w-[8.85px] translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              </span>
              <span className='relative inline-block px-1.5'>
                <span className='bg-gradient-purple-pink bg-clip-text text-transparent'>
                  Front-
                </span>
              </span>
            </span>

            <span className='relative mx-1.5 inline-block'>
              <span className='border-image-gradient-purple-pink pointer-events-none absolute inset-0 border-[1.74px]'>
                <span className='border-image-gradient-purple-pink absolute top-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute top-0 right-0 h-[6.91px] w-[8.85px] translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute bottom-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute right-0 bottom-0 h-[6.91px] w-[8.85px] translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              </span>
              <span className='relative inline-block px-1.5'>
                <span className='bg-gradient-purple-pink bg-clip-text text-transparent'>
                  End Developer
                </span>
              </span>
            </span>
          </span>
          <span className='relative mx-2 hidden md:inline-block'>
            <span className='border-image-gradient-purple-pink pointer-events-none absolute inset-0 border-[1.74px]'>
              <span className='border-image-gradient-purple-pink absolute top-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              <span className='border-image-gradient-purple-pink absolute top-0 right-0 h-[6.91px] w-[8.85px] translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              <span className='border-image-gradient-purple-pink absolute bottom-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              <span className='border-image-gradient-purple-pink absolute right-0 bottom-0 h-[6.91px] w-[8.85px] translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
            </span>
            <span className='relative inline-block px-2'>
              <span className='bg-gradient-purple-pink bg-clip-text text-transparent'>
                Front-<span>End Developer</span>
              </span>
            </span>
          </span>
          & Web Programming Instructor
        </h1>

        <p className='text-sm-regular md:text-md-regular text-center text-neutral-200'>
          Hi, I’m Dwi, a passionate web developer with over{' '}
          <span className='text-sm-bold md:text-md-semibold text-neutral-100'>
            3 years of experience
          </span>{' '}
          in creating responsive websites. I also teach aspiring developers to
          master modern web programming and bring their ideas to life.
        </p>
        <Button asChild className='shadow-purple-glow w-full md:w-fit'>
          <Link href='#about'>View Portfolio</Link>
        </Button>
      </div>
      <About />
      {/* <div className='h-150 w-full'></div> */}
    </section>
  );
};

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { HeroBgDecorations } from '@/components/ui/heroBgDecorations';

import { generateClamp } from '@/function/generate-clamp';

export const Hero: React.FC = () => {
  return (
    <section className='relative' id='home'>
      <HeroBgDecorations />
      {/* <div className='waves-hero mask-hero flex-center relative mask-alpha'>
        <div className='header-ellipse-decoration hero-ellipse-decoration relative h-full w-full'>
          <Image
            src='/Images/hero-ellipse-decoration.svg'
            alt='hero-ellipse-decoration'
            width={0}
            height={0}
            priority={true}
            className='absolute top-0 right-0 z-[-9] w-full bg-right'
            style={{
              height: generateClamp(1088, 1624, 1440),
              // right: generateClamp(0, 174.6, 1440),
            }}
          /> */}
      <div
        className='custom-container flex flex-col items-center'
        style={{
          paddingTop: generateClamp(104, 222, 1224),
          paddingBottom: 'clamp(0px, max(0px, -72.1px + 20.02vw), 173px)',
          gap: generateClamp(20, 24, 1224),
        }}
      >
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
              Alex&apos;s Portfolio
            </span>
          </div>
        </div>
        <h1
          className='text-center font-bold text-neutral-100 md:font-extrabold'
          style={{
            fontSize: generateClamp(40, 60, 1224),
            lineHeight: generateClamp(48, 72, 1224),
            letterSpacing: generateClamp(-0.32, 0, 1224),
          }}
        >
          I am a
          <span className='ml-1 sm:hidden'>
            <span className='relative mb-[4px] inline-block'>
              <span className='border-image-gradient-purple-pink pointer-events-none absolute inset-0 border-[1.74px]'>
                <span className='border-image-gradient-purple-pink absolute top-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute top-0 right-0 h-[6.91px] w-[8.85px] translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute bottom-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute right-0 bottom-0 h-[6.91px] w-[8.85px] translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              </span>
              <span className='relative inline-block px-1'>
                <span className='bg-gradient-purple-pink bg-clip-text text-transparent'>
                  Front-
                </span>
              </span>
            </span>

            <span className='relative inline-block sm:hidden'>
              <span className='border-image-gradient-purple-pink pointer-events-none absolute inset-0 border-[1.74px]'>
                <span className='border-image-gradient-purple-pink absolute top-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute top-0 right-0 h-[6.91px] w-[8.85px] translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute bottom-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
                <span className='border-image-gradient-purple-pink absolute right-0 bottom-0 h-[6.91px] w-[8.85px] translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              </span>
              <span className='relative inline-block px-1'>
                <span className='bg-gradient-purple-pink bg-clip-text text-transparent'>
                  End Developer
                </span>
              </span>
            </span>
          </span>
          <span className='relative mx-2 hidden sm:inline-block'>
            <span className='border-image-gradient-purple-pink pointer-events-none absolute inset-0 border-[1.74px]'>
              <span className='border-image-gradient-purple-pink absolute top-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              <span className='border-image-gradient-purple-pink absolute top-0 right-0 h-[6.91px] w-[8.85px] translate-x-1/2 -translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              <span className='border-image-gradient-purple-pink absolute bottom-0 left-0 h-[6.91px] w-[8.85px] -translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
              <span className='border-image-gradient-purple-pink absolute right-0 bottom-0 h-[6.91px] w-[8.85px] translate-x-1/2 translate-y-1/2 transform border-[1.16px] bg-neutral-100 md:h-[10.23px] md:w-[19.45px]' />
            </span>
            <span className='relative inline-block px-1.5'>
              <span className='bg-gradient-purple-pink bg-clip-text text-transparent'>
                Front-<span>End Developer</span>
              </span>
            </span>
          </span>
          & Web Programming Instructor
        </h1>

        <p
          className='font-regular text-center text-neutral-200'
          style={{
            fontSize: generateClamp(14, 16, 1224),
            lineHeight: generateClamp(24, 30, 1224),
          }}
        >
          Hi, I’m Alex, a passionate web developer with over{' '}
          <span
            className='font-bold text-neutral-100 md:font-semibold'
            style={{
              fontSize: generateClamp(14, 16, 1224),
              lineHeight: generateClamp(24, 30, 1224),
            }}
          >
            3 years of experience
          </span>{' '}
          in creating responsive websites. I also teach aspiring developers to
          master modern web programming and bring their ideas to life.
        </p>
        <Button asChild className='shadow-purple-glow w-full md:w-fit'>
          <Link href='#about'>View Portfolio</Link>
        </Button>
      </div>
      {/* </div>
      </div> */}
    </section>
  );
};

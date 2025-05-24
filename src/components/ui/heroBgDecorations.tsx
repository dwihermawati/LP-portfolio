'use client';

import Image from 'next/image';
import React from 'react';

import { generateClamp } from '@/function/generate-clamp';
import { generateClampInverse } from '@/function/generate-clamp-inverse';

export const HeroBgDecorations: React.FC = () => {
  return (
    <>
      {/* Grid background */}
      <div className='pointer-events-none absolute inset-0 z-[-20] bg-[url("/Images/hero-grid-decoration.png")] bg-repeat' />

      {/* Circle top-right */}
      <div className='pointer-events-none absolute top-[18.17%] right-[8.6%] z-[-10] h-full w-full bg-[url("/Images/hero-circle-decoration.svg")] bg-right-top bg-repeat-x' />

      {/* Waves bottom */}
      <div
        className='pointer-events-none absolute left-0 z-[-5] h-[380.7px] w-full bg-[url("/Images/waves.svg")] bg-contain bg-bottom bg-repeat-x'
        style={{
          bottom: generateClampInverse(-160, -80, 1440),
        }}
      />

      {/* mask */}
      <div
        className='mask-radial-gradient pointer-events-none absolute top-0 left-0 z-[-10] w-full'
        style={{ height: '2747px' }}
      >
        <style jsx>{`
          .mask-radial-gradient {
            background-image: radial-gradient(
              circle at top left,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0) 95%
            );
          }
          @media (min-width: 768px) {
            .mask-radial-gradient {
              background-image: radial-gradient(
                circle at top left,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0) 95%
              );
            }
          }
        `}</style>
      </div>

      {/* Ellipse SVG image (was in Image tag) */}
      <Image
        src='/Images/hero-ellipse-decoration.svg'
        alt='hero-ellipse-decoration'
        width={0}
        height={0}
        priority
        className='pointer-events-none absolute top-0 right-0 z-[-1] h-[1088] w-full bg-right'
        style={{
          height: generateClamp(1088, 1624, 1440),
        }}
      />

      <div
        aria-hidden='true'
        className="pointer-events-none absolute top-0 right-1/2 z-[-1] hidden h-[201px] w-[461px] -translate-x-[51%] bg-[url('/Images/header-ellipse-decoration.svg')] bg-no-repeat md:block"
      />
    </>
  );
};

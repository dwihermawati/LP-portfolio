import React from 'react';
import Image from 'next/image';

const HeroBgDecorations: React.FC = () => {
  return (
    <>
      <Image
        src='/Images/pattern.svg'
        alt='Pattern Decoration'
        width={0}
        height={0}
        priority={true}
        className='absolute top-0 left-0 z-[-1] w-full bg-repeat-y'
      />

      <Image
        src='/Images/blur-background.svg'
        alt='Background Blur'
        width={0}
        height={0}
        priority={true}
        className='absolute top-0 right-1/2 z-[-1] h-[201px] w-[461px] translate-x-[-51%] transform max-md:hidden'
      />

      <Image
        src='/Images/dot-decorations.svg'
        alt='Dot Decoration'
        width={0}
        height={0}
        priority={true}
        className='absolute top-[127] left-[-37] z-[-1] h-145 w-full bg-repeat'
      />

      <Image
        src='/Images/waves.svg'
        alt='waves'
        width={0}
        height={0}
        priority={true}
        className='absolute top-140 left-0 z-[-1] w-full'
      />

      <Image
        src='/Images/blur-background2.svg'
        alt='Background Blur2'
        width={0}
        height={0}
        priority={true}
        className='absolute top-0 right-0 z-[-1] h-full w-full'
      />
    </>
  );
};

export default HeroBgDecorations;

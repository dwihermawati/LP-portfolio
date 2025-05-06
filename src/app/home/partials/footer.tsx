import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { socialMediaData } from '@/constants/social-media-data';

export const Footer: React.FC = () => {
  return (
    <footer className='bg-neutral-500'>
      <div className='custom-container flex flex-col justify-between gap-6 py-10 md:flex-row md:items-center'>
        <div className='flex items-center gap-4'>
          <Link
            href='#home'
            className='z-10 cursor-pointer transition-transform hover:scale-110'
          >
            <Image
              src='/Images/logo.png'
              alt='logo'
              width={40}
              height={40}
              className='max-md:size-9'
            />
          </Link>
          <p className='text-sm-regular md:text-md-regular text-neutral-200'>
            © alex2024
          </p>
        </div>
        <div className='flex-start gap-4'>
          {socialMediaData.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-center size-10 rounded-full border border-neutral-400 transition-transform hover:scale-110 md:size-12'
            >
              {icon.socialIcon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

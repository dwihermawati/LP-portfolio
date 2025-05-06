'use client';

import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between custom-container h-16 md:h-21'>
        {/* <div className='before-bg-ellipse2 absolute top-0 left-0'></div> */}
        <Link
          href='#home'
          className='z-10 cursor-pointer transition-transform hover:scale-110'
        >
          <Image
            src='/Images/logo.png'
            alt='logo'
            width={40}
            height={40}
            className='max-md:size-7'
          />
        </Link>
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-6'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:bg-gradient-purple-pink text-md-regular bg-neutral-100 bg-clip-text px-2 text-transparent transition-all duration-300'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild className='shadow-purple-glow hidden lg:flex'>
          <Link href='#contact' className='lg:flex-center'>
            <Image
              src='/Icons/Email.svg'
              alt='Email icon'
              width={20}
              height={20}
            />
            <span className='hidden lg:inline'>Hire Me</span>
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <div className='flex items-center justify-end gap-4 lg:hidden'>
              <Button
                asChild
                variant='icon'
                size='icon'
                className='shadow-purple-glow lg:hidden'
              >
                <Link href='#contact'>
                  <Image
                    src='/Icons/Email.svg'
                    alt='Email icon'
                    width={20}
                    height={20}
                  />
                </Link>
              </Button>
              <Menu className='cursor-pointer lg:hidden' />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='flex-start h-16'>
              <SheetClose asChild>
                <Link href='#home'>
                  <Image
                    src='/Images/logo.png'
                    alt='logo'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='h-7 w-auto cursor-pointer hover:scale-110'
                  />
                </Link>
              </SheetClose>
            </SheetHeader>
            <nav className='mt-5'>
              <ul className='flex flex-col gap-6'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='hover:bg-gradient-purple-pink text-md-regular bg-neutral-100 bg-clip-text text-transparent transition-all duration-300'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <SheetClose asChild>
              <Button asChild className='shadow-purple-glow mt-6 w-full'>
                <Link href='#contact' className='flex-center'>
                  <Image
                    src='/Icons/Email.svg'
                    alt='Email icon'
                    width={20}
                    height={20}
                  />
                  <span className='inline'>Hire Me</span>
                </Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

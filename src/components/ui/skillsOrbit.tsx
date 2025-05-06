'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Dot from '@/components/ui/dot-orbit';

import { skillsData } from '@/constants/skills-data';

const ORBITS = [
  { dotAngles: [180], sizeMobile: 145, sizeDesktop: 266 },
  { dotAngles: [225, 340], sizeMobile: 209.88, sizeDesktop: 385 },
  { dotAngles: [280, 90], sizeMobile: 280.75, sizeDesktop: 515 },
];

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isDesktop;
};

interface IconProps {
  angle: number;
  radius: number;
  src: string;

  isDesktop: boolean;
}

const Icon = ({ angle, radius, src, isDesktop }: IconProps) => {
  const rad = (angle * Math.PI) / 180;
  const iconHeight = isDesktop ? 80 : 44;
  const offsetRadius = radius - iconHeight / 2;

  const x = offsetRadius * Math.cos(rad);
  const y = offsetRadius * Math.sin(rad);

  return (
    <motion.div
      className='absolute z-10 h-11 w-22 md:h-20 md:w-40'
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: 'translate(-50%, -50%)',
        transformOrigin: '50% 50%',
      }}
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
    >
      <Image
        src={src}
        alt='icon'
        width={0}
        height={0}
        sizes='100vw'
        className='h-full w-full object-contain'
      />
    </motion.div>
  );
};

const SkillsOrbit = () => {
  const isDesktop = useIsDesktop();
  if (isDesktop === null) return null; // Prevent SSR mismatch

  const sizes = ORBITS.map((o) => (isDesktop ? o.sizeDesktop : o.sizeMobile));
  const radii = sizes.map((s) => s / 2);

  return (
    <div className='flex-center'>
      <motion.div
        className='relative'
        style={{
          width: sizes[2],
          height: sizes[2],
          transformOrigin: '50% 50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {/* Orbit Lines */}
        {sizes.map((s, i) => (
          <div
            key={`orbit-${i}`}
            className='absolute z-0 rounded-full border border-neutral-400'
            style={{
              width: s,
              height: s,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}

        {/* Dots */}
        {ORBITS.map((orbit, i) =>
          orbit.dotAngles.map((angle, j) => (
            <Dot key={`dot-${i}-${j}`} angle={angle} radius={radii[i]} />
          ))
        )}

        {/* Skill Icons */}
        {skillsData.map((skill) => (
          <Icon
            key={skill.label}
            angle={skill.angleOffset}
            radius={radii[skill.orbitIndex]}
            src={skill.icon}
            isDesktop={isDesktop}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsOrbit;

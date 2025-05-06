import React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className,
}) => {
  return (
    <div id={id} className={cn('custom-container py-10 md:py-20', className)}>
      <div className='text-center'>
        <h2 className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
          {title}
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-200'>
          {subtitle}
        </p>
      </div>
      <div className='mt-8 md:mt-12'>{children}</div>
    </div>
  );
};

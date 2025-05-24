import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Marquee } from '@/components/ui/marquee';

import { testimonialsData } from '@/constants/testimonials-data';

export const Testimonials: React.FC = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className="pointer-events-none absolute bottom-[10%] left-1/2 z-[-10] aspect-square size-[1097px] translate-x-[-10.21%] bg-[url('/Images/testimoni-ellipse-decoration.png')] bg-cover bg-no-repeat" />
      <div className='custom-container relative pt-10 text-center md:pt-20'>
        <h2 className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
          What People Say About Me
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-200'>
          Hear from clients and colleagues about their experiences working with
          me.
        </p>
      </div>

      <div className='relative mt-8 mb-10 w-screen md:mt-12 md:mb-20'>
        <div className='flex w-full flex-col gap-3 md:gap-5'>
          <Marquee className='[--gap:1rem] md:[--gap:1.25rem]'>
            {testimonialsData.map((testimonial, index) => (
              <div className='group' key={index}>
                <TestimonialCard
                  description={testimonial.description}
                  profileSrc={testimonial.profileSrc}
                  profileName={testimonial.profileName}
                  profileOccupation={testimonial.profileOccupation}
                />
              </div>
            ))}
          </Marquee>
          <Marquee reverse className='[--gap:1rem] md:[--gap:1.25rem]'>
            {testimonialsData.map((testimonial, index) => (
              <div className='group' key={index}>
                <TestimonialCard
                  // key={`line2-${index}`}
                  description={testimonial.description}
                  profileSrc={testimonial.profileSrc}
                  profileName={testimonial.profileName}
                  profileOccupation={testimonial.profileOccupation}
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className='absolute inset-y-0 left-0 w-[15%] from-neutral-500 to-transparent md:bg-gradient-to-r' />
        <div className='absolute inset-y-0 right-0 w-[15%] from-neutral-500 to-transparent md:bg-gradient-to-l' />
      </div>
    </section>
  );
};

type TestimonialCardProps = {
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  description,
  profileName,
  profileOccupation,
  profileSrc,
}) => {
  return (
    <div className='hover:bg-gradient-purple-pink relative overflow-hidden rounded-2xl transition-all hover:p-[1px]'>
      <div className='pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl'>
        <div className='group-hover:animate-sweep-light absolute top-0 left-[-75%] h-full w-[250%] bg-white/50 opacity-0 blur-sm' />
      </div>

      <div className='relative z-20 h-auto w-75.5 rounded-2xl bg-neutral-500 p-4 md:w-125 md:p-5'>
        <div className='flex-start gap-2 md:gap-4'>
          <Image
            src={profileSrc}
            alt={profileName}
            className='size-12 md:size-15'
          />
          <div>
            <p className='text-sm-bold md:text-md-bold text-neutral-100'>
              {profileName}
            </p>
            <p className='text-sm-regular md:text-md-regular mt-0.75 text-neutral-200'>
              {profileOccupation}
            </p>
          </div>
        </div>
        <p className='text-sm-regular md:text-md-regular mt-3 line-clamp-4 text-neutral-200 md:mt-5'>
          {description}
        </p>
      </div>
    </div>
  );
};

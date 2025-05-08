import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import GradientArrowIcon from '../../../public/Icons/GradientArrowIcon';

type CardsProps = {
  children: React.ReactNode;
};

export const Cards: React.FC<CardsProps> = ({ children }) => {
  return (
    <div className='flex flex-wrap gap-x-6 gap-y-8 md:gap-y-12'>{children}</div>
  );
};

type CardProps = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
  stack: string[];
};

export const Card: React.FC<CardProps> = ({
  imageSrc,
  name,
  description,
  stack,
}) => {
  return (
    <div className='hover:shadow-purple-glow flex flex-1 basis-70 flex-col gap-3 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.01] md:gap-4'>
      <Image
        src={imageSrc}
        alt={name}
        className='h-full w-full cursor-pointer rounded-3xl object-contain md:rounded-4xl'
      />
      <div className='flex flex-col gap-3 md:gap-10'>
        <div className='flex flex-col gap-2 md:gap-3'>
          <h4 className='text-lg-bold md:text-xl-bold hover:bg-gradient-purple-pink cursor-pointer bg-neutral-100 bg-clip-text text-transparent'>
            {name}
          </h4>
          <div className='flex gap-2'>
            {stack.map((tech, idx) => (
              <div
                key={idx}
                className='flex-center h-8 w-fit rounded-full border border-neutral-300 px-4 md:h-10'
              >
                <span className='text-sm-regular text-neutral-100'>{tech}</span>
              </div>
            ))}
          </div>
          <p className='text-sm-regular md:text-md-regular line-clamp-2 text-neutral-200'>
            {description}
          </p>
        </div>
        <div className='hover:shadow-purple-glow flex gap-1.5'>
          <Link
            href='#'
            className='text-md-bold md:text-lg-bold bg-gradient-purple-pink bg-clip-text text-transparent transition-transform duration-300 ease-in-out hover:scale-110'
          >
            Visit
          </Link>
          <GradientArrowIcon />
          {/* <ArrowUpRight className='bg-gradient-purple-pink text-primary-200 h-6 w-6 cursor-pointer bg-clip-text' /> */}
          {/* <Icon
            icon='iconamoon:arrow-top-right-1-light'
            className='bg-gradient-purple-pink h-6 w-6 cursor-pointer bg-clip-text text-transparent'
          /> */}
        </div>
      </div>
    </div>
  );
};

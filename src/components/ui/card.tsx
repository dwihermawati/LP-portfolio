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
      <div className='group relative'>
        <Image
          src={imageSrc}
          alt={name}
          className='size-full cursor-pointer rounded-3xl object-contain md:rounded-4xl'
        />
        <div className='flex-center bg-gradient-purple-pink absolute top-[56%] right-[18%] size-25 scale-0 rotate-[-5.57deg] cursor-pointer rounded-full p-0.5 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100'>
          <div className='text-md-semibold flex-center size-full rotate-[-5.57deg] rounded-full bg-neutral-500 p-2 text-center leading-none text-neutral-100'>
            Detail
          </div>
        </div>
      </div>
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
        </div>
      </div>
    </div>
  );
};

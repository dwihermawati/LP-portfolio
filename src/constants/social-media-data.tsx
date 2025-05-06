import { Icon } from '@iconify/react';

type Icon = {
  socialIcon: React.ReactNode;
  href: string;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    socialIcon: (
      <Icon icon='icon-park-outline:dribble' className='size-6 md:size-7' />
    ),
    href: '#home',
    alt: 'Browser',
  },
  {
    socialIcon: (
      <Icon icon='akar-icons:instagram-fill' className='size-6 md:size-7' />
    ),
    href: 'https://www.instagram.com/',
    alt: 'Instagram',
  },
  {
    socialIcon: (
      <Icon icon='basil:linkedin-solid' className='size-6 md:size-7' />
    ),
    href: 'https://www.linkedin.com/',
    alt: 'LinkedIn',
  },
];

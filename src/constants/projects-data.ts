import { StaticImageData } from 'next/image';

import project1Src from '../../public/Images/experience1.png';
import project2Src from '../../public/Images/experience2.png';
import project3Src from '../../public/Images/experience3.png';
import project4Src from '../../public/Images/experience4.png';
import project5Src from '../../public/Images/experience5.png';
import project6Src from '../../public/Images/experience6.png';

type Project = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
  stack: string[];
};

export const projectsData: Project[] = [
  {
    imageSrc: project1Src,
    // imageSrc: '/Images/experience1.png',
    name: 'Landing Page',
    description:
      'THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme"Unity in Creativity"',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: project2Src,
    // imageSrc: '/Images/experience2.png',
    name: 'Landing Page',
    description:
      'Private hospital in the city of Padang that provides special surgical services.',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: project3Src,
    // imageSrc: '/Images/experience3.png',
    name: 'Landing Page',
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: project4Src,
    // imageSrc: '/Images/experience4.png',
    name: 'Landing Page',
    description:
      'nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa)  of experience as an internet solution provider company',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: project5Src,
    // imageSrc: '/Images/experience5.png',
    name: 'Landing Page',
    description: 'UKUR is a constructor and interior marketplace in Indonesia.',
    stack: ['React', 'HTML', 'CSS'],
  },
  {
    imageSrc: project6Src,
    // imageSrc: '/Images/experience6.png',
    name: 'Landing Page',
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
    stack: ['React', 'HTML', 'CSS'],
  },
];

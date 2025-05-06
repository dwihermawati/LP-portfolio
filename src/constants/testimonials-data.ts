// import { StaticImageData } from 'next/image';
// import profile1Src from '../../public/Images/testimoni1.png';
// import profile2Src from '../../public/Images/testimoni2.png';
// import profile3Src from '../../public/Images/testimoni3.png';
// import profile4Src from '../../public/Images/testimoni4.png';

export type Testimonial = {
  description: string;
  profileSrc: string;
  profileName: string;
  profileOccupation: string;
};

export const testimonialsData: Testimonial[] = [
  {
    // profileSrc: profile1Src,
    profileSrc: '/Images/testimoni1.png',
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description: `“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”`,
  },
  {
    // profileSrc: profile1Src,
    profileSrc: '/Images/testimoni2.png',
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description: `“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”`,
  },
  {
    // profileSrc: profile1Src,
    profileSrc: '/Images/testimoni3.png',
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description: `“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”`,
  },
  {
    // profileSrc: profile1Src,
    profileSrc: '/Images/testimoni4.png',
    profileName: 'Rafel Struick',
    profileOccupation: 'CEO',
    description: `“Working with Mark has been a pleasure. His ability to integrate both front-end and back-end elements seamlessly has been a key asset to our project’s success”`,
  },
];

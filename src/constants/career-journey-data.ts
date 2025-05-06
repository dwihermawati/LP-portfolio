export type CareerJourneyProps = {
  title: string;
  companyName: string;
  date: string;
  description: string[];
};

export const careerJourney: CareerJourneyProps[] = [
  {
    title: 'Frontend Developer',
    companyName: 'Google',
    date: 'Jul 2024 - Present',
    description: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
  {
    title: 'Frontend Developer',
    companyName: 'Slack',
    date: 'Jul 2023 - Jul 2024',
    description: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
  {
    title: 'Frontend Developer',
    companyName: 'Skype',
    date: 'Nov 2021 - Jul 2023',
    description: [
      'Developed and maintained responsive web applications, improving load times by 30% through performance optimization.',
      'Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS.',
      'Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality.',
      'Implemented interactive animations and dynamic features, enhancing user engagement by 25%.',
    ],
  },
];

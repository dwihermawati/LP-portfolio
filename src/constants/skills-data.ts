export type SkillData = {
  icon: string;
  label: string;
  value: number;
  angleOffset: number;
  orbitIndex: 0 | 1 | 2;
};

export const skillsData: SkillData[] = [
  {
    icon: '/Images/html.png',
    label: 'HTML',
    value: 100,
    angleOffset: 320,
    orbitIndex: 0,
  },
  {
    icon: '/Images/redux.png',
    label: 'Redux',
    value: 85,
    angleOffset: 40,
    orbitIndex: 1,
  },
  {
    icon: '/Images/javascript.png',
    label: 'Javascript',
    value: 90,
    angleOffset: 120,
    orbitIndex: 2,
  },
  {
    icon: '/Images/react.png',
    label: 'React',
    value: 90,
    angleOffset: 170,
    orbitIndex: 2,
  },
  {
    icon: '/Images/css.png',
    label: 'CSS',
    value: 80,
    angleOffset: 220,
    orbitIndex: 2,
  },
  {
    icon: '/Images/typescript.png',
    label: 'typescript',
    value: 70,
    angleOffset: 300,
    orbitIndex: 2,
  },
  // {
  //   icon: '/Images/tailwind.png',
  //   label: 'Tailwind CSS',
  //   value: 85,
  //   angleOffset: 0,
  // },
  // {
  //   icon: '/Images/framer-motion.png',
  //   label: 'Framer Motion',
  //   value: 80,
  //   angleOffset: 120,
  // },
  // {
  //   icon: '/Images/radix.png',
  //   label: 'Radix UI',
  //   value: 80,
  //   angleOffset: 240,
  // },
];

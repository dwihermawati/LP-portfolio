'use client';

import { skillsData } from '@/constants/skills-data';
import { motion } from 'framer-motion';

const SkillsBar: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-5'>
      {skillsData.map((skill, index) => (
        <div key={index} className='flex flex-col gap-[6px] md:gap-3'>
          <div className='flex-between text-sm-semibold md:text-md-semibold text-neutral-100'>
            <span>{skill.label}</span>
            <span>{skill.value}%</span>
          </div>
          <div className='relative h-3 w-full overflow-hidden rounded-full bg-neutral-400'>
            <motion.div
              className='bg-gradient-purple-pink absolute top-0 left-0 h-full rounded-full'
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.value}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: false }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBar;

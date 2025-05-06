import React from 'react';

import { Section } from '@/components/layouts/section';
import SkillsBar from '@/components/ui/skillsBar';
import SkillsOrbit from '@/components/ui/skillsOrbit';

export const Skills: React.FC = () => {
  return (
    <Section
      title='My Core Skill'
      subtitle='An overview of the key technologies and frameworks I specialize in'
      className='before-bg-blur3 relative'
      id='skills'
    >
      <div className='flex-center flex-wrap gap-6 md:gap-17'>
        <div className='flex-center flex-[6.4] basis-80'>
          <SkillsOrbit />
        </div>
        <div className='flex-[3.6] basis-80'>
          <SkillsBar />
        </div>
      </div>
    </Section>
  );
};

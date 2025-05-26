import React from 'react';

import { Section } from '@/components/layouts/section';
import SkillsBar from '@/components/ui/skillsBar';
import SkillsOrbit from '@/components/ui/skillsOrbit';

import { generateClampInverse } from '@/function/generate-clamp-inverse';

export const Skills: React.FC = () => {
  return (
    <div className='flex-center relative'>
      <div className='ellipse-skill relative h-full w-360'>
        <div
          className="absolute top-[-63%] right-[47%] z-[-1] aspect-square h-auto w-full bg-[url('/Images/ellipse-skill-decoration.svg')] bg-contain bg-no-repeat"
          style={{
            top: generateClampInverse(-532, -67.75, 1440),
          }}
        />
        {/* <div
          className="absolute top-[-63%] right-[37%] z-[-1] aspect-square h-auto w-[1969px] border border-amber-200 bg-[url('/Images/ellipse-skill-decoration.svg')] bg-contain bg-no-repeat"
          style={{
            width: generateClamp(968, 1969, 1440),
            bottom: generateClampInverse(-74, 271, 1440),
            top: generateClampInverse(-786, -311, 1440),
          }}
        /> */}
        <Section
          title='My Core Skill'
          subtitle='An overview of the key technologies and frameworks I specialize in'
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
      </div>
    </div>
  );
};

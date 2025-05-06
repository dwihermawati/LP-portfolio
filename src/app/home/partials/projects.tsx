import React from 'react';

import { Card, Cards } from '@/components/ui/card';

import { projectsData } from '@/constants/projects-data';

export const Projects: React.FC = () => {
  return (
    <div className='custom-container py-10 md:py-20' id='projects'>
      <div className='flex-between mb-8 flex-wrap gap-3 md:mb-12 md:gap-[27px]'>
        <h2 className='display-sm-bold md:display-2xl-extrabold flex-[6.1] basis-80 text-neutral-100'>
          Experience in Front-End Development
        </h2>
        <p className='text-sm-regular md:text-md-regular flex-[3.9] basis-80 text-neutral-200'>
          I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations
        </p>
      </div>
      <Cards>
        {projectsData.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            name={project.name}
            stack={project.stack}
            description={project.description}
          />
        ))}
      </Cards>
    </div>
  );
};

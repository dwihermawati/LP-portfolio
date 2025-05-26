import React from 'react';

import { Card, Cards } from '@/components/ui/card';

import { projectsData } from '@/constants/projects-data';
import { generateClampInverse } from '@/function/generate-clamp-inverse';

export const Projects: React.FC = () => {
  return (
    <section className='relative overflow-hidden'>
      <div
        className="pointer-events-none absolute bottom-[-45%] left-1/2 z-[-10] aspect-square size-[1097px] translate-x-[-10.21%] bg-[url('/Images/testimoni-ellipse-decoration.png')] bg-cover bg-no-repeat"
        style={{ bottom: generateClampInverse(-723.6, -1582.2, 1440) }}
      />
      <div className='custom-container py-10 md:py-20' id='projects'>
        <div className='mb-8 flex flex-wrap justify-between gap-3 md:mb-12 md:gap-[27px]'>
          <h2 className='display-sm-bold md:display-2xl-extrabold flex-[6.1] basis-80 text-neutral-100'>
            Experience in Front-End Development
          </h2>
          <p className='text-sm-regular md:text-md-regular flex-[3.9] basis-80 text-right text-neutral-200 max-md:text-left'>
            I have experience developing 30+ web projects across various
            industries, including marketplaces, health, fashion, sports, and
            more. Implemented 1000+ responsive web pages with interactive
            features and smooth animations
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
    </section>
  );
};

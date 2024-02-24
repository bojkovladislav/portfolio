import ProjectCard from '@/components/sub/ProjectCard';
import { projects } from '@/constans';
import React from 'react';

const Projects = () => {
  return (
    <div
      className="z-[20] relative flex flex-col gap-16 items-center justify-center pt-32"
      id="projects"
    >
      <h1 className="text-2xl sm:text-5xl leading-normal font-bold text-transparent p-2 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-around gap-y-16 px-5">
        {projects.map(
          ({ title, description, previewImage, previewGif, href }, i) => (
            <ProjectCard
              index={i}
              key={title}
              title={title}
              description={description}
              previewImage={previewImage}
              previewGif={previewGif}
              href={href}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-slate-800">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="FirstStepTech"
            backgroundImg="/assets/projects/firststep.png"
            projectUrl="/first-step"
            tech="NextJS, NextAuth, Prisma"
          />
          <ProjectItem
            title="Devtasks"
            backgroundImg="/assets/projects/auth.png"
            projectUrl="/devtasks"
            tech="MongoDB, Express, React, and Nodejs"
          />
          <ProjectItem
            title="Halloween Hub"
            backgroundImg="/assets/projects/hallow.png"
            projectUrl="/halloween-hub"
            tech="NextJs, Tailwind, and MongoDB/Mongoose"
          />
          <ProjectItem
            title="Renegade Handmade"
            backgroundImg="/assets/projects/renegade.png"
            projectUrl="/renegade-handmade"
            tech="React, Typescript, and MaterialUI"
          />
          <ProjectItem
            title="MultiStream"
            backgroundImg="/assets/projects/stream.png"
            projectUrl="/multistream"
            tech="React, MaterialUI, and the Twitch API"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

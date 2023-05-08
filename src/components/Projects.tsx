import Image from "next/image";
import React from "react";
import devtasks from "../../public/assets/projects/auth.png";
import halloween from "../../public/assets/projects/hallow.png";
import renegade from "../../public/assets/projects/renegade.png";
import stream from "../../public/assets/projects/stream.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-slate-800">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Devtasks"
            backgroundImg={devtasks}
            projectUrl="/devtasks"
            tech="MongoDB, Express, React, and Nodejs"
          />
          <ProjectItem
            title="Halloween Hub"
            backgroundImg={halloween}
            projectUrl="/halloween-hub"
            tech="NextJs, Tailwind, and MongoDB/Mongoose"
          />
          <ProjectItem
            title="Renegade Handmade"
            backgroundImg={renegade}
            projectUrl="/renegade-handmade"
            tech=" React, Typescript, and MaterialUI"
          />
          <ProjectItem
            title="MultiStream"
            backgroundImg={stream}
            projectUrl="/multistream"
            tech="React, MaterialUI, and the Twitch API"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

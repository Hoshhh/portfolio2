import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type ProjectItemProps = {
  title: string;
  backgroundImg: string;
  projectUrl: string;
  tech: string;
};

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-indigo-700 to-blue-400 text-slate-50">
      <Image
        className="rounded-xl group-hover:opacity-20"
        src={props.backgroundImg}
        alt="/"
        width={600}
        height={600}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-slate-100 tracking-wider text-center">
          {props.title}
        </h3>
        <p className="pb-4 pt-2 text-slate-100 text-center">{props.tech}</p>
        <Link href={props.projectUrl}>
          <p className="text-center py-3 rounded-lg bg-slate-100 text-slate-800 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

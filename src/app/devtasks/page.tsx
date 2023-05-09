import React from "react";
import devtasks from "../../../public/assets/projects/auth.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={devtasks}
          alt="devtasks"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-100 z-10 p-2">
          <h2 className="py-2">Devtasks</h2>
          <h3>MongoDB / Express / ReactJS / NodeJS / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-9">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This project was made with the MERN stack. MongoDB, Express, React,
            and Nodejs. The app also used Tailwind for styling.
          </p>
          <p className="mt-4">
            This site was made to help me get started with authorization and
            authentication. During the course of this project I learned a lot,
            such as all the different cases you need to consider when
            authorizing users. I learned about the importance of protected
            routes and JWT's, hashing passwords, and overall structuring of data
            in databases. This very simple app has taught me enough to the point
            that I believe I can expand the app to include more functionality or
            use this stack on a bigger project.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-2">
          <div p-2>
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJS
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NodeJS
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default page;

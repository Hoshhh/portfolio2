import React from "react";
import halloween from "../../../public/assets/projects/hallow.png";
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
          src="/assets/projects/hallow.png"
          alt="multistream"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-100 z-10 p-2">
          <h2 className="py-2">Halloween Hub</h2>
          <h3>NextJs / Tailwind / MongoDB / Mongoose</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-9">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This project is made with NextJs, Tailwind, and MongoDB/Mongoose.
            The goal of this project was to expand my skills in the backend.
          </p>
          <p className="mt-4">
            This site was made as a small Halloween project that would give
            users recommendations of various things such as movies or videos to
            watch, costume recommendations, and video game recommendations. I
            made API endpoints "/api/videos movies, etc" and used MongoDB to
            store the information for the API.
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
                NextJS
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mongoose
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

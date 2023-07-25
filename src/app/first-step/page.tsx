import React from "react";
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
          src="/assets/projects/firststep"
          alt="devtasks"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-100 z-10 p-2">
          <h2 className="py-2">FirstStepTech</h2>
          <h3>NextJS / NextAuth / Prisma / Vercel / Planetscale</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-9">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This project was made with NextJS, NextAuth, and Prisma. Hosted with Vercel and planetscale.
          </p>
          <p className="mt-4">
            This site was a proof of concept for a SAAS idea I had. I wanted to make a platform for junior developers
            and a tool that recruiters could use to find candidates. The goal of this project was to help alleviate some of 
            the problems in the job market. Job listings marked "entry level" while asking for 3+ years of experience harms 
            both job searchers and recruiters. Junior developers can't find jobs specifically looking for their level of expertise
            so they start applying to every developer job which in turn makes the recruiters job harder as well.
          </p>
          <p className="mt-4">
            I used this project to test if what I wanted to achieve was within my capabilities. In the end, I felt I was up to the task.
            This project set me on the right path with these technologies, but was not planned or structured properly. My plan
            is to continue with this project, but I will be starting over and planning accordingly this time. I've learned
            so much from this project and I am now setting my focus on making this app in my spare time.
            <span className="font-bold"> Removed the database from this project and migrated it to the production version I'm working on.</span>
          </p>
          <Link href="https://github.com/Hoshhh/FirstStepTech" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Production Code</button>
          </Link>
          <Link href="https://github.com/Hoshhh/FirstStep" target="_blank">
            <button className="px-8 py-2 mt-4">Demo Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-2">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextAuth
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Prisma
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Planetscale
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

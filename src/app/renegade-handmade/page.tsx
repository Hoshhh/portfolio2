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
          src="/assets/projects/renegade.png"
          alt="renegade"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-100 z-10 p-2">
          <h2 className="py-2">Renegade Handmade</h2>
          <h3>React / Typescript / MaterialUI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-9">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This project is being made with React, Typescript, Redux,
            CommerceJS, Stripe, and MaterialUI. This is a Ecommerce website for
            a woodworking company so that they can sell decor they make often as
            well as take custom requests.
          </p>
          <p className="mt-4">
            I'm making this project with scalability in mind in case the company
            decides to expand further. With the power of Typescript and a state
            management system like Redux, everything should be in place to make
            this site expandable.
          </p>
          <Link href="https://renegadehandmade.netlify.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Hoshhh/RenegadeHandmade" target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-2">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Redux
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CommerceJS
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Stripe
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MaterialUI
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

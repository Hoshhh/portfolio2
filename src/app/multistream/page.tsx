import React from "react";
import stream from "../../../public/assets/projects/stream.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/75 z-10" />
        <Image
          className="absolute z-1"
          src={stream}
          alt="multi-stream"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-slate-100 z-10 p-2">
          <h2 className="py-2">Multistream</h2>
          <h3>React / MaterialUI / Twitch API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-9">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This project was created with React, MaterialUI, and the Twitch API.
            Twitch is a live streaming website were users can watch people
            stream video games or live events in real time. The purpose of this
            app is to allow users to watch multiple streams (up to 8 at a time).
          </p>
          <p className="mt-4">
            Simply select the number of streams you want to view in the bar on
            the left, then search for your favorite streamers and add them to
            the screen, easy as that! If you want to remove a stream all you
            have to do is click the minus button to the right of the streams
            name located on the left most side.
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
                React
              </p>
              <p className="text-slate-800 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Twitch API
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

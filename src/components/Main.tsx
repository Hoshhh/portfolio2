import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-slate-800">
            Let's build something!
          </p>
          <h1 className="py-4 text-slate-800">
            Hello, I'm <span className="text-indigo-600">Josh</span>
          </h1>
          <h1 className="py-2 text-slate-800">
            I'm a Full-Stack Web developer
          </h1>
          <p className="py-4 text-slate-700 max-w-[70%] m-auto">
            I'm a full-stack developer who enjoys making fun user experiences
            and building apps with engaging functionality! I've mostly been
            working on front-end development, but I have switch my focus towards
            backend/full stack development.
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/joshua-johnson-34081b235/" target="_blank">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/Hoshhh" target="_blank">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-4 ml-4 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

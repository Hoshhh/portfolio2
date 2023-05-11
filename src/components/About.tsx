import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-slate-800">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-slate-700">
            Hello, my name is Josh. I have a Bachelors in Biology, but coding is
            what I enjoy most. I've been programming as a hobby for a very long
            time now (game development), but in the last few years I started
            learning more about web development. I originally didn't like web
            development because I thought it was all about making a website look
            good, then I learned about React and the functionality you could
            incorporate into websites. I've come to love making websites so I
            thought I would try to turn my hobby into a career.
          </p>
          <p className="py-2 text-slate-700">
            My original plan was to become a physician and though I did really
            well in that pursuit, I ultimately fell out of love with the
            profession. I've taken a few years since college to try and find
            what I really wanted to do in life so I started thinking about
            things that I enjoy doing. The feeling of solving a difficult
            problem was always something that brought me back to programming, so
            I can't think of anything more amazing than being able to do this
            everyday!
          </p>
          <p className="py-2 text-slate-700">
            I have a large assortment of interests such as cryptocurrency,
            building computers, history, space, stocks, and video games. I try
            my best to be a well informed person and I love learning about new
            technology. Knowledge is a powerful thing and I hope one day all of
            these steps I'm taking now will help me become an innovator for the
            future.
          </p>
          <p className="py-2 text-slate-700 underline cursor-pointer">
            Check out my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/digitalart.jpg"
            alt="/"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

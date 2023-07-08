import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-indigo-600">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="flex flex-row">
          <div className="w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="flex flex-col items-center justify-center  md:flex-row lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/digitalart2.jpg"
                  alt="/"
                  width={300}
                  height={250}
                />
              </div>
              <div className="md:ml-8">
                <h2 className="py-2">Joshua Johnson</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full time positions. Feel free
                  to contact me.
                </p>
                <div className="flex flex-col items-center md:items-start">
                  <p className="uppercase pt-8">Connect With Me</p>
                  <div className="flex items-center max-w-[400px] py-4">
                    <Link href="https://www.linkedin.com/in/joshua-johnson-34081b235/" target="_blank">
                      <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link href="https://github.com/Hoshhh" target="_blank">
                      <div className=" rounded-full shadow-lg shadow-gray-400 p-4 ml-2 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-indigo-600" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

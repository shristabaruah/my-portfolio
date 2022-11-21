import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi I'm <span className="text-[#5651e5]">Shrista</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-grey-600 max-w-[70%] m-auto">
            I'm Frontend web Developer specializing in building exceptional
            digital experience. Currently I am focussed on building responsive
            front end web applications while learning back-end technologies
          </p>
          <div className="flex items-center justify-between m-auto max-w-[330px] py-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/shrista-baruah/"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/shristabaruah" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="https://twitter.com/ShristaBaruah" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaTwitter />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

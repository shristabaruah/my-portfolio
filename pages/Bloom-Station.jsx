import React from "react";
import image from "../public/assets/projects/social-media.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const BloomStation = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1 " alt="/" fill src={image} />
        <div className="top-[70%] absolute max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Bloom-Station</h2>
          <h3>Social Media Web App</h3>
        </div>
      </div>

      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p className="uppercase tracking-wider text-[#5]">Project</p>
          <h2>Overview</h2>
          <p className="pb-2">
            BloomStation is a social media app where people can post texts and
            pictures and connect with friends and family
          </p>
          <p className="pb-2">
            Features: post management, comments management, user profile, search
            post, and search users etc
          </p>
          <button className="px-8 py-2 mr-8">
            <a href="http://bloom-station.vercel.app/" target="_blank">
              Demo
            </a>
          </button>
          <button className="px-8 py-2">
            <a
              href="https://github.com/shristabaruah/Bloom-Station"
              target="_blank"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Redux Toolkit
              </p>
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> React Router
              </p>
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Chakra UI
              </p>
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Mockbee
              </p>
              <p className=" text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> React Toastify
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

export default BloomStation;

import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Ecom from "../public/assets/projects/ecom.png";


function BloomTronics() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1 " alt="/" fill src={Ecom} />
        <div className="top-[70%] absolute max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">BloomTronics</h2>
          <h3>Ecommerce Web App</h3>
        </div>
      </div>

      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p className="uppercase tracking-wider text-[#5]">Project</p>
          <h2>Overview</h2>
          <p className="pb-2">
            Bloom Tronics is an electronics e-commerce website dedicated to a
            wide range of products of various sizes and features.
             Features: Add/Remove Products to cart and wishlist, Sort and Filter Products,
            Single product page , Coupons, Mock Razor pay payment integration
          </p>
          <button className="px-8 py-2 mr-8">Demo</button>
          <button className="px-8 py-2">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
          <div className="p-2">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className=" text-gray-600 py-2 flex items-center "><RiRadioButtonFill className="pr-1"/> React</p>
              <p className=" text-gray-600 py-2 flex items-center "><RiRadioButtonFill className="pr-1"/> React Router</p>
              <p className=" text-gray-600 py-2 flex items-center "><RiRadioButtonFill className="pr-1"/> Bloom UI</p>
              <p className=" text-gray-600 py-2 flex items-center "><RiRadioButtonFill className="pr-1"/> Mockbee</p>
              <p className=" text-gray-600 py-2 flex items-center "><RiRadioButtonFill className="pr-1"/> Font Awesome</p>
            </div>
          </div>

        </div>
        <Link href="/#projects"><p className="underline cursor-pointer">Back</p></Link>
      </div>
    </div>
  );
}

export default BloomTronics;

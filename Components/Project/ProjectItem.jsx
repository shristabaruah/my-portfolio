import React from "react";
import Link from "next/link";


function ProjectItem({ image, title, link, skill }) {
  return (
    <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img
        className="rounded-xl group-hover:opacity-10 "
        src={image}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-4 text-center text-white">
          {skill ? skill : "React"}
        </p>
        <Link href={link}>
          <p className="text-center rounded-lg py-3 bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export { ProjectItem };

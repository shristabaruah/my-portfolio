import React from "react";

function About() {
  return (
    <div id="about" className="w-full m:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
           I am an aspiring web developer.I am from Guwahati , Assam. 
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668366609/jykquli1zb770a8hpqjo.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

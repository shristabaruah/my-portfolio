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
          <p className="py-2 text-lg text-gray-600 font-serif">
            I am an aspiring web developer.I am from Guwahati , Assam. I
            specialize in building responsive front-end UI applications
            integrated with API’s and other backend technologies.I’m passionate
            about learning new technologies and implementing and launching new
            projects. Ability to translate business requirements into technical
            solutions.Though I am most proficient in building front-end
            applications using HTML, CSS, Javascript, and React, I am a quick
            learner and can pick up new tech stacks as needed.
          </p>
          <button className="p-2 ">
            <a target="_blank" href="https://drive.google.com/file/d/1LSPN0C7OdTwMQujU1q4pYJTHkW79gKsA/view?usp=share_link">
              Download Resume
            </a>
          </button>
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

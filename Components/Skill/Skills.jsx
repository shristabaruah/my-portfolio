import React from "react";
import { Skill } from "./Skill";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <p>What I can Do</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <Skill
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668438932/qpkmiuemkhft8o8lt7jm.png"
            skill="HTML"
          />
          <Skill
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668438911/sjpfdftgi8wow44i1bmw.png"
            skill="CSS"
          />
          <Skill
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668438944/cwrtsepwvmwfd62hptty.png"
            skill="JavaScript"
          />
          <Skill
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668438952/db9sc1eefmiodiivnrcp.png"
            skill="React"
          />
          <Skill
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668441326/ltaropagacfubrzdhq9f.svg"
            skill="Redux"
          />
          <Skill
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668438923/vxwspwotywg7c8gmmntw.png"
            skill="Git"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import { ProjectItem } from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668447564/tfvxtzvxqwzalay9lut0.png"
            title="Video Library"
            link="/BloomTube"
          />
          <ProjectItem
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668447537/kjouyubnomye86dehovc.png"
            title="Ecommerce Web App"
            link="/BloomTronics"
          />
          <ProjectItem
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668447548/hbai5nofvvosowiary9v.png"
            title="Note App"
            link="/BloomNote"          />
          <ProjectItem
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668447556/rlhnvjcp37ten7vjjpvc.png"
            title="Social Media"
            link="/Bloom-Station"
          />
          <ProjectItem
            image="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668447524/ttlkmaf7gjxyvcuar9z7.png"
            title="Component Library"
            link="/BloomUI"
            skill="HTML"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

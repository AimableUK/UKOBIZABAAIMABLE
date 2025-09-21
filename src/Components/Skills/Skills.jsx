import React from "react";
import "boxicons";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { SiGithubactions } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="self-center text-2xl font-bold">MY SKILLS</h3>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col gap-8">
          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Languages</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <FaPython className="w-10 h-10" />
                <span>Python</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <IoLogoJavascript className="w-10 h-10" />
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <BiLogoTypescript className="w-10 h-10" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Frameworks</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <SiDjango className="w-10 h-10" />
                <span>Django</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <IoLogoReact className="w-10 h-10" />
                <span>React.js</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiNextdotjs className="w-10 h-10" />
                <span>Next.js</span>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <FaGitAlt className="w-10 h-10" />
                <span>Git</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiGithubactions className="w-10 h-10" />
                <span>GitHub Actions</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <IoLogoDocker className="w-10 h-10" />
                <span>Docker</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiPostman className="w-10 h-10" />
                <span>Postman</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiPrisma className="w-10 h-10" />
                <span>Prisma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { Link } from "react-router-dom";

import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { SiGithubactions } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-6 pt-5 pb-20">
        {/* Title */}
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-4xl font-serif font-semibold">About Me</h2>
          <span className="w-16 h-[4px] bg-primaryText rounded"></span>
          <span className="w-8 h-[4px] bg-primaryBorder rounded"></span>
        </div>

        {/* Description */}
        <p className="text-lg mb-6">
          I'm a passionate <strong>Full-Stack Software Engineer</strong> who
          enjoys building <strong>modern, scalable applications</strong>. I
          focus on creating <strong>clean architectures</strong> and delivering
          <strong> seamless user experiences</strong> with reliable performance.
        </p>

        {/* Skills Section */}
        <div className="flex flex-col gap-8">
          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Languages</h3>
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
            <h3 className="text-2xl font-semibold mb-2">Frameworks</h3>
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
            <h3 className="text-2xl font-semibold mb-2">
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

export default About;

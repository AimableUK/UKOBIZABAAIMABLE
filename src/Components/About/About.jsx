import { FaPython, FaAws, FaFigma } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs, IoLogoDocker } from "react-icons/io5";
import {
  SiDjango,
  SiGithubactions,
  SiNextdotjs,
  SiExpress,
  SiGooglecloud,
  SiMui,
} from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiMongodb, SiMysql } from "react-icons/si";

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
          I'm a passionate{" "}
          <strong>AI Enthusiast & Full-Stack Software Engineer</strong> who
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

          {/* FrontEnd */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">FrontEnd Skills</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <SiNextdotjs className="w-10 h-10" />
                <span>Next JS</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaFigma className="w-10 h-10" />
                <span>Figma</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RiTailwindCssFill className="w-10 h-10" />
                <span>TailwindCss</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiMui className="w-10 h-10" />
                <span>MUI</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiShadcnui className="w-10 h-10" />
                <span>ShadCN</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Backend Skills</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <SiDjango className="w-10 h-10" />
                <span>Django</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <IoLogoNodejs className="w-10 h-10" />
                <span>Node</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiExpress className="w-10 h-10" />
                <span>Express</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiMongodb className="w-10 h-10" />
                <span>MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <BiLogoPostgresql className="w-10 h-10" />
                <span>PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiMysql className="w-10 h-10" />
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">DevOps | CI/CD</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <IoLogoDocker className="w-10 h-10" />
                <span>Docker</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiGithubactions className="w-10 h-10" />
                <span>GitHub Actions</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaAws className="w-10 h-10" />
                <span>AWS</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiGooglecloud className="w-10 h-10" />
                <span>GCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

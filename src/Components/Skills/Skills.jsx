import { FaPython, FaNodeJs, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiGithubactions,
  SiDjango,
  SiMui,
  SiShadcnui,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { GrDeploy } from "react-icons/gr";
import { GiChargingBull } from "react-icons/gi";

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

          {/* frontend */}
          <div>
            <h3 className="text-2xl font-bold mb-2">FrontEnd & UI/UX</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <SiNextdotjs className="w-10 h-10" />
                <span>Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RiTailwindCssFill className="w-10 h-10" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiMui className="w-10 h-10" />
                <span>MUI</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiShadcnui className="w-10 h-10" />
                <span>ShadCN</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FiFigma className="w-8 h-8" />
                <span>Figma</span>
              </div>
            </div>
          </div>

          {/* backend */}
          <div>
            <h3 className="text-2xl font-bold mb-2">BackEnd</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <SiDjango className="w-10 h-10" />
                <span>Django</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaNodeJs className="w-10 h-10" />
                <span>Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiExpress className="w-10 h-10" />
                <span>Express.js</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiSocketdotio className="w-10 h-10" />
                <span>Socket.io</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <GiChargingBull className="w-11 h-11" />
                <span>BullMQ</span>
              </div>
            </div>
          </div>

          {/* databases */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Databases</h3>
            <div className="flex flex-wrap gap-4 items-center">
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
              <div className="flex flex-col items-center gap-1">
                <SiRedis className="w-9 h-9" />
                <span>Redis</span>
              </div>
            </div>
          </div>

          {/* INFRASTRUCTURE / DEVOPS */}
          <div>
            <h3 className="text-2xl font-bold mb-2">INFRASTRUCTURE / DEVOPS</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col items-center gap-1">
                <SiDocker className="w-10 h-10" />
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
                <DiGoogleCloudPlatform className="w-10 h-10" />
                <span>GCP</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <GrDeploy className="w-7 h-7" />
                <span>CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

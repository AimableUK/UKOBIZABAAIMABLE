import React from "react";
import "boxicons";
import { FaReact, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="self-center text-2xl font-semibold">Skills</h3>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col mb-5 space-y-4">
          {/* Django */}
          <div className="flex items-center p-2 w-full">
            <div className="flex-1 pr-3">
              <h3 className="font-bold text-lg">Django</h3>
              <p className="text-sm">
                Backend framework I use to build secure, scalable, and
                data-driven applications.
              </p>
            </div>
            <div className="border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
              <i className="devicon-django-plain colored text-4xl"></i>
            </div>
          </div>

          {/* Python */}
          <div className="flex items-center p-2 w-full">
            <div className="flex-1 pr-3">
              <h3 className="font-bold text-lg">Python</h3>
              <p className="text-sm">
                My go-to language for backend development, APIs, and
                problem-solving.
              </p>
            </div>
            <div className="border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
              <i className="devicon-python-plain colored text-4xl"></i>
            </div>
          </div>

          {/* React */}
          <div className="flex items-center p-2 w-full">
            <div className="flex-1 pr-3">
              <h3 className="font-bold text-lg">React</h3>
              <p className="text-sm">
                I use React to create fast, interactive, and reusable user
                interfaces.
              </p>
            </div>
            <div className="border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
              <FaReact className="text-4xl" />
            </div>
          </div>

          {/* JavaScript */}
          <div className="flex items-center p-2 w-full">
            <div className="flex-1 pr-3">
              <h3 className="font-bold text-lg">JavaScript</h3>
              <p className="text-sm">
                The foundation of my frontend work—bringing interactivity to the
                web.
              </p>
            </div>
            <div className="border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
              <FaJs className="text-4xl text-yellow-300" />
            </div>
          </div>

          {/* Tailwind */}
          <div className="flex items-center p-2 w-full">
            <div className="flex-1 pr-3">
              <h3 className="font-bold text-lg">Tailwind</h3>
              <p className="text-sm">
                Utility-first CSS framework I use for building clean, responsive
                designs quickly.
              </p>
            </div>
            <div className="border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
              <RiTailwindCssFill className="text-4xl text-blue-400" />
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="flex items-center p-2 w-full">
            <div className="flex-1 pr-3">
              <h3 className="font-bold text-lg">PostgreSQL</h3>
              <p className="text-sm">
                Relational database I rely on for structured, reliable, and
                scalable data storage.
              </p>
            </div>
            <div className="border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
              <BiLogoPostgresql className="text-4xl text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

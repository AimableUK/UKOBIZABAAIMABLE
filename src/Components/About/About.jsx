import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div class="w-full min-h-screen flex items-center ">
        <div class="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-5 pb-20">
          {/* <!-- Title --> */}
          <div class="flex flex-col gap-2 mb-2 md:mb-4">
            <h2 class="text-4xl font-serif font-semibold">About Me</h2>
            <span class="w-16 h-[4px] bg-primaryText rounded"></span>
            <span class="w-8 h-[4px] bg-primaryBorder rounded"></span>
          </div>
          <p className="text-lg mb-4">
            I’m a passionate <strong>Software Engineer</strong> with experience
            in{" "}
            <strong>
              web development, UI/UX design, and performance optimization
            </strong>
            . I enjoy creating modern, scalable applications with a strong focus
            on <strong>clean architecture and seamless user experiences</strong>.
          </p>

          <div class="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between">
            <div class="w-full flex flex-col gap-2">
              
              {/* <!-- Progress bar 1 --> */}
              <div class="flex flex-col gap-2">
                <div class="w-full flex justify-between font-semibold">
                  <span>HTML/CSS/Javascript</span>
                  <span>90 %</span>
                </div>
                {/* <!-- Progress bar --> */}
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="w-[90%] h-2 bg-primaryBorder rounded-full"></div>
                </div>
              </div>

              {/* <!-- Progress bar 3 --> */}
              <div class="flex flex-col gap-2">
                <div class="w-full flex justify-between font-semibold">
                  <span>React.js</span>
                  <span>78 %</span>
                </div>
                {/* <!-- Progress bar --> */}
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="w-[80%] h-2 bg-primaryBorder rounded-full"></div>
                </div>
              </div>

              {/* <!-- Progress bar 4 --> */}
              <div class="flex flex-col gap-2">
                <div class="w-full flex justify-between font-semibold">
                  <span>Tailwind CSS</span>
                  <span>85 %</span>
                </div>
                {/* <!-- Progress bar --> */}
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="w-[85%] h-2 bg-primaryBorder rounded-full"></div>
                </div>
              </div>


              <div class="flex flex-col gap-2">
                <div class="w-full flex justify-between font-semibold">
                  <span>MongoDB, PostreSQL, MySQL</span>
                  <span>70 %</span>
                </div>
                {/* <!-- Progress bar --> */}
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="w-[70%] h-2 bg-primaryBorder rounded-full"></div>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <div class="w-full flex justify-between font-semibold">
                  <span>Python, Django</span>
                  <span>63 %</span>
                </div>
                {/* <!-- Progress bar --> */}
                <div class="w-full bg-gray-300 rounded-full">
                  <div class="w-[70%] h-2 bg-primaryBorder rounded-full"></div>
                </div>
              </div>

              <div class="flex gap-4 justify-center sm:justify-start">
                <Link className='mt-5 border-2 rounded p-2 pr-5 pl-5 bg-primaryBg border-primaryBorder text-primaryText font-bold hover:bg-primaryBorder hover:text-white transition duration-200 ease-out' to={'mailto:aimableukobizaba@gmail.com'}>HIRE ME</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

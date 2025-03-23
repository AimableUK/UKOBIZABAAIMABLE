import React from 'react'
import 'boxicons'

const Skills = () => {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <h3 className='self-center text-2xl font-semibold'>Skills</h3>
      <div className='flex flex-col justify-start items-start'>

        <div className='flex flex-col mb-5'>
          <h4 className='mb-3 font-bold'>FrontEnd SKills</h4>
          <div className='flex flex-row gap-3'>

            <div className='flex flex-col p-2 items-center w-full'>
              <div className='border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]'>
                <i className="devicon-react-original colored text-4xl"></i>
              </div>
              <p className='font-semibold'>React</p>
            </div>

            <div className='flex flex-col p-2 items-center w-full'>
              <div className='border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]'>
                <i className="devicon-tailwindcss-original colored text-4xl"></i>
              </div>
              <p className='font-semibold text-center'>Tailwind CSS</p>
            </div>

            <div className='flex flex-col p-2 items-center w-full'>
              <div className='border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]'>
                <i className="devicon-javascript-plain colored text-4xl"></i>
              </div>
              <p className='font-semibold'>Javascript</p>
            </div>
          
          </div>
        
          <div className='flex flex-col'>
            <h4 className='mb-3 font-bold'>Backend Skills & Database SKills</h4>
            <div className='flex flex-row'>

              <div className='flex flex-col p-2 items-center w-full'>
                <div className='border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]'>
                  <i className="devicon-mongodb-plain colored text-4xl"></i>
                </div>
                <p className='font-semibold'>MongoDB</p>
              </div>

              <div className='flex flex-col p-2 items-center w-full'>
                <div className='border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]'>
                  <i className="devicon-python-plain colored text-4xl"></i>
                </div>
                <p className='font-semibold'>Python</p>
              </div>

              <div className='flex flex-col p-2 items-center w-full'>
                <div className='border-2 border-primaryBorder rounded-md p-2 shadow-primaryBg shadow-[5px_5px_15px_rgba(0,0,0,0.3)]'>
                  <i className="devicon-django-plain  colored text-4xl"></i>
                </div>
                <p className='font-semibold'>Django</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills

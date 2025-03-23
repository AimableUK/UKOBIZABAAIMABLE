import React from 'react'
import { FaLocationArrow, FaPhone, FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import AimableImg from '../../assets/AimableImg.png'
import { Link } from 'react-router-dom';

const Menu = () => {

  const MySocials1 = [
    { icon: <FaGithub />, url: `https://github.com/aimabletrague` },
    { icon: <FaTwitter />, url: `https://twitter.com/intent/ingagari` },
    { icon: <FaLinkedin />, url: `https://www.linkedin.com/ukobizabaaimable` },
    { icon: <FaEnvelope />, url: `mailto:aimableukobizaba@gmail.com` },
  ];

  const MySocials2 = [
    { icon: <FaPhone />, detail: '+250 783309468' },
    { icon: <FaEnvelope />, detail: `aimableukobizaba@gmail.com` },
    { icon: <FaLocationArrow />, detail: `Kigali, Rwanda` },
  ];


  return (
    <div className='flex justify-center items-center max-w-96'>
      <div className='details relative flex flex-col items-center justify-center bg-primaryCard border-t-2 md:border-2 border-primaryBorder rounded-md p-7 bg-white max-h-fit'>

      <div className='mb-1 flex flex-col items-center relative'>
        
        <img src={AimableImg} className='absolute -mt-14 w-24 border-4 border-primaryBorder rounded-lg p-3 bg-white' />
        <h3 className='font-bold text-2xl mt-10'>UKOBIZABA Aimable</h3>
        <h5 className='role border border-primaryBorder rounded-sm bg-primaryBody p-1 font-semibold'>FrontEnd Developer</h5>
      </div>

      <div className='flex flex-row mb-5'>
        {MySocials1.map((option, index) => (
          <div key={index} className="relative">
            <button
              className="p-2 rounded-md text-primary text-2xl border-2 border-primaryBorder m-2 hover:bg-primaryBorder hover:text-white transition duration-200 ease-out"
              onClick={() => window.open(option.url, '_blank')}
            >
              {option.icon}
            </button>
          </div>
        ))}
      </div>

      <div className='detail-box flex flex-col bg-primaryDetail rounded-md'>
        {MySocials2.map((option, index) => (
          <div key={index} className="m-2 ">
            <div className="flex flex-row items-center">
              <p className='bg-gray-300 p-2 rounded'>{option.icon}</p>
              <p className='ml-3'>{option.detail}</p>
            </div>
            <hr className='border mt-1' />
          </div>
        ))}
      </div>

      <Link className='mt-5 border-2 rounded p-2 pr-5 pl-5 bg-primaryBg border-primaryBorder text-primaryText font-bold hover:bg-primaryBorder hover:text-white transition duration-200 ease-out' to={'/resume'}>VIEW RESUME</Link>

    </div>
    </div>
    
  )
}

export default Menu;

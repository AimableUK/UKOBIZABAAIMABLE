import React from 'react';
import malosFlix from '../../assets/malosFlix.png';
import malosCore from '../../assets/malosCore.png';
// import malosHaven from '../../assets/malosHaven.png'

const Projects = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div
          className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2"
        >
          <a href='https://malos-flix.vercel.app/' target='_blank'>
            <img src={malosFlix} alt='malosFLix Project' className="w-full h-auto object-cover border-2 rounded-md border-black" />
            <p className='font-bold'>MalosFlix - Movie Database</p>
            <p className='font-semibold'>Visit Website</p>
          </a>
          
        </div>
        <div
          className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2"
        >
          <a href='https://malos-core.vercel.app/' target='_blank'>
            <img src={malosCore} alt='malosFLix Project' className="w-full h-auto object-cover border-2 rounded-md border-black" />
            <p className='font-bold'>Malos Core - Admin Panel</p>
            <p className='font-semibold'>Visit Website</p>
          </a>
          
        </div>
        <div
          className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2"
        >
          <a href='#'>
            <img src={malosCore} alt='malosHaven Project' className="w-full h-auto object-cover border-2 rounded-md border-black" />
            <p className='font-bold'>Malos Haven - Tenant Management</p>
            <p className='font-semibold'>Still in devpt</p>
          </a>
          
        </div>
    </div>
  );
};

export default Projects;

import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col justify-center text-center items-center'>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-6 animate-slide-up">
        Hi, I'm Ukobizaba Aimable, a passionate Software Engineer focused on building scalable and interactive web applications.
      </p>
  
      <div className="flex gap-4">
        <Link
          to="/about"
          className="font-bold text-primaryText px-6 py-3 border-primaryBorder bg-gradient-to-r from-primaryBg to-primaryBody hover:bg-gradient-to-r hover:from-primaryBody hover:to-primaryBg transition-transform duration-300 rounded-lg shadow-lg hover:shadow-primaryBorder"
        >
          Get Started
        </Link>
        <Link
          to="/contact"
          className="font-bold text-primaryText px-6 py-3 border-primaryBorder bg-gradient-to-r from-primaryBg to-primaryBody hover:bg-gradient-to-r hover:from-primaryBody hover:to-primaryBg transition-transform duration-300 rounded-lg shadow-lg hover:shadow-primaryBorder"
        >
          Talk To US
        </Link>
      </div>
    </div>
  );
  
}

export default Home

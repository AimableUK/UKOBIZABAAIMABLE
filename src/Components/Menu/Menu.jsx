import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="menustyle flex h-fit flex-row md:flex-col self-center justify-center items-center border-t-2 lg:border-2 lg:p-3 rounded-md border-primaryBorder bg-white fixed bottom-0 w-full lg:w-auto md:bottom-0 lg:static">
      <ul className="lis flex flex-row gap-2 justify-center md:justify-center lg:justify-start mt-2 w-full lg:flex-col">       
        <li className='flex flex-col justify-center items-center place-items-center bg-primaryBody mb-3 rounded pt-2 cursor-pointer hover:bg-primaryBorder hover:text-white transition duration-300 ease-out'>
          <NavLink className="flex flex-col items-center" to={'/about'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
            <p className='font-semibold pl-1 pr-1'>About</p>
          </NavLink>
        </li>

        <li className='flex flex-col justify-center items-center place-items-center bg-primaryBody mb-3 rounded pt-2 cursor-pointer hover:bg-primaryBorder hover:text-white transition duration-300 ease-out'>
          <NavLink className="flex flex-col items-center" to={'/projects'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
          </svg>
          <p className='font-semibold pl-1 pr-1'>Projects</p>
          </NavLink>
        </li>

        <li className='flex flex-col justify-center items-center place-items-center bg-primaryBody mb-3 rounded pt-2 cursor-pointer hover:bg-primaryBorder hover:text-white transition duration-300 ease-out'>
          <NavLink className="flex flex-col items-center" to={'/skills'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
          <p className='font-semibold pl-1 pr-1'>Skills</p>
          </NavLink>
        </li>

        <li className='flex flex-col justify-center items-center place-items-center bg-primaryBody mb-3 rounded pt-2 cursor-pointer hover:bg-primaryBorder hover:text-white transition duration-300 ease-out'>
          <NavLink className="flex flex-col items-center" to={'/contact'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
          </svg>
          <p className='font-semibold pl-1 pr-1'>Contact</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Home

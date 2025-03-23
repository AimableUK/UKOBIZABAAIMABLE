import React, {useEffect, useRef} from 'react'; 
import { Outlet, useLocation} from 'react-router-dom';
import Details from './Components/Details/Details';
import Menu from './Components/Menu/Menu';
import DarkMode from './Components/DarkMode/DarkMode'
import PageTitleUpdater from './Components/TitleUpdater/TitleUpdater';


const Layout = () => {
  const location = useLocation();
  const isProjects = location.pathname === "/projects";

  const outletRef = useRef(null);

  useEffect(() => {
    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }); 

  return (
    <div>
      <PageTitleUpdater />
      {/* Small Devices (Mobile) */}
      <div className="flex flex-col gap-10 justify-between items-center md:items-start mt-10 mb-20 md:m-20 ml-5 lg:ml-12 mr-5  lg:mr-12 md:hidden">
        <Details />
        <section 
          ref={outletRef}
          className={`mystyle w-fit flex flex-col items-center md:w-2/4 mx-auto p-2 text-gray-800 border-primaryBorder bg-primaryCard border-2 rounded-md bg-white 
          ${isProjects ? 'overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-hide' : ''}`}
        > 
          <div className='mb-1 self-end'><DarkMode /></div>
          <Outlet />
        </section>
        <Menu /> {/* Menu stays at the bottom */}
      </div>

      {/* Medium Devices (Tablets) */}
      <div className="hidden md:flex flex-col gap-10 justify-between m-20 ml-12 mr-12 lg:hidden">
        <div className="flex flex-row gap-10 justify-between">  
          <Details />
          <section 
            className={`mystyle min-w-48 flex flex-col items-center w-2/4 mx-auto p-6 text-gray-800 border-primaryBorder bg-primaryCard border-2 rounded-md bg-white 
            ${isProjects ? 'overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-hide' : ''}`}
          > 
          <div className='mb-1 self-end'><DarkMode /></div>
            <Outlet />
          </section>
        </div>
        <Menu /> {/* Menu moves to the bottom */}
      </div>

      {/* Large Devices (Desktops) */}
      <div className="hidden lg:flex flex-row gap-10 justify-between m-20 ml-12 mr-12">
        <Details />
        <section 
        
          className={`mystyle min-w-48 flex flex-col items-center w-2/4 mx-auto p-6 text-gray-800 border-primaryBorder bg-primaryCard border-2 rounded-md bg-white 
          ${isProjects ? 'overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-hide' : ''}`}
        > 
        <div className='mb-1 self-end'><DarkMode /></div>
          <Outlet />
        </section>
        <Menu />
      </div>
    </div> 


  );
};

export default Layout;

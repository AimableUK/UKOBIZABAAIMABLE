import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let title = 'MalosFlix';

    if (location.pathname === '/') {
      title = "Welcome to Aimable's Portfolio";
    } else if (location.pathname === '/contact') {
      title = 'Contact Us';
    }  else if (location.pathname === '/projects') {
        title = 'Projects I Build';
    }  else if (location.pathname === '/about') {
        title = 'About Us';
    } else if (location.pathname === '/skills') {
        title = 'My Skills';
    } else if (location.pathname === '/resume') {
        title = 'My Resume';
    } else {
        title = '404 Page Not Found'
    }


    document.title = title;
  }, [location]);

  return null;
};

export default PageTitleUpdater;
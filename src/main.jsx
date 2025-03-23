import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume';
import Page404 from './Components/Page404/Page404';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Projects />} />
      <Route path='resume' element={<Resume />} />
      <Route path='*' element={<Page404 />} />
    </Route>
  ),
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

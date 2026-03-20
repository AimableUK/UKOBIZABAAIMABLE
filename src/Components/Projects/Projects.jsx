import malosHaven from "../../assets/MalosHaven.png";
import brainpage from "../../assets/brainpage.png";
import classlink from "../../assets/classlink.png";
import togetha from "../../assets/togetha.png";
import velora from "../../assets/noimg.jpg";
import nivra from "../../assets/nivra.png";
import malosFlix from "../../assets/malosFlix.png";
import tastyMundo from "../../assets/tastyMundo.png";
import bija from "../../assets/Bija.png";
import malos from "../../assets/Malos.png";
import monet from "../../assets/Monet.png";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      {/* MONET */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://monet-app.vercel.app" target="_blank">
          <img
            src={monet}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">MONET - AI Website Builder</p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>

      {/* BIJA */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://bija-group.vercel.app" target="_blank">
          <img
            src={bija}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">BIJA - Digital Agency</p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>

      {/* MALOS Technologies */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://malos-technologies.vercel.app" target="_blank">
          <img
            src={malos}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">
            Malos Technologies - Engineering Digital Future
          </p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>

      {/* malos haven */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://malos-haven.vercel.app/" target="_blank">
          <img
            src={malosHaven}
            alt="malosFLix Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">Malos Haven - Property Management System</p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>

      {/* brain page */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://brain-page.vercel.app/" target="_blank">
          <img
            src={brainpage}
            alt="malosFLix Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">BRAIN PAGE - Library Management System</p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>

      {/* class link */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://github.com/AimableUK/Class-Link" target="_blank">
          <img
            src={classlink}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">Class Link - School Management System</p>
          <p className="font-semibold">Visit Docs</p>
        </a>
      </div>

      {/* togetha */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://togetha-app.vercel.app/" target="_blank">
          <img
            src={togetha}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">
            Togetha - A Real time space where teams sketch, plan, and share
            ideas
          </p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>

      {/* velora */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://github.com/AimableUK/Velora" target="_blank">
          <img
            src={velora}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black opacity-10"
          />

          <p className="font-bold">
            Velora - Online E-commerce Store with Paypal Integration
          </p>
          <p className="font-semibold">Visit Docs</p>
        </a>
      </div>

      {/* nivra */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://nivra.vercel.app/" target="_blank">
          <img
            src={nivra}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">
            Nivra - Super Intuitive modern Weather forecast
          </p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>

      {/* malos flix */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://malos-flix.vercel.app/" target="_blank">
          <img
            src={malosFlix}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">Malos Flix - A movie Streaming Website</p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>

      {/* tasty mundo */}
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://tasty-mundo-ai.vercel.app/" target="_blank">
          <img
            src={tastyMundo}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">Tasty Mundo - AI Powered Recipes</p>
          <p className="font-semibold">Visit Web</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;

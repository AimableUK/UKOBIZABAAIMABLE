import React from "react";
import malosFlix from "../../assets/malosFlix.png";
import malosHaven from "../../assets/MalosHaven.png";
import tastyMundo from "../../assets/tastyMundo.png";
import nivra from "../../assets/nivra.png";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://malos-flix.vercel.app/" target="_blank">
          <img
            src={malosFlix}
            alt="malosFLix Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">MalosFlix - Movie Database</p>
          <p className="font-semibold">Visit Website</p>
        </a>
      </div>
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://malos-haven.vercel.app/" target="_blank">
          <img
            src={malosHaven}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">
            Malos Haven - Property Management (Under Development)
          </p>
          <p className="font-semibold">Visit Website</p>
        </a>
      </div>
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://tasty-mundo.vercel.app/" target="_blank">
          <img
            src={tastyMundo}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">
            Tasty Mundo - AI Powered Recipes (Under Development)
          </p>
          <p className="font-semibold">Visit Website</p>
        </a>
      </div>
      <div className="cursor-pointer w-full flex flex-col items-start border-2 border-primaryBorder p-3 rounded-md shadow-lg transition-transform duration-300 hover:translate-y-2">
        <a href="https://nivra.vercel.app/" target="_blank">
          <img
            src={nivra}
            alt="malosHaven Project"
            className="w-full h-auto object-cover border-2 rounded-md border-black"
          />
          <p className="font-bold">
            Nivra - Weather forecast (Under Development)
          </p>
          <p className="font-semibold">Visit Website</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;

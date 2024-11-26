import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-gray-900 via-black to-purple-900 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <p className="text-purple-400 text-lg md:text-xl font-semibold py-3">
            Welcome! I’m
          </p>
          <h1 className="text-white font-extrabold text-4xl sm:text-7xl">
            Zainah Saheed
          </h1>
          <h2 className="text-purple-300 text-2xl sm:text-5xl font-bold mt-2 animate-gradient">
            A Frontend Developer
          </h2>
          <p className="text-gray-400 py-6 max-w-md">
            Passionate about crafting exceptional digital experiences through
            clean and responsive frontend designs. Let’s build something amazing
            together!
          </p>
          <div className="flex justify-center md:justify-start">
            {" "}
            {/* Center the button on small screens */}
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-8 py-3 flex items-center rounded-lg shadow-lg bg-gradient-to-r from-purple-700 to-gray-900 hover:from-gray-900 hover:to-purple-700 hover:shadow-purple-500/50 transition-transform duration-300 hover:scale-105"
            >
              Explore My Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

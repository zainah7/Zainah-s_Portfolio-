import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-purple-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray-400 text-2xl font-medium"> Hi there! It's</p>
          <h1 className="font-bold text-4xl  sm:text-7xl text-gray-400">
            Zainah Saheed
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-400">
            I'm a Frontend Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a frontend developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building responsive frontend web applications.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-200 to-gray-950 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

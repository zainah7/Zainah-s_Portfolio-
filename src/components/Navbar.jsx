import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 bg-gradient-to-r from-black via-indigo-950 to-purple-950 text-gray-100 fixed top-0 left-0 px-6 z-50 shadow-lg">
      <div>
        <h1 className="text-4xl font-signature text-white tracking-wider transform transition-all duration-300 hover:text-gray-300 hover:scale-110">
          DevZee
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize text-gray-200 hover:text-white duration-300 hover:underline hover:underline-offset-4 px-5"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-white md:hidden transform transition-all duration-300 hover:scale-110 z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-purple-800 to-indigo-900 text-gray-100">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize text-xl text-gray-200 hover:text-white hover:underline hover:underline-offset-4 duration-300 py-8"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

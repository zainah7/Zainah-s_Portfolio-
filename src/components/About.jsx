import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-purple-900 to-black text-gray-300"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            About Me
          </p>
        </div>

        <div className="space-y-6 text-lg leading-relaxed animate-fade-in">
          <p>
            I am passionate about creating visually engaging and user-friendly
            web experiences. Specializing in **HTML**, **CSS**, and
            **JavaScript**, I strive to transform ideas into seamless digital
            interactions that captivate users.
          </p>
          <p>
            With a keen eye for detail and a commitment to learning, I aim to
            build responsive, accessible, and innovative websites. Collaboration
            with experienced teams excites me as it fuels my growth in the
            ever-evolving field of web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

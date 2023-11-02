import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-purple-800 to-black text-gray-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-400">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am passionate about creating visually engaging and user-friendly web
          experiences. I specialize in HTML, CSS, and JavaScript to bring
          designs to life and ensure seamless interactivity. With a keen eye for
          detail and a strong desire to learn and grow, I am committed to
          crafting responsive and accessible websites that captivate users. I am
          excited to contribute to innovative projects and collaborate with
          experienced teams to advance my skills in web development."
        </p>
        <br />
        <p className="text-xl">
          I am passionate about creating visually engaging and user-friendly web
          experiences. I specialize in HTML, CSS, and JavaScript to bring
          designs to life and ensure seamless interactivity. With a keen eye for
          detail and a strong desire to learn and grow, I am committed to
          crafting responsive and accessible websites that captivate users. I am
          excited to contribute to innovative projects and collaborate with
          experienced teams to advance my skills in web development."
        </p>
      </div>
    </div>
  );
};

export default About;

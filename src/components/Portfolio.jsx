import React from "react";
import medicLab from "../assets/portfolio/medicLab.png";
import quiz from "../assets/portfolio/quizApp.png";
import gammingWeb from "../assets/portfolio/gammingWebsite.png";
import portfolioWeb from "../assets/portfolio/portfolio.png";
import travelAgency from "../assets/portfolio/travel_agency.png";
import BMI from "../assets/portfolio/BMI.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: medicLab,
      herf: "medic-rbq49xi99-zainah7.vercel.app/",
    },
    {
      id: 2,
      src: portfolioWeb,
      herf: "https://portfolio-6ibb86uqo-zainah7.vercel.app/",
    },
    {
      id: 3,
      src: travelAgency,
      herf: "travel-agency-3wi62pqen-zainah7.vercel.app/",
    },
    {
      id: 4,
      src: quiz,
      herf: "quiz-bzvsdaujo-zainah7.vercel.app/",
    },
    {
      id: 5,
      src: gammingWeb,
    },
    {
      id: 6,
      src: BMI,
      herf: "https://bmi-lk3ztwwd7-zainah7.vercel.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-purple-900 text-gray-300 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl border-b-4 font-bold inline border-purple-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-purple-700 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

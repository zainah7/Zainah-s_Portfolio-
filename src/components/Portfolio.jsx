import React from "react";
import medicLab from "../assets/portfolio/medicLab.png";
import quiz from "../assets/portfolio/quizApp.png";
import portfolioWeb from "../assets/portfolio/portfolio.png";
import travelAgency from "../assets/portfolio/travel_agency.png";
import dashboard from "../assets/portfolio/dashboard.png";
import acme from "../assets/portfolio/acme.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: medicLab,
      demo: "https://medic-rbq49xi99-zainah7.vercel.app/",
      code: "https://github.com/zainah7/medicLab.git",
    },
    {
      id: 2,
      src: portfolioWeb,
      demo: "https://portfolio-6ibb86uqo-zainah7.vercel.app/",
      code: "https://github.com/zainah7/Portfolio_hon.git",
    },
    {
      id: 3,
      src: dashboard,
      demo: "https://zee-dashboard-3ms4.vercel.app/",
      code: "https://github.com/zainah7/zee_dashboard.git",
    },
    {
      id: 4,
      src: acme,
      demo: "https://nextjsdashboard-silk-pi.vercel.app/",
      code: "https://github.com/zainah7/-nextjs_dashboard.git",
    },

    {
      id: 5,
      src: travelAgency,
      demo: "https://travel-agency-3wi62pqen-zainah7.vercel.app/",
      code: "https://github.com/zainah7/travel_agency.git",
    },
    {
      id: 6,
      src: quiz,
      demo: "https://quiz-bzvsdaujo-zainah7.vercel.app/",
      code: "https://github.com/zainah7/quiz-app",
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-purple-700 rounded-lg group "
            >
              <img
                src={src}
                alt={`Portfolio ${id}`}
                className="rounded-md duration-200 transform group-hover:scale-105 transition-all"
              />
              <div className="flex items-center justify-center gap-4 mt-4 ">
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 bg-gradient-to-r from-purple-900 to-blue-800 text-white rounded-lg text-center duration-200 hover:scale-105 hover:from-purple-800 hover:to-blue-700 transition-all"
                  >
                    Demo
                  </a>
                )}
                {code && (
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 bg-gradient-to-r from-purple-800 to-pink-800 text-white rounded-lg text-center duration-200 hover:scale-105 hover:from-purple-800 hover:to-teal-700 transition-all"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

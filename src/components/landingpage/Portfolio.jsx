import React from "react";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import SubHeading from "../common/SubHeading";

const Portfolio = ({ page }) => {
  const portfolio =
    page === "web" ? webDevelopmentPortfolio : appDevelopmentPortfolio;
  return (
    <div className="wrapper py-10 space-y-4">
      <div className="flex flex-col items-center">
        <SubHeading heading="Portfolio" className="text-white" />
        <h2 data-aos="fade-up" className="text1 text-center">
          Few of Our Projects
        </h2>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-center gap-4 pt-5"
      >
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="rounded-lg w-[calc(100%/2-1rem)] md:w-[calc(100%/3-1rem)] lg:w-[calc(100%/4-1rem)] aspect-square overflow-hidden relative group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/50 via-transparent to-primary/50 z-[1]" />
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="object-cover h-full w-full group-hover:scale-[135%] group-hover:rotate-[-25deg] transition-all duration-300"
            />
            <div className="group-hover:translate-y-full transition-all duration-300 p-4 absolute bottom-0 left-0 w-full bg-primary z-[2]">
              <p className="text4 text-black text-center uppercase font-semibold font-outfit">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

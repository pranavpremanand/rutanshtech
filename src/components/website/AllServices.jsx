import React from "react";
import SubHeading from "../common/SubHeading";
import { allServices } from "../../content/services";
import { Link } from "react-router-dom";

const AllServices = ({ length }) => {
  const services = allServices.slice(0, length);
  return (
    <div className="py-7">
      <div className="wrapper space-y-4 flex flex-col items-center">
        <div data-aos="fade-up">
          <SubHeading heading="Our Services" className="text-primary" />
        </div>
        <h2 data-aos="fade-up" className="text1 text-center max-w-3xl mx-auto">
          Transform Your Business with Cutting-Edge AI and IT Solutions
        </h2>
        <div className="py-6 flex flex-wrap gap-7 justify-center">
          {services.map((item) => (
            <div
              key={item.title}
              className="group md:w-[calc(100%/2-2rem)] lg:w-[calc(100%/3-2rem)]"
              data-aos="fade-up"
            >
              <div className="border border-primary p-6 rounded-2xl grid grid-cols-1 gap-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-large hover:shadow-primary/50 h-full">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.image}
                    className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt={item.title}
                  />
                </div>
                <h4 className="text3">{item.title}</h4>
                <p className="desc">{item.desc}</p>
                {item.link && (
                  <div className="pt-5">
                    <Link
                      className="btn-rounded border border-primary text-white hover:bg-primary"
                      to={item.link}
                      target="_blank"
                    >
                      Know More
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {length && (
          <div data-aos="fade-up">
            <Link
              className="btn-rounded border border-primary text-white hover:bg-primary"
              to="/services"
            >
              Discover All Our Services
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllServices;

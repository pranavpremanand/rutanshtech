import React from "react";
import SubHeading from "../common/SubHeading";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../content/services";

const ServicesSection = ({ page }) => {
  const isWeb = page === "web";

  const services = isWeb ? webDevelopmentServices : appDevelopmentServices;
  return (
    <div id="services" className="py-7">
      <div className="wrapper space-y-4 flex flex-col items-center">
        <div data-aos="fade-up">
          <SubHeading heading={`Our ${isWeb ? "Web" : "App"} Development Services`} className="text-white" />
        </div>
        <h2 data-aos="fade-up" className="text1 text-center max-w-3xl mx-auto">
          {isWeb
            ? "Transform Your Online Presence with Cutting-Edge Web Solutions"
            : "Revolutionize User Experiences with Next-Gen App Development"}
        </h2>
        <div className="py-6 flex flex-wrap gap-7 justify-center">
          {services.map((service) => (
            <div
              key={service.title}
              className="group md:w-[calc(100%/2-2rem)] lg:w-[calc(100%/3-2rem)]"
              data-aos="fade-up"
            >
              <div className="border border-primary p-6 rounded-2xl space-y-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-large hover:shadow-primary/50 h-full">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    loading="lazy"
                    src={service.image}
                    className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                    alt={service.title}
                  />
                </div>
                <h4 className="text3">{service.title}</h4>
                <p className="desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

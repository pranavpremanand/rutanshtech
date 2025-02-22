import React from "react";
import banner from "../assets/videos/services.webm";
import { lazy } from "react";
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const AllServices = lazy(() => import("../components/website/AllServices"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));

const OurServices = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="Our Services"
        links={[{ title: "Home", url: "/" }, { title: "Our Services" }]}
      />
      <div className="pt-7">
        <AllServices />
        <WhyWorkWithUs />
      </div>
    </div>
  );
};

export default OurServices;

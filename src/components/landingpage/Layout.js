import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LandingPageLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;

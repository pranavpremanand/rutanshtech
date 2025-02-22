import banner from "../assets/videos/aboutus.webm";
import CountUp from "react-countup";
import aboutUsImg from "../assets/images/about-us.png";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import ourVisionImg from "../assets/images/our vision.webp";
import ourMissionImg from "../assets/images/our mission.webp";
import whyWeExistImg from "../assets/images/why we exist.webp";
import OurCoreValues from "../components/website/OurCoreValues";
import { lazy } from "react";
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const AboutUs = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="About Us"
        links={[{ title: "Home", url: "/" }, { title: "About Us" }]}
      />
      <section className="py-14 relative min-h-screen flex items-center bg-tertiary/40">
        <div className="wrapper grid lg:grid-cols-[40%_1fr] items-center gap-10 text-grayClr z-10 relative">
          <div data-aos="fade-up" className="flex justify-start">
            <img
              loading="lazy"
              src={aboutUsImg}
              className="object-contain sm:scale-110 w-full aspect-square max-h-[60vh] lg:aspect-auto"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <SubHeading heading="Who We Are" className="text-primary" />
            <h2 data-aos="fade-up" className="text1 capitalize">
              Your Partner in{" "}
              <span className="text-stroke-gray text-stroke-white">
                Progress and innovation
              </span>
            </h2>
            <p data-aos="fade-up" className="desc ">
              Rutansh Technologies is more than just a technology company — we
              are your partner in progress. Founded with a vision to redefine
              possibilities through future-driven innovation, we specialize in
              delivering secure, intelligent solutions that empower businesses
              to stay ahead of the curve.
              <br />
              At Rutansh Technologies, we combine deep technical expertise with
              a client-first approach to create digital solutions that drive
              business success. We’re not just focused on delivering projects —
              we’re focused on delivering value, empowering our clients to
              thrive in a constantly evolving digital world.
            </p>
            <div data-aos="fade-up" className="grid sm:grid-cols-2 gap-7 py-4">
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Innovating for Tomorrow</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Future-Ready Tech Solutions</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-7"
            >
              {[
                { number: 200, suffix: "+", title: "Projects Completed" },
                { number: 150, suffix: "+", title: "Satisfied Clients" },
                { number: 2, suffix: "+", title: "Years of Experience" },
                { number: 100, suffix: "%", title: "Success Rate" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start text-center gap-2"
                >
                  <span className="text2">
                    <CountUp
                      end={item.number}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                      duration={2}
                    />
                  </span>
                  <p className="uppercase text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F0F0] text-black">
        <div
          data-aos="fade-up"
          className="wrapper py-8 px-3 grid md:grid-cols-[45%_1fr] gap-7"
        >
          <img
            loading="lazy"
            src={ourVisionImg}
            className="object-cover aspect-video h-full w-full rounded-md"
            alt=""
          />
          <div className="space-y-6">
            <SubHeading heading="Our Vision" className="text-primary" />
            <p className="desc">
              To transcend boundaries and redefine possibilities through
              future-driven innovation. Our vision is to empower businesses by
              delivering transformative technology solutions that adapt, evolve,
              and shape the future. We aim to be the driving force behind
              intelligent progress, crafting solutions that turn today’s ideas
              into tomorrow’s breakthroughs.
            </p>
            <div>
              <Link
                to="/contact"
                className="btn-fullrounded bg-primary text-white hover:bg-primary/80 w-fit capitalize"
              >
                get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div data-aos="fade-up" className="space-y-4">
            <h3 className="text2 text-primary">
              Our <br /> Mission
            </h3>
            <img
              loading="lazy"
              src={ourMissionImg}
              className="md:hidden block object-cover aspect-video h-fit w-full rounded-sm"
              alt="Our Vision"
            />
            <p className="desc !text-white">
              Our mission is to push the boundaries of innovation and empower
              businesses to achieve their boldest ambitions. We are committed to
              delivering transformative, future-ready technology solutions that
              evolve with the ever-changing digital landscape. By turning
              complex ideas into intelligent possibilities, we help businesses
              transcend limits, adapt to emerging trends, and shape their future
              with confidence and agility. Through a relentless focus on
              innovation, excellence, and meaningful partnerships, we aim to
              create enduring impact and lasting value for our clients and
              communities.
            </p>
          </div>
          <img
            loading="lazy"
            data-aos="fade-up"
            src={ourMissionImg}
            className="hidden md:block object-cover aspect-video h-full w-full rounded-xl"
            alt="Our Vision"
          />
        </div>
      </section>
      <OurCoreValues />
      <section className="pt-7 wrapper space-y-5">
        <div className="grid md:grid-cols-2 gap-7">
          <div className="flex flex-col overflow-hidden rounded-xl">
            <img
              loading="lazy"
              src={whyWeExistImg}
              alt="Why we exist"
              className="sm:aspect-[2/1] w-full object-cover h-full"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text2 text-primary">Why We Exist</h2>
            <p className="desc">
              The digital world is evolving faster than ever, and businesses
              need a technology partner they can trust to navigate this change.
              Rutansh Technologies exists to fill that role — to provide
              businesses with the tools they need to innovate, grow, and succeed
              in a secure scalable-manner. <br /> Whether it's a mobile app that
              engages customers on the go, a web platform that enhances your
              digital presence, or an AI tool that automates complex tasks,
              Rutansh Technologies is here to deliver solutions that
              drive-real-world-results.
            </p>
          </div>
        </div>
        <p className="desc">
          Our commitment to security, innovation, and client success makes us
          more than just a service provider. We are a partner in your growth
          journey, ensuring that you’re always equipped to tackle the challenges
          of tomorrow. <br />
          Our Philosophy we believe that technology should be a catalyst for
          growth, a bridge to new opportunities, and a shield against potential
          risks. With this in mind, we craft every solution with innovation,
          adaptability, and security at its core. Our approach ensures that
          businesses can embrace change confidently, knowing they have a
          reliable technology partner by their side
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

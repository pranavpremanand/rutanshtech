import SubHeading from "./SubHeading";
import arrowTopCurved from "../../assets/images/arrow-top-curved.png";
import arrowBottomCurved from "../../assets/images/arrow-bottom-curved.png";
import ArrowButton from "./ArrowButton";

const process = [
  {
    id: "01",
    title: "Discovery & Planning",
    desc: "We begin by understanding your needs and crafting a tailored strategy for success.",
  },
  {
    id: "02",
    title: "Design & Development",
    desc: "Our team creates innovative designs and develops solutions that bring your vision to life.",
  },
  {
    id: "03",
    title: "Testing & Quality Assurance",
    desc: "We rigorously test our solutions to ensure they meet the highest standards of quality.",
  },
  {
    id: "04",
    title: "Launch & Support",
    desc: "We deploy your solution and provide ongoing support to ensure lasting success.",
  },
];

const OurProcess = ({ showButton }) => {
  return (
    <div className="py-7">
      <div className="wrapper">
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-[55%,1fr] items-center gap-6 md:gap-16"
        >
          <div className="space-y-3">
            <SubHeading heading="Our Process" className="text-white" />
            <h2 className="text1">Transforming Concepts into Success</h2>
          </div>
          <p className="desc text-white/70">
            Our process ensures outstanding outcomes through a smooth and
            efficient journey. From initial discovery and design to development,
            testing, and final launch, we execute each phase with meticulous
            attention to detail, clarity, and a commitment to your success.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 sm:mt-16"
        >
          {process.map((item) => (
            <div
              key={item.id}
              className="sm:odd:translate-y-[1rem] flex flex-col space-y-3 p-6 rounded-xl border border-primary"
            >
              <h2 className="text1 text-stroke font-sans">{item.id}</h2>
              <h4 className="text-lg text-white/70">{item.title}</h4>
              <p className="text3">{item.desc}</p>
            </div>
          ))}
          <img
            loading="lazy"
            src={arrowTopCurved}
            top
            className="sm:block hidden absolute left-[40%] -top-[3rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
          <img
            loading="lazy"
            src={arrowBottomCurved}
            className="sm:block hidden absolute left-[35%] lg:left-[15%] -bottom-[4rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
          <img
            loading="lazy"
            src={arrowBottomCurved}
            top
            className="lg:block hidden absolute left-[65%] -bottom-[4rem] w-[15rem] h-[3rem] object-contain"
            alt="Arrow"
          />
        </div>
        {showButton && (
          <div data-aos="fade-up" className="pt-8 sm:pt-24">
            <ArrowButton
              to="/services"
              className="bg-black border border-primary text-white hover:bg-primary !w-fit mx-auto"
            >
              Let’s Build Your Success Together
            </ArrowButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProcess;

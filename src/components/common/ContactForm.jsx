import { Link } from "react-router-dom";
import SubHeading from "./SubHeading";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { companyDetails } from "../../content/constant";
import { AiFillInstagram } from "react-icons/ai";

const ContactForm = () => {
  return (
    <section id="contact" className="py-14">
      <div className="wrapper grid md:grid-cols-[55%,1fr] gap-8 md:gap-6">
        <div className="space-y-4">
          <SubHeading heading="Contact Us" className="text-white" />
          <h2 className="text1">Let’s Build the Future Together</h2>
          <p className="desc text-white/70">
            we believe in transcending limits and crafting future-ready,
            intelligent solutions that drive innovation, efficiency, and growth.
            Whether you need cutting-edge web & mobile app development,
            AI-driven solutions, or business intelligence services, we are here
            to empower your success.
          </p>
          <p className="text4 italic">
            Transcending Limits, Transforming Futures
          </p>
          <div className="flex items-center gap-3">
            <Link to={companyDetails.facebook} className="link">
              <FaFacebook size={40} />
            </Link>
            <Link to={companyDetails.instagram} className="link">
              <AiFillInstagram size={40} />
            </Link>
            <Link to={companyDetails.linkedin} className="link">
              <FaLinkedin size={40} />
            </Link>
            <Link to={companyDetails.twitter} className="link">
              <FaTwitterSquare size={40} />
            </Link>
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-5 rounded-xl space-y-5">
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                className="bg-[#333333] p-3 rounded-md w-full outline-none"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                className="bg-[#333333] p-3 rounded-md w-full outline-none"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <input
              type="tel"
              className="bg-[#333333] p-3 rounded-md w-full outline-none"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-[#333333] p-3 rounded-md w-full outline-none"
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea
              rows="5"
              className="bg-[#333333] p-3 rounded-md w-full outline-none"
              placeholder="How can we help?"
            />
          </div>
          <button className="w-full btn-rounded bg-primary text-white hover:bg-black border border-primary">
            Send Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

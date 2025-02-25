import { Link } from "react-router-dom";
import bgImg from "../../assets/images/footer-bg.webp";
import { companyDetails, logo } from "../../content/constant";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-7">
      <div className="w-[95%] wrapper bg-white text-black rounded-2xl !p-5 sm:py-8 md:!px-10 translate-y-8">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-1">
            <h4 className="text2 text-primary text-center md:text-start">
              Newsletter
            </h4>
            <p className="desc text-center md:text-start">
              Subscribe Us for Latest Blogs and the Job Postings
            </p>
          </div>
          <div className="flex justify-end">
            <div className="p-1 rounded-full border border-black w-full md:max-w-sm flex justify-between items-center gap-3">
              <input
                type="email"
                className="outline-none bg-transparent md:max-w-xl w-full px-4"
                placeholder="Email address"
              />
              <button className="btn-fullrounded bg-primary text-white hover:bg-primary/80 w-[10rem]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat bg-center pt-[5rem] pb-7 space-y-8"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="wrapper space-y-8">
          <div className="flex justify-between flex-wrap gap-7">
            <div className="flex justify-start">
              <div className="flex flex-col gap-3">
                <img
                  loading="lazy"
                  src={logo}
                  alt="logo"
                  className="w-[12rem] object-contain"
                />
                <p className="desc !text-sm">
                  Transcending Limits, <br />
                  Transforming Futures
                </p>
                <div className="flex items-center gap-3 pt-3">
                  <Link
                    to={companyDetails.facebook}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary border border-white group"
                  >
                    <FaFacebookF
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.linkedin}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary border border-white group"
                  >
                    <FaLinkedinIn
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.instagram}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary border border-white group"
                  >
                    <AiFillInstagram
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>

                  <Link
                    to={companyDetails.twitter}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary border border-white group"
                  >
                    <FaXTwitter
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="text4 underline underline-offset-4">Our Office</h5>
              <ul className="flex flex-col gap-2 list-disc pl-5">
                <li className="text-sm">
                  <Link to={`tel:${companyDetails.phone}`} className="link">
                    {companyDetails.phone}
                  </Link>
                </li>
                <li className="text-sm">
                  <Link to={`mailto:${companyDetails.email}`} className="link">
                    {companyDetails.email}
                  </Link>
                </li>
                <li className="text-sm max-w-sm">{companyDetails.address}</li>
              </ul>
            </div>
          </div>
          <hr className="border-white/20" />
          <p className="text-sm text-center">
            Copyright © {new Date().getFullYear()} Rutansh Technologies LLP| All
            Rights Reserved | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

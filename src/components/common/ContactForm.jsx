import { Link, useNavigate } from "react-router-dom";
import SubHeading from "./SubHeading";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { companyDetails } from "../../content/constant";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { PiSpinnerGapLight } from "react-icons/pi";

const ContactForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    var emailBody = "Name : " + values.name + "\n\n";
    emailBody += "Email : " + values.email + "\n\n";
    emailBody += "Phone : " + values.phone + "\n\n";
    emailBody += "Message :\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Rutansh Tech",
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          toast.success("Form submitted successfully");
          reset();
          navigate("/thank-you");
        } else {
          toast.error(res.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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
              <FaXTwitter size={40} />
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-[#1A1A1A] p-5 rounded-xl space-y-5"
        >
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                className="bg-[#333333] p-3 rounded-md w-full outline-none"
                placeholder="Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <small className="text-red-600">{errors.name?.message}</small>
            </div>
            <div>
              <input
                type="email"
                className="bg-[#333333] p-3 rounded-md w-full outline-none"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <small className="text-red-600">{errors.email?.message}</small>
            </div>
          </div>
          <div>
            <input
              type="tel"
              className="bg-[#333333] p-3 rounded-md w-full outline-none"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[\d\s\-()]{6,14}\d$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="text-red-600">{errors.phone?.message}</small>
          </div>
          <div>
            <input
              type="text"
              className="bg-[#333333] p-3 rounded-md w-full outline-none"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="text-red-600">{errors.subject?.message}</small>
          </div>
          <div>
            <textarea
              rows="5"
              className="bg-[#333333] p-3 rounded-md w-full outline-none"
              placeholder="How can we help?"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <small className="text-red-600">{errors.message?.message}</small>
          </div>
          <button
            disabled={isSubmitting}
            className="w-full btn-rounded bg-primary text-white hover:bg-black border border-primary flex justify-center disabled:hover:bg-primary disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <PiSpinnerGapLight size={20} className="animate-spin" />
            ) : (
              "Send Now"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

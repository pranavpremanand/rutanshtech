import React from "react";
import toast from "react-hot-toast";
import { companyDetails } from "../../content/constant";
import { useForm } from "react-hook-form";
import { PiSpinnerGapLight } from "react-icons/pi";

const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmit = async (values) => {
    var emailBody = "New Subscriber Email : " + values.email;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "New Subscriber - Rutansh Tech",
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
          toast.success("Subscribed Successfully");
          reset();
        } else {
          toast.error(res.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="w-[95%] wrapper bg-white text-black rounded-2xl !p-5 sm:!py-8 md:!px-10 translate-y-8">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div className="space-y-1">
          <h4 className="text2 text-primary text-center md:text-start">
            Newsletter
          </h4>
          <p className="desc text-center md:text-start">
            Subscribe Us for Latest Blogs and the Job Postings
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col items-end"
        >
          <div className="md:max-w-sm flex flex-col items-center space-y-1">
            <div className="p-2 rounded-full border border-black w-full flex justify-between items-center gap-3">
              <input
                type="email"
                className="outline-none bg-transparent md:max-w-xl w-full px-4"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <button
                disabled={isSubmitting}
                className="w-[10rem] btn-fullrounded bg-primary text-white hover:bg-black border border-primary flex justify-center disabled:hover:bg-primary disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <PiSpinnerGapLight size={20} className="animate-spin" />
                ) : (
                  "Send Now"
                )}
              </button>
            </div>
            <small className="text-red-600">{errors.email?.message}</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

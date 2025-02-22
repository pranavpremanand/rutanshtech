import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ArrowButton = ({ className, children, onClick, to }) => {
  if (onClick) {
    return (
      <button
        className={`${className} w-full sm:min-w-[15rem] sm:w-auto btn-rounded flex justify-center items-center gap-2`}
        onClick={onClick}
      >
        {children}
        <FaArrowRightLong className="mt-1" />
      </button>
    );
  }
  return (
    <Link
      to={to}
      className={`${className} w-full sm:min-w-[15rem] sm:w-auto btn-rounded flex justify-center items-center gap-2`}
      onClick={onClick}
    >
      {children}
      <FaArrowRightLong className="mt-1" />
    </Link>
  );
};

export default ArrowButton;

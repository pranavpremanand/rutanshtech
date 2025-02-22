import { IoIosArrowRoundForward } from "react-icons/io";

const CircularText = () => {
  return (
    <div className="relative w-32 min-w-32 h-32 flex items-center justify-center bg-black rounded-full animate-spinner">
      {/* Circle with Text */}
      <svg viewBox="0 0 200 200" className="absolute w-full h-full p-2">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="white" className="text-[2rem] font-bold tracking-widest">
          <textPath href="#circlePath" textAnchor="middle" startOffset="50%">
            Working Since 2007 Best
          </textPath>
        </text>
      </svg>

      {/* Arrow Icon */}
      <IoIosArrowRoundForward size={50} className="text-[#0021f5]" />
    </div>
  );
};

export default CircularText;

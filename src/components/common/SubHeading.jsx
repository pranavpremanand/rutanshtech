import { ReactComponent as Icon } from "../../assets/svg/title_left.svg";

const SubHeading = ({ heading, className }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-7 h-7" />
      <h2 className={`${className} text-lg`}>{heading}</h2>
    </div>
  );
};

export default SubHeading;

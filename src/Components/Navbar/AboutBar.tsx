import { useAppStore } from "../../appStore";
import { BsInfoLg } from "react-icons/bs";
interface AboutBarProps {}

const AboutBar: React.FC<AboutBarProps> = ({}) => {
  const { language } = useAppStore();

  return (
    <span className="flex flex-col justify-center items-center">
      <BsInfoLg></BsInfoLg>
      {language === "English" && <span className=" ">About</span>}
      {language === "Farsi" && <span className="font-bold ">درباره</span>}
    </span>
  );
};

export default AboutBar;

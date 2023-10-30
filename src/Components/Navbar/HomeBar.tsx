import { useAppStore } from "../../appStore";
import { AiOutlineHome } from "react-icons/ai";
interface HomeBarProps {}

const HomeBar: React.FC<HomeBarProps> = ({}) => {
  const { language } = useAppStore();

  return (
    <span className="flex flex-col justify-center items-center">
      <AiOutlineHome></AiOutlineHome>
      {language === "English" && <span className=" ">Home</span>}
      {language === "Farsi" && <span className="font-bold ">خانه</span>}
    </span>
  );
};

export default HomeBar;

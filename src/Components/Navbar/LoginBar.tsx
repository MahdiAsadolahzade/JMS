import { useAppStore } from "../../appStore";

import { AiOutlineLogin } from "react-icons/ai";
interface LoginBarProps {}

const LoginBar: React.FC<LoginBarProps> = ({}) => {
  const { language } = useAppStore();

  return (
    <span className="flex flex-col justify-center items-center">
      <AiOutlineLogin />

      {language === "English" && <span className=" ">Log in</span>}
      {language === "Farsi" && <span className="font-bold ">ورود </span>}
    </span>
  );
};

export default LoginBar;

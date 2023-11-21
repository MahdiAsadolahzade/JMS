import { useAppStore } from "../../appStore";

import { AiOutlineLogout } from "react-icons/ai";
interface SignoutBarProps {}

const SignoutBar: React.FC<SignoutBarProps> = ({}) => {
  const { language } = useAppStore();

  return (
    <span className="flex flex-col justify-center items-center">
      <AiOutlineLogout />

      {language === "English" && <span className=" ">Signout</span>}
      {language === "Farsi" && <span className="font-bold ">خروج </span>}
    </span>
  );
};

export default SignoutBar;

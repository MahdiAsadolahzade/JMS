import { useAppStore } from "../../appStore";

import { BiMessageSquareDots } from "react-icons/bi";
interface ContactBarProps {}

const ContactBar: React.FC<ContactBarProps> = ({}) => {
  const { language } = useAppStore();

  return (
    <span className="flex flex-col justify-center items-center">
      <BiMessageSquareDots />

      {language === "English" && <span className=" ">Contact</span>}
      {language === "Farsi" && <span className="font-bold ">تماس</span>}
    </span>
  );
};

export default ContactBar;

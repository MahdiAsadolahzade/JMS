import { useAppStore } from "../../appStore";
import ContactSection1 from "./ContactSection1";
import ContactSection2 from "./ContactSection2.tsx";
import ContactSection3 from "./ContactSection3.tsx";
import "./Contact.css";

const Contact = () => {
  const { darkMode, language } = useAppStore();

  return (
    <div
      className={`custom-overflow h-[89.5vh] ${
        darkMode ? "dark bg-gray-600 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <ContactSection1></ContactSection1>
      <ContactSection2></ContactSection2>
      <ContactSection3></ContactSection3>
    </div>
  );
};

export default Contact;

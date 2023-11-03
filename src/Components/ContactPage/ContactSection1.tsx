import { useAppStore } from "../../appStore";
import {MdEmail} from "react-icons/md"
import {BiSolidPhoneCall} from "react-icons/bi"
const ContactSection1 = () => {
  const { darkMode, language } = useAppStore();

  const convertToPersianNumbers = (input: string): string => {
    const persianNumbers: string[] = [
      "۰",
      "۱",
      "۲",
      "۳",
      "۴",
      "۵",
      "۶",
      "۷",
      "۸",
      "۹",
    ];
    return input.replace(/\d/g, (match) => persianNumbers[parseInt(match)]);
  };

  return (
    <div className="container min-h-screen mx-auto py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          {language === "English" ? "Contact Us" : "تماس با ما"}
        </h1>
        <p className="mt-4 text-lg">
          {language === "English"
            ? "We'd love to hear from you! Get in touch with us."
            : "ما علاقه داریم از شما بشنویم! با ما تماس بگیرید."}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        

        <div
          className={`p-6 custom-card cursor-pointer ${
            darkMode ? "bg-white" : "bg-teal-300"
          } bg-opacity-20 rounded-xl`}
        >
          <h2
            className={`text-2xl font-bold flex items-center ${
              darkMode ? "text-gray-100" : "text-gray-900"
            } mb-4`}
          >
            <span className="m-2"><MdEmail></MdEmail></span>
            
            {language === "English" ? "Email Us" : "ایمیل به ما"}
          </h2>
          <p className="text-lg">
            <a
              href="mailto:mahdiasadi140@gmail.com"
              className={`hover:underline ${
                darkMode ? "text-blue-300" : "text-blue-500"
              }`}
            >
              {language === "English"
                ? "Mahdiasadi140@gmail.com"
                : "Mahdiasadi140@gmail.com"}
            </a>
          </p>
        </div>

        <div
          className={`p-6 custom-card cursor-pointer ${
            darkMode ? "bg-white" : "bg-teal-300"
          } bg-opacity-20 rounded-xl`}
        >
          <h2
            className={`text-2xl font-bold  flex items-center ${
              darkMode ? "text-gray-100" : "text-gray-900"
            } mb-4`}
          >
            <span className="m-2"><BiSolidPhoneCall></BiSolidPhoneCall></span>
            {language === "English" ? "Call Us" : "تماس با ما"}
          </h2>
          <p className="text-lg">
            <a
              href="tel:+989927355092"
              className={`hover:underline  ${
                darkMode ? "text-blue-300" : "text-blue-500"
              }`}
              dir={`${language === "Farsi" ? "ltr" : ""}`}
            >
              {language === "English"
                ? "+98 992 735 5092"
                : `${convertToPersianNumbers("+98 992 735 5092")}`}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection1;

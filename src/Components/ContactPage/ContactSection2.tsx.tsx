import { useAppStore } from "../../appStore";
import {MdContactMail} from "react-icons/md"
const ContactSection2 = () => {
  const { darkMode, language } = useAppStore();

  return (
    <div className="h-screen">
      <div
      className={`p-6 mx-8 cursor-pointer ${
        darkMode
          ? "bg-gray-500"
          : "bg-teal-50"
      }   shadow-2xl rounded-xl `}
    >
      <div className={`text-${darkMode ? "gray-200" : "gray-900"}`}>
        <h2 className="text-2xl flex items-center font-bold mb-4">
          <span className="m-2"><MdContactMail></MdContactMail></span>
          {language === "English" ? "Contact Us" : "ارتباط با ما"}
        </h2>
        <form>
          <div className="mb-4 font-bold p-4">
            <label htmlFor="name" className="block">
              {language === "English" ? "Name" : "نام"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-3 py-2 border-2 rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-gray-100"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              placeholder={language === "English" ? "Your Name" : "نام شما"}
            />
          </div>
          <div className="mb-4 font-bold p-4">
            <label htmlFor="email" className="block">
              {language === "English" ? "Email" : "ایمیل"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-3 py-2 border-2 rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-gray-100"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              placeholder={language === "English" ? "Your Email" : "ایمیل شما"}
            />
          </div>
          <div className="mb-4 font-bold p-4">
            <label htmlFor="message" className="block">
              {language === "English" ? "Message" : "پیام"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`w-full px-3 py-2 border-2 rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-gray-100"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              placeholder={language === "English" ? "Your Message" : "پیام شما"}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 ${
              darkMode ? "bg-teal-600" : "bg-gray-600"
            } text-gray-100 font-semibold rounded-md ${
              darkMode ? "hover:bg-teal-700" : "hover:bg-gray-500"
            } hover:text-white transition-colors`}
          >
            {language === "English" ? "Submit" : "ارسال"}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactSection2;

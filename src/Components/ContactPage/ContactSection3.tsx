import { useState } from "react";
import { useAppStore } from "../../appStore";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import FAQsIcon from "../../assets/FAQsIcon";

const FAQSection = () => {
  const { darkMode, language } = useAppStore();

  const faqData = [
    {
      question:
        language === "English" ? "What is Lorem Ipsum?" : "چیست Lorem Ipsum؟",
      answer:
        language === "English"
          ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          : "Lorem Ipsum به سادگی متن دمویی صنعت چاپ و صفحه‌آرایی است.",
    },
    {
      question:
        language === "English"
          ? "Why do we use it?"
          : "چرا از آن استفاده می‌کنیم؟",
      answer:
        language === "English"
          ? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          : "این یک واقعیت بسیار سیرابرقرار است که وقتی به چیدمان یک صفحه نگاه می‌کند، خواننده توسط محتوای قابل خواندن آن حواس پرتی می‌کند.",
    },
    {
      question:
        language === "English" ? "Where does it come from?" : "از کجا می‌آید؟",
      answer:
        language === "English"
          ? "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
          : "بر خلاف باور مردم، Lorem Ipsum به سادگی متن تصادفی نیست. ریشه‌هایش در یک قطعه از ادب کلاسیک لاتین از سال 45 قبل از میلاد دارد.",
    },
    {
      question:
        language === "English"
          ? "How can I contact support?"
          : "چگونه می‌توانم با پشتیبانی تماس بگیرم؟",
      answer:
        language === "English"
          ? "You can contact our support team via email at support@example.com or call us at +1234567890."
          : "شما می‌توانید از طریق ایمیل به تیم پشتیبانی ما به آدرس support@example.com تماس بگیرید یا با شماره تلفن +1234567890 با ما تماس بگیرید.",
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="h-auto  py-40  px-8">
      <div className="grid grid-cols-1  md:grid-cols-2">
      <div className="  mx-auto w-[85%]  col-span-1 ">
        <FAQsIcon/>
      </div>
      <div
        className={`col-span-1 w-full ${
          darkMode ? "bg-gray-500" : "bg-teal-100"
        } mx-auto rounded-md shadow-xl p-6 text-${
          darkMode ? "gray-200" : "gray-900"
        }`}
      >
        <h2 className="text-2xl flex items-center font-bold mb-4">
          <span className="m-2">
            <FaQuestionCircle></FaQuestionCircle>
          </span>
          {language === "English" ? "FAQ " : "سوالات پرتکرار "}
        </h2>
        {faqData.map((item, index: any) => (
          <div key={index} className="mb-4">
            <div
              className={`flex h-16 items-center justify-between ${
                darkMode ? "bg-gray-700" : "bg-white"
              } pl-3 pr-2 py-3 w-full rounded text-${
                darkMode ? "gray-200" : "gray-600"
              } font-bold cursor-pointer ${
                darkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
              }`}
              onClick={() =>
                setOpenQuestion(index === openQuestion ? null : index)
              }
            >
              {item.question}
              <span
                className={`h-6 w-6 flex items-center justify-center ${
                  darkMode ? "text-teal-500" : "text-gray-500"
                } `}
              >
                {index === openQuestion ? (
                  <AiOutlineMinus></AiOutlineMinus>
                ) : (
                  <AiOutlinePlus></AiOutlinePlus>
                )}
              </span>
            </div>
            {index === openQuestion && (
              <div
                className={`p-8  ${
                  darkMode ? "text-gray-200" : "text-gray-600"
                }`}
              >
                <p className=" mb-3">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default FAQSection;

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
        language === 'English'
          ? 'How do I create a new journal?'
          : 'چگونه یک ژورنال جدید ایجاد کنم؟',
      answer:
        language === 'English'
          ? 'To create a new journal, go to the dashboard and click on the "Create Journal" button. Fill out the required information and submit the form.'
          : 'برای ایجاد یک ژورنال جدید، به داشبورد بروید و روی دکمه "ساخت ژورنال" کلیک کنید. اطلاعات مورد نیاز را پر کنید و فرم را ارسال کنید.',
    },
    {
      question:
        language === 'English'
          ? 'Can I edit the details of an existing journal?'
          : 'آیا می‌توانم جزئیات یک ژورنال موجود را ویرایش کنم؟',
      answer:
        language === 'English'
          ? 'Yes, you can edit the details of an existing journal. Go to the journal details page and click on the "Edit" button to make changes.'
          : 'بله، می‌توانید جزئیات یک ژورنال موجود را ویرایش کنید. به صفحه جزئیات ژورنال بروید و بر روی دکمه "ویرایش" کلیک کنید تا تغییرات را اعمال کنید.',
    },
    {
      question:
        language === 'English'
          ? 'How do I delete a journal entry?'
          : 'چگونه یک ورودی ژورنال را حذف کنم؟',
      answer:
        language === 'English'
          ? 'To delete a journal entry, go to the journal details page and click on the "Delete" button. Confirm the action, and the entry will be permanently removed.'
          : 'برای حذف یک ورودی ژورنال، به صفحه جزئیات ژورنال بروید و بر روی دکمه "حذف" کلیک کنید. عملیات را تأیید کنید و ورودی به صورت دائمی حذف می‌شود.',
    },
    {
      question:
        language === 'English'
          ? 'Is it possible to add attachments to a journal entry?'
          : 'آیا امکان افزودن پیوست به یک ورودی ژورنال وجود دارد؟',
      answer:
        language === 'English'
          ? 'Yes, you can add attachments to a journal entry. When creating or editing a journal, there are fields to upload pictures and PDF files as attachments.'
          : 'بله، می‌توانید پیوست به یک ورودی ژورنال اضافه کنید. هنگام ایجاد یا ویرایش یک ژورنال، فیلدهایی برای بارگذاری تصاویر و فایل‌های PDF به عنوان پیوست وجود دارد.',
    },
    {
      question:
        language === 'English'
          ? 'How can I organize my journals by category?'
          : 'چگونه می‌توانم ژورنال‌های خود را بر اساس دسته‌بندی مرتب کنم؟',
      answer:
        language === 'English'
          ? 'To organize your journals by category, assign each journal to a specific category when creating or editing it. You can then filter or search for journals based on their assigned categories.'
          : 'برای مرتب‌سازی ژورنال‌های خود بر اساس دسته‌بندی، هر ژورنال را هنگام ایجاد یا ویرایش به یک دسته خاص اختصاص دهید. سپس می‌توانید بر اساس دسته‌های اختصاص یافته به ژورنال‌ها فیلتر یا جستجو کنید.',
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

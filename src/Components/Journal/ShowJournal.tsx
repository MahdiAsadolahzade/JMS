// ShowJournal.tsx
import  { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJournalById } from "../../hooks/useStatistics";
import { FaFilePdf, FaDownload, FaShare } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { useAppStore } from "../../appStore";
import Notification from "../../custom/Notification";
import Loader from "../../custom/Loader";
import JournalIcon from "../../assets/JournalIcon";
import "../Scrollbar.css";

const ShowJournal = () => {
  const { id } = useParams();
  const { data: journal, isLoading, isError } = useJournalById(id);
  const history = useNavigate();
  const { language, darkMode } = useAppStore();
  const [notification, setNotification] = useState({ type: "", message: "" });

  const handleBack = () => {
    history("/");
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center mt-40">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p>Error loading journal</p>;
  }

  const handleDownload = () => {
    const pdfBlob = new Blob([new Uint8Array(journal.PDF.data)], {
      type: "application/pdf",
    });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = `${journal.Name}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleShare = () => {
    const shareUrl = `jms/journal/${id}`;

    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setNotification({
          type: "success",
          message:
            language === "Farsi"
              ? "کپی با موفقیت انجام شد."
              : "Coppied successful.",
        });
      })
      .catch((error) => {
        setNotification({
          type: "error",
          message:
            language === "Farsi" ? "کپی با مشکل مواجه شد." : "Coppy failed.",
        });
      });
  };

  return (
    <div
      className={`h-[90vh] custom-overflow ${
        darkMode ? "bg-gray-700" : "bg-white"
      } px-5 `}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div dir="ltr"
          className={` p-4 m-4 w-full ${darkMode?"bg-gray-500 text-gray-100":"bg-gray-100 text-gray-800"} shadow-md rounded-lg`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{journal.Name}</h2>
            <button
              className={`flex items-center ${darkMode?"text-gray-100":"text-gray-500"}  ${darkMode?"hover:text-teal-500":"hover:text-gray-700"} `}
              onClick={handleBack}
            >
              <BsArrowLeft className="mr-1" />
              {language === "Farsi" ? "بازگشت" : "Back"}
            </button>
          </div>
          <img
            src={URL.createObjectURL(
              new Blob([new Uint8Array(journal.Picture.data)], {
                type: "image/jpeg",
              })
            )}
            alt={journal.Name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
           <p >{language === "Farsi" ? "سال" : "Year"} {journal.Year}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <FaFilePdf className="mr-1" />
                {journal.PDF.name}
              </span>
              <button
                className={`flex items-center text-teal-500 ${ darkMode? "hover:text-gray-200":"hover:text-teal-700" } `}
                onClick={handleDownload}
              >
                <FaDownload className="mr-1" />
                {language === "Farsi" ? "دانلود" : "Download"}
              </button>
            </div>
            <button
              className={`flex items-center text-teal-500 ${ darkMode? "hover:text-gray-200":"hover:text-teal-700" }`}
              onClick={handleShare}
            >
              <FaShare className="mr-1" />
             {language === "Farsi" ? "اشتراک گذاری" : "Share"}
            </button>
          </div>
          <div className="flex items-center justify-between">
           
            <p >{ language === "Farsi" ? "چکیده" : "Abstract"} : {journal.Description}</p>
          </div>

          {notification.type && (
            <Notification
              type={notification.type}
              message={notification.message}
            />
          )}
        </div>

        <div className="w-[85%] mx-auto hidden md:block">
          <JournalIcon />
        </div>
      </div>
    </div>
  );
};

export default ShowJournal;

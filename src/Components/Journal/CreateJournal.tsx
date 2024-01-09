import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddJournal } from "../../hooks/useJournals";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../appStore";
import "../Scrollbar.css";
import Notification from "../../custom/Notification";
interface JournalFormProps {
  onSuccess: () => void;
}

const JournalForm: React.FC<JournalFormProps> = ({ onSuccess }) => {
  const { register, handleSubmit, setValue } = useForm();
  const addJournalMutation = useAddJournal();
  const { darkMode, language } = useAppStore();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const result = await addJournalMutation.mutateAsync(data);
      console.log(result);
      navigate("/dashboard");

      onSuccess();
      
    } catch (error) {
      console.error(error);
    }
  };
 
  

  return (
    <div className="h-[78.5vh] custom-overflow">
    
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`bg-${
          darkMode ? "gray-800" : "white"
        } shadow-md rounded px-8 pt-6 pb-8 mb-4`}
      >
        <div className="mb-4">
          <label
            className={`block text-${
              darkMode ? "gray-300" : "gray-700"
            } text-sm font-bold mb-2`}
            htmlFor="name"
          >
            {language === "Farsi" ? "نام:" : "Name:"}
          </label>
          <input
            {...register("Name")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${
              darkMode ? "text-gray-800" : "text-gray-700"
            } leading-tight focus:outline-none focus:shadow-outline`}
          />
        </div>

        <div className="mb-4">
          <label
            className={`block ${
              darkMode ? "text-gray-100" : "text-gray-700"
            } text-sm font-bold mb-2`}
            htmlFor="description"
          >
            {language === "Farsi" ? "توضیحات:" : "Description:"}
          </label>
          <textarea
            {...register("Description")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${
              darkMode ? "text-gray-800" : "text-gray-700"
            } leading-tight focus:outline-none focus:shadow-outline`}
          />
        </div>

        <div className="mb-4">
          <label
            className={`block text-${
              darkMode ? "gray-300" : "gray-700"
            } text-sm font-bold mb-2`}
            htmlFor="year"
          >
            {language === "Farsi" ? "سال:" : "Year:"}
          </label>
          <input
            type="number"
            {...register("Year")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-${
              darkMode ? "gray-800" : "gray-700"
            } leading-tight focus:outline-none focus:shadow-outline`}
          />
        </div>

        <div className="mb-4">
          <label
            className={`block text-${
              darkMode ? "gray-300" : "gray-700"
            } text-sm font-bold mb-2`}
            htmlFor="picture"
          >
            {language === "Farsi" ? "تصویر:" : "Picture:"}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setValue("Picture", e.target.files)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-${
              darkMode ? "gray-100" : "gray-700"
            } leading-tight focus:outline-none focus:shadow-outline`}
          />
        </div>

        <div className="mb-4">
          <label
            className={`block text-${
              darkMode ? "gray-300" : "gray-700"
            } text-sm font-bold mb-2`}
            htmlFor="pdf"
          >
            {language === "Farsi" ? "پی دی اف:" : "PDF:"}
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setValue("PDF", e.target.files)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-${
              darkMode ? "gray-100" : "gray-700"
            } leading-tight focus:outline-none focus:shadow-outline`}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            {language === "Farsi" ? "ارسال" : "Submit"}
          </button>
        </div>
        {addJournalMutation.isError && (
    <Notification type="error" message={`${language === "Farsi" ? "مشکلی رخ داد دوباره بررسی کنید" : "Something went wrong, please check again"}`} />
     )}

     {addJournalMutation.isSuccess && (
       <Notification type="success" message={` ${language === "Farsi" ? "ژورنال با موفقیت اضافه شد" : "Journal created successfully"}`} />
     )}
      </form>
    </div>
  );
};

const CreateJournal: React.FC = () => {
  
  const handleSuccess = () => {
   
  
  };

  return (
    <div
      className={`p-4 ${
        useAppStore().darkMode
          ? "bg-gray-800 text-gray-100"
          : "bg-white text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-4">
        {useAppStore().language === "Farsi" ? "ساخت ژورنال" : "Create Journal"}
      </h1>
      
      <JournalForm onSuccess={handleSuccess} />
    </div>
  );
};

export default CreateJournal;

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdateJournal } from "../../hooks/useJournals";
import { useAppStore } from "../../appStore";
import Notification from "../../custom/Notification";
interface JournalEditFormProps {
  journal: any;
  onCancel: () => void;
}

const JournalEditForm: React.FC<JournalEditFormProps> = ({
  journal,
  onCancel,
}) => {
  const { register, handleSubmit, setValue } = useForm();
  const updateJournalMutation = useUpdateJournal();
  const { darkMode, language } = useAppStore();

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      const result = await updateJournalMutation.mutateAsync({
        ...data,
        journalId: journal.ID,
      });
      console.log(result); 
      onCancel(); 
      
      window.location.reload();
    } catch (error) {
      console.error(error); 
    }
  };
    
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${darkMode ? 'bg-black' : 'bg-black'} bg-opacity-50 `}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg max-h-[50vh] custom-overflow w-full max-w-md ${darkMode ? 'text-gray-100' : 'text-gray-600'}`}>
        <h3 className="text-lg font-semibold mb-4">
          {language === "Farsi" ? "ویرایش ژورنال" : "Edit Journal"}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium ">
              {language === "Farsi" ? "نام:" : "Name:"}
            </label>
            <input
              {...register("Name", { value: journal.Name })}
              type="text"
              className="mt-1 p-2 border text-gray-800 border-gray-300 rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium ">
              {language === "Farsi" ? "توضیحات:" : "Description:"}
            </label>
            <textarea
              {...register("Description", { value: journal.Description })}
              className="mt-1 p-2 border text-gray-800 border-gray-300 rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium ">
              {language === "Farsi" ? "سال:" : "Year:"}
            </label>
            <input
              {...register("Year", { value: journal.Year })}
              type="number"
              className="mt-1 p-2 border text-gray-800 border-gray-300 rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium ">
              {language === "Farsi" ? "تصویر:" : "Picture:"}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setValue("Picture", e.target.files)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium ">
              {language === "Farsi" ? "پی دی اف:" : "PDF:"}
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setValue("PDF", e.target.files)}
              className="mt-1 p-2 border  border-gray-300 rounded w-full"
            />
          </div>

          <div className="flex flex-row justify-center items-center" dir="ltr">
            <button
              type="submit"
              className={`bg-${darkMode ? 'teal-500' : 'teal-500'} text-white px-4 py-2 rounded-full hover:bg-teal-600 mr-2`}
            >
              {language === "Farsi" ? "بروزرسانی" : "Update"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className={`bg-gray-300 px-4 py-2 rounded-full hover:bg-gray-400`}
            >
              {language === "Farsi" ? "لغو" : "Cancel"}
            </button>
          </div>
          {updateJournalMutation.isError && (
    <Notification type="error" message={`${language === "Farsi" ? "مشکلی رخ داد دوباره بررسی کنید" : "Something went wrong, please check again"}`} />
     )}

     {updateJournalMutation.isSuccess && (
       <Notification type="success" message={` ${language === "Farsi" ? "ژورنال با موفقیت بروزرسانی شد" : "Journal updated successfully"}`} />
     )}
        </form>
      </div>
    </div>
  );
};

export default JournalEditForm;

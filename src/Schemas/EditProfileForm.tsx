import React, { ReactNode } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAppStore } from "../appStore";
import { useUserStore } from "../userStore";

interface EditProfileFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  onCancel: () => void;
}

interface EditProfileFormData {
  Name: string;
  Picture: File;
  Number: string;
  Address: string;
  Education: string;
}

const editProfileSchema = z.object({
  Name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  Number: z.string().min(9).max(15),
  Address: z.string(),
  Education: z.string(),
  Picture:z.any()
});

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  onSubmit,
  onCancel,
  
}) => {
  const { darkMode, language } = useAppStore();
  const {user} = useUserStore();
  console.log(user);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(editProfileSchema),
    defaultValues:user ? user : undefined
  });

  const inputClasses = `${
    darkMode
      ? "focus:ring-gray-500 focus:border-teal-500"
      : "focus:ring-teal-500 focus:border-teal-500"
  }  block w-full p-3 text-gray-800 sm:text-sm border-gray-300 rounded-md`;

  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="">
      <div className="grid grid-cols-1  gap-4">
        <div>
          <label
            htmlFor="Name"
            className="block text-sm font-medium text-gray-700"
          >
            {language === "English" ? "Display Name" : "نام نمایشی"}
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="Name"
              {...register("Name")}
              className={inputClasses}
              placeholder={
                language === "Farsi" ? "نام نمایشی شما" : "Your display name"
              }
            />
          </div>
          {errors.Name && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.Name.message as ReactNode}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="Picture"
            className="block text-sm font-medium text-gray-700"
          >
            {language === "English" ? "Profile Picture" : "عکس پروفایل"}
          </label>
          <div className={`mt-1 relative rounded-md shadow-sm ${darkMode?'text-gray-100':'text-gray-800'}`}>
            <input
              type="file"
              id="Picture"
              {...register("Picture")}
              className={inputClasses}
            />
          </div>
          {errors.Picture && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.Picture.message as ReactNode}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="Number"
            className="block text-sm font-medium text-gray-700"
          >
            {language === "English" ? "Number" : "تلفن همراه"}
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="Number"
              {...register("Number")}
              className={inputClasses}
              placeholder={
                language === "Farsi" ? "تلفن همراه شما" : "Your Phone number"
              }
            />
          </div>
          {errors.Number && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.Number.message as ReactNode}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="Address"
            className="block text-sm font-medium text-gray-700"
          >
            {language === "English" ? "Address" : "آدرس"}
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="Address"
              {...register("Address")}
              className={inputClasses}
              placeholder={language === "Farsi" ? "آدرس شما" : "Your Address"}
            />
          </div>
          {errors.Address && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.Address.message as ReactNode}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="Education"
            className="block text-sm font-medium text-gray-700"
          >
            {language === "English" ? "Education" : "تحصیلات"}
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="Education"
              {...register("Education")}
              className={inputClasses}
              placeholder={
                language === "Farsi" ? "تحصیلات شما" : "Your Education"
              }
            />
          </div>
          {errors.Education && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.Education.message as ReactNode}
            </p>
          )}
        </div>
      </div>
      <div
        className="flex flex-row justify-center items-center  mt-3 space-x-4"
        dir="ltr"
      >
        <button
          type="submit"
          className="bg-teal-500 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          {language === "Farsi" ? "ذخیره تغییرات" : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-teal-500 px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          {language === "Farsi" ? "لغو" : "Cancel"}
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;

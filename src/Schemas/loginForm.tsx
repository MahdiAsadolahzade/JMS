// src/components/LoginForm.tsx
import React, { ReactNode } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAppStore } from "../appStore";

interface LoginFormProps {
  onSubmit: SubmitHandler<FieldValues>;
}

const schema = z.object({
  UserName: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(20, { message: "Username must be at most 20 characters" }),
  Password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
});

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { darkMode, language } = useAppStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
  });

  const labelClasses = `block w-full ${
    darkMode ? "text-gray-100" : "text-gray-100"
  }`;
  const inputClasses = `w-full ${
    darkMode ? "bg-gray-200" : "bg-white"
  } p-2 border rounded-lg relative`;
  const buttonClasses = `w-full p-2  text-white ${
    darkMode ? "bg-teal-600" : "bg-gray-700"
  } rounded-lg ${darkMode ? "hover:bg-teal-500" : "hover:bg-gray-800"}`;

  const password = watch("Password", "");

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="UserName" className={labelClasses}>
          {language === "English" ? "Username" : "نام کاربری"}
        </label>
        <div className="relative">
          <input
            type="text"
            id="UserName"
            {...register("UserName")}
            className={inputClasses}
            placeholder={
              language === "Farsi" ? "نام کاربری شما" : "Your username"
            }
          />
        </div>
        {errors.UserName && (
          <p className="text-rose-500 text-sm mt-1">
            {errors.UserName.message as ReactNode}
          </p>
        )}
      </div>
      <div className="mb-4 relative">
        <label htmlFor="Password" className={labelClasses}>
          {language === "English" ? "Password" : "رمز"}
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="Password"
            {...register("Password")}
            className={inputClasses}
            placeholder={
              language === "Farsi" ? "رمز عبور شما" : "Your password"
            }
          />
          {showPassword ? (
            <AiOutlineEyeInvisible
              className={`absolute ${
                language === "English" ? "right-4" : "left-4"
              }  top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer`}
              size={20}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <AiOutlineEye
              className={`absolute ${
                language === "English" ? "right-4" : "left-4"
              }  top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer`}
              size={20}
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        {errors.Password && (
          <p className="text-rose-500 text-sm mt-1">
            {errors.Password.message as ReactNode}
          </p>
        )}
      </div>
      <button type="submit" className={buttonClasses}>
        {language === "Farsi" ? "ورود" : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;

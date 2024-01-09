// src/components/Auth/Register.tsx
import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../../appStore";
import { useRegister } from "../../hooks/useRegister";
import RegisterIcon from "../../assets/RegisterIcon";
import SlowMovingCode from "../Features/SlowMovingCode";
import RegisterForm from "../../Schemas/RegisterForm";
import Loader from "../../custom/Loader";
import Notification from "../../custom/Notification";

const Register = () => {
  const { darkMode, language } = useAppStore();
  const registerData = useRegister();
  const navigate = useNavigate();

  const containerClasses = ` ${
    language === "Farsi" ? "rtl" : "ltr"
  }  h-screen custom-overflow `;

  const titleClasses = `text-2xl w-full ${
    darkMode ? "text-gray-50" : "text-gray-100"
  } font-bold mb-4`;
  const textClasses = `mt-4 w-full text-center w-full ${
    darkMode ? "text-gray-50" : "text-gray-100"
  }`;

  const handleSubmit = (data: any) => {
    console.log(data);
    registerData.mutate(data, {
      onSuccess: () => {
     
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      },
      onError: (e) => {
        setTimeout(() => {
          console.log(e);
        }, 3000);
      },
    });
  };

  return (
    <div className={containerClasses}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className={` w-full h-screen flex flex-col items-center px-8  justify-center ${
            darkMode ? "bg-gray-700" : "bg-teal-500"
          }  `}
        >
          <div className="w-full">
            <h2 className={titleClasses}>
              {language === "English" ? "Register" : "ثبت نام"}
            </h2>
          </div>
          <div className="w-full">
           
            <RegisterForm onSubmit={handleSubmit} />
          </div>
          <div className="w-full">
            <p className={textClasses}>
              {language === "Farsi"
                ? "حساب کاربری دارید؟"
                : "Already have an account?"}{" "}
              <Link
                to="/login"
                className={`${darkMode ? "text-teal-500" : "text-gray-600"} `}
              >
                {language === "Farsi" ? "ورود" : "Login"}
              </Link>
            </p>
          </div>
          {registerData.isError && (
         <Notification type="error" message={`${language === "Farsi" ? "ثبت نام با مشکل مواجه شد." : "Registration failed."}`} />
          )}

          {registerData.isSuccess && (
            <Notification type="success" message={`${language === "Farsi" ? "ثبت نام با موفقیت انجام شد." : "Registration successful."}`} />
          )}
        </div>

        <div className="w-[85%] my-auto hidden md:block">
          
          {registerData.isSuccess ? (
            <Loader />
          ) : (
            <>
              <RegisterIcon />
              <SlowMovingCode />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

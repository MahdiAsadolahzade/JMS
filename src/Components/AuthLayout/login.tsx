import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../appStore";
import { useUserStore } from "../../userStore";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginIcon from "../../assets/LoginIcon";
import SlowMovingCode from "../Features/SlowMovingCode";

const Login = () => {
  const { darkMode, language } = useAppStore();
  const { signIn } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const containerClasses = ` ${
    language === "Farsi" ? "rtl" : "ltr"
  }  h-screen custom-overflow `;

  const labelClasses = `block w-full ${
    darkMode ? "text-gray-100" : "text-gray-100"
  }`;
  const inputClasses = `w-full ${
    darkMode ? "bg-gray-200" : "bg-white"
  } p-2 border rounded-lg relative`;
  const buttonClasses =
    `w-full p-2  text-white ${
      darkMode ? "bg-teal-600" : "bg-gray-700"
    } rounded-lg ${
      darkMode ? "hover:bg-teal-500" : "hover:bg-gray-800"
    }`;
  const titleClasses = `text-2xl w-full ${
    darkMode ? "text-gray-50" : "text-gray-100"
  } font-bold mb-4`;
  const textClasses = `mt-4 w-full text-center w-full ${
    darkMode ? "text-gray-50" : "text-gray-100"
  }`;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    signIn();
  };

  return (
    <div className={containerClasses}>


      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-[85%]  my-auto hidden md:block">
          <LoginIcon />
          <SlowMovingCode/>
        </div>
        <div
          className={` w-full h-screen flex flex-col items-center px-8  justify-center ${
            darkMode ? "bg-gray-700" : "bg-teal-500"
          }  `}
        >
          <div className="w-full text-white">
            <h2 className={titleClasses}>
              {language === "English" ? "Login" : "ورود"}
            </h2>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className={labelClasses}>
                  {language === "English" ? "Email" : "ایمیل"}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                    placeholder={
                      language === "Farsi" ? "آدرس ایمیل شما" : "Your email"
                    }
                  />
                </div>
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className={labelClasses}>
                  {language === "English" ? "Password" : "رمز"}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              </div>
              <button type="submit" className={buttonClasses}>
                {language === "Farsi" ? "ورود" : "Sign In"}
              </button>
            </form>
          </div>
          <div className="w-full">
            <p className={textClasses}>
              {language === "Farsi"
                ? "حساب کاربری ندارید؟"
                : "Don't have an account?"}{" "}
              <Link to="/register" className={`${darkMode?"text-teal-500":"text-gray-600"} `}>
                {language === "Farsi" ? "ثبت نام" : "Register"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

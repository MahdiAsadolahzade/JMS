
import { Link } from "react-router-dom";
import { useAppStore } from "../../appStore";

const Login = () => {
  const { darkMode, language } = useAppStore();

  const containerClasses = ` ${language === "Farsi" ? "rtl" : "ltr"} min-h-screen flex items-center justify-center ${
    darkMode ? "bg-gray-700" : "bg-teal-50"
  }`;

  const labelClasses = `block ${
    darkMode ? "text-gray-100" : "text-gray-600"
  }`;
  const inputClasses = `w-full ${
    darkMode ? "bg-gray-200" : "bg-teal-50"
  } p-2 border rounded-lg`;
  const buttonClasses =
    "w-full p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600";
  const titleClasses = `text-2xl ${
    darkMode ? "text-gray-50" : "text-gray-600"
  } font-bold mb-4`;
  const textClasses = `mt-4 text-center ${
    darkMode ? "text-gray-50" : "text-gray-600"
  }`;

  return (
    <div className={containerClasses}>
      <div className={`max-w-md w-full p-4 ${
        darkMode ? "bg-gray-500" : "bg-white"
      }  shadow-lg rounded-lg`}>
        <h2 className={titleClasses}>{language==="English"?"Login":"ورود"}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className={labelClasses}>
            {language==="English"?"Email":"ایمیل"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={inputClasses}
              placeholder={
                language === "Farsi" ? "آدرس ایمیل شما" : "Your email"
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className={labelClasses}>
            {language==="English"?"Password":"رمز"}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={inputClasses}
              placeholder={
                language === "Farsi" ? "رمز عبور شما" : "Your password"
              }
            />
          </div>
          <button type="submit" className={buttonClasses}>
            {language === "Farsi" ? "ورود" : "Sign In"}
          </button>
        </form>
        <p className={textClasses}>
          {language === "Farsi"
            ? "حساب کاربری ندارید؟"
            : "Don't have an account?"}{" "}
          <Link to="/register" className="text-teal-500">
            {language === "Farsi" ? "ثبت نام" : "Register"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

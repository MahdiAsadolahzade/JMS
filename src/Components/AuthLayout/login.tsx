// src/components/Auth/Login.tsx
import { Link, useNavigate } from "react-router-dom";
import { useAppStore } from "../../appStore";
import LoginIcon from "../../assets/LoginIcon";
import SlowMovingCode from "../Features/SlowMovingCode";
import LoginForm from "../../Schemas/loginForm";
import { useLogin } from "../../hooks/useLogin";
import { User, useUserStore } from "../../userStore";

const Login = () => {
  const { darkMode, language } = useAppStore();
  const loginData = useLogin();
  const navigate = useNavigate();
  const { setUser } = useUserStore();

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
    loginData.mutate(data, {
      onSuccess: () => {
        const user: User = {
          id: data.ID,
          username: data.UserName,
          displayName: data.Name,
          email: data.Email,
          profilePicture: data.Picture,
          mobile: data.Number,
          address: data.Address,
          education: data.Education,
          isAuthenticated: true,
          journals: data.Journals,
        };
        localStorage.setItem("user", JSON.stringify(data));
        setUser(user);
        navigate("/");
      },
      onError: (e) => {
        console.log(e);
      },
    });
  };

  return (
    <div className={containerClasses}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-[85%]  my-auto hidden md:block">
          <LoginIcon />
          <SlowMovingCode />
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
            <LoginForm onSubmit={handleSubmit} />
          </div>
          <div className="w-full">
            <p className={textClasses}>
              {language === "Farsi"
                ? "حساب کاربری ندارید؟"
                : "Don't have an account?"}{" "}
              <Link
                to="/register"
                className={`${darkMode ? "text-teal-500" : "text-gray-600"} `}
              >
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

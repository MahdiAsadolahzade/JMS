import { useAppStore } from "../../appStore";
import img from "../../Images/img.jpg"

const AboutSection2 = () => {
  const { darkMode, language } = useAppStore();

  return (
    <div
      className={`${
        darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
      } h-[90vh] py-32`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {language === "English"
              ? "Welcome to Our Website"
              : "به سایت ما خوش آمدید"}
          </h2>
          <p
            className={`mt-4 text-lg ${
              darkMode ? "text-gray-300" : "text-gray-500"
            } `}
          >
            {language === "English"
              ? "We are dedicated to excellence and innovation."
              : "ما وقف تعالی و نوآوری هستیم."}
          </p>
        </div>
      </div>

      <div
        className={`${
          darkMode ? "bg-teal-700" : "bg-gray-300"
        } sm:mt-12 sm:pb-16`}
      >
        <div className="relative custom-overflow">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://via.placeholder.com/1600x600"
              alt="Company Office"
            />
            <div
              className={`absolute inset-0 ${
                darkMode ? "bg-gray-400" : "bg-teal-400"
              } mix-blend-multiply`}
            ></div>
          </div>
          <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg shadow-xl overflow-hidden">
              <div
                className={`px-10 py-10 ${
                  darkMode ? "bg-gray-600" : "bg-white"
                } sm:p-16 sm:pb-10`}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="w-24 h-24 rounded-full mx-auto border-4 border-white transition-transform transform hover:scale-125"
                        src={`${img}`}
                        alt="Team Member"
                      />
                    </div>
                  </div>
                  <div className="mt-6 mx-6 text-center md:mt-0 md:ml-10">
                    <div
                      className={`text-3xl font-extrabold  ${
                        darkMode ? "text-gray-100" : "text-gray-900"
                      } `}
                    >
                      {language === "English"
                        ? "Mahdi Asadolahzade"
                        : "مهدی اسداله زاده"}
                    </div>
                    <div
                      className={`mt-6 text-base ${
                        darkMode ? "text-gray-200" : "text-gray-500"
                      } `}
                    >
                      {language === "English"
                        ? "Web Site builder"
                        : "سازنده سایت"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;

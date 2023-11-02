import { useAppStore } from "../../appStore";
import "./AboutCard.css"

const AboutSection1 = () => {
  const { darkMode, language } = useAppStore();

  return (
    <div className="container min-h-screen mx-auto py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          {language === "English" ? "About Us" : "درباره ما"}
        </h1>
        <p className="mt-4 text-lg">
          {language === "English"
            ? "We are a passionate team dedicated to creating innovative solutions."
            : " ما یک تیم پرشور هستیم که به ایجاد راه حل های نوآورانه اختصاص یافته است."}
        </p>
      </div>
      <div className="mt-12 p-3 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`p-6  custom-card cursor-pointer ${
            darkMode ? "bg-white" : "bg-teal-300"
          } bg-opacity-20 rounded-xl`}
        >
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-gray-100" : "text-gray-900"
            } mb-4`}
          >
            {language === "English" ? "Our Mission" : "ماموریت  ما"}
          </h2>
          <p className="text-lg">
            {language === "English"
              ? "Our mission is to provide a very efficient and simple journal management system. By focusing on improving the quality of journaling processes and helping publishers and authors publish their content, we help promote science and access global scientific information."
              : " ماموریت ما ارائه یک سیستم مدیریت ژورنال بسیار کارآمد و ساده است. با تمرکز بر روی افزایش کیفیت فرآیندهای ژورنال نگاری و کمک به ناشران و نویسندگان در انتشار محتوای خود، ما به ترویج علم و دسترسی به اطلاعات علمی جهانی کمک می‌کنیم."}
          </p>
        </div>
        <div
          className={`p-6 custom-card  cursor-pointer ${
            darkMode ? "bg-white" : "bg-teal-300"
          } bg-opacity-20 rounded-xl`}
        >
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-gray-100" : "text-gray-900"
            } mb-4`}
          >
            {language === "English" ? "Our Team" : " تیم ما"}
          </h2>
          <p className="text-lg">
            {language === "English"
              ? "In our team, we try to provide you the best journal management services with our various efforts and experiences. Our team is made up of people with diverse expertise dedicated to improving journaling processes."
              : " در تیم ما، تلاش می‌کنیم تا با تلاش و تجربه‌های گوناگونی که داریم، به شما بهترین خدمات مدیریت ژورنال را ارائه دهیم. تیم ما از افراد با تخصص‌های متنوعی تشکیل شده است که به بهبود فرآیندهای ژورنال نگاری اختصاص داده‌اند."}
          </p>
        </div>

        <div
          className={`p-6  custom-card cursor-pointer ${
            darkMode ? "bg-white" : "bg-teal-300"
          } bg-opacity-20 rounded-xl`}
        >
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-gray-100" : "text-gray-900"
            } mb-4`}
          >
            {language === "English" ? "Our beliefs" : " اعتقادات ما"}
          </h2>
          <p className="text-lg">
            {language === "English"
              ? "We believe in the importance of science and knowledge and are proud to help disseminate and transfer knowledge to the scientific community and researchers around the world. We use the latest technologies to improve journaling processes to help you achieve greater productivity."
              : "ما به اهمیت علم و دانش اعتقاد داریم و با افتخار در کمک به انتشار و انتقال دانش به جامعه علمی و محققان در سرتاسر جهان وقوف داریم. ما از فناوری‌های نوین برای بهبود فرآیندهای ژورنال نگاری استفاده می‌کنیم تا به شما کمک کنیم تا به بهره وری بیشتری دست یابید."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;

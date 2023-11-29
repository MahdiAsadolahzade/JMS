import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // افزودن listener به رویداد scroll
    const handleScroll = () => {
      // دریافت ارتفاع اسکرول
      const scrollY = window.scrollY;

      // تعیین شرط نمایش یا عدم نمایش دکمه
      setIsVisible(scrollY > 0);
    };

    // افزودن listener به رویداد scroll
    window.addEventListener("scroll", handleScroll);

    // حذف listener در زمان unmount کامپوننت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // useEffect را یک‌بار فقط اجرا کنید

  const scrollToTop = () => {
    // اسکرول به بالا با smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 bg-blue-500 p-2 rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-white" />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;

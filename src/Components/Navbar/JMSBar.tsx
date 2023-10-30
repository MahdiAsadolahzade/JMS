import React, { useState, useEffect } from "react";
import { useAppStore } from "../../appStore";

interface JMSBarProps {}

const JMSBar: React.FC<JMSBarProps> = ({}) => {
  const { darkMode  } = useAppStore();
  const [shouldHide, setShouldHide] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleWindowResize = () => {
      setShouldHide(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <span
      className={`text-2xl font-bold cursor-pointer ${
        darkMode ? "text-gray-200" : "text-gray-100"
      } ${shouldHide ? "hidden" : ""}`}
    >
      JMS
    </span>
  );
};

export default JMSBar;

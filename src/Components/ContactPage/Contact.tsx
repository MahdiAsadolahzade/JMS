import { useState, useEffect } from "react";
import { useAppStore } from "../../appStore";
import ContactSection1 from "./ContactSection1";
import ContactSection2 from "./ContactSection2.tsx";
import ContactSection3 from "./ContactSection3.tsx";
import "./Contact.css";
import LoadingAnimation from "../Loading Animation/LoadingAnimation.tsx";


const Contact = () => {
  const { darkMode } = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`custom-overflow h-[90vh] ${
        darkMode ? "dark bg-gray-600 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <LoadingAnimation />
        </div>
      ) : (
        <>
          <ContactSection1 />
          <ContactSection2 />
          <ContactSection3 />
          
        </>
      )}
    </div>
  );
};

export default Contact;

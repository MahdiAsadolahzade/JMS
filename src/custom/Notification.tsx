// CustomNotification.tsx
import React from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CustomNotificationProps {
  type: "success" | "error" | "info";
  message: string;
  options?: ToastOptions;
}

const CustomNotification: React.FC<CustomNotificationProps> = ({ type, message, options }) => {
  const showToast = () => {
    switch (type) {
      case "success":
        toast.success(message, { ...options, autoClose: 3000 }); // 3000 milliseconds
        break;
      case "error":
        toast.error(message, { ...options, autoClose: 3000 });
        break;
      case "info":
        toast.info(message, { ...options, autoClose: 3000 });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button onClick={showToast}>Show Notification</button>
      <ToastContainer />
    </div>
  );
};

export default CustomNotification;

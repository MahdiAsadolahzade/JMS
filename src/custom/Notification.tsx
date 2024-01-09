import React, { useState, useEffect } from 'react';
import './Notification.css'; // فایل استایل برای سفارشی‌سازی ظاهر

const Notification = ({ type, message }) => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 5000); // مدت زمان نمایش نوتیفیکیشن به میلی‌ثانیه

    return () => clearTimeout(timeout);
  }, []);

  return showNotification ? (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  ) : null;
};

export default Notification;

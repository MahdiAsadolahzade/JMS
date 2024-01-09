import React, { useEffect, useState } from "react";
import { useUserStore } from "../../userStore";
import { useAppStore } from "../../appStore";
import UserProfileEdit from "./UserProfileEdit";
import { ImProfile } from "react-icons/im";
import { useGetUser } from "../../hooks/useGetUser";
import "./../Scrollbar.css";

const UserProfile: React.FC = () => {
  const { setUser } = useUserStore();
  const { darkMode, language } = useAppStore();
  const { data: userData, isLoading } = useGetUser();
  const [profilePicture, setProfilePicture] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (userData) {
      setUser(userData);
      if (userData.Picture) {
        const blob = new Blob([new Uint8Array(userData.Picture.data)], {
          type: "image/jpeg",
        });
        const dataUrl = URL.createObjectURL(blob);
        setProfilePicture(dataUrl);
      }
    }
  }, [userData, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`bg-${
        darkMode ? "gray-900" : "white"
      } p-6 rounded-lg shadow-md text-center text-${
        darkMode ? "gray-100" : "gray-600"
      } h-[82.5vh] border-2 ${
        darkMode ? "border-teal-500" : "border-gray-500"
      } mx-auto`}
    >
      {userData ? (
        <div className="p-4">
          <h2 className="text-2xl flex justify-start items-center  font-bold mb-4">
            <div className="px-2">
              <ImProfile />
            </div>
            <div>{language === "Farsi" ? "پروفایل شما" : "Your Profile"}</div>
          </h2>

          {profilePicture && (
            <img
              src={profilePicture}
              alt={userData.Name || ""}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
          )}

          <div className="text-center flex flex-col justify-center items-center">
            <div className="flex items-center space-x-4 mb-2">
              <span className="font-bold w-24">
                {language === "Farsi" ? "نام:" : "Name:"}
              </span>
              <span>{userData.Name}</span>
            </div>
            <div className="flex items-center space-x-4 mb-2">
              <span className="font-bold w-24">
                {language === "Farsi" ? "نام کاربری:" : "Username:"}
              </span>
              <span>{userData.UserName}</span>
            </div>
            <div className="flex items-center space-x-4 mb-2">
              <span className="font-bold w-24">
                {language === "Farsi" ? "شماره:" : "Number:"}
              </span>
              <span>{userData.Number}</span>
            </div>
            <div className="flex items-center space-x-4 mb-2">
              <span className="font-bold w-24">
                {language === "Farsi" ? "آدرس:" : "Address:"}
              </span>
              <span>{userData.Address}</span>
            </div>
            <div className="flex items-center space-x-4 mb-2">
              <span className="font-bold w-24">
                {language === "Farsi" ? "تحصیلات:" : "Education:"}
              </span>
              <span>{userData.Education}</span>
            </div>
          </div>

          <UserProfileEdit  />
        </div>
      ) : (
        <p className="mb-4">
          {language === "Farsi" ? "لطفاً وارد شوید" : "Please log in"}
        </p>
      )}
    </div>
  );
};

export default UserProfile;

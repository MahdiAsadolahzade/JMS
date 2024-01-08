import React, { useEffect, useState } from "react";
import { useUserStore } from "../../userStore";
import { useAppStore } from "../../appStore";
import UserProfileEdit from "./UserProfileEdit";
import { ImProfile } from "react-icons/im";
import { useGetUser } from "../../hooks/useGetuser";
import "./../Scrollbar.css";

const UserProfile: React.FC = () => {
  const { setUser  } = useUserStore();
  const { darkMode, language } = useAppStore();
  const {data: userData, isLoading} = useGetUser()
  const [profilePicture, setProfilePicture] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (userData) {
      setUser(userData);
      if (userData.Picture) {
        const blob = new Blob([new Uint8Array(userData.Picture.data)], { type: "image/jpeg" });
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
      className={`bg-${darkMode ? "gray-900" : "white"} p-6 rounded-lg shadow-md text-center text-${darkMode ? "gray-100" : "gray-600"} h-[82.5vh] border-2 ${darkMode ? "border-teal-500" : "border-gray-500"} mx-auto`}
    >
      {userData ? (
        <div className="p-4">
          <h2 className="text-2xl flex justify-start items-center  font-bold mb-4">
            <div className="px-2"><ImProfile/></div>
            <div>{language === "Farsi" ? "پروفایل شما" : "Your Profile"}</div>
          </h2>
          
          {profilePicture && (
            <img
              src={profilePicture}
              alt={userData.Name || ""}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
          )}
          
          <h2 className="text-xl font-bold mb-2">{userData.Name}</h2>
          <p className="mb-4">{userData.Email}</p>
          <UserProfileEdit />
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


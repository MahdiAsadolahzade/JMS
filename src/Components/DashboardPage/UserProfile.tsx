import React from "react";
import { useUserStore } from "../../userStore";
import { useAppStore } from "../../appStore";
import UserProfileEdit from "./UserProfileEdit";
import { ImProfile } from "react-icons/im";

const UserProfile: React.FC = () => {
  const { user } = useUserStore();
  const { darkMode, language } = useAppStore();

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
      {user ? (
        <div className="p-4">
          <h2 className="text-2xl flex justify-start items-center  font-bold mb-4">
              <div className="px-2"><ImProfile/></div>
              <div>{language === "Farsi" ? "پروفایل شما" : "Your Profile"}</div>
            </h2>
          
          <img
            src={user.profilePicture}
            alt={user.displayName}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{user.displayName}</h2>
          <p className="mb-4">{user.email}</p>
          <UserProfileEdit user={user} />
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

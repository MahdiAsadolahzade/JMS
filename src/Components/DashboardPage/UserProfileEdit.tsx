import React, { useState } from "react";
import { useUserStore, User } from "../../userStore";
import { useAppStore } from "../../appStore";

interface UserProfileEditProps {
  user: User;
}

const UserProfileEdit: React.FC<UserProfileEditProps> = ({ user }) => {
  const { updateUser } = useUserStore();
  const { darkMode, language } = useAppStore();
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(user?.displayName || "");
  const [editedPhoto, setEditedPhoto] = useState(user?.profilePicture || "");
  const [editedMobile, setEditedMobile] = useState(user?.mobile || "");
  const [editedAddress, setEditedAddress] = useState(user?.address || "");

  const handleEditProfile = () => {
    setEditedName(user?.displayName || "");
    setEditedPhoto(user?.profilePicture || "");
    setEditedMobile(user?.mobile || "");
    setEditedAddress(user?.address || "");
    setEditMode(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditedPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedMobile(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAddress(e.target.value);
  };

  const handleSaveChanges = () => {
    const updatedUser: User = {
      ...user!,
      displayName: editedName,
      profilePicture: editedPhoto,
      mobile: editedMobile,
      address: editedAddress,
    };
    updateUser(updatedUser);
    setEditMode(false);
  };

  return (
    <>
      {editMode ? (
        <div className={`h-[40vh] custom-overflow space-y-10 `}>
          <label className="block mb-4">
            {language === "Farsi" ? "نام:" : "Name:"}
            <input
              type="text"
              value={editedName}
              onChange={handleNameChange}
              className={`mt-1 p-2 border border-gray-300 rounded w-full  ${
                darkMode ? "bg-gray-800" : ""
              } `}
            />
          </label>
          <label className="block mb-4">
            {language === "Farsi" ? "تصویر:" : "Photo:"}
            <input
              type="file"
              onChange={handlePhotoChange}
              className={`mt-1 p-2 border  border-gray-300 rounded w-full ${
                darkMode ? "bg-gray-800" : ""
              } `}
            />
          </label>
          <label className="block mb-4">
            {language === "Farsi" ? "شماره همراه:" : "Phone Number:"}
            <input
              type="text"
              value={editedMobile}
              onChange={handleMobileChange}
              className={`mt-1 p-2 border border-gray-300 rounded w-full ${
                darkMode ? "bg-gray-800" : ""
              } `}
            />
          </label>
          <label className="block mb-4">
            {language === "Farsi" ? "آدرس:" : "Address:"}
            <input
              type="text"
              value={editedAddress}
              onChange={handleAddressChange}
              className={`mt-1 p-2 border border-gray-300 rounded w-full ${
                darkMode ? "bg-gray-800" : ""
              } `}
            />
          </label>
          <div className="flex  justify-center">
            <button
              onClick={handleSaveChanges}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mx-4"
            >
              {language === "Farsi" ? "ذخیره" : "Save"}
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
            >
              {language === "Farsi" ? "لغو" : "Cancel"}
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleEditProfile}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          {language === "Farsi" ? "ویرایش پروفایل" : "Edit Profile"}
        </button>
      )}
    </>
  );
};

export default UserProfileEdit;

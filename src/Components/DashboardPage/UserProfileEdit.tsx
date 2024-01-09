import { useState } from "react";
import useUpdateUser from "../../hooks/useUpdateUser";
import EditProfileForm from "../../Schemas/EditProfileForm";
import { useAppStore } from "../../appStore";
import {useUserStore} from "../../userStore";
import Notification from "../../custom/Notification";
import {useNavigate } from "react-router-dom";
import "../Scrollbar.css";

const CustomDialog = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg z-50 max-w-md w-full">
        {children}
      </div>
    </div>
  );
};

const EditProfile = () => {
  const { darkMode, language } = useAppStore();
  const editProfileData = useUpdateUser();
  const [isEditing, setIsEditing] = useState(false);
  const {updateUser} =useUserStore()
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await editProfileData.mutate(data);
      updateUser(data);
      setIsEditing(false);
      navigate("/dashboard")
    } catch (error) {}
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
         {editProfileData.isError && (
         <Notification type="error" message={`${language === "Farsi" ? "مشکلی رخ داد دوباره بررسی کنید" : "Something went wrong, please check again"}`} />
          )}

          {editProfileData.isSuccess && (
            <Notification type="success" message={`${language === "Farsi" ? "پروفایل با موفقیت ویرایش شد" : "Profile updated successfully"}`} />
          )}
      <button
        className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 focus:outline-none"
        onClick={() => setIsEditing(true)}
      >
        {language === "English" ? "Edit Profile" : "ویرایش پروفایل"}
      </button>

      <CustomDialog isOpen={isEditing} onClose={handleCancel}>
        <div
          className={`${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-800"
          } max-h-[50vh] custom-overflow w-full mx-auto rounded-lg`}
        >
          <h2
            className={` ${
              darkMode ? "text-gray-100" : "text-gray-800"
            } text-2xl p-4`}
          >
            {language === "English" ? "Edit Profile" : "ویرایش پروفایل"}
          </h2>
          <div className="p-3">
            <EditProfileForm onSubmit={handleSubmit} onCancel={handleCancel} />
          </div>
        </div>
      </CustomDialog>
    </div>
  );
};

export default EditProfile;

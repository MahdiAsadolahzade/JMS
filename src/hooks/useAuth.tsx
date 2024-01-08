// در useAuth.ts
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserStore, User } from "../userStore";

interface EditProfileFormData {
  id: string;
  Name: string;
  Number: string;
  Address: string;
  Education: string;
  Picture: FileList;
}


export function useAuth() {
  const queryClient = useQueryClient();
  const setUserStore = useUserStore((state) => state.updateUser);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  

  const register = async (userData: any) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/server/auth/register",
        userData
      );

      const user: User = {
        id: data.ID,
        username: data.UserName,
        displayName: data.Name,
        email: data.Email,
        profilePicture: data.Picture,
        mobile: data.Number,
        address: data.Address,
        education: data.Education,
        isAuthenticated: true,
        journals: data.Journals,
      };

      setUserStore(user);
      setError(null);

      return user;
    } catch (error) {
      console.log(error);
      setError("Registration failed. Please try again.");
      throw error;
    }
  };

  // ...
// useAuth.ts
// ...

const editProfile = async (updatedData: EditProfileFormData) => {
  try {
    const formData = new FormData();
    formData.append("Name", updatedData.Name);
    formData.append("Number", updatedData.Number);
    formData.append("Address", updatedData.Address);
    formData.append("Education", updatedData.Education);
    formData.append("Picture", updatedData.Picture[0]);

    const { data } = await axios.put(
      `http://localhost:3001/server/auth/update/${updatedData.id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const updatedUser: User = {
      id: data.ID,
      username: data.UserName,
      displayName: data.Name,
      email: data.Email,
      profilePicture: data.Picture,
      mobile: data.Number,
      address: data.Address,
      education: data.Education,
      isAuthenticated: true,
      journals: data.Journals,
    };

    setUserStore(updatedUser);
    setError(null);

    return updatedUser;
  } catch (error) {
    console.error('Profile update failed', error);
    setError('Profile update failed. Please try again.');
    throw error;
  }
};

// ...

  
  // ...
  

  const logout = async () => {
    try {
      await axios.post("http://localhost:3001/server/auth/logout");
      localStorage.removeItem("user");
      return null;
    } catch (error) {
      throw error;
    }
  };


  const { mutate: registerMutation } = useMutation(register, {
    onSuccess: () => {
      queryClient.invalidateQueries("currentUser");
    },
  });

  const { mutate: editProfileMutation } = useMutation<User, unknown, EditProfileFormData, unknown>(editProfile, {
  onSuccess: () => {
    queryClient.invalidateQueries('currentUser');
  },
});

const { mutate: logoutMutation } = useMutation(logout, {
  onSuccess: () => {

    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  },
});


  return {
    register: registerMutation,
    editProfile: editProfileMutation,
    logout : logoutMutation,
    error,
  };
}

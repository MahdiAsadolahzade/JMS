// در useAuth.ts
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface EditProfileFormData {
  id: string;
  Name: string;
  Number: string;
  Address: string;
  Education: string;
  Picture: FileList;
}


export function useAuth() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  


  const logout = async () => {
    try {
      await axios.post("http://localhost:3001/server/auth/logout");
      localStorage.removeItem("user");
      return null;
    } catch (error) {
      throw error;
    }
  };




const { mutate: logoutMutation } = useMutation(logout, {
  onSuccess: () => {

    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  },
});


  return {
  
    logout : logoutMutation,
    error,
  };
}

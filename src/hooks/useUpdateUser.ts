// hooks/useUpdateUser.ts
import axios from "axios";
import { useMutation, UseMutationResult } from "react-query";

interface UpdateUserData {
  Name: string;
  Number: string;
  Address: string;
  Education: string;
  Picture: FileList | null;
}

const useUpdateUser = (): UseMutationResult => {
  return useMutation((data: UpdateUserData) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Number", data.Number);
    formData.append("Address", data.Address);
    formData.append("Education", data.Education);
    formData.append("Picture", data.Picture[0]);

    return axios.put("http://localhost:3001/server/users/update", formData, {
      withCredentials: true,
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      },
    });
  });
};

export default useUpdateUser;

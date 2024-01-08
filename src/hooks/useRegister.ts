import axios from "axios";
import { useMutation } from "react-query";

export const useRegister = <T>() => {
  return useMutation((data: T) =>
    axios.post("http://localhost:3001/server/auth/register", data ,{ withCredentials: true })
  );
};

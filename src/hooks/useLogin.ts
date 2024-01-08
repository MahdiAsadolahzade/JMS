import axios from "axios";
import { useMutation } from "react-query";

export const useLogin = <T>() => {
  return useMutation((data: T) =>
    axios.post("http://localhost:3001/server/auth/login", data ,{ withCredentials: true })
  );
};

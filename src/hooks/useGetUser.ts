import axios from "axios";
import { useQuery } from "react-query";


export const useGetUser = () => {
  return useQuery({
    queryKey: "getData",
    queryFn: () =>
      axios
        .get("http://localhost:3001/server/users/find" , { withCredentials: true })
        .then((response) => response.data),
  });
};

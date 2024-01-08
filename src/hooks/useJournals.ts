// hooks/useJournals.js
import axios from "axios";
import { useQuery, useMutation } from "react-query";


interface data {
    Name: string;
    Description: string;
    Year: string;
    PDF: FileList | null;
    Picture: FileList | null;
    journalId: number
  }


export const useGetJournals = () => {
  return useQuery({
    queryKey: "getJournals",
    queryFn: () =>
      axios
        .get("http://localhost:3001/server/journal/find")
        .then((response) => response.data),
  });
};

export const useAddJournal = () => {
  return useMutation((data :data) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Description", data.Description);
    formData.append("Year", data.Year);
    formData.append("Picture", data.Picture[0]);
    formData.append("PDF", data.PDF[0]);

    return axios.post("http://localhost:3001/server/journal/addjournal", formData, {
      withCredentials: true,
    });
  });
};

export const useUpdateJournal = () => {
  return useMutation((data : data) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Description", data.Description);
    formData.append("Year", data.Year);
    formData.append("Picture", data.Picture[0]);
    formData.append("PDF", data.PDF[0]);

    return axios.post(
      `http://localhost:3001/server/journal/update/${data.journalId}`,
      formData,
      {
        withCredentials: true,
      }
    );
  });
};

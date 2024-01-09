// hooks/useStatistics.js
import { useQuery } from "react-query";
import axios from "axios";

export const useUserCount = () => {
  return useQuery({
    queryKey: "user-count",
    queryFn: () =>
      axios
        .get("http://localhost:3001/server/public/user-count", {
          withCredentials: true,
        })
        .then((response) => response.data),
  });
};

export const useJournalCount = () => {
  return useQuery({
    queryKey: "journal-count",
    queryFn: () =>
      axios
        .get("http://localhost:3001/server/public/journal-count", {
          withCredentials: true,
        })
        .then((response) => response.data),
  });
};

export const useAllJournals = () => {
  return useQuery({
    queryKey: "all-journals",
    queryFn: () =>
      axios
        .get("http://localhost:3001/server/public/all-journals", {
          withCredentials: true,
        })
        .then((response) => response.data),
  });
};

export const useJournalById = (id) => {
  return useQuery({
    queryKey: ["journal", id],
    queryFn: () =>
      axios
        .get(`http://localhost:3001/server/public/journal/${id}`, {
          withCredentials: true,
        })
        .then((response) => response.data),
  });
};


export const useSearchJournals = (searchText) => {
  return useQuery({
    queryKey: ["search-journals", searchText],
    queryFn: () =>
      axios
        .get(`http://localhost:3001/server/public/search-journals?searchText=${searchText}`, {
          withCredentials: true,
        })
        .then((response) => response.data),
  });
};

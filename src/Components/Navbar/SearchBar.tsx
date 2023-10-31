import React from "react";
import { useAppStore } from "../../appStore";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
  darkMode: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  darkMode,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const { language } = useAppStore();

  return (
    <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e)}
        placeholder={`${language==="English"?"Search":"جستجو"}`}
        className={`${
          darkMode
            ? "bg-gray-700 text-gray-300"
            : "bg-gray-200 text-gray-700"
        } p-2 pl-8 pr-2 rounded-full focus:outline-none text-center`}
      />
  );
};

export default SearchBar;

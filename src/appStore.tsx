import create from "zustand";

type AppState = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  setLanguage: (language: string) => void;
};

export const useAppStore = create<AppState>((set) => {
  const initialDarkMode = localStorage.getItem("darkMode") === "true";

  const initialLanguage = localStorage.getItem("language") || "English";

  return {
    darkMode: initialDarkMode,
    toggleDarkMode: () => {
      set((state) => {
        const newDarkMode = !state.darkMode;
        localStorage.setItem("darkMode", newDarkMode.toString());
        return { darkMode: newDarkMode, language: state.language };
      });
    },
    language: initialLanguage,
    setLanguage: (language) => {
      set((state) => {
        localStorage.setItem("language", language);
        return { language, darkMode: state.darkMode };
      });
    },
  };
});

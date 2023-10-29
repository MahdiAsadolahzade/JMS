import create from 'zustand';

type AppState = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  setLanguage: (language: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  darkMode: localStorage.getItem('darkMode') === 'true',
  toggleDarkMode: () => {
    set((state) => {
      const newDarkMode = !state.darkMode;
      localStorage.setItem('darkMode', newDarkMode.toString());
      return { darkMode: newDarkMode };
    });
  },
  language: 'English',
  setLanguage: (language) => set({ language }),
}));

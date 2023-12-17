import create from "zustand";
import img from "../public/Images/img.jpg";

type Journal = {
  id: number;
  title: string;
  content: string;
};

export type User = {
  id: number;
  displayName: string;
  email: string;
  profilePicture: string;
  mobile: string;
  address: string;
  isAuthenticated: boolean;
  journals: Journal[];
};

type UserStore = {
  user: User | null;
  steps: number;
  signIn: () => void;
  signOut: () => void;
  addJournal: (newJournal: Journal) => void;
  updateUser: (updatedUser: User) => void;
  nextStep: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  steps: 1,
  signIn: () =>
    set({
      user: {
        id: 1,
        displayName: "Mahdi Asadolahzade",
        email: "mahdiasadi140@gmail.com",
        profilePicture: img,
        mobile: "",
        address: "",
        isAuthenticated: true,
        journals: [],
      },
    }),
  signOut: () => set({ user: null, steps: 1 }),
  addJournal: (newJournal) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            journals: [...state.user.journals, newJournal],
          }
        : null,
    })),
  updateUser: (updatedUser) => set({ user: updatedUser }),
  nextStep: () => set((state) => ({ steps: state.steps + 1 })),
}));

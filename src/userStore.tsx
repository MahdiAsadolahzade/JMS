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
  signIn: () => void;
  signOut: () => void;
  addJournal: (newJournal: Journal) => void;
  updateUser: (updatedUser: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
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
  signOut: () => set({ user: null }),
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
}));

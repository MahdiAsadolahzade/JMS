import create from 'zustand';
import img from "../public/Images/img.jpg"

type Journal = {
  id: number;
  title: string;
  content: string;
};

type User = {
  id: number;
  displayName: string;
  email: string;
  profilePicture: string;
  isAuthenticated: boolean;
  journals: Journal[];
};

type UserStore = {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
  updateUser: (updatedUser: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  signIn: () => set({
    user: {
      id: 1, // Provide a unique user ID
      displayName: 'Mahdi Asadolahzade',
      email: 'mahdiasadi140@gmail,com',
      profilePicture: img,
      isAuthenticated: true,
      journals: [], // Initialize with an empty array
    },
  }),
  signOut: () => set({ user: null }),
  updateUser: (updatedUser) => set({ user: updatedUser }),
}));

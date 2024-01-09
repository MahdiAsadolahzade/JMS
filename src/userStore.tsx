// در فایل useUserStore.ts
import create from 'zustand';
import img from '../public/Images/img.jpg';

type Journal = {
  ID: number;
  Name: string;
  Description: string;
  Year:string;
  Picture:File;
  PDF:File;
};

export type User = {
  id: number;
  username : string;
  displayName: string;
  email: string;
  profilePicture: string;
  mobile: string;
  address: string;
  education:string;
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
  setUser: (user: User) => void;
  getLastUpdatedUser: () => User | null;
};

const getUserFromLocalStorage = (): User | null => {
  const userString = localStorage.getItem('user');
  if (userString) {
    return JSON.parse(userString);
  }
  return null;
};

export const useUserStore = create<UserStore>((set) => {
  const storedUser = getUserFromLocalStorage();

  return {
    user: storedUser,
    steps: 1,
    signIn: () => set({ user: storedUser }),
    signOut: () => {
      localStorage.removeItem('user');
    },
    addJournal: (newJournal) =>
      set((state) => ({
        user: state.user
          ? {
              ...state.user,
              journals: [...state.user.journals, newJournal],
            }
          : null,
      })),
    updateUser: (updatedUser) => {
      localStorage.setItem('user', JSON.stringify(updatedUser));
      set({ user: updatedUser });
    },
    nextStep: () => set((state) => ({ steps: state.steps + 1 })),
    setUser: (user) => set({ user }), 
    getLastUpdatedUser: () => {
      const userString = localStorage.getItem('user');
      return userString ? JSON.parse(userString) : null;
    },
  };
});

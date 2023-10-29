import create from 'zustand';

type User = {
  displayName: string;
};

type UserStore = {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  signIn: () => set({ user: { displayName: 'John Doe' } }),
  signOut: () => set({ user: null }),
}));

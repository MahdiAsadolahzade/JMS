import create from 'zustand';

type User = {
  displayName: string;
};

type UserStore = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,
  signIn: () => set({ user: { displayName: 'John Doe' }, isAuthenticated: true }),
  signOut: () => set({ user: null, isAuthenticated: false }),
}));

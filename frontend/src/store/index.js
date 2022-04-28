import create from 'zustand';
import { persist } from 'zustand/middleware';
import vite from './vite';

const useStore = create(
  persist(
    (set, get) => ({
      ...vite(set, get),
    }),
    {
      name: 'star-storage',
      getStorage: () => sessionStorage,
    },
  ),
);

export { useStore };

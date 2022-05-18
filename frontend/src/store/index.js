import create from 'zustand';
import { persist } from 'zustand/middleware';

import vite from './vite';
import user from './user';
import nasa from './nasa';
import pickCharacter from './pickCharacter';
import guideSkip from './guideSkip';
const useStore = create(
  persist(
    (set, get) => ({
      ...vite(set, get),
      ...user(set, get),
      ...nasa(set, get),
      ...pickCharacter(set, get),
      ...guideSkip(set, get),
    }),
    {
      name: 'star-storage',
      getStorage: () => sessionStorage,
    },
  ),
);

export { useStore };

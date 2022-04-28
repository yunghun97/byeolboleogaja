import create from 'zustand';

import vite from './vite';

const useStore = create((set, get) => ({
  ...vite(set, get),
}));

export { useStore };

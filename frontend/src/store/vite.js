const vite = (set, get) => ({
  count: 0,
  increase: () => set((prev) => ({ count: prev.count + 1 })),
});

export default vite;

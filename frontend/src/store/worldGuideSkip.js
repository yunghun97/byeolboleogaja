const worldGuideSkip = (set, get) => ({
  isSkip: 0,
  setisSkip: (isSkip) => set((prev) => ({ isSkip })),
});

export default worldGuideSkip;

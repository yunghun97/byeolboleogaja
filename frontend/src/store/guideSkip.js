const guideSkip = (set, get) => ({
  flag: 0,
  setFlag: (flag) => set((prev) => ({ flag })),
});

export default guideSkip;

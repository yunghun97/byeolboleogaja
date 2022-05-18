const pickCharater = (set, get) => ({
  chracterColor: '',
  setCharacterColor: (chracterColor) => set((prev) => ({ chracterColor })),
});

export default pickCharater;

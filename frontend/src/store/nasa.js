import mainBg from '@/assets/bg-main.png';

const nasa = (set, get) => ({
  apodUrl: mainBg,
  setApodUrl: (apodUrl) => set((prev) => ({ apodUrl })),
});

export default nasa;

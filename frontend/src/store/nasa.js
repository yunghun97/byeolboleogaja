import andromedaBg from '@/assets/img/loading/bg-loading-1.jpg';

const nasa = (set, get) => ({
  apodUrl: andromedaBg,
  setApodUrl: (apodUrl) => set((prev) => ({ apodUrl })),
});

export default nasa;

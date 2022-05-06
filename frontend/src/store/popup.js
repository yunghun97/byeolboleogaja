const popup = (set, get) => ({
  open: false,
  setOpen: (open) => set((prev) => ({ open })),
});

export default popup;

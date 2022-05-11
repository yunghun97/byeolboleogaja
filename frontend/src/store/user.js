const user = (set, get) => ({
  nickname: '',
  setNickname: (nickname) => set((prev) => ({ nickname })),
});

export default user;

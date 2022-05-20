import { api } from '.';

const getFlags = async (sortOptions) => {
  return await api.get(`/flag/${sortOptions}`);
};

const addFlag = async (flag) => {
  return await api.post(`/flag`, flag);
};

export { getFlags, addFlag };

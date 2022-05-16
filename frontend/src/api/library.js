import { api } from '.';

const getBooks = async () => {
  return await api.get(`/library`);
};

export { getBooks };

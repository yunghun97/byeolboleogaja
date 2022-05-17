import { api } from '.';

const getBooks = async (category) => {
  return await api.get(`/library?category=${category}`);
};

export { getBooks };

import { api } from '.';

const getCommonSence = async () => {
  return await api.get(`/information`);
};

export { getCommonSence };

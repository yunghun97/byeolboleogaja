import { api } from '.';

const getApodS3 = async () => {
  return await api.get(`/file`);
};

export { getApodS3 };

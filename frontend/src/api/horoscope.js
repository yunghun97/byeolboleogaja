import { api } from '.';

const getHoroscope = async () => {
  return await api.get(`/horoscope`);
};

export { getHoroscope };

import { api } from '.';

const getSatellite = async (satelliteId) => {
  return await api.get(`/museum/${satelliteId}`);
};

export { getSatellite };

import { nasaApi } from '.';

const API_KEY = 'kOsX1znPvbiww7eZPcW2s8kXz3YwQqCylstvmO4G';

const getApod = async () => {
  return await nasaApi.get(`/apod?api_key=${API_KEY}`);
};

export { getApod };

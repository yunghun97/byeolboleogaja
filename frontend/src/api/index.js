import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  headers: {
    'Content-Type': 'application/json',
  },
});

const chatApi = axios.create({
  baseURL: 'http://k6b1021.p.ssafy.io:9998',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api, nasaApi, chatApi };

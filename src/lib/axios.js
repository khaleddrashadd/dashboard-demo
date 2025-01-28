import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_API_URL;

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true,
});

export default axios.create({
  baseURL,
});

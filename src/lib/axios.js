import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_API_URL;

export const axiosPrivate = axios.create({
  baseURL,
});

let navigateRef;

// Function to set navigate reference
export const setNavigateRef = (navigate) => {
  navigateRef = navigate;
};
// Request interceptor
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// Response interceptor
axiosPrivate.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err?.response?.status === 403) {
      localStorage.removeItem('token');

      navigateRef('/login', { replace: true });
    }
    return Promise.reject(err);
  }
);

export default axios.create({
  baseURL,
});

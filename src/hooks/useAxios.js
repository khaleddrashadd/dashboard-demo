import { useEffect } from 'react';
import axios from '@/lib/axios';
import { useNavigate } from 'react-router';

const token = localStorage.getItem('token');
const useAxiosPrivate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        console.log(config);
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseIntercept = axios.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err?.response?.status === 403) {
          localStorage.removeItem('token');
          navigate('/login', { replace: true });
        }
        return Promise.reject(err);
      }
    );
    return () => {
      axios.interceptors.request.eject(requestIntercept);
      axios.interceptors.response.eject(responseIntercept);
    };
  }, [navigate]);

  return axios;
};
export default useAxiosPrivate;

import axios from 'axios';
import { getItemFromLocalStorage } from '../HelperFunctions/UseLocalStorage';
import baseURL from './baseUrl';


// Create an Axios instance
const api = axios.create({baseURL});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
  (config) => {
    const token = getItemFromLocalStorage('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://52.221.216.52:8080/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptors
axiosClient.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

// Add response interceptors
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error) => Promise.reject(error)
);

export default axiosClient;

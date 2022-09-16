import axios from 'axios';
import { store } from '../index';
import { authActionCreator } from '../utils/configureActionCreators';
import { getLocalStorageItem } from '../utils/localStorageUtils';
import APP_CONFIG from '../config/app-config.json';

export const axiosInstance = axios.create({
  baseURL: APP_CONFIG.AWS_API_GATEWAY_CONFIG.API_URL,
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  (config: any) => {
    const access_token: any = getLocalStorageItem('accessToken');
    if (access_token) {
      config.headers['Authorization'] = 'Bearer ' + access_token;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (error?.response?.status === 401) {
      delete axiosInstance.defaults.headers.common['Authorization'];
      store.dispatch(authActionCreator.clearSession());
      alert('Session Expired');
      localStorage.clear();
      return error.response;
    } else {
      return Promise.reject(error);
    }
  }
);

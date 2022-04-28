import axios from 'axios';
import { Notify } from 'vant';
const ApiClient = axios.create({
  baseURL: '/',
  headers: {
    'Content-type': 'application/json',
  },
});

ApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: 'Bearer ' + token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
ApiClient.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.status >= 200 && response.status < 400) {
      return Promise.resolve(response.data);
    } else {
      Notify({ type: 'danger', message: response.data.error });
      return Promise.reject(response.data);
    }
  },
  (error) => {
    const { response } = error;
    Notify({ type: 'danger', message: response.data.error });
    return Promise.reject(response.data);
  }
);
export default ApiClient;

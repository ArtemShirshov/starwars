import axios from 'axios';

const configuration = {
  baseURL: 'https://swapi.dev/api/',
  crossdomain: true,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  mode: 'cors',
  timeout: 60000,
};

const instance = axios.create(configuration);

const onRejected = (error) => Promise.reject(error);

instance.interceptors.request.use(null, onRejected);

export { instance };

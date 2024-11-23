import Axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/beyzayurukakar-p/case-for-baykar';

export const client: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

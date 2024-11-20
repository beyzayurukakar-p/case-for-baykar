import Axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:3000';

export const client: AxiosInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

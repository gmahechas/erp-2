import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export const axiosClient = (
  baseURL: string,
  axiosRequestConfig?: AxiosRequestConfig,
) => axios.create({ baseURL, ...axiosRequestConfig });
export { AxiosInstance };

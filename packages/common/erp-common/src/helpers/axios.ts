import axios, { AxiosRequestConfig } from 'axios';

export const axiosClient = (baseURL: string, axiosRequestConfig?: AxiosRequestConfig) => axios.create({ baseURL, ...axiosRequestConfig });
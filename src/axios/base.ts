import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class AxiosBase {
  protected axiosInstance: AxiosInstance;
  protected axiosConfig: AxiosRequestConfig;
  constructor(interceptors?: Array<any>) {
    this.axiosConfig = {
      baseURL: process.env.API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    this.axiosInstance = axios.create(this.axiosConfig);

    if (interceptors) {
      for (const interceptor of interceptors) {
        interceptor(this.axiosInstance);
      }
    }
  }
}

import axios, { AxiosInstance } from 'axios';

class Api {
  private static axiosInstance: AxiosInstance;

  static init() {
    this.axiosInstance = axios.create({
      baseURL: 'https://join-tsh-api-staging.herokuapp.com/',
    });
  }

  static async get<ResponseType>(url: string) {
    return await Api.axiosInstance.get<ResponseType>(url);
  }

  static async post<ResponseType, DataType>(url: string, data?: DataType) {
    return Api.axiosInstance.post<ResponseType, DataType>(url, data);
  }
}

export default Api;

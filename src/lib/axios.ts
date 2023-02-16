import keycloak from "../providers/keycloak";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

export let axiosInstance: AxiosInstance;

export function initializeAxios() {
  const axiosConfig = {
    baseURL: "http://localhost:8080",
  };
  axiosInstance = axios.create(axiosConfig) as AxiosInstance;
  addAxiosInterceptors(axiosInstance);
}

function addAxiosInterceptors(instance: AxiosInstance): void {
    instance.interceptors.request.use(authRequestInterceptor)
}

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    config.headers.authorization = `Bearer ${keycloak.token}`;
    return config;
}

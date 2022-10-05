import axios from "axios";

const HOST_URL = process.env.HOST_URL;

export const axiosClient = axios.create({
  baseURL: HOST_URL ? `${HOST_URL}/api` : "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

import axios from "axios";
import queryString from "query-string";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
    //   TokenCybersoft: process.env.REACT_APP_TOKEN_CYBERSOFT,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  // if(config.headers){

  // }
  return config;
});

axiosClient.interceptors.response.use(
  async (response) => {},
  (error) => {}
);

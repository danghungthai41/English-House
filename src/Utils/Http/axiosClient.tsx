import axios from "axios";
import queryString from "query-string";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (response) => {
  // if (response.config.headers) {
  //   const isLoading = response.config.headers.isLoading;
  //   isLoading && store.dispatch(setRequestSpinnerEnded());
  // }

  if (response && response.data) {
    return response.data;
  }
  return response;
});

// axiosClient.interceptors.response.use(
//   async (response) => {},
//   (error) => {}
// );

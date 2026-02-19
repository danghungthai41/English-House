import { AppDispatch } from './../Redux/store';
import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "x-tenant": "abc",
    "Content-Type": "application/json; multipart/form-data",
    "Ocp-Apim-Subscription-Key": "subKey",
    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNyIsIkhldEhhblN0cmluZyI6IjIxLzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NDI1OTIwMDAwMCIsIm5iZiI6MTY0NjE1NDAwMCwiZXhwIjoxNjc0NDA2ODAwfQ.5JfRY7XxLBvxphVDGE6br_uBYC9AbkqaSEmNTGvzWtQ",
  },
});



export default axiosClient;

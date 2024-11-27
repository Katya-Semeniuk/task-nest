import axios from "axios";

axios.defaults.baseURL = "https://tasknest-api-e8c3c073658c.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
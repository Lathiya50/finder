import axios from "axios";

const newRequest = axios.create({
  baseURL: import.meta.env.VITE_SERVER_LINK,
  withCredentials: true,
});

export default newRequest;

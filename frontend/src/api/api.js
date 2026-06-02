import axios from "axios";

const API = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL:import.meta.env.VITE_API_URL,
});

export default API;
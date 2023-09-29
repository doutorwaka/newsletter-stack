import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:3030";
const GATEWAY_URL = process.env.GATEWAY_URL || "http://localhost:8000";

export const nextApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const backendApi = axios.create({
  baseURL: GATEWAY_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

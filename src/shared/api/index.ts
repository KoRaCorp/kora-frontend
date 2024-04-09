import axios from "axios";

const baseURLFromEnv =
  typeof window === undefined
    ? process.env.CLIENT_ENDPOINT
    : process.env.NEXT_PUBLIC_CLIENT_ENDPOINT;

export const axiosInstance = axios.create({
  baseURL: baseURLFromEnv,
  headers: {
    "Content-Type": "application/json",
  },
});

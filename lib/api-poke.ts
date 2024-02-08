import axios from "axios";

export const apiPoke = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_POKE,
    headers: {
      "content-Type": "application/json",
    },
  });
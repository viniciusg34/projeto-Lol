import axios from "axios";

export const apiLol = axios.create({

    baseURL: 'https://62bdbe78c5ad14c110c5db13.mockapi.io/',

    headers: {
        'Content-Type' : 'application/Json'
    }
  });
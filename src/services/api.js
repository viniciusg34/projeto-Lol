import axios from "axios";

export const apiLol = axios.create({

    baseURL: 'https://62baf28a573ca8f8328f64dd.mockapi.io/',

    headers: {
        'Content-Type' : 'application/Json'
    }
  });
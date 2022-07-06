import axios from 'axios';
import { LoginDTO } from '../models/LoginDTO';

// const BASE_API = process.env.NEXT_PUBLIC_API_BASE;

export const tokens = {
    token: "",
    refresh: "",
};
  
axios.interceptors.request.use(function (config: any) {
    if (tokens.token) config.headers.Authorization = `Bearer ${tokens.token}`;
    return config;
});

/**
 * User Login API
 * params: LoginDTO
 */
 export const loginUser = async (credentials: LoginDTO) => {
    return "hello";
    // return await axios({
    //   method: "POST",
    //   baseURL: BASE_API,
    //   url: "/user/login",
    //   data: credentials,
    // })
    //   .then((response) => {
    //     tokens.token = response.data.data.token;
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     console.log("error");
        
    //   });
  };
  
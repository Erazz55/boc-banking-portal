import axios from 'axios';
import { LoginDTO } from '../models/LoginDTO';

// const BASE_API = process.env.NEXT_PUBLIC_API_BASE;
const BASE_API = "http://localhost:8080";

export const tokens = {
    token: "" ,
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
    console.log(credentials, "*****request login*****");
    
    return await axios({
      method: "POST",
      baseURL: BASE_API,
      url: "/login",
      data: credentials,
    })
      .then((response) => {
        console.log(response, "*****response login*****");
        tokens.token = response.data.data.accessToken;
        localStorage.setItem("token", response.data.data.accessToken);
        tokens.refresh = response.data.data.refreshToken;
        return response;
      })
      .catch((error) => {
        return "Invalid Credentional"
      });
  };
  
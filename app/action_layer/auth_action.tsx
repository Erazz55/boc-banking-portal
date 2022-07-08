import { loginUser } from "../api_layer/authAPI";

export const loginUserHandler = async (data: any) => {
    console.log(data, "****action login***");
    
    const response = await loginUser(data);
    console.log(response, "*******action response****");
    return response;
  };
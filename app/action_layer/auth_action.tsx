import { loginUser } from "../api_layer/authAPI";

export const loginUserHandler = async (data: any) => {
    await loginUser(data).then((resp) => {
        // if (resp.code === 9000) {
        //     return resp;
        //     // setLocalToken(resp.data.token)
        // }
        return resp;
    });
     
  };
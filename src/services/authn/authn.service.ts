import axiosInstance from "@/config/axios";

const loginService = async ({ loginIdentifier, password }: any) =>
  axiosInstance.post("/auth/login", {
    loginIdentifier: loginIdentifier,
    password: password,
  });

const registerService = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return axiosInstance.post("/register", {
    username: username,
    password: password,
  });
};
// const loginAPI = async({username,password}:any) =>{
//     const data = {
//         username:username,
//         password:password,
//     }
//     try {
//         const respone = axiosInstance.post("/auth/login",data)
//         return respone;
//     } catch (error:any) {
//         return error.response
//     }
// }
export { loginService, registerService };

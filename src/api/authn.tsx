import axiosInstance from "@/config/axios"

const loginAPI = async({username,password}:any) =>{
    const data = {
        username:username,
        password:password,
    }
    try {
        const respone = axiosInstance.post("/auth/login",data)
        return respone;
    } catch (error:any) {
        return error.response
    }
}
export {loginAPI};
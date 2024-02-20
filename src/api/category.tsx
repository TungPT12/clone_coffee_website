import axiosInstance from "@/config/axios"

const getCategoryAPI = async ()=>{
    try {
        const respone = await  axiosInstance.get("/category",
        {headers:{Authorization:""}}
        )
        return respone
    } catch (error) {
        return error 
    }
}
export {getCategoryAPI};
import axiosInstance from "@/config/axios"

const getCategoryAPI = async ()=>{
    try {
        const respone = await  axiosInstance.get("/category",
        {headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRpbnRyYW4iLCJzdWIiOiI2NWJhM2FhMDdhYTBhMGY0MWYwYTUzNWMiLCJpYXQiOjE3MDgzMTg1NzcsImV4cCI6MTcwODMxODg3N30.S2nOCm3iULg-VqIJVCqpVpg-hM9-dvSvtC3Z2j-720U"}}
        )
        return respone
    } catch (error) {
        return error 
    }
}
export {getCategoryAPI};
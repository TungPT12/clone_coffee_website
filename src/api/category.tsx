import axiosInstance from "@/config/axios";
import setHeader from "@/utils/setheader";

const getCategoryAPI = async (token: string) => {
  try {
    const respone = await axiosInstance.get(
      "/category",
      setHeader({ Authorization: "Bearer " + token })
    );
    return respone;
  } catch (error) {
    return error;
  }
};
export { getCategoryAPI };

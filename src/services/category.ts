import axiosInstance from "@/config/axios";
import setHeader from "@/utils/setheader";

const getCategoryAPI = async () => {
  try {
    const response = await axiosInstance.get(
      "/category"
      // setHeader({ Authorization: `Bearer ${token}` })
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
export { getCategoryAPI };

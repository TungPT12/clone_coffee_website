import axiosInstance from "@/config/axios";
import setHeader from "@/utils/setheader";

const getCategoryAPI = async (token: string) => {
  try {
    const response = await axiosInstance.get(
      "/category",
      setHeader({ Authorization: `Bearer ${token}` })
    );
    return response;
  } catch (error) {
    return error;
  }
};
export { getCategoryAPI };

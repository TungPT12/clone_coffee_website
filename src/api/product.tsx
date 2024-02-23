import axiosInstance from "@/config/axios";
import setHeader from "@/utils/setheader";

const getProductsAPI = async (token: string) => {
  try {
    const response = await axiosInstance.get(
      "/product",
      setHeader({ Authorization: `Bearer ${token}` })
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
export { getProductsAPI };

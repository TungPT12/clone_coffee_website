import axiosInstance from "@/config/axios";

const oderService = async (orderData: any) =>
  axiosInstance.post("/order", orderData);
export default oderService;

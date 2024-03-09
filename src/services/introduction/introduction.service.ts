import axiosClient from "@/config/axios";
import { Introduction } from "@/types/entities/product.entity";

const introductionService = {
  getAll: async (): Promise<Introduction[]> => axiosClient.get(`/introduction`),
};
export default introductionService;

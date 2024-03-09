import axiosClient from "@/config/axios";
import { StoreCatgory } from "@/types/entities/catgory.entity";

const categoryService = {
  getAll: async (): Promise<StoreCatgory[]> => axiosClient.get("/category"),
  getProductByCatgory: async (name: string): Promise<StoreCatgory[]> =>
    axiosClient.get(`/category?name=${name}`),
};

export default categoryService;

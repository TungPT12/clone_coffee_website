import axiosClient from "@/config/axios";
import { Product } from "@/types/entities/product.entity";

const productService = {
  getProductId: async (id: string): Promise<Product> => {
    return axiosClient.get(`/product/${id}`);
  },
  getAll: async (): Promise<Product[]> => {
    return axiosClient.get(`/product`);
  },
};

export default productService;

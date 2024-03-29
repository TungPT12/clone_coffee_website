import axiosClient from "@/config/axios";
import axiosInstance from "@/config/axios";
import { Order } from "@/types/entities/order.entity";

const orderService = {
  createOrder: async (orderData: any): Promise<Order> => {
    return axiosClient.post("/order", orderData);
  },

  getOrder: async (id: any): Promise<Order> => {
    return axiosClient.get(`/order/history/${id}`);
  },

  getOrdersBySlug: async (listId: string[]) => {
    return Promise.all(
      listId.map((id: string) => {
        return axiosClient.get(`/order/history/${id}`);
      })
    );
  },
};

export default orderService;

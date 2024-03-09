import axiosClient from "@/config/axios";
import { StoreCountdown } from "@/types/entities";

const countdownService = {
  getAll: async (): Promise<StoreCountdown[]> =>
    axiosClient.get(`/countdown/show`),
};
export default countdownService;

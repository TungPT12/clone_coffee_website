import axiosClient from "@/config/axios";
import { Profile } from "@/types/entities/profile.entity";

const profileService = {
  getProfile: async (): Promise<Profile> => {
    return axiosClient.get(`/auth/profile`);
  },
};

export default profileService;

import axiosClient from "@/config/axios";
import axiosClientFormData from "@/config/axiosFormData";
import { Profile } from "@/types/entities/profile.entity";

const profileService = {
  getProfile: async (): Promise<Profile> => {
    return axiosClient.get(`/auth/profile`);
  },
  updateProfile: async (data: FormData): Promise<Profile> => {
    return axiosClientFormData.put(`/auth/update`, data);
  },
};

export default profileService;

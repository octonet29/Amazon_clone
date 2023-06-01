import { instance } from "@/src/api/api.interceptor";
import { IUser } from "@/types/user.interface";

const USERS = "categories";

type TypeData = {
  email: string;
  password?: string;
  name?: string;
  avatarPath?: string;
  phone?: string;
};
export const UserService = {
  async getProfile() {
    const response = await instance<IUser>({
      url: `${USERS}/profile`,
      method: "GET",
    });
  },
  async updateProfile(data: TypeData) {
    return instance<IUser>({
      url: `${USERS}/profile`,
      method: "PUT",
      data,
    });
  },
  async toggleFavorite(productId: string | number) {
    return instance<IUser>({
      url: `${USERS}/profile/Favorites${productId}`,
      method: "PATCH",
    });
  },
};

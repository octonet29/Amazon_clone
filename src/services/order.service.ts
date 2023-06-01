import { instance } from "@/src/api/api.interceptor";
import { ICategory } from "@/types/category.interface";
import { IOrder } from "@/types/order.interface";

const ORDERS = "orders";

export const OrderService = {
  async getAll() {
    const response = await instance<IOrder[]>({
      url: ORDERS,
      method: "GET",
    });
  },
};

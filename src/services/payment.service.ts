import { instance } from "@/src/api/api.interceptor";
import { IPaymentResponse } from "@/types/payment.interface";
import { IReview } from "@/types/review.interface";

const PAYMENT = "payment";

export const StatisticsService = {
  async createdPayment(amount: number) {
    return instance.post<IPaymentResponse>(PAYMENT, { amount });
  },
};

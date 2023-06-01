import { instance } from "@/src/api/api.interceptor";
import { IReview } from "@/types/review.interface";

const STATISTICS = "statistics";

type TypeStatisticsResponse = {
  name: string;
  value: number;
};

export const StatisticsService = {
  async getMain() {
    const response = await instance<TypeStatisticsResponse>({
      url: `${STATISTICS}/main`,
      method: "GET",
    });
  },
};

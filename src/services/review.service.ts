import { instance } from "@/src/api/api.interceptor";
import { IReview } from "@/types/review.interface";

const Reviews = "reviews";

type TypeData = {
  rating: number;
  text: string;
};

export const ReviewService = {
  async getAll() {
    const response = await instance<IReview>({
      url: Reviews,
      method: "GET",
    });
  },
  async leave(productId: string | number, data: TypeData) {
    return instance<IReview>({
      url: `${Reviews}/leave/${productId}`,
      method: "POST",
      data,
    });
  },
};

export interface IReview {
  id: ReviewId;
  name: string;
  text: string;
  rating: number;
}

export type ReviewId = string;

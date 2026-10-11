export type Review = {
  id: string;
  productId: string;
  userName: string;
  userImageUrl: string;
  rating: number;
  title: string;
  comment: string;
  reviewDate: Date;
};

export type AddReviewParam = Pick<Review, 'title' | 'comment' | 'rating'>;

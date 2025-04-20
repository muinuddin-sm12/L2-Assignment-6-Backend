import { model, Schema, Types } from 'mongoose';
import { TReview } from './review.interface';

const reviewSchema = new Schema<TReview>({
  providerId: { type: Types.ObjectId, ref: "Provider", required: true },
  mealId: {type: Types.ObjectId, ref: "Meal", required: true},
  reviewerName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, {
    timestamps: true,
});

export const Review = model<TReview>('Review', reviewSchema);

import { model, Schema, Types } from 'mongoose';
import { TReview } from './review.interface';

const reviewSchema = new Schema<TReview>({
  provider: { type: Types.ObjectId, ref: "Provider", required: true },
  meal: {type: Types.ObjectId, required: true},
  reviewerName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, {
    timestamps: true,
});

export const Review = model<TReview>('Review', reviewSchema);

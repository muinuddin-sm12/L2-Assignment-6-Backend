import { Schema } from "mongoose"

export type TReview = {
    providerId: Schema.Types.ObjectId;
    mealId: Schema.Types.ObjectId;
    reviewerName:  string;
    rating: number;
    comment: string
}
import { Schema } from "mongoose"

export type TReview = {
    provider: Schema.Types.ObjectId;
    reviewerName:  string;
    rating: number;
    comment: string
}
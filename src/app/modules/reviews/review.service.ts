import mongoose from "mongoose";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

const createReview = async(data: TReview) => {
    const result = (await Review.create(data));
    return result;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getProviderReviews = async(providerId:any)=> {
    const result = await Review.aggregate([
        {$match: {provider: new mongoose.Types.ObjectId(providerId)}}
    ]);
    return result;
}
const getAllReviews = async() => {
 const result = await Review.find();
 return result;
}


export const ReviewServices = {
    createReview,
    getProviderReviews,
    getAllReviews,
}
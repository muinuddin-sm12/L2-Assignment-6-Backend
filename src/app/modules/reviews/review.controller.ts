import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ReviewServices } from "./review.service";

const addReview = catchAsync(async( req: Request, res: Response) => {
    const data = req.body;
    const result = await ReviewServices.createReview(data);
    res.status(200).json({
        message: 'Review created successfully',
        status: true,
        data: result
    })
})
const getProviderReviews = catchAsync(async(req: Request, res: Response) => {
    const providerId = req.params.providerId;
    const result = await ReviewServices.getProviderReviews(providerId);
    res.status(200).json({
        message: 'Provider Reviews retrieved successfully',
        status: true,
        data: result
    })
})
const getAllReviews = catchAsync(async(req:Request, res: Response) => {
    const result = await ReviewServices.getAllReviews();
    res.status(200).json({
        message: 'Reviews retrieved successfully',
        status: true,
        data: result
    })
})
export const ReviewController = {
    addReview,
    getAllReviews,
    getProviderReviews,
}
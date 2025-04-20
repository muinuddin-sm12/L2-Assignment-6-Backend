import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { MealPlanServices } from "./mealPlan.service";

const createMealPlan = catchAsync(async (req: Request, res: Response) => {
    const result = await MealPlanServices.createMealPlan(req.body);
    res.status(200).json({
        message: "Meal Plan created successfully",
        status: true,
        data: result,
    })
})

export const MealPlanController = {
    createMealPlan,

}
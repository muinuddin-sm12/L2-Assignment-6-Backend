import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { MealPlanServices } from "./mealPlan.service";

const createMealPlan = catchAsync(async (req: Request, res: Response) => {
    const result = await MealPlanServices.createMealPlan(req.body);
    res.status(200).json({
        message: "Meal plan posted successfully",
        success: true,
        data: result,
    })
})
const getAllMealPlan = catchAsync(async(req: Request, res: Response) => {
    const result = await MealPlanServices.getAllMealPlan(req.query);
    res.status(200).json({
      message: 'Meal plans retrieved successfully',
      success: true,
      data: result,
    })
  })
const getSingleMealPlan = catchAsync(async(req: Request, res: Response) => {
    const planId = req.params.planId;
    const result = await MealPlanServices.getSingleMealPlan(planId);
    res.status(200).json({
      message: 'Meal plan retrieved successfully',
      success: true,
      data: result,
    })
  })

export const MealPlanController = {
    createMealPlan,
    getAllMealPlan,
    getSingleMealPlan
}
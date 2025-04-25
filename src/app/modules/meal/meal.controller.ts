import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { MealServices } from './meal.service';
import { IImageFile } from '../../interface/IImageFile';

const createMeal = catchAsync(async (req: Request, res: Response) => {
  const result = await MealServices.createMeal(
    req.body,
    req.file as IImageFile,
  );
  res.status(200).json({
    message: 'Meal Posted Successfully',
    success: true,
    data: result,
  });
});
const getAllMeal = catchAsync(async(req: Request, res: Response) => {
  const result = await MealServices.getAllMeal(req.query);
  res.status(200).json({
    message: 'Meals retrieved successfully',
    success: true,
    data: result,
  })
})
const getSingleMeal = catchAsync(async(req: Request, res: Response) => {
  const mealId = req.params.mealId
  const result = await MealServices.getSingleMeal(mealId);
  res.status(200).json({
    message: 'Meal data retrieved successfully',
    success: true,
    data: result,
  })
})

const getProviderMeals = catchAsync(async(req: Request, res: Response) => {
  const order = await MealServices.getProviderMeals(req.params.providerId);
  res.status(200).json({
      message: 'Provider Meals data retrieved successfully',
      success: true,
      data: order,
  })
})



export const MealControllers = {
  createMeal,
  getAllMeal,
  getSingleMeal,
  getProviderMeals
};

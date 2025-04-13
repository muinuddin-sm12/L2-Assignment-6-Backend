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
    status: true,
    data: result,
  });
});
const getAllMeal = catchAsync(async(req: Request, res: Response) => {
  const result = await MealServices.getAllMeal(req.query);
  res.status(200).json({
    message: 'Meals retrieved successfully',
    status: true,
    data: result,
  })
})


export const MealControllers = {
  createMeal,
  getAllMeal,
};

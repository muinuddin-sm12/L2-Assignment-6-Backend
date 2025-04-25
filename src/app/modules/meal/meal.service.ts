import QueryBuilder from '../../builder/QueryBuilder';
import { IImageFile } from '../../interface/IImageFile';
import { mealSearchableFields } from './meal.constant';
import { IMeal } from './meal.interface';
import { Meal } from './meal.model';

const createMeal = async (mealData: Partial<IMeal>, image: IImageFile) => {
  const data = new Meal({
    ...mealData,
    image: image?.path,
  });
  const result = await data.save();
  return result;
};
const getAllMeal = async (query: Record<string, unknown>) => {
  const mealQuery = new QueryBuilder(Meal.find(), query).search(
    mealSearchableFields,
  );

  const result = await mealQuery.modelQuery;
  return result;
};
const getSingleMeal = async (mealId: string) => {
  const result = await Meal.findById(mealId).populate("providerId");
  return result;
};
const getProviderMeals = async (id: string) => {
  const data = await Meal.find({providerId: id});
  console.log('server, ' ,data)
  return data;
};


export const MealServices = {
  createMeal,
  getAllMeal,
  getSingleMeal,
  getProviderMeals
};

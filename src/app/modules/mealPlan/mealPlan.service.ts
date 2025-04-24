import QueryBuilder from "../../builder/QueryBuilder";
import { IMealPlan } from "./mealPlan.interface";
import { MealPlan } from "./mealPlan.model";

const createMealPlan = async(data: Partial<IMealPlan>) => {
    const result = await MealPlan.create(data);
    return result;
}
const getAllMealPlan = async (query: Record<string, unknown>) => {
    const mealPlanQuery = new QueryBuilder(MealPlan.find().populate("providerId"), query).filter();
    const result = await mealPlanQuery.modelQuery;
    return result;
  };
const getSingleMealPlan = async (planId:string) => {
    const result = await MealPlan.findById(planId).populate("providerId");
    return result;
  };
export const MealPlanServices = {
    createMealPlan,
    getAllMealPlan,
    getSingleMealPlan
}
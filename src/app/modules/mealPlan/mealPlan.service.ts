import { IMealPlan } from "./mealPlan.interface";
import { MealPlan } from "./mealPlan.model";

const createMealPlan = async(data: Partial<IMealPlan>) => {
    const result = await MealPlan.create(data);
    return result;
}

export const MealPlanServices = {
    createMealPlan,

}
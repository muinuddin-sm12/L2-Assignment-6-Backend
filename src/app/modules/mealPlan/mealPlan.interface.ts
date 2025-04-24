import mongoose, { Types } from "mongoose";

export interface IDailyMeal {
    breakfast: Types.ObjectId;
    lunch: Types.ObjectId;
    dinner: Types.ObjectId;
}
export interface IMealPlan {
    providerId: mongoose.Types.ObjectId;
    title: string;
    description: string;
    scheduleType: 'weekly' | 'monthly';
    pricePerMeal: number;
    mealPlanType: 'balanced' | 'high-protein' | 'low-carb' | 'keto' | 'vegetarian' | 'custom';
    menu: {
        sunday: IDailyMeal,
        monday: IDailyMeal,
        tuesday: IDailyMeal,
        wednesday: IDailyMeal,
        thursday: IDailyMeal,
        friday: IDailyMeal,
        saturday: IDailyMeal,
    };
    isAvailable: boolean;
}
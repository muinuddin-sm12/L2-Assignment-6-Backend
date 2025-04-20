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
    pricePerDay: number;
    mealPlanType: 'balanced' | 'high-protein' | 'low-carb' | 'keto' | 'vegetarian' | 'custom';
    weeklyMenu: {
        SunDay: IDailyMeal,
        Monday: IDailyMeal,
        TuesDay: IDailyMeal,
        WednesDay: IDailyMeal,
        Thursday: IDailyMeal,
        Friday: IDailyMeal,
        Saturday: IDailyMeal,
    };
    isAvailable: boolean;
}
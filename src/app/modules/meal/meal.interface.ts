import { Types, Document } from "mongoose";


export interface IPortionOption {
    size: 'single' | 'family' | 'large';
    price: number;
    description: string;
}
export interface IMeal extends Document{
    providerId : Types.ObjectId;
    mealName: string;
    description: string;
    image: string;
    cuisine: string;
    ingredients: string[];
    dietaryTags: string[];
    calories: number;
    portionSize: IPortionOption[];
    availableDays: string[];
    deliveryTimeSlots: string[];
    isVegan?: boolean;
    isAvailable: boolean;
}

export interface IMealDocument extends IMeal, Document {};
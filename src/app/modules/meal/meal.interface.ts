import { Types, Document } from "mongoose";


export interface IMeal extends Document{
    providerId : Types.ObjectId;
    mealName: string;
    description: string;
    image: string;
    price: number;
    cuisine: string;
    ingredients: string[];
    dietaryTags: string[];
    isAvailable: boolean;
}

export interface IMealDocument extends IMeal, Document {};
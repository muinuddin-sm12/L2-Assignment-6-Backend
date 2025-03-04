import { Schema } from "mongoose";

export interface IProvider {
    providerId : Schema.Types.ObjectId;
    providerName : string;
    cuisineSpecialties : string[];
    experience: string;
    pricingRange: string;
    averageRating: number;
    availableDays: string[];
    availableTimeSlots: string;
    location: string; 
}
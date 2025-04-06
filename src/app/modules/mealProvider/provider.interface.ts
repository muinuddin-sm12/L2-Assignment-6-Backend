import { Schema } from "mongoose";

export interface IProvider {
    providerId : Schema.Types.ObjectId;
    providerName : string;
    cuisineSpecialties : string[];
    experience: string;
    pricingRange: string;
    availableDays: string[];
    availableTimeSlots: string;
    location: string; 
}
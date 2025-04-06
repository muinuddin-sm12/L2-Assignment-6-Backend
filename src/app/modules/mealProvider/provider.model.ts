import { model, Schema, Types } from "mongoose";
import { IProvider } from "./provider.interface";

const providerShcema = new Schema<IProvider>({
    providerId: {type: Types.ObjectId, required: true},
    providerName: {type: String, required:true},
    cuisineSpecialties: {type: [String], required: true},
    experience: {type: String, required: true},
    pricingRange: {type: String, required: true},
    availableDays: {type: [String], required: true},
    availableTimeSlots: {type: String, required: true},
    location: {type: String, required: true}
})

export const ProviderModel = model<IProvider>('Provider', providerShcema)
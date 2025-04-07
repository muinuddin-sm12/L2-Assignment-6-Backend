import { model, Schema } from "mongoose";
import { IProvider } from "./provider.interface";

const providerShcema = new Schema<IProvider>({
    providerName: {type: String, required:true},
    cuisineSpecialties: {type: [String], required: true},
    experience: {type: String, required: true},
    pricingRange: {type: String, required: true},
    availableDays: {type: [String], required: true},
    availableTimeSlots: {type: String, required: true},
    location: {type: String, required: true}
})

export const Provider = model<IProvider>('Provider', providerShcema)
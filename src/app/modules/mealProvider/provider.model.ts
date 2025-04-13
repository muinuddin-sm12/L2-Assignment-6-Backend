import { model, Schema } from "mongoose";
import { IProvider } from "./provider.interface";

interface IProviderDocument extends Document, IProvider {}
const providerShcema = new Schema<IProviderDocument>({
    providerName: {type: String,required: true },
    logo: {type: String},
    cuisineSpecialties: {type: [String],required: true },
    experience: {type: String, required: true},
    pricingRange: {type: String, required: true},
    availableDays: {type: [String], required: true},
    availableTimeSlots: {type: String, required: true},
    address: {type: String, required: true}
})

export const Provider = model<IProviderDocument>('Provider', providerShcema)
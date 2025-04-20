import { model, Schema } from "mongoose";
import { IProvider } from "./provider.interface";

interface IProviderDocument extends Document, IProvider {}
const providerShcema = new Schema<IProviderDocument>({
    userId: {type: Schema.Types.ObjectId,ref: "User", required: [true, 'user id is required']},
    providerName: {type: String,required: true },
    about: {type: String, required: true},
    logo: {type: String},
    cuisineSpecialties: {type: [String],required: true },
    experience: {type: String, required: true},
    address: {type: String, required: true}
})

export const Provider = model<IProviderDocument>('Provider', providerShcema)
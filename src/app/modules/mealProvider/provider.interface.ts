import { Types } from "mongoose";

export interface IProvider extends Document  {
    userId: Types.ObjectId;
    providerName : string;
    about: string;
    logo: string;
    cuisineSpecialties : string[];
    experience: string;
    address: string; 
}
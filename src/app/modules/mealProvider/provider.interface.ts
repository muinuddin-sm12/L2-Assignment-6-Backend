export interface IProvider extends Document  {
    providerName : string;
    logo?: string;
    cuisineSpecialties : string[];
    experience: string;
    pricingRange: string;
    availableDays: string[];
    availableTimeSlots: string;
    address: string; 
}
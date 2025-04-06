import {z} from 'zod';

export const reviewValidationSchema = z.object({
    provider: z.string(),
    meal: z.string(),
    reviewerName: z.string(),
    rating: z.number().positive(),
    comment: z.string() 
})
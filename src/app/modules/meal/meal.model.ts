import { model, Schema } from 'mongoose';
import { IMealDocument } from './meal.interface';

const MealSchema = new Schema<IMealDocument>(
  {
    providerId: {
      type: Schema.Types.ObjectId,
      ref: 'Provider',
      required: true,
    },
    mealName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    price: {type: Number, required: true},
    cuisine: {type: String, required: true},
    ingredients: { type: [String], required: true },
    dietaryTags: { type: [String], default: [] },
    isAvailable: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);
export const Meal = model<IMealDocument>('Meal', MealSchema);

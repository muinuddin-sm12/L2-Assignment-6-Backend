import { model, Schema } from 'mongoose';
import { IMealDocument, IPortionOption } from './meal.interface';

export const PortionOptionSchema = new Schema<IPortionOption>(
  {
    size: { type: String, enum: ['single', 'family', 'large'], required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { _id: false },
);

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
    cuisine: {type: String, required: true},
    ingredients: { type: [String], required: true },
    dietaryTags: { type: [String], default: [] },
    calories: { type: Number, required: true },
    portionSize: { type: [PortionOptionSchema], required: true },
    availableDays: { type: [String], required: true },
    deliveryTimeSlots: { type: [String], required: true },
    isVegan: { type: Boolean, default: false },
    isAvailable: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);
export const Meal = model<IMealDocument>('Meal', MealSchema);

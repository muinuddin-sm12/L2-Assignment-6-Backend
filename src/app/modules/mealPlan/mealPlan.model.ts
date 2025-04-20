import { model, Schema } from 'mongoose';
import { IDailyMeal, IMealPlan } from './mealPlan.interface';

const dailyMealSchema = new Schema<IDailyMeal>({
    breakfast: { type: Schema.Types.ObjectId, ref: 'Meal', required: true },
    lunch: { type: Schema.Types.ObjectId, ref: 'Meal', required: true },
    dinner: { type: Schema.Types.ObjectId, ref: 'Meal', required: true }
  }, {_id: false});
const MealPlanShcema = new Schema<IMealPlan>({
  providerId: { type: Schema.Types.ObjectId, ref: 'Provider', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  scheduleType: {
    type: String,
    enum: {
      values: ['weekly', 'monthly'],
      message: '{VALUE} is not supported',
    },
  },
  pricePerDay: {type: Number, required: true},
  mealPlanType: {
    type: String,
    enum: {
        values: ['balanced' , 'high-protein' , 'low-carb' , 'keto' , 'vegetarian' , 'custom'],
        message: '{VALUE} is not supported',
    }
  },
  weeklyMenu: {
    Sunday: {type: dailyMealSchema},
    Monday: {type: dailyMealSchema},
    Tuesday: {type: dailyMealSchema},
    Wednesday: {type: dailyMealSchema},
    Thursday: {type: dailyMealSchema},
    Friday: {type: dailyMealSchema},
    Saturday: {type: dailyMealSchema},

  },
  isAvailable: {type: Boolean, default: true}
},{
    timestamps: true
});

export const MealPlan = model<IMealPlan>('MealPlan', MealPlanShcema)

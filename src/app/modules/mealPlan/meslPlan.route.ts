import express from 'express';
import { MealPlanController } from './mealPlan.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../user/user.interface';

const router = express.Router();

router.post('/', auth(UserRole.PROVIDER), MealPlanController.createMealPlan)

export const MealPlanRoutes = router;
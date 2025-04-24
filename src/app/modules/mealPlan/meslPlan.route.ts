import express from 'express';
import { MealPlanController } from './mealPlan.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../user/user.interface';

const router = express.Router();

router.post('/', auth(UserRole.PROVIDER), MealPlanController.createMealPlan)
router.get('/', MealPlanController.getAllMealPlan)
router.get('/:planId', MealPlanController.getSingleMealPlan)

export const MealPlanRoutes = router;
import express from 'express';
import { multerUpload } from '../../config/multer.config';
import { MealControllers } from './meal.controller';
import { parseBody } from '../../middlewares/bodyParser';
import auth from '../../middlewares/auth';
import { UserRole } from '../user/user.interface';
const router = express.Router();

router.post(
  '/post-meal',
  auth(UserRole.PROVIDER),
  multerUpload.single('image'),
  parseBody,
  MealControllers.createMeal,
);
router.get('/', MealControllers.getAllMeal);
router.get('/provider/:providerId', MealControllers.getProviderMeals);
router.get('/:mealId', MealControllers.getSingleMeal);


export const MealRoutes = router;

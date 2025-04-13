import express from 'express';
import { multerUpload } from '../../config/multer.config';
import { MealControllers } from './meal.controller';
import { parseBody } from '../../middlewares/bodyParser';
const router = express.Router();

router.post(
  '/post-meal-menu',
  multerUpload.single('image'),
  parseBody,
  MealControllers.createMeal,
);
router.get('/', MealControllers.getAllMeal)

export const MealRoutes = router;

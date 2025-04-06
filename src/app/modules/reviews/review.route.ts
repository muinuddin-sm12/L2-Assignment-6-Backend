import express from 'express';
import { ReviewController } from './review.controller';
const router = express.Router();

router.post('/', ReviewController.addReview);
router.get('/', ReviewController.getAllReviews)
router.get('/:providerId', ReviewController.getProviderReviews)


export const ReviewRoutes = router

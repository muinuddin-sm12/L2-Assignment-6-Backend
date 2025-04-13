import express from 'express';
import { OrderController } from './order.controller';
const router = express.Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getOrders);
router.get('/verify', OrderController.verifyPayment);

export const OrderRoutes = router;
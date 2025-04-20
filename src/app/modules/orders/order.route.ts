import express from 'express';
import { OrderController } from './order.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../user/user.interface';
const router = express.Router();

router.post('/', auth(UserRole.CUSTOMER) , OrderController.createOrder);
router.get('/', OrderController.getOrders);
router.get('/user/:userId', OrderController.getUserOrders)
router.get('/provider/:providerId', OrderController.getProviderOrders)
router.patch('/:id', auth(UserRole.PROVIDER), OrderController.updateOrderStatus)
router.get('/verify', OrderController.verifyPayment);

export const OrderRoutes = router;
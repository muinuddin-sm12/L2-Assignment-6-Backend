import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { UserRole } from './user.interface';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getAUser);
router.put('/:id', auth(UserRole.ADMIN), UserController.updateAUser);

export const UserRoutes = router;

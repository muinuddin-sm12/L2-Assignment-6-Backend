import { Router } from 'express';
import { AuthValidations } from './auth.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { UserValidation } from '../user/user.validation';
import { parseBody } from '../../middlewares/bodyParser';
import { multerUpload } from '../../config/multer.config';

const router = Router();

router.post(
  '/register',
  multerUpload.single('image'),
  parseBody,
  validateRequest(UserValidation.userValidationSchema),
  AuthController.register,
);
router.post(
  '/login',
  validateRequest(AuthValidations.loginValidationSchema),
  AuthController.login,
);
router.put('/change-password', AuthController.changePassword);

export const AuthRoutes = router;

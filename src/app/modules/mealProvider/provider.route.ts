import express from 'express';
import { ProviderController } from './provider.controller';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';

const router = express.Router();
router.post(
  '/',
  multerUpload.single('logo'),
  parseBody,
  ProviderController.createProvider,
);
router.get('/', ProviderController.getAllProviders);
router.get('/:id', ProviderController.getAllProviders);
router.put('/:id', ProviderController.updateAProvider);

export const ProvidersRoutes = router;

import express from 'express';
import { ProviderController } from './provider.controller';

const router = express.Router();
router.post('/', ProviderController.createProvider)
router.get('/', ProviderController.getAllProviders)
router.get('/:id', ProviderController.getAllProviders)
router.put('/:id', ProviderController.updateAProvider)

export const ProvidersRoutes = router;
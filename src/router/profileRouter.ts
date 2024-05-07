import { Router } from 'express';

import {
  getAllProfile,
  getProfileById,
  updateProfile,
} from '../controller/profileController';
import { validateRequest } from '../helper/validateResultHelper';
import { paramValidator } from '../middleware/commonValidators';

const profileRouter = Router();

profileRouter.get('/profile', getAllProfile);
profileRouter.get(
  '/profile/:id',
  paramValidator(),
  validateRequest,
  getProfileById,
);
profileRouter.patch(
  '/profile/:id',
  paramValidator(),
  validateRequest,
  updateProfile,
);

export default profileRouter;

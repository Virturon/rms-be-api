import { Router } from 'express';

import { createAccount, deleteAccount } from '../controller/accountController';
import { validateRequest } from '../helper/validateResultHelper';
import { createAccountBodyValidation } from '../middleware/accountMiddleware';
import { paramValidator } from '../middleware/commonValidators';

const accountRouter = Router();

accountRouter.post(
  '/accounts',
  createAccountBodyValidation(),
  validateRequest,
  createAccount,
);
accountRouter.delete(
  '/accounts/:id',
  paramValidator(),
  validateRequest,
  deleteAccount,
);

export default accountRouter;

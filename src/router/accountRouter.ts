import { Router } from 'express';

import { createAccount } from '../controller/accountController';
import { validateRequest } from '../helper/validateResultHelper';
import { createAccountBodyValidation } from '../middleware/accountMiddleware';

const AccountRouter = Router();

AccountRouter.post(
  '/accounts',
  createAccountBodyValidation(),
  validateRequest,
  createAccount,
);

export default AccountRouter;

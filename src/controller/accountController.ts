import { Request, Response } from 'express';

import {
  responseHelperError,
  responseHelperSuccess,
} from '../helper/responseHelper';
import { accountService } from '../services/accountService';

export const createAccount = async (req: Request, res: Response) => {
  const { statusCode, error, result } =
    await accountService.createAccountService(req);
  if (error) return responseHelperError(res, statusCode, { error });
  return responseHelperSuccess(res, statusCode, result);
};

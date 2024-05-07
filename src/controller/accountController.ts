import { Request, Response } from 'express';

import {
  responseHelperError,
  responseHelperSuccess,
} from '../helper/responseHelper';
import { accountService } from '../services/accountService';

export const createAccount = async (req: Request, res: Response) => {
  const { statusCode, error, result } = await accountService.createAccount(req);
  if (error) return responseHelperError(res, statusCode, { error });
  return responseHelperSuccess(res, statusCode, result);
};

export const deleteAccount = async (req: Request, res: Response) => {
  const { statusCode, error, result } = await accountService.deleteAccount(req);
  if (error) return responseHelperError(res, statusCode, { error });
  return responseHelperSuccess(res, statusCode, result);
};

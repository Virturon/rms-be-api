import { Request, Response } from 'express';

import {
  responseHelperError,
  responseHelperSuccess,
} from '../helper/responseHelper';
import { accountService } from '../services/accountService';

export const createAccount = async (req: Request, res: Response) => {
  const requestBody = req.body;
  const { statusCode, error, result } =
    await accountService.createAccount(requestBody);
  if (error) return responseHelperError(res, statusCode, { error });
  return responseHelperSuccess(res, statusCode, result);
};

export const deleteAccount = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { statusCode, error, result } = await accountService.deleteAccount(id);
  if (error) return responseHelperError(res, statusCode, { error });
  return responseHelperSuccess(res, statusCode, result);
};

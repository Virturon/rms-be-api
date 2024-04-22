import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { responseHelperError } from '../helper/responseHelper';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  else {
    const error = result.array().map(err => ({ [err.type]: String(err.msg) }));
    return responseHelperError(res, 400, error);
  }
};

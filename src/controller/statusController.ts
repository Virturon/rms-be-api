import { Request, Response } from 'express';

import { version, name } from '../../package.json';
import { responseHelperSuccess } from '../helper/responseHelper';

export const getStatus = (_req: Request, res: Response) => {
  const response = {
    environment: process.env.NODE_ENV || 'development',
    version,
    name,
  };
  res.send(responseHelperSuccess(res, 200, response));
};

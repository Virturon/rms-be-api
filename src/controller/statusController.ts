import { Request, Response } from 'express';
import { version } from '../../package.json';
import { responseHelperSuccess } from '../helper/responseHelper';

const getStatus = (_req: Request, res: Response) => {
  const response = { Environment: process.env.NODE_ENV, version: version };
  res.send(responseHelperSuccess(res, response));
};

export { getStatus };

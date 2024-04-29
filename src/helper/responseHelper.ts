import { Response } from 'express';

import logger from './logger';

export const responseHelperSuccess = (
  res: Response,
  statusCode: number,
  result?: Record<string, any>,
) => {
  logger.info(result);
  res.status(statusCode).json({
    status: 'ok',
    result: result,
  });
};

export const responseHelperError = (
  res: Response,
  statusCode: number,
  error?: Record<string, string> | Record<string, string>[],
) => {
  logger.error(error);
  res.status(statusCode).json({
    status: 'nok',
    error: error,
  });
};

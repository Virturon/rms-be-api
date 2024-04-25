import { Response } from 'express';

export const responseHelperSuccess = (
  res: Response,
  statusCode: number,
  result?: Record<string, any>,
) => {
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
  res.status(statusCode).json({
    status: 'nok',
    error: error,
  });
};

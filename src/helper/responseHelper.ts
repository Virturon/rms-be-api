import { Response } from 'express';

export const responseHelperSuccess = (
  res: Response,
  statusCode: number,
  result: Record<string, string>,
) => {
  res.status(statusCode).json({
    status: 'ok',
    result: result,
  });
};

import { NextFunction, Request, Response } from 'express';

import logger from '../helper/logger';

export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const request = {
    type: 'request',
    timestamp: Date.now(),
    time: new Date(),
    method: req.method,
    headers: JSON.stringify(req.headers),
    cookies: JSON.stringify(req.cookies),
    url: req.url,
    query: JSON.stringify(req.query),
    body: JSON.stringify(req.body),
    userAgent: req.get('user-agent'),
    ip: req.get('true-client-ip'),
  };
  logger.info('request', request);
  next();
};

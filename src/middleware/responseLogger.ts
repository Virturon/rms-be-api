import { NextFunction, Request, Response } from 'express';

import logger from '../helper/logger';

export const responseLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const oldWrite = res.write;
  const oldEnd = res.end;

  const chunks: any = [];

  res.write = function (chunk) {
    chunks.push(chunk);
    return oldWrite.apply(res, chunk);
  };

  res.end = function (chunk) {
    if (chunks) chunks.push(chunk);
    let body = {};
    try {
      body = Buffer.concat(chunks).toString('utf-8');
    } catch (error) {
      body = {};
    }
    res.on('finish', () => {
      const response = {
        type: 'response',
        timestamp: Date.now(),
        time: new Date(),
        method: req.method,
        url: req.url,
        ip: req.get('true-client-ip'),
        statusCode: res.statusCode,
        body: body,
      };
      logger.info('response', response);
    });
    return oldEnd.apply(res, chunks);
  };
  next();
};

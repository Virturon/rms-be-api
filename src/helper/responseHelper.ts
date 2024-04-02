import { Response } from 'express';

const responseHelperSuccess = (res: Response, result: object) => {
  res.status(200).json({
    status: 'OK',
    result: result,
  });
};

export { responseHelperSuccess };

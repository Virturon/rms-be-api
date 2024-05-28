import { param } from 'express-validator';

export const paramValidator = () => [
  param('id')
    .notEmpty()
    .isNumeric()
    .withMessage('Id should not be empty and must be a number'),
];

import { body } from 'express-validator';

export const createAccountBodyValidation = () => [
  body('name').notEmpty().withMessage('Name must not be empty'),
  body('email')
    .notEmpty()
    .optional()
    .isEmail()
    .withMessage('email must not be empty and should be in correct format'),
  body('phoneNumber')
    .optional()
    .notEmpty()
    .withMessage('Phone number should not be empty'),
  body('roleId').notEmpty().withMessage('roleId must not be empty'),
  body('address').optional(),
  body('gender')
    .optional()
    .notEmpty()
    .withMessage('gender should not be empty'),
  body('birthday')
    .optional()
    .notEmpty()
    .withMessage('birthday should not be empty'),
];

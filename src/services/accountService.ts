import { Request } from 'express';
import { UniqueConstraintError } from 'sequelize';

import User from '../db/models/user';
import { BaseRepository } from '../repositories/baseRepository';
import { ResponseData } from '../types/common';

export class AccountService {
  constructor(private accountRepo: BaseRepository<User>) {}

  async createAccountService(req: Request): Promise<ResponseData> {
    try {
      const { email, phoneNumber } = req.body;
      if (!email && !phoneNumber) {
        return {
          statusCode: 400,
          error: 'Phone number/email is required for registration login',
        };
      }
      const result = await this.accountRepo.create(req.body, {});
      return {
        statusCode: 201,
        result,
      };
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        return {
          statusCode: 303,
          error: 'User already exists',
        };
      }
      return {
        statusCode: 500,
        error: 'Internal server error',
      };
    }
  }
}

export const accountService = new AccountService(new BaseRepository(User));

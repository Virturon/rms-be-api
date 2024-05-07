import { Request } from 'express';

import User from '../db/models/user';
import { BaseRepository } from '../repositories/baseRepository';
import { ResponseData } from '../types/common';

export class ProfileService {
  constructor(private profileRepo: BaseRepository<User>) {}

  async getAllProfiles(): Promise<ResponseData> {
    try {
      const result = await this.profileRepo.getAll({
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
      });
      return {
        statusCode: 200,
        result,
      };
    } catch (error) {
      return {
        statusCode: 500,
        error: 'Internal server error',
      };
    }
  }

  async getProfileById(req: Request): Promise<ResponseData> {
    try {
      const { id } = req.params;
      const result = await this.profileRepo.getById(id, {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
      });
      return {
        statusCode: 200,
        result,
      };
    } catch (error) {
      return {
        statusCode: 500,
        error: 'Internal server error',
      };
    }
  }

  async updateProfile(req: Request): Promise<ResponseData> {
    try {
      const { id } = req.params;
      const data = req.body;
      const user = await this.profileRepo.getById(id, {});
      if (!user) {
        return {
          statusCode: 404,
          error: 'User not found',
        };
      }
      const result = await this.profileRepo.update(data, {
        where: { id: id },
      });
      return {
        statusCode: 200,
        result,
      };
    } catch (error) {
      return {
        statusCode: 500,
        error: 'Internal server error',
      };
    }
  }
}

export const profileService = new ProfileService(new BaseRepository(User));

import { Request, Response } from 'express';

import {
  responseHelperError,
  responseHelperSuccess,
} from '../helper/responseHelper';
import { profileService } from '../services/profileService';

export const getAllProfile = async (req: Request, res: Response) => {
  const { result, error, statusCode } = await profileService.getAllProfiles();
  if (error) return responseHelperError(res, statusCode, { error });
  return responseHelperSuccess(res, statusCode, result);
};

export const getProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { result, error, statusCode } = await profileService.getProfileById(id);
  if (error) return responseHelperError(res, statusCode, { error });
  return responseHelperSuccess(res, statusCode, result);
};

export const updateProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const { result, error, statusCode } = await profileService.updateProfile(
    id,
    data,
  );
  if (error) return responseHelperError(res, statusCode, { error });
  return responseHelperSuccess(res, statusCode, result);
};

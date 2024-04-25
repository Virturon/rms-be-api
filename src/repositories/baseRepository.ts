import { CreateOptions, Model, ModelStatic } from 'sequelize';

import { IBaseRepository } from './iBaseRepository';

export class BaseRepository<M extends Model> implements IBaseRepository<M> {
  constructor(private model: ModelStatic<M>) {}
  async create(data: any, options: CreateOptions): Promise<M> {
    return await this.model.create(data, options);
  }
}

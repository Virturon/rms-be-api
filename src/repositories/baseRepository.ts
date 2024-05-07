import {
  Attributes,
  CreateOptions,
  DestroyOptions,
  FindOptions,
  Model,
  ModelStatic,
  UpdateOptions,
} from 'sequelize';

import { IBaseRepository } from './iBaseRepository';

export class BaseRepository<M extends Model> implements IBaseRepository<M> {
  constructor(private model: ModelStatic<M>) {}

  async create(data: any, options: CreateOptions): Promise<M> {
    return await this.model.create(data, options);
  }
  async getAll(options: FindOptions<Attributes<M>>): Promise<M[]> {
    return await this.model.findAll(options);
  }

  async getById(
    id: any,
    options: FindOptions<Attributes<M>>,
  ): Promise<M | null> {
    return await this.model.findByPk(id, options);
  }

  async update(
    data: any,
    options: UpdateOptions<Attributes<M>>,
  ): Promise<[affectedCount: number]> {
    return await this.model.update(data, options);
  }

  async delete(options: DestroyOptions<Attributes<M>>): Promise<number> {
    return await this.model.destroy(options);
  }
}

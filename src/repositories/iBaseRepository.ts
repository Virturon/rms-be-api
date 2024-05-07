import {
  Attributes,
  CreateOptions,
  DestroyOptions,
  FindOptions,
  Model,
  UpdateOptions,
} from 'sequelize';

export interface IBaseRepository<M extends Model> {
  create(data: any, options: CreateOptions): Promise<M>;
  getAll(options: FindOptions<Attributes<M>>): Promise<M[]>;
  getById(id: any, options: FindOptions<Attributes<M>>): Promise<M | null>;
  update(
    data: any,
    options: UpdateOptions<Attributes<M>>,
  ): Promise<[affectedCount: number]>;
  delete(options: DestroyOptions<Attributes<M>>): Promise<number>;
}

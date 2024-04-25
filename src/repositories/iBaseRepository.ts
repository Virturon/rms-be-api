import { CreateOptions, Model } from 'sequelize';

export interface IBaseRepository<M extends Model> {
  create(data: any, options: CreateOptions): Promise<M>;
}

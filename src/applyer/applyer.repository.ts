import { ApplyerDocument } from './models/applyer.model';
import { Applyer } from './models/applyer.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class ApplyerRepository {
  constructor(
    @InjectModel(Applyer.name) private applyerModel: Model<ApplyerDocument>,
  ) {}

  async findOne(applyerFilterQuery: FilterQuery<Applyer>): Promise<Applyer> {
    return this.applyerModel.findOne(applyerFilterQuery);
  }

  async find(applyerFilterQuery: FilterQuery<Applyer>): Promise<Applyer[]> {
    return this.applyerModel.find(applyerFilterQuery);
  }

  async create(applyer: Partial<Applyer>): Promise<Applyer> {
    return new this.applyerModel(applyer).save();
  }

  async update(
    applyerFilterQuery: FilterQuery<Applyer>,
    applyer: Partial<Applyer>,
  ): Promise<Applyer> {
    return this.applyerModel.findOneAndUpdate(applyerFilterQuery, applyer, {
      new: true,
    });
  }

  async delete(applyerFilterQuery: FilterQuery<Applyer>): Promise<Applyer> {
    return this.applyerModel.findOneAndDelete(applyerFilterQuery);
  }
}

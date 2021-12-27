import { rigesterAppler } from './dto/applyer.dto';
import { ApplyerRepository } from './applyer.repository';
import { Applyer } from './models/applyer.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplyerService {
  constructor(private readonly applyerRepository: ApplyerRepository) {}

  async getApplyerById(applyerId: string): Promise<Applyer> {
    return this.applyerRepository.findOne({ _id: applyerId });
  }

  async getApplyers(): Promise<Applyer[]> {
    return this.applyerRepository.find({});
  }

  async createApplyer(applyerDto: rigesterAppler): Promise<Applyer> {
    return this.applyerRepository.create(applyerDto);
  }

  async updateApplyer(
    applyerId: string,
    applyerUpdateDto: Partial<Applyer>,
  ): Promise<Applyer> {
    return this.applyerRepository.update({ applyerId }, applyerUpdateDto);
  }

  async deleteApplyer(applyerId: string): Promise<Applyer> {
    return this.applyerRepository.delete({ applyerId });
  }
}

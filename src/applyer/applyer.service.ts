import { ApplyerRepository } from './applyer.repository';
import { Applyer } from './models/applyer.model';
import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class ApplyerService {
  constructor(private readonly applyerRepository: ApplyerRepository) {}

  async getApplyerById(applyerId: string): Promise<Applyer> {
    return this.applyerRepository.findOne({ _id: applyerId });
  }

  async getApplyers(): Promise<Applyer[]> {
    return this.applyerRepository.find({});
  }

  async createApplyer(applyerDto: Partial<Applyer>): Promise<Applyer> {
    const getSalt = await genSalt(12);
    const hashpassword = await hash(applyerDto.password, getSalt);
    return this.applyerRepository.create({
      ...applyerDto,
      password: hashpassword,
    });
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

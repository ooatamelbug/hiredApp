import { rigesterAppler, UpdateApplerDto } from './dto/applyer.dto';
import { ApplyerService } from './applyer.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Applyer } from './models/applyer.model';

@Controller('applyer')
export class ApplyerController {
  constructor(private readonly applyerService: ApplyerService) {}

  @Get('/:applyerId')
  async getApplyer(@Param('applyerId') applyerId: string): Promise<Applyer> {
    return this.applyerService.getApplyerById(applyerId);
  }

  @Get('/')
  async getAllApplyer(): Promise<Applyer[]> {
    return this.applyerService.getApplyers();
  }

  @Post('/')
  async rigesterApplyer(
    @Body() rigesterApplerDto: rigesterAppler,
  ): Promise<Applyer> {
    return this.applyerService.createApplyer(rigesterApplerDto);
  }

  @Put('/')
  async updateApplyerData(
    @Param('applyerId') applyerId: string,
    @Body() updateApplerDto: UpdateApplerDto,
  ): Promise<Applyer> {
    return this.applyerService.updateApplyer(applyerId, updateApplerDto);
  }

  @Delete('/:applyerId')
  async deleteApplyerData(
    @Param('applyerId') applyerId: string,
  ): Promise<Applyer> {
    return this.applyerService.deleteApplyer(applyerId);
  }
}

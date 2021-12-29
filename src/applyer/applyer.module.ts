import { ApplyerController } from './applyer.controller';
import { ApplyerService } from './applyer.service';
import { ApplyerRepository } from './applyer.repository';
import { Applyer, ApplyerSchema } from './models/applyer.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Applyer.name, schema: ApplyerSchema }]),
  ],
  controllers: [ApplyerController],
  providers: [ApplyerRepository, ApplyerService],
})
export class ApplyerModule {}

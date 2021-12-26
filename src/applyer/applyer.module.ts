import { Applyer, ApplyerSchema } from './models/applyer.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Applyer.name, schema: ApplyerSchema }]),
  ],
})
export class ApplyerModule {}

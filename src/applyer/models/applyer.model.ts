import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Location,
  LocationSchema,
  SocialMideaLink,
  SocialMideaLinkSchema,
  Expirence,
  ExpirenceSchema,
  Education,
  EducationSchema,
  Achievement,
  AchievementSchema,
} from './related.model';

export type ApplyerDocument = Applyer & Document;

@Schema({ timestamps: true })
export class Applyer {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: false })
  middleName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: false })
  jobtitle: string;

  @Prop({ default: false })
  active: boolean;

  @Prop({})
  birthdate: Date;

  @Prop([{ type: [String], unique: true, required: false }])
  phone: string[];

  @Prop({ required: false })
  nationality: string;

  @Prop({ enum: ['male', 'female'] })
  gender: string;

  @Prop({ type: LocationSchema, required: false })
  location: Location;

  @Prop({ required: false, enum: ['Exempted', 'Postponed', 'Compeleted'] })
  militarystatus: string;

  @Prop({ type: [SocialMideaLinkSchema], required: false })
  socialMideaLinks: SocialMideaLink[];

  @Prop({ type: [ExpirenceSchema], required: false })
  expirences: Expirence[];

  @Prop({ type: [EducationSchema], required: false })
  educations: Education[];

  @Prop({ type: [AchievementSchema], required: false })
  achievements: Achievement[];
}

export const ApplyerSchema = SchemaFactory.createForClass(Applyer);

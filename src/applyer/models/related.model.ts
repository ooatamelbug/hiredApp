import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Location {
  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  area: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);

@Schema({ _id: true, timestamps: true })
export class SocialMideaLink {
  @Prop({ required: true })
  socialTitle: string;

  @Prop({ required: true })
  link: string;
}

export const SocialMideaLinkSchema =
  SchemaFactory.createForClass(SocialMideaLink);

@Schema({ _id: true, timestamps: true })
export class Expirence {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  start: Date;

  @Prop({ required: true })
  end: string;

  @Prop({ required: true })
  place: string;

  @Prop({ required: false })
  desc: string;
}

export const ExpirenceSchema = SchemaFactory.createForClass(Expirence);

@Schema({ _id: true, timestamps: true })
export class Education {
  @Prop({ required: true })
  university: string;

  @Prop({ required: true })
  enter: Date;

  @Prop({ required: true })
  finish: Date;

  @Prop({ required: true })
  collage: string;

  @Prop({ required: true })
  depart: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);

@Schema({ _id: true, timestamps: true })
export class Achievement {
  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  place: string;
}

export const AchievementSchema = SchemaFactory.createForClass(Achievement);

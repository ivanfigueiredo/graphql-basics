import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

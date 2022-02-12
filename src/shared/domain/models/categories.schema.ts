import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({
    required: true
  })
  id: string;

  @Prop({
    required: true
  })
  title: string;

  @Prop({
    default: true
  })
  actived: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
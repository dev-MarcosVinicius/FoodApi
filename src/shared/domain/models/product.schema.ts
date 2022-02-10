import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({
    unique: true,
    required: true
  })
  id: string;

  @Prop({
    required: true
  })
  title: string;

  @Prop({
    required: true
  })
  description: string;

  @Prop({
    required: true
  })
  price: number;

  @Prop({
    required: true
  })
  imageUrl: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);